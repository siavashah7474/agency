import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function HealthcarePage() {
  return (
    <IndustryPageLayout
      seoTitle="AI Automation for Healthcare & Medical Tourism Clinics | Webimot Agency"
      seoDescription="Hair transplant, dental, cosmetic surgery, and IVF clinics: turn every patient inquiry into a booked consultation automatically. 24/7 AI receptionist, WhatsApp AI, and SEO content — without adding staff."
      seoKeywords="medical tourism AI, hair transplant marketing, dental clinic automation, cosmetic surgery leads, IVF clinic AI, clinic WhatsApp bot, patient inquiry automation"
      emoji="🏥"
      industry="Healthcare & Clinics"
      tagline="Turn every patient inquiry into a booked consultation — automatically."
      heroBrief="Hair transplant, dental, cosmetic surgery, and IVF clinics lose 60% of leads to slow response times. We build AI systems that reply in seconds, evaluate photos, speak 50+ languages, and book consultations 24/7 — without adding staff."
      challenges={[
        "Leads inquire at midnight and get no reply until the next morning — they've already booked with a competitor",
        "Staff spend hours manually answering the same WhatsApp questions in multiple languages",
        "No consistent follow-up system for leads who showed interest but didn't book",
        "Website has no blog content ranking for high-value searches like 'hair transplant Turkey'",
        "Photo evaluations done manually — slow, inconsistent, costly",
      ]}
      solutions={[
        {
          emoji: "💬",
          title: "24/7 AI Receptionist",
          description:
            "Our WhatsApp AI handles every patient inquiry the moment it arrives — answering questions in any language, evaluating photos with Vision AI, and booking consultations automatically.",
        },
        {
          emoji: "✍️",
          title: "Automated SEO Content",
          description:
            "We publish 20–30 SEO-optimized blog posts per month targeting high-value searches like 'hair transplant Turkey' or 'dental veneers Istanbul' — fully automated.",
        },
        {
          emoji: "🔁",
          title: "Smart Follow-Up Sequences",
          description:
            "Leads who don't book immediately get automatically followed up across WhatsApp, email, and SMS — stopping the moment they respond or book.",
        },
      ]}
      stats={[
        { value: "0.8s", label: "Average AI response time" },
        { value: "50+", label: "Languages supported" },
        { value: "40%", label: "More consultations booked" },
        { value: "24/7", label: "Always-on coverage" },
      ]}
      products={[
        {
          emoji: "💬",
          name: "WhatsApp AI",
          description:
            "24/7 intelligent patient handling — instant replies, photo evaluation, consultation booking.",
          href: "/products/whatsapp-ai",
        },
        {
          emoji: "✍️",
          name: "SEO Blog AI",
          description:
            "Automated SEO content for clinics — rank for the searches that bring international patients.",
          href: "/products/seo-blog-ai",
        },
        {
          emoji: "⚡",
          name: "LeadFire",
          description:
            "Reply to every new inquiry in under 60 seconds and book consultations automatically.",
          href: "/products/leadfire",
        },
        {
          emoji: "🔁",
          name: "NurtureLoop",
          description:
            "Multi-channel follow-up sequences that keep leads warm until they're ready to book.",
          href: "/products/nurtureloop",
        },
      ]}
      ctaHeadline="More Patients. Less Manual Work. Starting This Month."
    />
  );
}
