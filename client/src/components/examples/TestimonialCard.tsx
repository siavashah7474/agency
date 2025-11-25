import TestimonialCard from '../TestimonialCard'

export default function TestimonialCardExample() {
  return (
    <div className="p-6 max-w-md">
      <TestimonialCard
        name="Dr. Sarah Mitchell"
        role="Marketing Director"
        company="Istanbul Medical Center"
        content="The WhatsApp AI agent completely transformed our lead handling. We went from missing 40% of inquiries to responding to 100% within seconds. Our conversion rate doubled in just 3 months."
        rating={5}
      />
    </div>
  )
}
