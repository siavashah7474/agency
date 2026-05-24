import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function FinanceLegalPage() {
  return (
    <IndustryPageLayout
      seoTitle="AI Automation for Finance & Legal Firms | Webimot Agency"
      seoDescription="Automate documents, qualify leads instantly, and follow up like clockwork. AI document processing, instant lead response, and smart follow-up sequences for finance and legal firms."
      seoKeywords="finance AI automation, legal firm automation, document processing AI, contract automation, lead qualification finance, legal lead follow-up, fintech automation"
      emoji="⚖️"
      industry="Finance & Legal"
      tagline="Automate documents, qualify leads instantly, and follow up like clockwork."
      heroBrief="Finance and legal firms waste hours on manual document processing, slow lead response, and inconsistent follow-up. We build AI systems that read documents automatically, respond to enquiries in seconds, and keep every prospect engaged until they convert."
      challenges={[
        "Staff spend hours manually extracting data from contracts, invoices, and intake forms",
        "New enquiries wait hours for a response — losing high-value clients to faster competitors",
        "Follow-up is inconsistent — leads fall through the gaps after initial contact",
        "No clear weekly visibility into pipeline, revenue, and team performance",
        "Client onboarding involves too many manual steps and reminders",
      ]}
      solutions={[
        {
          emoji: "📄",
          title: "Automated Document Processing",
          description:
            "DocuMind reads every contract, form, and invoice automatically — extracting key data, populating your CRM, and flagging anything incomplete. Hours of work done in seconds.",
        },
        {
          emoji: "⚡",
          title: "Instant Lead Response",
          description:
            "LeadFire replies to every new enquiry in under 60 seconds — qualifying leads, answering FAQs, and routing them to the right advisor automatically.",
        },
        {
          emoji: "🔁",
          title: "Smart Follow-Up Sequences",
          description:
            "NurtureLoop runs multi-step follow-up sequences for every prospect who doesn't convert immediately — across email, SMS, and WhatsApp.",
        },
      ]}
      stats={[
        { value: "90%", label: "Faster document processing" },
        { value: "60s", label: "Lead response time" },
        { value: "5×", label: "More consistent follow-up" },
        { value: "15–25h", label: "Saved per week per team" },
      ]}
      products={[
        {
          emoji: "📄",
          name: "DocuMind",
          description:
            "AI document processing — reads contracts, forms, and invoices and fills your CRM automatically.",
          href: "/products/documind",
        },
        {
          emoji: "⚡",
          name: "LeadFire",
          description:
            "Instant lead response and qualification — reply to every enquiry in under 60 seconds.",
          href: "/products/leadfire",
        },
        {
          emoji: "🔁",
          name: "NurtureLoop",
          description:
            "Automated follow-up sequences for every prospect across email, SMS, and WhatsApp.",
          href: "/products/nurtureloop",
        },
        {
          emoji: "📊",
          name: "ClearDesk",
          description:
            "Weekly performance reports across your pipeline, revenue, and team activity — automatic.",
          href: "/products/cleardesk",
        },
      ]}
      ctaHeadline="Free Your Team From Admin. Focus on Clients."
    />
  );
}
