import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { SYSTEMS, TIERS, type TierDef } from "@/data/systemsData";

// The same four step badges on every card, so the ladder (Starter → Growth → Scale) reads at a glance.
function SystemLadder({ tier }: { tier: TierDef }) {
  const includedNames = SYSTEMS.filter((s) => tier.systems.includes(s.id)).map((s) => s.name);
  return (
    <ol
      className="flex items-center gap-2 mb-5"
      aria-label={`Systems included in ${tier.name}: ${includedNames.join(", ")}`}
    >
      {SYSTEMS.map((system) => {
        const included = tier.systems.includes(system.id);
        return (
          <li key={system.id} className="flex items-center" title={`${system.name}${included ? "" : " (not included)"}`}>
            <span
              aria-hidden="true"
              className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold border transition-colors ${
                included
                  ? "bg-secondary/20 border-secondary/40 text-secondary"
                  : "bg-white/5 border-white/10 text-white/25"
              }`}
            >
              {system.step}
            </span>
            <span className="sr-only">{included ? `${system.name} included` : `${system.name} not included`}</span>
          </li>
        );
      })}
    </ol>
  );
}

export default function PricingPackagesSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const { openModal } = useBookingModal();
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">Packages</span>
          </div>
          <Heading className="text-3xl md:text-4xl font-bold mb-4 text-white">Three packages. One ladder.</Heading>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-4">
            Every package is quoted after a free AI audit, so you only pay for the systems you'll actually use.
          </p>
          <p className="text-sm text-white/35 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 inline-block">
            Each step adds a system: 1 Capture · 2 Follow-up · 3 Operations · 4 Reporting.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {TIERS.map((tier) => (
            <div key={tier.name} data-testid={`card-tier-${tier.name.toLowerCase()}`} className={`bg-slate-900 rounded-xl overflow-hidden flex flex-col ${tier.popular ? "ring-1 ring-secondary/40" : ""}`}>
              <div className={`px-4 py-2.5 flex items-center justify-between border-b border-white/10 ${tier.popular ? "bg-secondary/10" : "bg-white/5"}`}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                {tier.popular && <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px]" variant="outline">Most popular</Badge>}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-sm text-secondary/80 mb-1">{tier.tagline}</p>
                <p className="text-xs text-white/40 mb-5">Best for: {tier.bestFor}</p>
                <SystemLadder tier={tier} />
                <div className="space-y-2 flex-1 mb-6">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full ${tier.popular ? "" : "border-white/20 text-white hover:bg-white/10 hover:text-white"}`}
                  variant={tier.popular ? "default" : "outline"} onClick={() => openModal()}
                  data-testid={`button-quote-${tier.name.toLowerCase()}`}>
                  Request a quote
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-white/35 mt-8 max-w-xl mx-auto">
          Meta Ads, Google Ads and SEO are available as add-ons to any package.{" "}
          Not sure where to start?{" "}
          <button onClick={() => openModal()} className="text-secondary hover:underline">Book a free 30-minute AI audit</button>
          {" "}— we'll tell you which step to begin on.
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
}
