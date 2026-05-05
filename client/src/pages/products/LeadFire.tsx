import ProductPageLayout from "@/components/ProductPageLayout";

export default function LeadFirePage() {
  return (
    <ProductPageLayout
      seoTitle="LeadFire | Contact every lead in under 60 seconds — Webimot Agency"
      seoDescription="Most businesses take 2-6 hours to respond to a new lead. By then, they've already gone to a competitor. LeadFire replies in under 60 seconds, qualifies leads, and books calls automatically."
      emoji="⚡"
      name="LeadFire"
      tagline="Contact every lead in under 60 seconds — automatically."
      heroBrief="When a lead comes in from a form, ad, or website — LeadFire replies in under 60 seconds. AI qualifies them, answers their first questions, and books a call automatically. No manual work. No missed leads."
      problemParagraphs={[
        "Most businesses take 2–6 hours to respond to a new lead. By then, they've already gone to a competitor. Studies show leads contacted within 5 minutes are 9× more likely to convert — and after 30 minutes that window closes permanently.",
        "Your team is busy, your hours are limited, and leads don't wait. Every hour of delay is revenue walking out the door — to a business that simply replied faster.",
        "LeadFire eliminates this problem entirely. The moment a new lead submits a form, clicks an ad, or messages your website — LeadFire responds in under 60 seconds, qualifies them, and books a call directly into your calendar.",
      ]}
      howItWorksSteps={[
        { emoji: "🔗", title: "Connect", description: "Link your ad accounts, forms, and website to LeadFire. Setup takes about 30 minutes and we handle everything." },
        { emoji: "🤖", title: "AI Takes Over", description: "Every new lead gets an instant personalised reply, is qualified with smart questions, and gets a booking link sent automatically." },
        { emoji: "📈", title: "You See Results", description: "Your calendar fills up, your CRM updates, and you get notified only when a lead is qualified and ready to talk." },
      ]}
      features={[
        "Instant reply to every form fill and ad lead",
        "AI-personalized first message — not a generic autoresponder",
        "Smart qualification questions to score the lead",
        "Auto-books appointments directly to your calendar",
        "Real-time notifications to your sales team",
        "Works across WhatsApp, email, and SMS",
      ]}
      whoItsFor={[
        { emoji: "📣", industry: "Any business running ads", useCase: "Turn every ad click into an instant conversation before competitors respond." },
        { emoji: "🏥", industry: "Clinics with online inquiries", useCase: "Reply to every patient inquiry in seconds and book consultations automatically." },
        { emoji: "🏠", industry: "Real estate agencies", useCase: "Contact every property inquiry instantly and schedule viewings on autopilot." },
        { emoji: "⚖️", industry: "Finance & legal firms", useCase: "Qualify leads the moment they submit an inquiry and route them to the right advisor." },
      ]}
      ctaHeadline="Stop Losing Leads to Slow Response Times."
    />
  );
}
