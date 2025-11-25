import PricingCard from '../PricingCard'

export default function PricingCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <PricingCard
        name="Growth"
        price="$999"
        description="Perfect for growing businesses"
        features={[
          "WhatsApp AI Agent (1000 conversations/mo)",
          "SEO Blog Generator (20 posts/mo)",
          "AI Marketing Reports",
          "Meta & Google Ads Management",
          "Priority Support"
        ]}
        highlighted={true}
      />
    </div>
  )
}
