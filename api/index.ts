import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import nodemailer from "nodemailer";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Simple HTML-tag stripper (no jsdom needed in serverless)
function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

const SITE_NAME = "Webimot Agency";
const REPLY_TO = process.env.REPLY_TO_EMAIL || "info@webimot.com";
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
    `<p>Hi ${name},</p>
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
       <p><strong>Name:</strong> ${sName}</p>
       <p><strong>Email:</strong> ${sEmail}</p>
       <p><strong>Phone:</strong> ${sPhone}</p>
       <p><strong>Service:</strong> ${sService}</p>
       <p><strong>Message:</strong></p>
       <p>${sMessage || "Not provided"}</p>
       ${storageNote(stored)}
       <p><strong>Received at:</strong> ${new Date().toISOString()}</p>`,
      sEmail,
    );

    if (!stored && !notified) {
      // Nothing reached us; tell the visitor so they can use WhatsApp instead.
      return res.status(500).json({ message: "We couldn't receive your request right now. Please message us on WhatsApp." });
    }

    sendVisitorConfirmation(sEmail, sName, "booking").catch(() => {});
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
       <p><strong>Name:</strong> ${sName}</p>
       <p><strong>Email:</strong> ${sEmail}</p>
       <p><strong>Phone:</strong> ${sPhone || "Not provided"}</p>
       <p><strong>Message:</strong></p>
       <p>${sMessage}</p>
       ${storageNote(stored)}
       <p><strong>Received at:</strong> ${new Date().toISOString()}</p>`,
      sEmail,
    );

    if (!stored && !notified) {
      return res.status(500).json({ message: "We couldn't receive your message right now. Please message us on WhatsApp." });
    }

    sendVisitorConfirmation(sEmail, sName, "contact").catch(() => {});
    res.status(200).json({ message: "Message sent successfully", success: true });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
