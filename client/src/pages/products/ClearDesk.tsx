import ProductPageLayout from "@/components/ProductPageLayout";

export default function ClearDeskPage() {
  return (
    <ProductPageLayout
      seoTitle="ClearDesk | Your business data, explained every Monday morning — Webimot Agency"
      seoDescription="Most business owners don't know what's actually working. Reports are manual, late, and incomplete. ClearDesk auto-generates plain-English performance reports every week — no spreadsheets needed."
      emoji="📊"
      name="ClearDesk"
      tagline="Your business data, explained every Monday morning."
      heroBrief="Every Monday at 8am, ClearDesk delivers a complete performance report covering all your tools — CRM, ads, website, sales pipeline — in plain English. No spreadsheets, no analysts, no manual work. Just clarity."
      results={[
        { value: "8 AM Monday", label: "Report delivered", context: "Every week — automatically, without anyone doing anything" },
        { value: "6+ tools", label: "Connected in one report", context: "CRM, Meta Ads, Google Ads, analytics, spreadsheets and more" },
        { value: "10h+", label: "Saved per month", context: "vs. manually pulling and formatting data from multiple sources" },
      ]}
      problemParagraphs={[
        "Most business owners don't know what's actually working. Reports are manual, late, incomplete — or just don't exist. Decisions get made on gut feel instead of data, and problems go unnoticed until they're expensive.",
        "Pulling data from your CRM, ad platforms, website analytics, and spreadsheets takes hours. By the time you have the numbers, the week is already over. And nobody has time to do it consistently — so it either doesn't happen or you pay someone to do it.",
        "ClearDesk fixes this permanently. Every Monday, you get a plain-English report covering everything that happened last week — what went up, what went down, what needs your attention, and what's on track — delivered before you've had your first coffee.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect Your Tools", description: "ClearDesk connects to your CRM, Meta Ads, Google Ads, Google Analytics, WhatsApp, spreadsheets, and any other tools you use. We handle all integrations in a single setup session — no technical knowledge needed." },
        { emoji: "🤖", title: "AI Analyses Everything", description: "Every week, ClearDesk automatically pulls data from all connected tools, identifies trends, flags anomalies, and generates a plain-English narrative explaining what happened and why it matters." },
        { emoji: "📬", title: "Report Arrives Monday Morning", description: "At 8am every Monday, your report lands in your inbox — or a shared Slack channel, or a live dashboard. Open it and know exactly where your business stands, what to focus on, and what to fix." },
      ]}
      scenario={{
        heading: "See ClearDesk in action: a dental clinic's Monday morning report",
        description: "It's Monday 8:00am. The clinic owner opens their email. Here's exactly what ClearDesk has prepared — automatically, while they slept.",
        steps: [
          {
            time: "Last Week Overview",
            event: "Top-line numbers",
            detail: "Last week: 73 new inquiries received across all channels. 34 consultation calls booked (47% conversion). 11 treatments confirmed (average value: €2,200). Total confirmed revenue: €24,200.",
            highlight: true,
          },
          {
            time: "Ad Performance",
            event: "Meta Ads performing well — Google needs attention",
            detail: "Meta Ads: €1,240 spend, €27 cost-per-lead (↓18% vs last week — great). Google Ads: €680 spend, €91 cost-per-lead (↑34% vs last week — main ad creative may need refreshing). Recommendation: pause Google Ad #3 and test new headline.",
            highlight: true,
          },
          {
            time: "WhatsApp & Follow-Up",
            event: "NurtureLoop converted 4 stalled leads",
            detail: "4 leads that had gone cold for 7+ days were re-engaged by the automated follow-up sequence. 3 of them booked consultations this week. Without automation, these would have been lost.",
          },
          {
            time: "Revenue Forecast",
            event: "On track for best month",
            detail: "Current confirmed revenue: €24,200. Pipeline value (consultations booked, not yet confirmed): €38,600. If conversion holds at last month's rate (31%), projected monthly revenue: €36,000 — which would be a 22% increase on March.",
            highlight: true,
          },
          {
            time: "This Week's Focus",
            event: "3 action items",
            detail: "1. Review and refresh Google Ads creative — CPA jumped 34%. 2. Follow up with 8 consultations that happened last week but haven't confirmed treatment. 3. Ask the 4 re-engaged leads (from WhatsApp) for a Google review before their consultation.",
          },
        ],
      }}
      featureDetails={[
        { title: "Connects to all your tools", description: "ClearDesk integrates with HubSpot, Salesforce, GoHighLevel, Meta Ads, Google Ads, Google Analytics, Shopify, WooCommerce, WhatsApp Business, and spreadsheets. All data in one place, automatically." },
        { title: "Automated weekly and monthly reports", description: "Reports generate automatically every Monday morning. Monthly summary reports go out on the 1st of every month. No scheduling, no manual pulling — it just happens." },
        { title: "Plain-English AI narrative", description: "Numbers alone don't tell you what to do. ClearDesk writes a clear explanation of what changed, why it matters, and what you should focus on this week — in plain English, not data analyst jargon." },
        { title: "Anomaly detection and alerts", description: "If something unusual happens mid-week — a spike in cost-per-lead, a drop in form submissions, a campaign going over budget — ClearDesk alerts you immediately, not on Monday." },
        { title: "KPI tracking across every department", description: "Track leads, bookings, revenue, ad spend, ROAS, website traffic, email open rates, WhatsApp response rates, and custom metrics — all in one weekly digest." },
        { title: "Delivered to email, Slack, or dashboard", description: "Reports land wherever you want them: your email inbox, a team Slack channel, a live web dashboard you can check anytime, or all three simultaneously." },
        { title: "Fully customisable to your business", description: "We set up ClearDesk based on your specific KPIs, what tools you use, and what decisions you actually need to make. You're not getting a generic template — you're getting your report." },
        { title: "Historical trend views", description: "Every report includes week-over-week and month-over-month comparisons, so you can see whether things are improving or declining — not just what happened this week in isolation." },
      ]}
      features={[
        "Connects to your CRM, ads, website analytics, and spreadsheets",
        "Auto-generates weekly and monthly performance reports",
        "Plain-English AI summary of what's working and what's not",
        "Anomaly detection and mid-week alerts",
        "Tracks KPIs across sales, marketing, and operations",
        "Delivered to email, Slack, or a live dashboard",
        "Fully customisable to your business metrics",
        "Historical trend views — week-over-week and month-over-month",
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
