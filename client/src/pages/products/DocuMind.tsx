import ProductPageLayout from "@/components/ProductPageLayout";

export default function DocuMindPage() {
  return (
    <ProductPageLayout
      seoTitle="DocuMind | Turn paperwork into data in seconds — Webimot Agency"
      seoDescription="Staff spend hours every week manually processing documents — invoices, intake forms, contracts, patient records. DocuMind reads it, extracts the data, and fills your CRM automatically."
      emoji="📄"
      name="DocuMind"
      tagline="Turn paperwork into data in seconds."
      heroBrief="Upload any document — invoice, contract, intake form, or medical record. DocuMind reads it, extracts the data, fills your CRM, and flags anything missing. Hours of manual work done in seconds."
      problemParagraphs={[
        "Staff spend hours every week manually processing documents — invoices, intake forms, contracts, patient records. It's slow, error-prone, and costs your business money in wasted time and missed data.",
        "A typical business processes hundreds of documents per month. At 5–10 minutes per document, that's days of work every month — done by expensive staff who should be focusing on higher-value tasks.",
        "DocuMind eliminates every second of that manual work. Any document you receive is read, processed, and filed automatically — with zero human input and 100% accuracy.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect", description: "Point DocuMind at your inbox, upload folder, or document source. We handle the integration in a single setup session." },
        { emoji: "🤖", title: "AI Takes Over", description: "Every document is read, data extracted, and fields populated in your CRM or database automatically." },
        { emoji: "📊", title: "You See Results", description: "Zero manual entry, no missed data, and a full log of every document processed — searchable and auditable." },
      ]}
      features={[
        "Reads PDFs, Word docs, forms, invoices, and contracts",
        "Extracts and structures key data automatically",
        "Auto-fills your CRM or internal database",
        "Flags incomplete or incorrect information",
        "Routes documents to the right person or department",
        "Summarises long documents into key points",
      ]}
      whoItsFor={[
        { emoji: "🏥", industry: "Healthcare & Clinics", useCase: "Process patient intake forms, referral letters, and medical records without manual data entry." },
        { emoji: "⚖️", industry: "Finance & Legal", useCase: "Extract key clauses from contracts and auto-populate client files in seconds." },
        { emoji: "🛒", industry: "eCommerce", useCase: "Process invoices, purchase orders, and supplier documents automatically." },
        { emoji: "🏢", industry: "Any business with documents", useCase: "Eliminate manual data entry for any document-heavy workflow." },
      ]}
      ctaHeadline="Stop Paying People to Type What AI Can Read."
    />
  );
}
