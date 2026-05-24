import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function SmallBusinessPage() {
  return (
    <IndustryPageLayout
      seoTitle="AI Automation for Small Businesses | Webimot Agency"
      seoDescription="Run like a big company without hiring like one. AI systems that respond to leads instantly, follow up automatically, report your results weekly, and reactivate your old contacts — so you can focus on running your business."
      seoKeywords="small business AI automation, SMB automation, lead response automation, small business CRM, automated follow-up small business, AI for small business, business automation tools"
      emoji="🏢"
      industry="Small Business"
      tagline="Run like a big company without hiring like one."
      heroBrief="Small businesses compete against companies with 10× the staff. We give you AI systems that respond to leads instantly, follow up automatically, report your results weekly, and reactivate your old contacts — so you can focus on actually running your business."
      challenges={[
        "Can't afford to staff WhatsApp, email, and phone around the clock",
        "Leads go cold because there's no time to follow up consistently",
        "No clear picture of what's actually working across sales and marketing",
        "Old contacts and past clients are sitting in a spreadsheet, unused",
        "Admin tasks — reminders, reports, emails — eat hours every week",
      ]}
      solutions={[
        {
          emoji: "⚡",
          title: "Never Miss a Lead",
          description:
            "LeadFire replies to every new enquiry in under 60 seconds — qualifying them, answering questions, and booking calls automatically. No staff needed.",
        },
        {
          emoji: "📊",
          title: "Know Your Numbers Every Monday",
          description:
            "ClearDesk auto-generates a plain-English weekly report across all your tools — so you know exactly what's working without spending hours in spreadsheets.",
        },
        {
          emoji: "💎",
          title: "Reactivate Your Database",
          description:
            "ReviveIQ sends AI-personalised messages to your old leads and past customers — surfacing the ones who are ready to buy again, right now.",
        },
      ]}
      stats={[
        { value: "60s", label: "Lead response time" },
        { value: "15–25h", label: "Admin hours saved per week" },
        { value: "5–15%", label: "Database reactivation rate" },
        { value: "0", label: "Manual reports needed" },
      ]}
      products={[
        {
          emoji: "⚡",
          name: "LeadFire",
          description:
            "Instant lead response and booking automation — reply to every enquiry in under 60 seconds.",
          href: "/products/leadfire",
        },
        {
          emoji: "📊",
          name: "ClearDesk",
          description:
            "Weekly business performance reports in plain English — zero manual work required.",
          href: "/products/cleardesk",
        },
        {
          emoji: "💎",
          name: "ReviveIQ",
          description:
            "Reactivate your old leads and past customers with AI-personalised outreach campaigns.",
          href: "/products/reviveiq",
        },
        {
          emoji: "🔁",
          name: "NurtureLoop",
          description:
            "Automated follow-up sequences so no lead ever goes cold again.",
          href: "/products/nurtureloop",
        },
      ]}
      ctaHeadline="The AI Advantage — Now Available for Small Business."
    />
  );
}
