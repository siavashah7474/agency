import ProductPageLayout from "@/components/ProductPageLayout";

export default function ClearDeskPage() {
  return (
    <ProductPageLayout
      seoTitle="ClearDesk | Your business data, explained every Monday morning — Webimot Agency"
      seoDescription="Most business owners don't know what's actually working. Reports are manual, late, and incomplete. ClearDesk auto-generates plain-English performance reports every week — no spreadsheets needed."
      emoji="📊"
      name="ClearDesk"
      tagline="Your business data, explained every Monday morning."
      heroBrief="Every Monday morning, ClearDesk sends your team a clear performance report across all your tools — plain English, no spreadsheets, no analysts. Just the numbers that matter and what they mean."
      problemParagraphs={[
        "Most business owners don't know what's actually working. Reports are manual, late, incomplete — or just don't exist. Decisions get made on gut feel instead of data, and problems go unnoticed until they're expensive.",
        "Pulling data from your CRM, ad platforms, website analytics, and spreadsheets takes hours. By the time you have the numbers, the week is already over. And nobody has time to do it consistently.",
        "ClearDesk fixes this permanently. Every Monday, you get a plain-English report covering everything that happened last week — what went up, what went down, what needs your attention, and what's on track.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect", description: "Link your CRM, ad accounts, website analytics, and spreadsheets. Setup takes one session — we handle all integrations." },
        { emoji: "🤖", title: "AI Takes Over", description: "Every week, ClearDesk pulls all your data and generates a clear report with plain-English analysis of what's happening." },
        { emoji: "📬", title: "You See Results", description: "Every Monday you get a full picture of your business — what's up, what's down, and what to do about it." },
      ]}
      features={[
        "Connects to your CRM, ads, website analytics, and spreadsheets",
        "Auto-generates weekly and monthly performance reports",
        "Plain-English AI summary of what's working and what's not",
        "Tracks KPIs across sales, marketing, and operations",
        "Delivered to email, Slack, or a live dashboard",
        "Fully customisable to your business metrics",
      ]}
      whoItsFor={[
        { emoji: "📣", industry: "Any business running ads", useCase: "See exactly which campaigns are working and what to cut every week." },
        { emoji: "🏥", industry: "Clinics and healthcare", useCase: "Track leads, bookings, conversions, and revenue in one weekly summary." },
        { emoji: "🛒", industry: "eCommerce stores", useCase: "Monitor ROAS, LTV, abandoned carts, and conversion rates automatically." },
        { emoji: "🏢", industry: "Small business owners", useCase: "Get a simple weekly overview of your whole business without hiring an analyst." },
      ]}
      ctaHeadline="Run Your Business on Facts, Not Guesswork."
    />
  );
}
