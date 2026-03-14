import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import nodemailer from "nodemailer";

// Simple HTML-tag stripper (no jsdom needed in serverless)
function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

const LEAD_NOTIFICATION_EMAIL =
  process.env.LEAD_NOTIFICATION_EMAIL || "webimot.info@gmail.com";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === "true";

const transporter =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      })
    : null;

async function sendLeadEmail(subject: string, html: string) {
  if (!transporter) {
    console.warn("SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS env vars.");
    return;
  }
  await transporter.sendMail({
    from: smtpUser,
    to: LEAD_NOTIFICATION_EMAIL,
    subject,
    html,
  });
}

const app = express();

// CSRF origin check
app.use((req, res, next) => {
  if (["POST", "PUT", "DELETE", "PATCH"].includes(req.method)) {
    const origin = req.headers.origin;
    const allowedOrigins = (
      process.env.ALLOWED_ORIGINS ||
      "https://webimotagency.com,https://www.webimotagency.com"
    )
      .split(",")
      .map((o) => o.trim());
    if (origin && !allowedOrigins.includes(origin)) {
      return res.status(403).json({ message: "Forbidden" });
    }
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Booking form
app.post("/api/booking", async (req, res) => {
  try {
    const { name, email, phone, service } = req.body;
    if (!name || !email || !phone || !service) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const sName = sanitizeInput(String(name));
    const sEmail = sanitizeInput(String(email));
    const sPhone = sanitizeInput(String(phone));
    const sService = sanitizeInput(String(service));

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    if (!/^[+\d][\d\s\-().]{4,}$/.test(sPhone)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }
    if (sName.length > 100 || sEmail.length > 255 || sPhone.length > 50 || sService.length > 100) {
      return res.status(400).json({ message: "Input too long" });
    }

    await sendLeadEmail(
      `New Booking Request from ${sName}`,
      `<h2>New Booking Request</h2>
       <p><strong>Name:</strong> ${sName}</p>
       <p><strong>Email:</strong> ${sEmail}</p>
       <p><strong>Phone:</strong> ${sPhone}</p>
       <p><strong>Service:</strong> ${sService}</p>
       <p><strong>Received at:</strong> ${new Date().toISOString()}</p>`
    );

    res.status(200).json({ message: "Booking request received successfully", success: true });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }
    const sName = sanitizeInput(String(name));
    const sEmail = sanitizeInput(String(email));
    const sPhone = phone ? sanitizeInput(String(phone)) : null;
    const sMessage = sanitizeInput(String(message));

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    if (sPhone && !/^[+\d][\d\s\-().]{4,}$/.test(sPhone)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }
    if (sName.length > 100 || sEmail.length > 255 || (sPhone && sPhone.length > 50) || sMessage.length > 5000) {
      return res.status(400).json({ message: "Input too long" });
    }

    await sendLeadEmail(
      `New Contact Message from ${sName}`,
      `<h2>New Contact Message</h2>
       <p><strong>Name:</strong> ${sName}</p>
       <p><strong>Email:</strong> ${sEmail}</p>
       <p><strong>Phone:</strong> ${sPhone || "Not provided"}</p>
       <p><strong>Message:</strong></p>
       <p>${sMessage}</p>
       <p><strong>Received at:</strong> ${new Date().toISOString()}</p>`
    );

    res.status(200).json({ message: "Message sent successfully", success: true });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
