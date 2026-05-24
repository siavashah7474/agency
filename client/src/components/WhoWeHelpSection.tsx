import { Link } from "wouter";

const cards = [
  { emoji: "🏥", title: "Healthcare & Clinics", description: "Patient intake, booking automation, follow-up sequences, and inquiry response — on autopilot.", href: "/industries/healthcare" },
  { emoji: "🛒", title: "eCommerce & Shopify", description: "Abandoned cart recovery, AI customer support, order automation, and performance reports.", href: "/industries/ecommerce" },
  { emoji: "⚖️", title: "Finance & Legal", description: "Document processing, client onboarding, compliance Q&A bots, and lead qualification.", href: "/industries/finance-legal" },
  { emoji: "🏢", title: "Small Business", description: "Speed to lead, follow-up systems, database reactivation — replace manual work with AI.", href: "/industries/small-business" },
  { emoji: "🏠", title: "Real Estate", description: "Instant lead response, CRM automation, follow-up sequences, and weekly reporting.", href: "/industries/real-estate" },
];

export default function WhoWeHelpSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">Every Industry</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Built for Every Business That Wants to Grow</h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto">
            We work across industries — if your business has leads, documents, or repetitive tasks, we automate them.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card) => (
            <Link key={card.title} href={card.href}>
              <div className="bg-slate-900 rounded-xl p-6 hover:bg-slate-800 hover:border-secondary/30 border border-transparent transition-all cursor-pointer h-full" style={{ borderLeft: "2px solid hsl(173 80% 36% / 0.5)" }}>
                <div className="text-3xl mb-4">{card.emoji}</div>
                <h3 className="text-white font-semibold mb-2 text-base">{card.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
}
