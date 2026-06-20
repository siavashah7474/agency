import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    emoji: "🏥",
    label: "Core Specialisation",
    labelStyle: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    accentBorder: "border-t-blue-500",
    title: "Medical Tourism & Clinics",
    subtitle: "Hair transplant, dental, cosmetic surgery, IVF — and the agencies that serve them",
    description: "Clinics lose 60% of international leads to slow response times. We deploy multilingual AI receptionists that reply in under 2 seconds, evaluate patient photos, book consultations, and follow up automatically — in Arabic, German, Russian, Dutch, English, and 40+ more languages.",
    stats: [
      { value: "0.8s", label: "Avg. response time" },
      { value: "50+", label: "Languages handled" },
      { value: "40%", label: "More consultations booked" },
    ],
    href: "/industries/healthcare",
  },
  {
    emoji: "🏠",
    label: "Core Specialisation",
    labelStyle: "text-secondary bg-secondary/10 border-secondary/20",
    accentBorder: "border-t-secondary",
    title: "Real Estate Agencies",
    subtitle: "Agencies and independent agents who can't afford to miss a single lead",
    description: "Property leads go cold in minutes. We build AI systems that contact every new enquiry in under 60 seconds, qualify them on budget and timeline, schedule viewings automatically, and run follow-up sequences for months — so agents spend their time on viewings, not inboxes.",
    stats: [
      { value: "60s", label: "Lead response time" },
      { value: "3×", label: "More viewings booked" },
      { value: "100%", label: "Follow-up rate" },
    ],
    href: "/industries/real-estate",
  },
  {
    emoji: "🏢",
    label: "Core Specialisation",
    labelStyle: "text-accent bg-accent/10 border-accent/20",
    accentBorder: "border-t-accent",
    title: "Small & Growing Businesses",
    subtitle: "Service businesses that want to operate like a large company without hiring like one",
    description: "Small teams can't respond to every lead instantly, follow up consistently, or generate weekly reports manually. We replace those gaps with AI — instant lead response, automated follow-up sequences, database reactivation, and Monday morning performance reports delivered to your inbox.",
    stats: [
      { value: "15h+", label: "Saved per week" },
      { value: "2×", label: "Lead conversion rate" },
      { value: "24/7", label: "Always-on automation" },
    ],
    href: "/industries/small-business",
  },
];

const secondary = [
  { emoji: "🛒", title: "eCommerce & Shopify", description: "Cart recovery, AI support, order automation, and weekly performance reports.", href: "/industries/ecommerce" },
  { emoji: "⚖️", title: "Finance & Legal", description: "Document processing, client onboarding, lead qualification, and compliance Q&A.", href: "/industries/finance-legal" },
];

export default function WhoWeHelpSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">Industries We Transform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Three Industries. One Mission.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We go deep — not wide. Our AI transformation systems are purpose-built for the specific workflows, challenges, and growth levers of each vertical.
          </p>
        </div>

        {/* 3 Featured cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {featured.map((card) => (
            <Link key={card.title} href={card.href}>
              <div className={`group bg-slate-900 rounded-xl overflow-hidden flex flex-col h-full border border-white/6 border-t-2 ${card.accentBorder} hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer`}>
                <div className="p-6 flex flex-col flex-1">
                  {/* Label + emoji */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${card.labelStyle}`}>
                      {card.label}
                    </span>
                    <span className="text-3xl">{card.emoji}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-white/45 mb-4 leading-relaxed">{card.subtitle}</p>

                  <div className="h-px bg-white/6 mb-4" />

                  <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">{card.description}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {card.stats.map((stat) => (
                      <div key={stat.label} className="bg-white/4 border border-white/8 rounded-lg p-2.5 text-center">
                        <div className="text-base font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] text-white/40 leading-tight mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    See how we help <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 2 Secondary cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {secondary.map((card) => (
            <Link key={card.title} href={card.href}>
              <div className="group bg-slate-900/60 rounded-xl p-5 hover:bg-slate-900 border border-white/6 hover:border-white/12 transition-all cursor-pointer flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{card.emoji}</span>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{card.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white/50 flex-shrink-0 mt-0.5 ml-auto transition-colors" />
              </div>
            </Link>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
}
