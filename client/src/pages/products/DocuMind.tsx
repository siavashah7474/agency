import ProductPageLayout from "@/components/ProductPageLayout";

export default function DocuMindPage() {
  return (
    <ProductPageLayout
      seoTitle="DocuMind | Turn paperwork into data in seconds — Webimot Agency"
      seoDescription="Staff spend hours every week manually processing documents — invoices, intake forms, contracts, patient records. DocuMind reads it, extracts the data, and fills your CRM automatically."
      emoji="📄"
      name="DocuMind"
      tagline="Turn paperwork into data in seconds."
      heroBrief="Upload any document — invoice, contract, intake form, or medical record. DocuMind reads it, extracts every piece of data, fills your CRM, and flags anything missing. Hours of manual work done in under 30 seconds."
      results={[
        { value: "< 30s", label: "Per document", context: "vs. 5–10 minutes of manual data entry" },
        { value: "100%", label: "Field accuracy", context: "AI flags anything ambiguous for review" },
        { value: "40h+", label: "Saved per month", context: "For a clinic processing 300+ documents" },
      ]}
      problemParagraphs={[
        "Staff spend hours every week manually processing documents — invoices, intake forms, contracts, patient records. It's slow, error-prone, and costs your business money in wasted time and missed data.",
        "A typical clinic or business processes hundreds of documents per month. At 5–10 minutes per document, that's 25–50+ hours of staff time every month — done by expensive people who should be focusing on patients, clients, or higher-value tasks.",
        "DocuMind eliminates every second of that manual work. Any document you receive is read, processed, and filed automatically — with zero human input. If something is missing or unclear, DocuMind flags it immediately so nothing slips through.",
      ]}
      howItWorksSteps={[
        { emoji: "📨", title: "Documents Come In", description: "DocuMind watches your email inbox, shared folder, or upload portal. The moment a new document arrives — PDF, Word, scan, or photo — it's automatically queued for processing." },
        { emoji: "🤖", title: "AI Reads and Extracts", description: "DocuMind reads the document, identifies every piece of data (names, dates, amounts, diagnoses, terms, etc.) and structures it into clean, organised fields." },
        { emoji: "📊", title: "Data Goes Where It Belongs", description: "Extracted data is pushed directly into your CRM, database, or spreadsheet. If a field is missing or a document is incomplete, DocuMind flags it and requests the missing information." },
      ]}
      scenario={{
        heading: "See DocuMind in action: an IVF clinic's Monday morning intake",
        description: "A new patient emails over their intake pack. Here's what happens in the next 30 seconds — with zero staff involvement.",
        steps: [
          {
            time: "9:12 AM",
            event: "Patient emails intake pack",
            detail: "Maria sends a 6-page intake form PDF and a passport scan ahead of her consultation. The email arrives in the clinic's document inbox. No staff member is available yet.",
          },
          {
            time: "9:12 AM · 8 seconds later",
            event: "DocuMind detects the documents",
            detail: "DocuMind identifies two attachments: a structured intake form and an ID document. It begins processing both simultaneously.",
            highlight: true,
          },
          {
            time: "9:12 AM · 22 seconds later",
            event: "Data extracted from intake form",
            detail: "Extracted: Full name, date of birth, nationality (Spanish), treatment interest (IVF — first cycle), previous fertility treatment history, current medications, GP contact details, emergency contact.",
            highlight: true,
          },
          {
            time: "9:12 AM · 28 seconds later",
            event: "CRM record created automatically",
            detail: "A complete patient profile is created in the clinic's CRM with all fields populated. No typing, no copy-paste. The record is tagged as 'Pre-consultation — IVF' and assigned to the correct consultant.",
          },
          {
            time: "9:12 AM · 30 seconds later",
            event: "Missing document flagged",
            detail: "DocuMind detects that proof of address was not included. It automatically sends Maria a short email: 'Hi Maria, thank you for sending your intake form. We just need one more document — a recent utility bill or bank statement for proof of address. You can reply to this email.'",
            highlight: true,
          },
          {
            time: "9:30 AM",
            event: "Coordinator starts their day",
            detail: "They open the CRM and see Maria's complete, structured profile — ready for the consultation. Zero manual work was done. The missing document has already been requested.",
          },
        ],
      }}
      featureDetails={[
        { title: "Reads any document format", description: "PDFs, scanned images, Word documents, Excel files, intake forms, invoices, contracts, and medical records — DocuMind handles them all, including handwritten content." },
        { title: "Extracts and structures data automatically", description: "Names, dates, amounts, addresses, medical codes, contract terms, line items — every piece of data is identified, extracted, and mapped to the correct field without manual rules." },
        { title: "Auto-fills your CRM or database", description: "Pushes structured data directly into your existing CRM (HubSpot, Salesforce, custom systems) or database. No manual copy-paste, no re-keying." },
        { title: "Flags missing or incorrect information", description: "If a required field is missing, a value looks incorrect, or a document is illegible, DocuMind flags it immediately and can automatically request the missing info from the sender." },
        { title: "Routes documents to the right person", description: "Based on document type and content, DocuMind routes files to the correct team member or department — patient records to consultants, invoices to accounts, contracts to legal." },
        { title: "Summarises long documents into key points", description: "For contracts, reports, or medical letters, DocuMind generates a plain-English summary — so your team gets the key points without reading 20 pages." },
        { title: "Full audit log", description: "Every document processed is logged with a timestamp, what was extracted, what was created, and what (if anything) was flagged. Fully searchable and auditable." },
        { title: "Multi-language document processing", description: "DocuMind reads and extracts data from documents in English, German, Arabic, French, Turkish, Spanish, and 30+ more languages." },
      ]}
      features={[
        "Reads PDFs, Word docs, forms, invoices, and contracts",
        "Extracts and structures key data automatically",
        "Auto-fills your CRM or internal database",
        "Flags incomplete or incorrect information",
        "Routes documents to the right person or department",
        "Summarises long documents into key points",
        "Full audit log of every document processed",
        "Multi-language document processing",
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
