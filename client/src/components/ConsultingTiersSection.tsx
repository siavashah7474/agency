import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { Link } from "wouter";

const tiers = [
  {
    emoji: "🔍",
    title: "AI Audit & Strategy",
    subtitle: "Understand where AI saves you money",
    description: "We analyse your business processes, map your biggest time and cost problems, and deliver a clear AI roadmap — with exact recommendations and expected outcomes. No commitment needed to start.",
    items: ["Full business process review", "Top 5 automation opportunities identified", "ROI estimate per opportunity", "Clear implementation roadmap"],
    cta: "Book Free Audit",
    ctaType: "modal" as const,
  },
  {
    emoji: "🛠️",
    title: "Build & Deploy",
    subtitle: "We build your AI systems",
    description: "We implement the exact products your business needs — whether that's responding to leads faster, processing documents, or reactivating your old database. You own the system. We build it right.",
    items: ["Custom setup of chosen AI products", "Full integration with your existing tools", "Testing and go-live support", "Handover training for your team"],
    cta: "See Our Products",
    ctaType: "link" as const,
    ctaHref: "#ai-stack",
  },
  {
    emoji: "📈",
    title: "Manage & Scale",
    subtitle: "We run and grow it monthly",
    description: "On a monthly retainer, we monitor your AI systems, optimise performance, and keep rolling out new automations as your business grows. You focus on running the business — we handle the AI.",
    items: ["Monthly performance monitoring", "Continuous optimisation", "Priority support", "New automation rollouts each month"],
    cta: "See Packages",
    ctaType: "link" as const,
    ctaHref: "#pricing",
  },
];

export default function ConsultingTiersSection() {
  const { openModal } = useBookingModal();
  return (
    <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
      <div className="absolute inset-0 neural-grid pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How We Work With You</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">We consult first, build second. Then we manage it so you don't have to.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.title} className="bg-slate-900 rounded-xl overflow-hidden flex flex-col">
              <div className="px-4 py-2.5 flex items-center justify-between border-b border-white/8 bg-white/4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-green-400 tracking-widest uppercase">Active</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-3xl mb-3">{tier.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-1">{tier.title}</h3>
                <p className="text-sm text-white/50 mb-4">{tier.subtitle}</p>
                <p className="text-sm text-white/60 leading-relaxed mb-6">{tier.description}</p>
                <div className="space-y-2 flex-1 mb-6">
                  {tier.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                {tier.ctaType === "modal" ? (
                  <Button className="w-full" onClick={() => openModal()}>{tier.cta}</Button>
                ) : (
                  <Link href={tier.ctaHref!}>
                    <Button className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white" variant="outline">{tier.cta}</Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
