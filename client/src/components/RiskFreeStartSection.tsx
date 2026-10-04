import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";

const promises = [
  { title: "Free AI audit in 3 days", desc: "We review your processes and identify your top 5 automation opportunities, free of charge." },
  { title: "ROI estimate before you spend", desc: "Every opportunity comes with an expected return, so you decide with numbers, not promises." },
  { title: "No credit card, no commitment", desc: "Starting costs nothing. You only move forward if the roadmap makes sense for your business." },
  { title: "You own what we build", desc: "The systems we build for you are yours, set up inside the tools your team already uses." },
  { title: "Your team is trained to use it", desc: "Every launch includes go-live support and handover training, so nothing depends on guesswork." },
];

export default function RiskFreeStartSection() {
  const { openModal } = useBookingModal();

  return (
    <section className="bg-white py-16 md:py-24 dark:bg-[#020817]">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white px-6 py-12 md:px-12 md:py-16 dark:border-emerald-500/20 dark:from-emerald-500/10 dark:to-transparent">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:border-emerald-500/30 dark:bg-transparent dark:text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" /> Risk-free start
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              See the plan before you spend a cent.
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/60">
              Every engagement starts with a free AI audit. You get a clear roadmap with expected ROI, then you decide. The only thing left for you: picking where to start.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p) => (
              <div key={p.title} className="rounded-2xl border border-emerald-100 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <Check className="mb-3 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mb-1.5 font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-white/55">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              data-testid="button-risk-free-audit"
              size="lg"
              className="rounded-full bg-emerald-700 px-8 text-white hover:bg-emerald-800"
              onClick={() => openModal()}
            >
              Claim my free AI audit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
