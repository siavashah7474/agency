import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { Check, Sparkles } from "lucide-react";

interface Lead {
  initial: string;
  name: string;
  flag: string;
  need: string;
  city: string;
  language: string;
  status: string;
  replyTime: string;
}

// Illustrative examples of what the AI agent handles — not live customer data.
const leads: Lead[] = [
  { initial: "L", name: "Lukas M.", flag: "🇩🇪", need: "Hair transplant (FUE)", city: "Berlin", language: "German", status: "Photos evaluated", replyTime: "0.8s" },
  { initial: "S", name: "Sarah K.", flag: "🇬🇧", need: "Dental veneers", city: "London", language: "English", status: "Consultation booked", replyTime: "1.1s" },
  { initial: "A", name: "Ahmed R.", flag: "🇦🇪", need: "Rhinoplasty", city: "Dubai", language: "Arabic", status: "Qualified · budget confirmed", replyTime: "0.9s" },
  { initial: "E", name: "Eva de J.", flag: "🇳🇱", need: "Apartment viewing", city: "Amsterdam", language: "Dutch", status: "Viewing scheduled", replyTime: "52s" },
  { initial: "F", name: "Faisal A.", flag: "🇸🇦", need: "IVF consultation", city: "Riyadh", language: "Arabic", status: "Follow-up day 3 sent", replyTime: "0.7s" },
  { initial: "M", name: "Mia T.", flag: "🇺🇸", need: "Abandoned cart", city: "Austin", language: "English", status: "Order recovered", replyTime: "4s" },
];

const VISIBLE = 3;
const INTERVAL_MS = 3200;

export default function LiveLeadsCard() {
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setOffset((o) => (o + 1) % leads.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const visible = Array.from({ length: VISIBLE }, (_, i) => leads[(offset + leads.length - i) % leads.length]);
  const newest = visible[0];

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-br from-secondary/20 via-accent/10 to-transparent rounded-[2rem] blur-2xl pointer-events-none" />

      {/* New-lead toast */}
      <AnimatePresence mode="wait">
        <motion.div
          key={newest.name}
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-lg dark:border-white/10 dark:bg-slate-900 dark:text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          New lead · {newest.need} <span aria-hidden>{newest.flag}</span>
        </motion.div>
      </AnimatePresence>

      <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/40">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold text-slate-900 dark:text-white">Incoming leads</div>
            <div className="text-xs text-slate-500 dark:text-white/50">AI agent online · replying 24/7</div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:text-white/50">
            <Sparkles className="h-3 w-3 text-secondary" /> Live demo
          </span>
        </div>

        <ul className="space-y-3">
          <AnimatePresence initial={false}>
            {visible.map((lead, i) => (
              <motion.li
                key={lead.name}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-xl border p-3.5 ${
                  i === 0
                    ? "border-secondary/50 bg-secondary/5 ring-1 ring-secondary/20"
                    : "border-slate-200 dark:border-white/10"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 dark:bg-white/10 dark:text-white/70">
                    {lead.initial}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{lead.name}</span>
                      <span aria-hidden>{lead.flag}</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-1.5 py-0.5 text-[10px] font-medium text-white">
                        <SiWhatsapp className="h-2.5 w-2.5" /> WhatsApp
                      </span>
                    </div>
                    <div className="truncate text-xs text-slate-500 dark:text-white/50">
                      {lead.need} · {lead.city} · {lead.language}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <Check className="h-3 w-3" /> {lead.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{lead.replyTime}</div>
                    <div className="text-[10px] text-slate-500 dark:text-white/40">AI reply</div>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
