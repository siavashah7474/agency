import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import nodemailer from "nodemailer";
import Anthropic from "@anthropic-ai/sdk";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Form values are kept as typed (minus control characters) for the database, the email
// subject and addresses, and escaped with esc() only where they go into email HTML.
// Escaping first would store "O'Brien" as "O&#x27;Brien" and break addresses containing & or '.
function sanitizeInput(input: string): string {
  return input.replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, "").trim();
}

function esc(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const SITE_NAME = "Webimot Agency";
const REPLY_TO = process.env.REPLY_TO_EMAIL || "webimot.info@gmail.com";
const LEAD_NOTIFICATION_EMAIL =
  process.env.LEAD_NOTIFICATION_EMAIL || "webimot.info@gmail.com";

const smtpUser = process.env.GMAIL_USER || process.env.SMTP_USER;
const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

const transporter =
  smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: { user: smtpUser, pass: smtpPass },
      })
    : null;

// Leads are written to Supabase first so a mail outage never loses one.
// Tables: bookings(name, email, phone, service, message) and contacts(name, email, phone, message).
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase: SupabaseClient | null =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

async function storeLead(table: "bookings" | "contacts", row: Record<string, string | null>): Promise<boolean> {
  if (!supabase) {
    console.warn("Supabase not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to store leads.");
    return false;
  }
  const { error } = await supabase.from(table).insert(row);
  if (error) {
    console.error(`Failed to store lead in ${table}:`, error.message);
    return false;
  }
  return true;
}

// Only mention storage in lead emails once Supabase is configured; until then email is the record.
const storageNote = (stored: boolean) =>
  supabase ? `<p><strong>Stored in database:</strong> ${stored ? "yes" : "NO — check Supabase"}</p>` : "";

async function sendMail(to: string, subject: string, html: string, replyTo?: string): Promise<boolean> {
  if (!transporter) {
    console.warn("SMTP not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD (or SMTP_USER/SMTP_PASS).");
    return false;
  }
  try {
    await transporter.sendMail({ from: `"${SITE_NAME}" <${smtpUser}>`, to, replyTo, subject, html });
    return true;
  } catch (err) {
    console.error(`Failed to send mail "${subject}":`, err);
    return false;
  }
}

const sendLeadEmail = (subject: string, html: string, replyTo: string) =>
  sendMail(LEAD_NOTIFICATION_EMAIL, subject, html, replyTo);

// Short acknowledgement so the visitor has something in their inbox right away.
const sendVisitorConfirmation = (email: string, name: string, kind: "booking" | "contact") =>
  sendMail(
    email,
    kind === "booking" ? "We received your strategy call request" : "We received your message",
    `<p>Hi ${esc(name)},</p>
     <p>Thanks for reaching out to ${SITE_NAME}. ${
       kind === "booking"
         ? "We'll reply within a few hours with available times for your free 30-minute strategy call."
         : "We'll get back to you within 24 hours."
     }</p>
     <p>Need us sooner? Message us on WhatsApp: <a href="https://wa.me/31628753175">+31 6 2875 3175</a></p>
     <p>— The Webimot team<br/><a href="https://webimotagency.com">webimotagency.com</a></p>`,
    REPLY_TO,
  );

// Best-effort per-IP limiter. Serverless instances don't share memory, so this only slows a
// bot that keeps hitting the same warm instance — the honeypot field does the heavy lifting.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(req: express.Request): string {
  const fwd = req.headers["x-forwarded-for"];
  return (Array.isArray(fwd) ? fwd[0] : fwd || "").split(",")[0].trim() || req.socket.remoteAddress || "unknown";
}

// Honeypot: the forms render a hidden "website" field that humans never fill in.
const isBot = (body: Record<string, unknown>) => typeof body.website === "string" && body.website.trim() !== "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d(][\d\s\-().]{4,}$/;

const app = express();

// Security headers
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  next();
});

// CSRF: require and validate Origin header on all mutating requests
app.use((req, res, next) => {
  if (["POST", "PUT", "DELETE", "PATCH"].includes(req.method)) {
    const origin = req.headers.origin;
    const allowedOrigins = (
      process.env.ALLOWED_ORIGINS ||
      "https://webimotagency.com,https://www.webimotagency.com"
    )
      .split(",")
      .map((o) => o.trim());
    if (!origin || !allowedOrigins.includes(origin)) {
      return res.status(403).json({ message: "Forbidden" });
    }
  }
  next();
});

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", (req, res, next) => {
  // The Aria chat has its own, higher limit (see below); forms keep the strict one.
  if (req.path === "/chat") return next();
  if (req.method === "POST" && rateLimited(clientIp(req))) {
    return res.status(429).json({ message: "Too many requests. Please try again in a few minutes." });
  }
  next();
});

