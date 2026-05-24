import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function EcommercePage() {
  return (
    <IndustryPageLayout
      seoTitle="AI Automation for eCommerce & Shopify Stores | Webimot Agency"
      seoDescription="Recover lost revenue, reactivate old customers, and scale your eCommerce store without more staff. Cart recovery, customer reactivation, and automated weekly reports — all powered by AI."
      seoKeywords="ecommerce AI automation, Shopify automation, cart recovery AI, customer reactivation, abandoned cart follow-up, ecommerce lead generation, Shopify AI tools"
      emoji="🛒"
      industry="eCommerce & Shopify"
      tagline="Recover lost revenue, reactivate old customers, and scale without more staff."
      heroBrief="Most eCommerce stores lose 70% of potential revenue to abandoned carts, cold databases, and slow follow-up. We build AI automation that recovers carts, reactivates past customers, and keeps your team focused on growth."
      challenges={[
        "70% of customers abandon their cart and never hear from you again",
        "Thousands of past customers sitting unused in your database",
        "No visibility into which campaigns and channels are actually driving revenue",
        "Manual customer support slows response times and frustrates buyers",
        "No system to automatically follow up with leads from ads or forms",
      ]}
      solutions={[
        {
          emoji: "💎",
          title: "Customer Reactivation",
          description:
            "ReviveIQ sends AI-personalised messages to your cold customer database across email, SMS, and WhatsApp — surfacing the buyers who are ready to purchase again.",
        },
        {
          emoji: "🔁",
          title: "Cart Recovery & Follow-Up",
          description:
            "NurtureLoop runs automated recovery sequences for abandoned carts and post-purchase follow-ups — across all channels, stopping the moment the customer responds.",
        },
        {
          emoji: "📊",
          title: "Weekly Revenue Reports",
          description:
            "ClearDesk automatically pulls data from Shopify, your ad accounts, and analytics — delivering a plain-English report every Monday showing what's working and what to cut.",
        },
      ]}
      stats={[
        { value: "15–25%", label: "Cart recovery rate" },
        { value: "5–15%", label: "Database reactivation rate" },
        { value: "3×", label: "Faster follow-up speed" },
        { value: "0", label: "Hours of manual reporting" },
      ]}
      products={[
        {
          emoji: "💎",
          name: "ReviveIQ",
          description:
            "Turn your cold customer database into live revenue with AI-personalised reactivation campaigns.",
          href: "/products/reviveiq",
        },
        {
          emoji: "🔁",
          name: "NurtureLoop",
          description:
            "Automated cart recovery and follow-up sequences across email, SMS, and WhatsApp.",
          href: "/products/nurtureloop",
        },
        {
          emoji: "📊",
          name: "ClearDesk",
          description:
            "Automatic weekly performance reports from all your Shopify, ad, and analytics data.",
          href: "/products/cleardesk",
        },
        {
          emoji: "⚡",
          name: "LeadFire",
          description:
            "Reply to every ad lead in under 60 seconds and convert them before they bounce.",
          href: "/products/leadfire",
        },
      ]}
      ctaHeadline="Stop Leaving Revenue on the Table."
    />
  );
}
