import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useBookingModal } from "@/hooks/use-booking-modal";

const packages = [
  {
    name: "Starter",
    label: "Great for getting started",
    bestFor: "Small businesses and solo operators",
    popular: false,
    items: ["1 AI product set up and managed", "Monthly performance report (ClearDesk)", "Email support", "1 integration with your existing tools", "Onboarding and training session"],
  },
  {
    name: "Growth",
    label: "Best for growing businesses",
    bestFor: "SMEs ready to automate multiple workflows",
    popular: true,
    items: ["Up to 3 AI products set up and managed", "Bi-weekly performance review and optimisation", "Priority support (response within 4 hours)", "Full ClearDesk reporting dashboard", "Unlimited integrations", "Dedicated account manager"],
  },
  {
    name: "Scale",
    label: "For ambitious businesses",
    bestFor: "Companies ready to run on AI",
    popular: false,
    items: ["All AI products set up and managed", "Weekly optimisation and new automations each month", "Dedicated AI advisor and strategy sessions", "Custom integrations and API connections", "Full analytics and reporting suite", "First priority support (response within 1 hour)"],
  },
];

export default function PricingPackagesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Simple Packages. Custom Pricing.</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-4">
            Every business is different — so we price based on what you actually need. Here's what each package includes. Reach out and we'll give you an exact quote.
          </p>
          <p className="text-sm text-white/35 bg-white/4 border border-white/8 rounded-lg px-4 py-2.5 inline-block">
            Pricing varies by business size, tools, and complexity. Book a free audit and we'll tell you exactly what it will cost.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`bg-slate-900 rounded-xl overflow-hidden flex flex-col ${pkg.popular ? "ring-1 ring-secondary/40" : ""}`}>
              <div className={`px-4 py-2.5 flex items-center justify-between border-b border-white/8 ${pkg.popular ? "bg-secondary/10" : "bg-white/4"}`}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                {pkg.popular && <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px]" variant="outline">Most Popular</Badge>}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-sm text-secondary/80 mb-1">{pkg.label}</p>
                <p className="text-xs text-white/40 mb-5">Best for: {pkg.bestFor}</p>
                <div className="space-y-2 flex-1 mb-6">
                  {pkg.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full ${pkg.popular ? "" : "border-white/20 text-white hover:bg-white/10 hover:text-white"}`}
                  variant={pkg.popular ? "default" : "outline"} onClick={() => openModal()}>
                  Get a Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-white/35 mt-8 max-w-xl mx-auto">
          All products are also available as one-time standalone setups.{" "}
          Not sure where to start?{" "}
          <button onClick={() => openModal()} className="text-secondary hover:underline">Book a free 30-minute AI Audit</button>
          {" "}— we'll map your biggest opportunities.
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
}
