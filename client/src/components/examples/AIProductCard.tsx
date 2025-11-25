import AIProductCard from '../AIProductCard'

export default function AIProductCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <AIProductCard
        title="WhatsApp AI Agent"
        tagline="24/7 Intelligent Lead Handling & Booking Automation"
        description="Never miss a lead again. Our WhatsApp AI Agent handles incoming messages instantly, qualifies leads, evaluates photos with Vision AI, and books consultations automatically."
        features={[
          "Instant lead replies in multiple languages",
          "Voice message → text transcription",
          "Photo evaluation with Vision AI",
          "Lead scoring and qualification",
          "Automated booking calendar integration",
          "Supervisor escalation for complex queries",
          "Follow-up automation engine",
          "Real-time dashboard and analytics"
        ]}
        href="/services/whatsapp-ai-agent"
        flagship={true}
      />
    </div>
  )
}
