// Single source of truth for the site's positioning: one promise, two audiences,
// four systems. Home, /systems, /clinics, /small-business, navigation, footer,
// the booking form all read from here so names and routes never drift.

export const PROMISE = {
  headline: "AI automation systems that run your daily work.",
  subline:
    "For clinics and small businesses: every lead answered, every document processed, every follow-up sent — 24/7, without adding staff.",
  proof: "50+ businesses · 12+ countries · 50+ languages",
};

export type SystemId = "capture" | "convert" | "operate" | "measure";

export interface SystemProduct {
  name: string;
  href: string;
  emoji: string;
  oneLiner: string;
}

export interface SystemDef {
  id: SystemId;
  step: number;
  name: string; // "Capture system"
  productLabel: string; // "(WhatsApp AI)" — product names as sub-labels
  emoji: string;
  headline: string;
  replaces: string; // the manual work it removes
  description: string;
  outcomes: string[];
  products: SystemProduct[];
}

export const SYSTEMS: SystemDef[] = [
  {
    id: "capture",
    step: 1,
    name: "Capture system",
    productLabel: "WhatsApp AI · LeadFire",
    emoji: "💬",
    headline: "Every enquiry answered in seconds, in the customer's language, 24/7.",
    replaces: "Missed messages and slow replies",
    description:
      "An AI agent on your WhatsApp Business number (and web chat) that answers questions, qualifies the lead, evaluates photos where relevant and books the appointment straight into your calendar — the moment the message arrives.",
    outcomes: ["Reply in under 60 seconds, day and night", "50+ languages detected automatically", "Qualified leads booked, not just answered"],
    products: [
      { name: "WhatsApp AI", href: "/products/whatsapp-ai", emoji: "💬", oneLiner: "24/7 AI agent on WhatsApp that answers, qualifies and books." },
      { name: "LeadFire", href: "/products/leadfire", emoji: "⚡", oneLiner: "Instant first response to every new lead from ads, forms and chat." },
    ],
  },
  {
    id: "convert",
    step: 2,
    name: "Follow-up system",
    productLabel: "NurtureLoop · ReviveIQ",
    emoji: "🔁",
    headline: "Leads that went quiet get followed up — automatically, until they book or opt out.",
    replaces: "Leads that go cold",
    description:
      "Multi-step follow-up across WhatsApp, email and SMS for new leads, plus reactivation campaigns for old contacts already in your CRM or inbox. Stops the moment someone replies or books.",
    outcomes: ["No lead forgotten after the first message", "Old contacts turned back into bookings", "Hand-off to your team when a human is needed"],
    products: [
      { name: "NurtureLoop", href: "/products/nurtureloop", emoji: "🔁", oneLiner: "Automated follow-up sequences for every new lead." },
      { name: "ReviveIQ", href: "/products/reviveiq", emoji: "💎", oneLiner: "Reactivates old leads and past customers in your database." },
    ],
  },
  {
    id: "operate",
    step: 3,
    name: "Operations system",
    productLabel: "DocuMind · AI agents for daily tasks",
    emoji: "📄",
    headline: "Invoices, forms and data entry handled by AI agents instead of your team.",
    replaces: "Manual paperwork and data entry",
    description:
      "AI agents that read incoming documents, extract the data, update your systems and send the reminders and internal follow-ups your team does by hand today — invoices, intake forms, contracts, HR requests.",
    outcomes: ["Documents processed the day they arrive", "Human-verified accuracy on what matters", "Hours per week back to your team"],
    products: [
      { name: "DocuMind", href: "/products/documind", emoji: "📄", oneLiner: "Reads documents and enters the data where it belongs." },
      { name: "AI agents for daily tasks", href: "/services/ai-ops-autopilot", emoji: "🤖", oneLiner: "Reminders, internal follow-ups and routine updates, done automatically." },
    ],
  },
  {
    id: "measure",
    step: 4,
    name: "Reporting system",
    productLabel: "ClearDesk",
    emoji: "📊",
    headline: "A plain-English report on leads, sales and team performance every Monday.",
    replaces: "Not knowing what's working",
    description:
      "AI pulls the numbers from your tools — WhatsApp, CRM, ads, calendar, accounting — and sends a short weekly report with what changed, what to fix and what to double down on.",
    outcomes: ["One weekly report instead of five dashboards", "Response times and conversion tracked for you", "Decisions based on numbers, not guesses"],
    products: [
      { name: "ClearDesk", href: "/products/cleardesk", emoji: "📊", oneLiner: "Weekly performance report delivered every Monday morning." },
    ],
  },
];

// "Feed the pipe" add-ons: only sold alongside the systems above.
export const ADD_ONS: SystemProduct[] = [
  { name: "Meta Ads", href: "/services/meta-ads", emoji: "📣", oneLiner: "Facebook and Instagram campaigns that feed the capture system." },
  { name: "Google Ads", href: "/services/google-ads", emoji: "🔍", oneLiner: "Search campaigns for people already looking for you." },
  { name: "SEO & SEO Blog AI", href: "/products/seo-blog-ai", emoji: "✍️", oneLiner: "Organic traffic from automated, search-optimised articles." },
];

export interface AudienceDef {
  id: "clinics" | "small-business";
  href: string;
  name: string;
  navLabel: string;
  emoji: string;
  tagline: string;
  description: string;
  examples: string[];
}

export const AUDIENCES: AudienceDef[] = [
  {
    id: "clinics",
    href: "/clinics",
    name: "Clinics & healthcare",
    navLabel: "Clinics",
    emoji: "🏥",
    tagline: "Turn every patient enquiry into a booked consultation.",
    description:
      "Hair transplant, dental, cosmetic surgery and IVF clinics — including medical tourism providers serving patients from Germany, the UK, the Netherlands and the Gulf.",
    examples: ["Hair transplant clinics", "Dental clinics", "Cosmetic surgery", "IVF & fertility", "Medical tourism agencies"],
  },
  {
    id: "small-business",
    href: "/small-business",
    name: "Small businesses",
    navLabel: "Small Business",
    emoji: "🏢",
    tagline: "Run on AI without hiring more staff.",
    description:
      "Real estate agencies, e-commerce stores, finance and legal firms and service businesses that live on WhatsApp, email and spreadsheets.",
    examples: ["Real estate agencies", "E-commerce & Shopify stores", "Finance & legal firms", "Service businesses"],
  },
];

export const systemById = (id: SystemId): SystemDef => SYSTEMS.find((s) => s.id === id)!;
