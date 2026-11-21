import ProductPageLayout from "@/components/ProductPageLayout";
import { FOUNDING_OFFER, foundingOfferSentence } from "@/data/foundingOffer";

export default function WhatsAppAIPage() {
  return (
    <ProductPageLayout
      contentKey="whatsappAi"
      // Used by the Turkish founding-offer line (pricingNote.lines.1); Turkish writes €1.399, not €1,399.
      contentValues={{
        setupFee: FOUNDING_OFFER.setupFee.replace(/,/g, "."),
        spotsLeft: FOUNDING_OFFER.spotsLeft,
        spotsTotal: FOUNDING_OFFER.spotsTotal,
      }}
      system="capture"
      seoTitle="WhatsApp AI Agent | Answers Every Lead 24/7"
      seoDescription="Our clinic AI system handles every WhatsApp message 24/7 — qualifying leads, evaluating photos, and booking appointments automatically. A medical tourism AI system built for hair transplant, dental, and cosmetic clinics."
      emoji="💬"
      name="WhatsApp AI"
      tagline="24/7 intelligent lead handling on WhatsApp."
      heroBrief="WhatsApp is where your customers actually are — but you can't staff it 24/7. Our WhatsApp AI handles every message, qualifies every lead, and books every appointment automatically, in 40+ languages, around the clock. Replies go out in under 3 seconds, and the system is live within 48 hours."
      problemParagraphs={[
        "WhatsApp is a main communication channel for leads in many markets, including Turkey, the Gulf, and across Europe. But staffing WhatsApp 24/7 is expensive, and missed messages mean missed revenue.",
        "A lead who messages at 11pm and gets no reply until the next morning has often already contacted competitors. First response wins. If you can't reply instantly, you're losing deals to someone who can.",
        "Our WhatsApp AI handles every incoming message the moment it arrives — answering questions, evaluating photos, qualifying leads, and booking appointments — in the customer's language, at any hour.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect", description: "Link your WhatsApp Business account. Full setup and training is done within 48 hours — we handle everything." },
        { emoji: "🤖", title: "AI Takes Over", description: "Every incoming message is handled instantly — FAQs answered, photos evaluated, leads qualified, appointments booked." },
        { emoji: "📊", title: "You See Every Conversation", description: "Full inbox coverage 24/7 and a real-time dashboard of every conversation and booking." },
      ]}
      features={[
        "24/7 instant replies to every WhatsApp message",
        "Multilingual support — detects and replies in the lead's language",
        "Vision AI: sorts and pre-qualifies photos for your team (never a diagnosis)",
        "Voice message transcription and intelligent response",
        "Lead qualification and scoring",
        "Automated appointment booking to your calendar",
        "Escalation to human agent for complex queries",
        "Real-time dashboard and conversation analytics",
      ]}
      whoItsFor={[
        { emoji: "🏥", industry: "Clinics & medical tourism", useCase: "Handle patient inquiries, evaluate photos, and book consultations 24/7 in 40+ languages." },
        { emoji: "🏠", industry: "Real estate agencies", useCase: "Reply instantly to every property inquiry and schedule viewings automatically." },
        { emoji: "🛒", industry: "eCommerce stores", useCase: "Handle order questions, returns, and product support on WhatsApp around the clock." },
        { emoji: "🏢", industry: "Any business on WhatsApp", useCase: "Turn every WhatsApp message into a qualified lead without staffing overhead." },
      ]}
      ctaHeadline="Your Competitors Are Replying While You Sleep. Are You?"
      results={[
        { value: "< 3s", label: "Response time", context: "Every patient gets an instant reply, day or night" },
        { value: "40+", label: "Hours saved per month", context: "Less manual messaging for your team" },
        { value: "+60%", label: "More consultations booked", context: "What clinics can expect once qualified leads move straight to booking" },
      ]}
      pricingNote={{
        headline: "Transparent pricing",
        lines: [
          "Essential: €1,399 one-time setup + €599/month. Pro (up to 3 WhatsApp numbers, weekly reporting dashboard, dedicated account manager): €999/month.",
          foundingOfferSentence,
          "3-month minimum, so the system has time to learn your business. If it does not generate at least 3 qualified leads in your first 30 days, we refund your first month.",
        ],
      }}
      referenceLink={{ href: "https://webimot.com", label: "See the WhatsApp AI product at webimot.com" }}
    />
  );
}
