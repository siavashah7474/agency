import ProductPageLayout from "@/components/ProductPageLayout";

export default function NurtureLoopPage() {
  return (
    <ProductPageLayout
      seoTitle="NurtureLoop | Never let a lead go cold again — Webimot Agency"
      seoDescription="80% of sales require 5+ follow-ups. Most businesses give up after 1 or 2. NurtureLoop runs every follow-up automatically — across every channel — so no lead is ever forgotten."
      emoji="🔁"
      name="NurtureLoop"
      tagline="Never let a lead go cold again."
      heroBrief="Most leads go cold because nobody followed up at the right time. NurtureLoop runs intelligent multi-channel sequences across email, SMS, and WhatsApp — automatically, and stops the moment they respond."
      problemParagraphs={[
        "80% of sales require 5 or more follow-ups. Most businesses give up after 1 or 2. The leads you worked hard to generate — and paid to acquire — are sitting in your CRM going cold because nobody had time to follow up.",
        "Manual follow-up is inconsistent, time-consuming, and relies entirely on your team remembering to do it. When things get busy, follow-up is always the first thing to slip.",
        "NurtureLoop removes the human dependency completely. Every lead gets followed up automatically — at the right time, on the right channel — until they respond or book.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect", description: "Import your leads or connect your CRM. NurtureLoop syncs with your existing tools with no data migration needed." },
        { emoji: "🤖", title: "AI Takes Over", description: "Sequences run across email, SMS, and WhatsApp — adapting based on how each lead responds and switching channels if needed." },
        { emoji: "🔥", title: "You See Results", description: "Warm leads surface automatically. Your team only talks to people who are ready — no more chasing cold contacts." },
      ]}
      features={[
        "Sequences across email, SMS, and WhatsApp",
        "Switches channels if a lead doesn't respond",
        "AI-personalised messages for each lead",
        "Automatically stops when lead replies or books",
        "Tracks open rates, reply rates, and conversions",
        "Works with your existing CRM",
      ]}
      whoItsFor={[
        { emoji: "🏢", industry: "Any business with a sales process", useCase: "Automate every follow-up so your pipeline never goes cold." },
        { emoji: "🏥", industry: "Clinics with long decision cycles", useCase: "Stay top of mind for patients considering procedures over weeks or months." },
        { emoji: "⚖️", industry: "Finance & legal firms", useCase: "Follow up on every proposal and enquiry without manual effort." },
        { emoji: "🏠", industry: "Real estate agencies", useCase: "Keep every buyer and seller engaged across a months-long sales cycle." },
      ]}
      ctaHeadline="Your Leads Deserve Better Than Being Forgotten."
    />
  );
}
