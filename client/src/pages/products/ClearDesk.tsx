import ProductPageLayout from "@/components/ProductPageLayout";

export default function ClearDeskPage() {
  return (
    <ProductPageLayout
      contentKey="cleardesk"
      system="measure"
      seoTitle="ClearDesk | Your business data, explained every Monday morning — Webimot Agency"
      seoDescription="Most business owners don't know what's actually working. Reports are manual, late, and incomplete. ClearDesk auto-generates plain-English performance reports every week — no spreadsheets needed."
      emoji="📊"
      name="ClearDesk"
      tagline="Your business data, explained every Monday morning."
      heroBrief="Every Monday at 8am, ClearDesk delivers a complete performance report covering all your tools — CRM, ads, website, sales pipeline — in plain English. No spreadsheets, no analysts, no manual work. Just clarity."
      results={[
        { value: "8 AM Monday", label: "Report delivered", context: "Every week — automatically, without anyone doing anything" },
        { value: "6+ tools", label: "Connected in one report", context: "CRM, Meta Ads, Google Ads, analytics, spreadsheets and more" },
        { value: "Plain English", label: "Written summary", context: "What changed, why it matters and what needs your attention" },
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
        heading: "See ClearDesk in action: a clinic's Monday morning report",
        description: "It's Monday 8:00am. The clinic owner opens their email. Here's the kind of report ClearDesk is designed to prepare automatically.",
        steps: [
          {
            time: "Last Week Overview",
            event: "Top-line numbers",
            detail: "New inquiries across all channels, consultation calls booked, treatments confirmed and confirmed revenue for the week, each compared with the week before.",
            highlight: true,
          },
          {
            time: "Ad Performance",
            event: "Spend and cost per lead by platform",
            detail: "Meta Ads and Google Ads side by side. If one platform's cost per lead has jumped, the report says so and suggests what to check first, for example an ad creative that needs refreshing.",
            highlight: true,
          },
          {
            time: "Follow-Up",
            event: "Stalled leads that came back",
            detail: "Which leads that had gone quiet replied to a follow-up last week, and which of them booked a consultation.",
          },
          {
            time: "Revenue Forecast",
            event: "Where the month is heading",
            detail: "Confirmed revenue so far, the value of consultations booked but not yet confirmed, and a projection for the month based on your recent conversion rate.",
            highlight: true,
          },
          {
            time: "This Week's Focus",
            event: "A short list of action items",
            detail: "For example: review the Google Ads creative if cost per lead rose, follow up with last week's consultations that haven't confirmed treatment, and ask recent patients for a Google review.",
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
