import { Button } from "@/components/ui/button";
import { Check, ArrowRight, CalendarCheck } from "lucide-react";
import { useBookingModal } from "@/hooks/use-booking-modal";
import SectionEyebrow from "@/components/SectionEyebrow";

const tiers = [
  {
    step: 1,
    stepLabel: "Start here",
    accentColor: "text-blue-600 dark:text-blue-400",
    accentBorder: "border-t-blue-500",
    stepBorder: "border-blue-500",
    accentGlow: "bg-blue-500/10",
    badge: "FREE",
    badgeStyle: "bg-green-500/15 border border-green-500/35 text-green-700 dark:text-green-400",
    timeframe: "Delivered in 3 days",
    title: "AI Audit & Strategy",
    subtitle: "We find exactly where AI saves you time and money",
    description:
      "We analyse your business processes, map your biggest time and cost problems, and deliver a clear AI roadmap — with exact recommendations and expected ROI. No commitment needed to start.",
    items: [
      "Full business process review",
      "Top 5 automation opportunities identified",
      "ROI estimate per opportunity",
      "Clear implementation roadmap",
    ],
    cta: "Claim My Free AI Audit",
    ctaNote: "No credit card · Results in 3 days",
  },
  {
    step: 2,
    stepLabel: "Then",
    accentColor: "text-indigo-600 dark:text-indigo-400",
    accentBorder: "border-t-indigo-500",
    stepBorder: "border-indigo-500",
    accentGlow: "bg-indigo-500/10",
    badge: "2–4 WEEKS",
    badgeStyle: "bg-indigo-500/15 border border-indigo-500/35 text-indigo-700 dark:text-indigo-300",
    timeframe: "Live in 2–4 weeks",
    title: "Build & Deploy",
    subtitle: "We build and launch your AI systems",
    description:
      "We implement the exact products your business needs — responding to leads instantly, processing documents, or reactivating your database. You own the system. We build it right.",
    items: [
      "Custom setup of chosen AI products",
      "Full integration with your existing tools",
      "Testing and go-live support",
      "Handover training for your team",
    ],
    cta: "Book My Free Build Session",
    ctaNote: "Free 30-min call · We scope it together",
  },
  {
    step: 3,
    stepLabel: "Finally",
    accentColor: "text-cyan-700 dark:text-accent",
    accentBorder: "border-t-accent",
    stepBorder: "border-accent",
    accentGlow: "bg-accent/10",
    badge: "MONTHLY",
    badgeStyle: "bg-accent/15 border border-accent/35 text-cyan-800 dark:text-accent",
    timeframe: "Ongoing retainer",
    title: "Manage & Scale",
    subtitle: "We run it and keep growing it for you",
    description:
      "On a monthly retainer, we monitor performance, optimise your AI systems, and roll out new automations as your business grows. You focus on the business — we handle the AI.",
    items: [
      "Monthly performance monitoring",
      "Continuous optimisation",
      "Priority support",
      "New automation rollouts each month",
    ],
    cta: "Book My Free Growth Call",
    ctaNote: "Free strategy call · No commitment",
  },
];

export default function ConsultingTiersSection() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#020817] relative overflow-hidden">
      <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <SectionEyebrow>How we work</SectionEyebrow>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Three steps from idea to results
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/50 max-w-2xl mx-auto">
            We consult first, build second. Then we manage it so you never have to think about it again.
          </p>
        </div>

        {/* Step flow line — desktop only */}
        <div className="hidden md:flex items-center justify-center mb-8 max-w-3xl mx-auto px-16">
          {tiers.map((tier, i) => (
            <div key={tier.step} className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-9 h-9 rounded-full border-2 font-bold text-sm flex-shrink-0 ${tier.stepBorder} ${tier.accentGlow} ${tier.accentColor}`}>
                {tier.step}
              </div>
              {i < tiers.length - 1 && (
                <div className="flex-1 flex items-center mx-2">
                  <div className="flex-1 h-px bg-slate-100 dark:bg-white/15" />
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 dark:text-white/25 flex-shrink-0 mx-1" />
                  <div className="flex-1 h-px bg-slate-100 dark:bg-white/15" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex flex-col border border-slate-200 dark:border-white/[0.06] border-t-2 ${tier.accentBorder} transition-all duration-300 hover:border-slate-300 dark:hover:border-white/15 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5`}
            >
              {/* Card header */}
              <div className="px-5 pt-5 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${tier.accentColor}`}>
                      {tier.stepLabel}
                    </span>
                    <span className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${tier.badgeStyle}`}>
                      {tier.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/[0.08] rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="text-[9px] font-mono font-bold text-slate-500 dark:text-white/40 tracking-widest uppercase">{tier.timeframe}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{tier.title}</h3>
                <p className="text-sm text-slate-600 dark:text-white/50 mb-3 leading-snug">{tier.subtitle}</p>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-slate-100 dark:bg-white/[0.06] mb-4" />

              {/* Body */}
              <div className="px-5 pb-5 flex flex-col flex-1">
                <p className="text-sm text-slate-600 dark:text-white/55 leading-relaxed mb-5">{tier.description}</p>

                <div className="space-y-2.5 flex-1 mb-6">
                  {tier.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${tier.accentGlow}`}>
                        <Check className={`h-2.5 w-2.5 ${tier.accentColor}`} />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-white/70 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <Button className="w-full gap-2 rounded-full" onClick={() => openModal()}>
                    <CalendarCheck className="h-4 w-4 flex-shrink-0" />
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 flex-shrink-0 ml-auto" />
                  </Button>
                  <p className="text-center text-[10px] text-slate-500 dark:text-white/30 tracking-wide">{tier.ctaNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-sm text-slate-500 dark:text-white/30 mt-8">
          Most clients start with a free audit — no credit card, no commitment, results in 3 days.
        </p>

      </div>
    </section>
  );
}
