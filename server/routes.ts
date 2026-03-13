import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { storage } from "./storage";

// Initialize DOMPurify with JSDOM for server-side sanitization
const window = new JSDOM("").window;
const purify = DOMPurify(window as unknown as Window & typeof globalThis);

// Sanitize user input to prevent XSS
function sanitizeInput(input: string): string {
  return purify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

// NOTE: This is where lead notification emails are configured.
// To change where leads are sent, either:
// 1) Change the default email below, or
// 2) Set the LEAD_NOTIFICATION_EMAIL environment variable.
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
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null;

async function sendLeadEmail(subject: string, html: string) {
  if (!transporter) {
    console.warn(
      "SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to enable email sending."
    );
    return;
  }

  await transporter.sendMail({
    from: smtpUser,
    to: LEAD_NOTIFICATION_EMAIL,
    subject,
    html,
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Booking form submission endpoint
  app.post("/api/booking", async (req, res) => {
    try {
      const { name, email, phone, service } = req.body;

      // Basic validation
      if (!name || !email || !phone || !service) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }

      // Sanitize inputs to prevent XSS
      const sanitizedName = sanitizeInput(String(name));
      const sanitizedEmail = sanitizeInput(String(email));
      const sanitizedPhone = sanitizeInput(String(phone));
      const sanitizedService = sanitizeInput(String(service));

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        return res.status(400).json({
          message: "Invalid email address",
        });
      }

      // Phone validation: digits, spaces, +, -, (), min 5 chars
      const phoneRegex = /^[+\d][\d\s\-().]{4,}$/;
      if (!phoneRegex.test(sanitizedPhone)) {
        return res.status(400).json({
          message: "Invalid phone number",
        });
      }

      // Additional validation: check input lengths
      if (
        sanitizedName.length > 100 ||
        sanitizedEmail.length > 255 ||
        sanitizedPhone.length > 50 ||
        sanitizedService.length > 100
      ) {
        return res.status(400).json({
          message: "Input too long",
        });
      }

      const timestamp = new Date().toISOString();

      // Send booking lead email
      await sendLeadEmail(
        `New Booking Request from ${sanitizedName}`,
        `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Phone:</strong> ${sanitizedPhone}</p>
          <p><strong>Service:</strong> ${sanitizedService}</p>
          <p><strong>Received at:</strong> ${timestamp}</p>
        `
      );

      // TODO: Implement actual storage
      // await storage.insertBooking({ name: sanitizedName, email: sanitizedEmail, phone: sanitizedPhone, service: sanitizedService });

      res.status(200).json({
        message: "Booking request received successfully",
        success: true,
      });
    } catch (error) {
      // Log error for server monitoring (not exposing to client)
      if (process.env.NODE_ENV === "development") {
        console.error("Error processing booking:", error);
      }
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({
          message: "Name, email, and message are required",
        });
      }

      // Sanitize inputs to prevent XSS
      const sanitizedName = sanitizeInput(String(name));
      const sanitizedEmail = sanitizeInput(String(email));
      const sanitizedPhone = phone ? sanitizeInput(String(phone)) : null;
      const sanitizedMessage = sanitizeInput(String(message));

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        return res.status(400).json({
          message: "Invalid email address",
        });
      }

      // Phone validation (optional field)
      if (sanitizedPhone) {
        const phoneRegex = /^[+\d][\d\s\-().]{4,}$/;
        if (!phoneRegex.test(sanitizedPhone)) {
          return res.status(400).json({
            message: "Invalid phone number",
          });
        }
      }

      // Additional validation: check input lengths
      if (
        sanitizedName.length > 100 ||
        sanitizedEmail.length > 255 ||
        (sanitizedPhone && sanitizedPhone.length > 50) ||
        sanitizedMessage.length > 5000
      ) {
        return res.status(400).json({
          message: "Input too long",
        });
      }

      const timestamp = new Date().toISOString();

      // Send contact lead email
      await sendLeadEmail(
        `New Contact Message from ${sanitizedName}`,
        `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Phone:</strong> ${sanitizedPhone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedMessage}</p>
          <p><strong>Received at:</strong> ${timestamp}</p>
        `
      );

      // TODO: Implement actual storage
      // await storage.insertContact({ name: sanitizedName, email: sanitizedEmail, phone: sanitizedPhone, message: sanitizedMessage });

      res.status(200).json({
        message: "Message sent successfully",
        success: true,
      });
    } catch (error) {
      // Log error for server monitoring (not exposing to client)
      if (process.env.NODE_ENV === "development") {
        console.error("Error processing contact form:", error);
      }
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
