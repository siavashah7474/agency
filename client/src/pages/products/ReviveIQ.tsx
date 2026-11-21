import ProductPageLayout from "@/components/ProductPageLayout";

export default function ReviveIQPage() {
  return (
    <ProductPageLayout
      contentKey="reviveiq"
      system="convert"
      seoTitle="ReviveIQ | Your old leads are a goldmine — Webimot Agency"
      seoDescription="Most businesses have thousands of old contacts sitting unused. ReviveIQ sends AI-personalised reactivation messages and hands you back the ones who are ready to buy — right now."
      emoji="💎"
      name="ReviveIQ"
      tagline="Your old leads are a goldmine. Let's dig."
      heroBrief="You already have a list of old leads, past clients, or cold contacts sitting unused. ReviveIQ sends AI-personalised reactivation messages and hands you back the ones who are ready to buy — right now. No new ad spend required."
      results={[
        { value: "Any list", label: "CRM export, spreadsheet or CSV", context: "Cleaned, deduplicated and segmented before anything is sent" },
        { value: "0 €", label: "Extra ad spend", context: "Works on contacts you already own" },
        { value: "3 channels", label: "Email, SMS and WhatsApp", context: "Non-responders are followed up on another channel" },
      ]}
      problemParagraphs={[
        "Most businesses have thousands of old contacts that simply went cold — not because they weren't interested, but because nobody followed up. Those contacts cost you money to acquire. They're a goldmine sitting in a spreadsheet.",
        "Many businesses have more revenue potential in their existing database than they realise. A reactivation campaign is designed to surface the contacts who are still interested: people who enquired, researched, and simply got distracted.",
        "ReviveIQ is built to put that list back to work. We segment your list, personalise every message based on who each contact is and what they previously enquired about, and deliver warm leads directly to your sales team — without any manual effort.",
      ]}
      howItWorksSteps={[
        { emoji: "📋", title: "Upload Your Contact List", description: "Export your old CRM contacts, spreadsheet, or database and hand it to us. Any format works — we handle the cleanup, deduplication, and segmentation. Even messy lists with incomplete data are fine." },
        { emoji: "🤖", title: "AI Segments and Messages", description: "ReviveIQ divides your list into segments based on enquiry type, how far they got in the process, and how long ago they went cold. Each segment gets a different, personalised reactivation message — sent across email, SMS, and WhatsApp." },
        { emoji: "🔥", title: "Warm Leads Delivered", description: "Every contact that replies, clicks, or shows intent is flagged as a warm lead. Your team gets notified with full context on who they are and what they previously enquired about — so every conversation starts informed." },
      ]}
      scenario={{
        heading: "See ReviveIQ in action: a hair transplant clinic re-contacts 3,000 old leads",
        description: "The clinic has 3,000 people who enquired about hair transplants in 2023–2024 but never booked. They've been sitting in a spreadsheet for 18 months.",
        steps: [
          {
            time: "Day 1 · Setup",
            event: "Contact list uploaded and segmented",
            detail: "ReviveIQ receives the 3,000-contact spreadsheet. It cleans the data and creates three segments: 400 'warm' (previously replied at some point), 1,800 'cold inquiries' (form fills only, never replied), and 800 'past visitors' (website chat inquiries).",
            highlight: true,
          },
          {
            time: "Day 1 · Afternoon",
            event: "Warm segment receives first message",
            detail: "400 contacts who previously engaged receive a WhatsApp message: 'Hi Marco, we reached out about your hair transplant inquiry back in 2024. Would you like a free virtual assessment with our surgeon?'",
            highlight: true,
          },
          {
            time: "Day 3",
            event: "Cold inquiry segment receives email",
            detail: "1,800 cold contacts receive a different message mentioning current pricing options and the offer of a virtual consultation. Personalised with their name and original inquiry details where available.",
          },
          {
            time: "Day 5",
            event: "Non-responders get WhatsApp follow-up",
            detail: "Contacts who haven't replied to email receive a short WhatsApp: 'Hi, just checking in — did you see our message about the free virtual hair assessment? Takes 15 mins and there's no commitment at all.'",
          },
          {
            time: "Day 14 · Wrap-up",
            event: "Campaign complete: warm leads handed over",
            detail: "Every reply is scored hot, warm or cold. The clinic's team gets the hot and warm contacts with full context, plus a report of messages sent, replies by channel and consultations booked.",
            highlight: true,
          },
        ],
      }}
      featureDetails={[
        { title: "Import any contact list", description: "Upload CRM exports, spreadsheets, or raw CSV files in any format. ReviveIQ cleans the data, removes duplicates, and fills in missing fields where possible before any messages are sent." },
        { title: "Intelligent list segmentation", description: "Contacts are automatically divided by how engaged they previously were, what they enquired about, how long ago they went cold, and what action they took (form fill, phone call, email, chat). Each segment gets a different message strategy." },
        { title: "Fully personalised messages", description: "Every message references the contact's name, their original inquiry, and relevant details — not a generic blast that reads as spam." },
        { title: "Multi-channel delivery", description: "Reactivation messages go out across email, WhatsApp, and SMS. Contacts who don't respond on one channel are followed up on another — maximising the chance of re-engagement." },
        { title: "Lead scoring and flagging", description: "Every reply is automatically categorised: hot (ready to book), warm (interested but needs more info), or cold (not interested). Your team only handles the hot and warm contacts." },
        { title: "Available as one-time or recurring", description: "Run ReviveIQ as a one-off reactivation campaign, or schedule it quarterly to continuously work through your growing list of cold contacts before they become permanently inactive." },
        { title: "Full campaign report", description: "At the end of every campaign, you receive a full report: messages sent, open rates, reply rates by channel, leads reactivated, consultations booked, and estimated revenue recovered." },
        { title: "Opt-out compliant", description: "All messages include compliant opt-out options. Anyone who unsubscribes is permanently removed from future campaigns and flagged in your CRM." },
      ]}
      features={[
        "Import any CRM export, spreadsheet, or contact list",
        "AI segments and personalises messages per contact",
        "Runs across email, SMS, and WhatsApp",
        "Scores responses to identify hot leads",
        "Available as a one-time campaign or recurring quarterly",
        "Full report on responses and re-engaged leads",
        "Lead scoring and automatic flagging",
        "Opt-out compliant across all channels",
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
