import ProductPageLayout from "@/components/ProductPageLayout";

export default function LeadFirePage() {
  return (
    <ProductPageLayout
      seoTitle="LeadFire | Contact every lead in under 60 seconds — Webimot Agency"
      seoDescription="Most businesses take 2-6 hours to respond to a new lead. By then, they've already gone to a competitor. LeadFire replies in under 60 seconds, qualifies leads, and books calls automatically."
      emoji="⚡"
      name="LeadFire"
      tagline="Contact every lead in under 60 seconds — automatically."
      heroBrief="When a lead comes in from a form, ad, or website — LeadFire replies in under 60 seconds. AI qualifies them, answers their first questions, and books a call automatically. No manual work. No missed leads."
      results={[
        { value: "< 60s", label: "Response time", context: "Every lead, every channel, day and night" },
        { value: "9×", label: "Higher conversion", context: "vs. leads contacted after 5 minutes" },
        { value: "100%", label: "Follow-up rate", context: "No lead ever falls through the cracks" },
      ]}
      problemParagraphs={[
        "Most businesses take 2–6 hours to respond to a new lead. By then, they've already gone to a competitor. Studies show leads contacted within 5 minutes are 9× more likely to convert — and after 30 minutes that window closes permanently.",
        "Your team is busy, your hours are limited, and leads don't wait. Every hour of delay is revenue walking out the door — to a business that simply replied faster.",
        "LeadFire eliminates this problem entirely. The moment a new lead submits a form, clicks an ad, or messages your website — LeadFire responds in under 60 seconds, qualifies them, and books a call directly into your calendar.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect Your Lead Sources", description: "Link your ad accounts (Meta, Google), website contact forms, and landing pages to LeadFire. Setup takes about 30 minutes — we handle all integrations." },
        { emoji: "🤖", title: "AI Responds Instantly", description: "Every new lead gets a personalised reply within seconds. The AI asks smart qualification questions — budget, timeline, specific needs — to score the lead and determine next steps." },
        { emoji: "📅", title: "Calendar Books Itself", description: "Qualified leads get a booking link sent automatically. Once they pick a slot, your calendar is updated, your team gets notified, and the lead gets a confirmation. Zero manual work." },
      ]}
      scenario={{
        heading: "See LeadFire in action: a real estate agency on a Sunday evening",
        description: "Here's exactly what happens from the moment a lead submits a form — minute by minute.",
        steps: [
          {
            time: "6:43 PM",
            event: "Lead fills in contact form",
            detail: "Sarah finds your property website on Google and fills in a form: 'Looking for a 3-bed flat in Manchester, budget £350k, pre-approved mortgage.' It's Sunday evening. Your office is closed.",
          },
          {
            time: "6:43 PM · 14 seconds later",
            event: "LeadFire sends a personalised WhatsApp message",
            detail: "\"Hi Sarah! Thanks for reaching out — I saw you're looking for a 3-bed flat in Manchester with a budget around £350k. I'm here to help. What's your ideal move-in timeframe?\"",
            highlight: true,
          },
          {
            time: "6:45 PM",
            event: "Sarah replies",
            detail: "\"Ideally within 3 months — we're already pre-approved for the mortgage so ready to move quickly.\"",
          },
          {
            time: "6:45 PM",
            event: "AI qualifies and moves to booking",
            detail: "LeadFire recognises this is a high-intent, pre-qualified buyer. It replies: \"That's great — being pre-approved puts you in a strong position. Can I book a quick 20-minute call with our team tomorrow to show you 3 current listings that match exactly?\"",
            highlight: true,
          },
          {
            time: "6:47 PM",
            event: "Sarah books the slot",
            detail: "She clicks the booking link and picks Tuesday 9:30 AM. The meeting goes straight into your agent's calendar with all context attached.",
          },
          {
            time: "6:47 PM",
            event: "Your agent gets a notification",
            detail: "Slack message: \"New qualified lead — Sarah T. Budget: £350k, timeline: 3 months, pre-approved mortgage. Meeting booked: Tuesday 9:30 AM. All details in CRM.\" Your agent hasn't typed a single word.",
            highlight: true,
          },
        ],
      }}
      featureDetails={[
        { title: "Instant reply to every form fill and ad lead", description: "Connects to Meta Ads, Google Ads, website forms, and landing pages. Every submission triggers an immediate personalised reply — no delays, no batching." },
        { title: "AI-personalised first message", description: "Not a generic autoresponder. LeadFire reads the lead's inquiry, name, and source, and crafts a relevant opening message that feels human." },
        { title: "Smart qualification questions", description: "The AI asks about budget, timeline, specific requirements, and buying stage — then scores the lead and routes them appropriately." },
        { title: "Automatic calendar booking", description: "Qualified leads are offered a booking link that connects directly to your team's calendar. Appointments are confirmed, reminders sent, and no-shows followed up." },
        { title: "Real-time team notifications", description: "Your sales team gets notified the moment a lead is qualified — via Slack, email, or SMS — with full context so they show up prepared." },
        { title: "Works across WhatsApp, email, and SMS", description: "LeadFire reaches leads on whichever channel they prefer, and switches channels if there's no response after a set time." },
        { title: "CRM sync", description: "Every lead, conversation, and outcome is logged automatically in your CRM — no manual data entry required." },
        { title: "After-hours coverage", description: "LeadFire works 24/7. Leads at midnight get the same instant response as leads at 9am, with no overtime costs." },
      ]}
      features={[
        "Instant reply to every form fill and ad lead",
        "AI-personalized first message — not a generic autoresponder",
        "Smart qualification questions to score the lead",
        "Auto-books appointments directly to your calendar",
        "Real-time notifications to your sales team",
        "Works across WhatsApp, email, and SMS",
        "CRM sync — every lead logged automatically",
        "24/7 after-hours coverage",
      ]}
      whoItsFor={[
        { emoji: "📣", industry: "Any business running ads", useCase: "Turn every ad click into an instant conversation before competitors respond." },
        { emoji: "🏥", industry: "Clinics with online inquiries", useCase: "Reply to every patient inquiry in seconds and book consultations automatically." },
        { emoji: "🏠", industry: "Real estate agencies", useCase: "Contact every property inquiry instantly and schedule viewings on autopilot." },
        { emoji: "⚖️", industry: "Finance & legal firms", useCase: "Qualify leads the moment they submit an inquiry and route them to the right advisor." },
      ]}
      ctaHeadline="Stop Losing Leads to Slow Response Times."
    />
  );
}
