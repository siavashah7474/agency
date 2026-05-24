import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function RealEstatePage() {
  return (
    <IndustryPageLayout
      seoTitle="AI Automation for Real Estate Agents & Agencies | Webimot Agency"
      seoDescription="Contact every property lead in seconds and book viewings on autopilot. AI systems for real estate that respond instantly, follow up over months, and reactivate your cold database — 24/7 including weekends."
      seoKeywords="real estate AI automation, property lead automation, viewing booking AI, real estate CRM automation, real estate lead follow-up, AI for estate agents, property inquiry bot"
      emoji="🏠"
      industry="Real Estate"
      tagline="Contact every property lead in seconds. Book viewings on autopilot."
      heroBrief="In real estate, speed wins. Leads who don't get a response within 5 minutes call the next agent. We build AI systems that contact every lead instantly, schedule viewings automatically, follow up across months, and reactivate your cold database."
      challenges={[
        "Leads enquire about properties at night or on weekends and get no reply until it's too late",
        "Viewing scheduling is slow, manual, and full of back-and-forth",
        "Long sales cycles mean leads go cold without consistent follow-up",
        "Thousands of old buyer and seller leads sitting unused in your CRM",
        "No clear weekly visibility into which listings, ads, and channels are generating leads",
      ]}
      solutions={[
        {
          emoji: "⚡",
          title: "Instant Lead Contact",
          description:
            "LeadFire contacts every new property enquiry in under 60 seconds — answering questions, qualifying buyers vs browsers, and scheduling viewings directly into your calendar.",
        },
        {
          emoji: "🔁",
          title: "Long-Cycle Follow-Up",
          description:
            "NurtureLoop runs multi-month follow-up sequences for every lead — sending the right message at the right time across WhatsApp, email, and SMS until they're ready to move.",
        },
        {
          emoji: "💎",
          title: "Database Reactivation",
          description:
            "ReviveIQ reaches out to your cold buyer and seller database with personalised messages — surfacing the contacts who are ready to act right now.",
        },
      ]}
      stats={[
        { value: "60s", label: "Lead response time" },
        { value: "9×", label: "Higher conversion vs 5-min delay" },
        { value: "5–15%", label: "Cold database reactivation" },
        { value: "24/7", label: "Lead coverage — including weekends" },
      ]}
      products={[
        {
          emoji: "⚡",
          name: "LeadFire",
          description:
            "Reply to every property enquiry in under 60 seconds and schedule viewings automatically.",
          href: "/products/leadfire",
        },
        {
          emoji: "💬",
          name: "WhatsApp AI",
          description:
            "24/7 WhatsApp handling — instant replies, property info, and viewing booking in any language.",
          href: "/products/whatsapp-ai",
        },
        {
          emoji: "🔁",
          name: "NurtureLoop",
          description:
            "Multi-month follow-up sequences that keep buyers and sellers engaged across the full sales cycle.",
          href: "/products/nurtureloop",
        },
        {
          emoji: "💎",
          name: "ReviveIQ",
          description:
            "Reactivate cold buyer and seller leads from your CRM with personalised AI outreach.",
          href: "/products/reviveiq",
        },
      ]}
      ctaHeadline="The Agent Who Never Sleeps Is Already Closing Deals."
    />
  );
}
