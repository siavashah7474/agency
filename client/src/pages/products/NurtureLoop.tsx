import ProductPageLayout from "@/components/ProductPageLayout";

export default function NurtureLoopPage() {
  return (
    <ProductPageLayout
      seoTitle="NurtureLoop | Never let a lead go cold again — Webimot Agency"
      seoDescription="80% of sales require 5+ follow-ups. Most businesses give up after 1 or 2. NurtureLoop runs every follow-up automatically — across every channel — so no lead is ever forgotten."
      emoji="🔁"
      name="NurtureLoop"
      tagline="Never let a lead go cold again."
      heroBrief="Most leads go cold because nobody followed up at the right time. NurtureLoop runs intelligent multi-channel sequences across email, SMS, and WhatsApp — automatically — and stops the moment they respond or book."
      results={[
        { value: "80%", label: "Sales need 5+ follow-ups", context: "Most businesses give up after 1 or 2" },
        { value: "23%", label: "Leads re-engaged", context: "Average conversion from cold leads after a full NurtureLoop sequence" },
        { value: "0h", label: "Manual follow-up time", context: "Every sequence runs automatically without staff involvement" },
      ]}
      problemParagraphs={[
        "80% of sales require 5 or more follow-ups. Most businesses give up after 1 or 2. The leads you worked hard to generate — and paid to acquire — are sitting in your CRM going cold because nobody had time to follow up.",
        "Manual follow-up is inconsistent, time-consuming, and relies entirely on your team remembering to do it. When things get busy, follow-up is always the first thing to slip. That means 60–80% of your lead database is silently rotting.",
        "NurtureLoop removes the human dependency completely. Every lead gets followed up automatically — at the right time, on the right channel — until they respond, book, or opt out. Your team only talks to people who are ready.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Import Your Leads", description: "Connect your CRM, import a spreadsheet, or let LeadFire feed directly into NurtureLoop. Every new lead is automatically enrolled in the right sequence based on where they came from and what they enquired about." },
        { emoji: "🤖", title: "Sequences Run Automatically", description: "NurtureLoop sends personalised messages across email, SMS, and WhatsApp on a custom schedule. If a lead doesn't respond on one channel, it switches to another. Messages adapt based on behaviour — opens, clicks, replies." },
        { emoji: "🔥", title: "Warm Leads Surface", description: "The moment a lead replies, clicks, or books, NurtureLoop stops the sequence and notifies your team. You only talk to people who have shown intent — not cold contacts you're chasing manually." },
      ]}
      scenario={{
        heading: "See NurtureLoop in action: a cosmetic surgery clinic's rhinoplasty inquiry",
        description: "Ahmad enquires about a rhinoplasty procedure. Here's the full follow-up sequence that runs automatically — across 9 days — while the clinic team focuses on existing patients.",
        steps: [
          {
            time: "Day 1 · 2:00 PM",
            event: "Ahmad submits inquiry",
            detail: "Ahmad fills in the clinic's contact form: 'Interested in rhinoplasty — primary nose reduction. Looking for consultation.' He's in Dubai. The clinic is in Istanbul.",
          },
          {
            time: "Day 1 · 2:01 PM",
            event: "Instant reply with information pack",
            detail: "NurtureLoop sends an email with the clinic's rhinoplasty overview, before/after gallery, pricing guide, and a consultation booking link. Personalised to Ahmad's enquiry.",
            highlight: true,
          },
          {
            time: "Day 3 · 10:00 AM",
            event: "Follow-up email — social proof",
            detail: "No reply yet. NurtureLoop sends: 'Hi Ahmad, just following up on your rhinoplasty inquiry. Here are 3 real patient stories from patients who came from Dubai for their procedure — including their results and recovery experience.'",
            highlight: true,
          },
          {
            time: "Day 5 · 11:00 AM",
            event: "WhatsApp message — direct and personal",
            detail: "Still no reply. NurtureLoop switches channel: 'Hi Ahmad, I wanted to check in — did you have a chance to look at the info we sent about rhinoplasty? Happy to answer any specific questions, or I can arrange a free virtual consultation with our surgeon.'",
          },
          {
            time: "Day 7 · 9:00 AM",
            event: "Urgency email — limited slot",
            detail: "NurtureLoop sends: 'Hi Ahmad, we have a virtual consultation slot opening this Thursday with Dr. Yilmaz. These fill up quickly — would you like me to hold it for you? No commitment needed.'",
            highlight: true,
          },
          {
            time: "Day 9 · 3:15 PM",
            event: "Ahmad replies and books",
            detail: "Ahmad responds to the Day 7 email: 'Yes, Thursday works — please book me in.' NurtureLoop stops the sequence immediately, creates a calendar event, notifies the clinic team, and sends Ahmad a confirmation.",
            highlight: true,
          },
        ],
      }}
      featureDetails={[
        { title: "Multi-channel sequences", description: "Messages go out across email, SMS, and WhatsApp on a custom schedule. Each channel is used strategically — email for information-rich content, WhatsApp and SMS for direct personal follow-up." },
        { title: "Automatic channel switching", description: "If a lead doesn't open or respond on email after a set number of attempts, NurtureLoop automatically shifts to WhatsApp or SMS — reaching them where they actually check their messages." },
        { title: "Behaviour-based messaging", description: "NurtureLoop tracks whether a lead opened an email, clicked a link, or visited a page — and adjusts the next message accordingly. Clicked the pricing page? The next message addresses budget concerns." },
        { title: "Automatically stops when lead responds", description: "The moment a lead replies, clicks a booking link, or books an appointment, the sequence stops immediately. No awkward follow-up after they've already converted." },
        { title: "AI-personalised messages", description: "Every message is personalised with the lead's name, their original inquiry, and relevant content for their situation — not a generic template that reads like a mass email blast." },
        { title: "Works with your existing CRM", description: "Syncs with HubSpot, Salesforce, GoHighLevel, or any CRM via API. New leads added to your CRM are automatically enrolled in the right sequence. Conversions update back to the CRM." },
        { title: "Full conversion tracking", description: "See open rates, reply rates, click rates, and booking conversions for every sequence — by channel, by message step, and by lead source. Know exactly what's working." },
        { title: "Custom sequence builder", description: "We build your sequences based on your sales cycle, deal value, and industry. A hair transplant clinic with a 3-month decision cycle gets different sequences to a legal firm handling contract inquiries." },
      ]}
      features={[
        "Sequences across email, SMS, and WhatsApp",
        "Switches channels if a lead doesn't respond",
        "Behaviour-based message adaptation",
        "AI-personalised messages for each lead",
        "Automatically stops when lead replies or books",
        "Tracks open rates, reply rates, and conversions",
        "Works with your existing CRM",
        "Custom sequence builder for your sales cycle",
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
