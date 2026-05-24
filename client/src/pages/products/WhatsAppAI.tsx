import ProductPageLayout from "@/components/ProductPageLayout";

export default function WhatsAppAIPage() {
  return (
    <ProductPageLayout
      seoTitle="WhatsApp AI | AI Agent for Clinics & Medical Tourism — Webimot Agency"
      seoDescription="Our clinic AI system handles every WhatsApp message 24/7 — qualifying leads, evaluating photos, and booking appointments automatically. The #1 medical tourism AI system for hair transplant, dental, and cosmetic clinics."
      emoji="💬"
      name="WhatsApp AI"
      tagline="24/7 intelligent lead handling on WhatsApp."
      heroBrief="WhatsApp is where your customers actually are — but you can't staff it 24/7. Our WhatsApp AI handles every message, qualifies every lead, and books every appointment automatically, in any language, around the clock."
      problemParagraphs={[
        "WhatsApp is the #1 communication channel for leads in most markets — especially in Turkey, the Gulf, and across Europe. But staffing WhatsApp 24/7 is expensive, and missed messages mean missed revenue.",
        "A lead who messages at 11pm and gets no reply until the next morning has already contacted 2–3 competitors. First response wins. If you can't reply instantly, you're losing deals to someone who can.",
        "Our WhatsApp AI handles every incoming message the moment it arrives — answering questions, evaluating photos, qualifying leads, and booking appointments — in any language, at any hour.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect", description: "Link your WhatsApp Business account. Full setup and training takes about one day — we handle everything." },
        { emoji: "🤖", title: "AI Takes Over", description: "Every incoming message is handled instantly — FAQs answered, photos evaluated, leads qualified, appointments booked." },
        { emoji: "📊", title: "You See Results", description: "Full inbox coverage 24/7, zero missed leads, and a real-time dashboard of every conversation and conversion." },
      ]}
      features={[
        "24/7 instant replies to every WhatsApp message",
        "Multilingual support — detects and replies in the lead's language",
        "Vision AI: evaluates photos sent by leads",
        "Voice message transcription and intelligent response",
        "Lead qualification and scoring",
        "Automated appointment booking to your calendar",
        "Escalation to human agent for complex queries",
        "Real-time dashboard and conversation analytics",
      ]}
      whoItsFor={[
        { emoji: "🏥", industry: "Clinics & medical tourism", useCase: "Handle patient inquiries, evaluate photos, and book consultations 24/7 in any language." },
        { emoji: "🏠", industry: "Real estate agencies", useCase: "Reply instantly to every property inquiry and schedule viewings automatically." },
        { emoji: "🛒", industry: "eCommerce stores", useCase: "Handle order questions, returns, and product support on WhatsApp around the clock." },
        { emoji: "🏢", industry: "Any business on WhatsApp", useCase: "Turn every WhatsApp message into a qualified lead without staffing overhead." },
      ]}
      ctaHeadline="Your Competitors Are Replying While You Sleep. Are You?"
    />
  );
}
