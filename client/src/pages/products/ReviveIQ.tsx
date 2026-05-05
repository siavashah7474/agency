import ProductPageLayout from "@/components/ProductPageLayout";

export default function ReviveIQPage() {
  return (
    <ProductPageLayout
      seoTitle="ReviveIQ | Your old leads are a goldmine — Webimot Agency"
      seoDescription="Most businesses have thousands of old contacts sitting unused. ReviveIQ sends AI-personalised reactivation messages and hands you back the ones who are ready to buy — right now."
      emoji="💎"
      name="ReviveIQ"
      tagline="Your old leads are a goldmine. Let's dig."
      heroBrief="You already have a list of old leads, past clients, or cold contacts sitting unused. ReviveIQ sends AI-personalised reactivation messages and hands you back the ones who are ready to buy — right now."
      problemParagraphs={[
        "Most businesses have thousands of old contacts that simply went cold — not because they weren't interested, but because nobody followed up. Those contacts cost you money to acquire. They're a goldmine sitting in a spreadsheet.",
        "The average business has 3–5× more revenue potential in its existing database than it realises. A well-executed reactivation campaign typically surfaces 5–15% of contacts as warm leads ready to buy.",
        "ReviveIQ turns that dead data into live revenue. We segment your list, personalise every message, and deliver warm leads directly to your sales team — without any manual effort on your part.",
      ]}
      howItWorksSteps={[
        { emoji: "📋", title: "Connect", description: "Upload your old contact list, CRM export, or spreadsheet. Any format works — we handle the cleanup." },
        { emoji: "🤖", title: "AI Takes Over", description: "ReviveIQ segments your list and sends personalised reactivation messages across email, SMS, and WhatsApp." },
        { emoji: "🔥", title: "You See Results", description: "Warm responses are flagged, leads are scored, and your team gets a list of people ready to buy." },
      ]}
      features={[
        "Import any CRM export, spreadsheet, or contact list",
        "AI segments and personalises messages per contact",
        "Runs across email, SMS, and WhatsApp",
        "Scores responses to identify hot leads",
        "Available as a one-time campaign or recurring quarterly",
        "Full report on responses and re-engaged leads",
      ]}
      whoItsFor={[
        { emoji: "🏥", industry: "Clinics with old patient lists", useCase: "Reactivate patients who enquired but never booked — many are still interested." },
        { emoji: "🛒", industry: "eCommerce with lapsed customers", useCase: "Win back customers who haven't purchased in 6–12 months with personalised offers." },
        { emoji: "⚖️", industry: "Finance & legal firms", useCase: "Revive cold prospects who received proposals but never converted." },
        { emoji: "🏢", industry: "Any business with a database", useCase: "Turn dormant contacts into active pipeline with zero manual outreach." },
      ]}
      ctaHeadline="The Revenue You Need Is Already in Your Database."
    />
  );
}