// Booking form
app.post("/api/booking", async (req, res) => {
  try {
    if (isBot(req.body)) return res.status(200).json({ success: true });

    const { name, email, phone, service, message } = req.body;
    if (!name || !email || !phone || !service) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const sName = sanitizeInput(String(name));
    const sEmail = sanitizeInput(String(email));
    const sPhone = sanitizeInput(String(phone));
    const sService = sanitizeInput(String(service));
    const sMessage = message ? sanitizeInput(String(message)) : "";

    if (!EMAIL_RE.test(sEmail)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    if (!PHONE_RE.test(sPhone)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }
    if (sName.length > 100 || sEmail.length > 255 || sPhone.length > 50 || sService.length > 100 || sMessage.length > 5000) {
      return res.status(400).json({ message: "Input too long" });
    }

    const stored = await storeLead("bookings", {
      name: sName, email: sEmail, phone: sPhone, service: sService, message: sMessage || null,
    });
    const notified = await sendLeadEmail(
      `New Booking Request from ${sName}`,
      `<h2>New Booking Request</h2>
       <p><strong>Name:</strong> ${esc(sName)}</p>
       <p><strong>Email:</strong> ${esc(sEmail)}</p>
       <p><strong>Phone:</strong> ${esc(sPhone)}</p>
       <p><strong>Service:</strong> ${esc(sService)}</p>
       <p><strong>Message:</strong></p>
       <p style="white-space:pre-wrap">${sMessage ? esc(sMessage) : "Not provided"}</p>
       ${storageNote(stored)}
       <p><strong>Received at:</strong> ${new Date().toISOString()}</p>`,
      sEmail,
    );

    if (!stored && !notified) {
      // Nothing reached us; tell the visitor so they can use WhatsApp instead.
      return res.status(500).json({ message: "We couldn't receive your request right now. Please message us on WhatsApp." });
    }

    // Awaited: Vercel may freeze the function as soon as the response is sent.
    await sendVisitorConfirmation(sEmail, sName, "booking").catch(() => {});
    res.status(200).json({ message: "Booking request received successfully", success: true });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    if (isBot(req.body)) return res.status(200).json({ success: true });

    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }
    const sName = sanitizeInput(String(name));
    const sEmail = sanitizeInput(String(email));
    const sPhone = phone ? sanitizeInput(String(phone)) : null;
    const sMessage = sanitizeInput(String(message));

    if (!EMAIL_RE.test(sEmail)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    if (sPhone && !PHONE_RE.test(sPhone)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }
    if (sName.length > 100 || sEmail.length > 255 || (sPhone && sPhone.length > 50) || sMessage.length > 5000) {
      return res.status(400).json({ message: "Input too long" });
    }

    const stored = await storeLead("contacts", { name: sName, email: sEmail, phone: sPhone, message: sMessage });
    const notified = await sendLeadEmail(
      `New Contact Message from ${sName}`,
      `<h2>New Contact Message</h2>
       <p><strong>Name:</strong> ${esc(sName)}</p>
       <p><strong>Email:</strong> ${esc(sEmail)}</p>
       <p><strong>Phone:</strong> ${sPhone ? esc(sPhone) : "Not provided"}</p>
       <p><strong>Message:</strong></p>
       <p style="white-space:pre-wrap">${esc(sMessage)}</p>
       ${storageNote(stored)}
       <p><strong>Received at:</strong> ${new Date().toISOString()}</p>`,
      sEmail,
    );

    if (!stored && !notified) {
      return res.status(500).json({ message: "We couldn't receive your message right now. Please message us on WhatsApp." });
    }

    await sendVisitorConfirmation(sEmail, sName, "contact").catch(() => {});
    res.status(200).json({ message: "Message sent successfully", success: true });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ── Aria: live AI chat on /products/whatsapp-ai (moved from webimot.com) ──────────────
// Needs ANTHROPIC_API_KEY in the Vercel project. Without it the endpoint answers 503 and the
// widget falls back to "book a demo / WhatsApp". Keep the facts below identical to the site.
const ARIA_SYSTEM_PROMPT = `You are Aria, a professional AI sales assistant for Webimot's WhatsApp AI, shown on https://webimotagency.com/products/whatsapp-ai. You help clinic owners and managers discover how the WhatsApp AI can grow their medical tourism business.

About the WhatsApp AI:
- AI-powered WhatsApp automation built specifically for medical tourism clinics, part of Webimot's Capture system
- Replies to international patient inquiries instantly, 24/7 (under 3 seconds response time)
- Automatically qualifies patients by treatment type, budget and travel timeline
- Routes only serious, qualified leads to the clinic team
- Saves 40+ hours of manual messaging per month; clinics can expect around 60% more consultations booked (an expectation, not a guarantee)
- Replies in 40+ languages, including English, Arabic, German, Dutch, French, Turkish and Spanish
- Live within 48 hours of onboarding; no technical work required from the clinic
- GDPR compliant; conversations and photos are encrypted and handled under EU data protection rules
- Pricing: Essential €1,399 one-time setup + €599/month; Pro €999/month (up to 3 WhatsApp numbers, weekly reporting dashboard, dedicated account manager). 3-month minimum. If it does not generate at least 3 qualified leads in the first 30 days, the first month is refunded. Founding-client offer: the €1,399 setup fee is waived for the first 5 WhatsApp AI clinics, while spots last.
- Medical guardrails: the AI is a front desk, not a doctor. Pre-qualification and intake only; never a diagnosis, candidacy decision or final price; medical questions are handed to a person.
- Webimot Agency (webimotagency.com) was founded by Sia Ahmadi in January 2025 and is based in Amsterdam and Istanbul. It also runs Meta and Google Ads for clinics and builds the Follow-up, Operations and Reporting systems.
- Clinic work by the founder: Dr. Görkem Atsal Clinic (facial plastic surgery, Istanbul), Clinish, Prime Hair, MSB Aesthetic, Estetizm. Write-ups at webimotagency.com/case-studies; no performance figures are published.
- Contact: webimot.info@gmail.com | WhatsApp: +31 6 2875 3175 | Instagram @webimotagency

Your role:
1. Warmly greet and answer questions about the WhatsApp AI clearly and confidently
2. Ask about the visitor's clinic type and their biggest challenge with international patients
3. Connect features directly to their specific pain points
4. After 2-3 exchanges with an interested visitor, invite them to book a free demo

Rules:
- Always reply in the language the visitor writes in
- Keep every response to 2-4 sentences, concise, direct and confident; plain text, no markdown
- Be warm, professional and persuasive but never pushy
- Never invent features, pricing, results or statistics not listed above, and never give medical advice
- If you don't know something, say "great question — our team can give you the full details" and suggest booking a demo or WhatsApp
- When a visitor seems ready, say they can use the "Book a demo" button on this page or reach the team on WhatsApp.`;

const CHAT_WINDOW_MS = 10 * 60 * 1000;
const CHAT_MAX_PER_WINDOW = 25;
const chatHits = new Map<string, number[]>();
function chatRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (chatHits.get(ip) ?? []).filter((t) => now - t < CHAT_WINDOW_MS);
  recent.push(now);
  chatHits.set(ip, recent);
  if (chatHits.size > 5000) chatHits.clear();
  return recent.length > CHAT_MAX_PER_WINDOW;
}

app.post("/api/chat", async (req, res) => {
  if (chatRateLimited(clientIp(req))) {
    return res.status(429).json({ error: "Too many messages. Please try again in a few minutes." });
  }
  const raw = (req.body as { messages?: unknown })?.messages;
  const valid =
    Array.isArray(raw) &&
    raw.length >= 1 &&
    raw.length <= 24 &&
    raw.every(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim() !== "" &&
        m.content.length <= 1200,
    );
  if (!valid) return res.status(400).json({ error: "Invalid request" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "Chat service unavailable" });

  // Last 10 messages, starting with a user turn, to keep each request small.
  let messages = (raw as Anthropic.MessageParam[]).slice(-10).map((m) => ({ role: m.role, content: sanitizeInput(m.content as string) }));
  while (messages.length && messages[0].role !== "user") messages = messages.slice(1);
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 320,
      system: ARIA_SYSTEM_PROMPT,
      messages,
    });
    const text = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
    if (!text) return res.status(502).json({ error: "Empty response" });
    return res.json({ message: text });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: "The assistant is busy. Please try again in a minute." });
    }
    console.error("Chat error:", err instanceof Anthropic.APIError ? `${err.status} ${err.message}` : err);
    return res.status(500).json({ error: "Failed to get response" });
  }
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
