import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionEyebrow";

const cardFocus = "block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const featured = [
  {
    emoji: "🏥",
    label: "Core Specialisation",
    labelStyle: "text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
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
    labelStyle: "text-blue-700 dark:text-secondary bg-secondary/10 border-secondary/20",
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
    labelStyle: "text-cyan-700 dark:text-accent bg-accent/10 border-accent/20",
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
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <SectionHeader
          eyebrow="Industries we transform"
          title="Three Industries. One Mission."
          lead="We go deep — not wide. Our AI transformation systems are purpose-built for the specific workflows, challenges, and growth levers of each vertical."
          className="mb-12"
        />

        {/* 3 Featured cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {featured.map((card) => (
            <Link key={card.title} href={card.href} className={`group ${cardFocus}`} aria-label={`${card.title}: see how we help`}>
              <div className={`surface-card-interactive flex h-full flex-col overflow-hidden border-t-2 dark:bg-slate-900 dark:border-white/[0.06] ${card.accentBorder}`}>
                <div className="p-6 flex flex-col flex-1">
                  {/* Label + emoji */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${card.labelStyle}`}>
                      {card.label}
                    </span>
                    <span className="text-3xl" aria-hidden="true">{card.emoji}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/55 mb-4 leading-relaxed">{card.subtitle}</p>

                  <div className="h-px bg-slate-100 dark:bg-white/[0.06] mb-4" />

                  <p className="text-sm text-slate-700 dark:text-white/60 leading-relaxed mb-6 flex-1">{card.description}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {card.stats.map((stat) => (
                      <div key={stat.label} className="bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] rounded-lg p-2.5 text-center">
                        <div className="text-base font-bold text-slate-900 dark:text-white">{stat.value}</div>
                        <div className="text-[11px] text-slate-600 dark:text-white/50 leading-tight mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    See how we help <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 2 Secondary cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {secondary.map((card) => (
            <Link key={card.title} href={card.href} className={`group ${cardFocus}`}>
              <div className="surface-card-interactive flex h-full items-start gap-4 p-5 dark:bg-slate-900/60 dark:border-white/[0.06]">
                <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{card.emoji}</span>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/55 leading-relaxed">{card.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 dark:text-white/20 group-hover:text-primary dark:group-hover:text-white/50 flex-shrink-0 mt-0.5 ml-auto transition-colors" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/who-we-help" className="link-inline inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm text-primary hover:text-primary dark:text-white/60 dark:hover:text-white">
            See all industries we help <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
}
