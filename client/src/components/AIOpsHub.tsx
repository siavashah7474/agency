import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Check,
  Cpu,
  FileText,
  Headphones,
  MessageSquare,
  PenTool,
  Users,
  type LucideIcon,
} from "lucide-react";

interface Area {
  label: string;
  icon: LucideIcon;
  task: string;
  result: string;
}

// Illustrative examples of work our AI systems handle — not live customer data.
const areas: Area[] = [
  { label: "Sales", icon: MessageSquare, task: "New enquiry answered in German", result: "Qualified · call booked" },
  { label: "Documents", icon: FileText, task: "Supplier invoice read and logged", result: "Synced to accounting" },
  { label: "Reporting", icon: BarChart3, task: "Weekly KPI report compiled", result: "Sent to managers · Mon 08:00" },
  { label: "Support", icon: Headphones, task: "Order-status question resolved", result: "No human needed" },
  { label: "Team ops", icon: Users, task: "New-hire onboarding started", result: "12 tasks assigned" },
  { label: "Content", icon: PenTool, task: "SEO article drafted and published", result: "Live on the blog" },
];

const INTERVAL_MS = 2600;
const RADIUS = 37; // % of the square hub, from centre to each area

function position(i: number) {
  const angle = ((-90 + i * (360 / areas.length)) * Math.PI) / 180;
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) };
}

export default function AIOpsHub() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setStep((s) => s + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const active = step % areas.length;
  const feed = [0, 1, 2].map((back) => areas[(step - back + areas.length * 3) % areas.length]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-secondary/20 via-accent/10 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/40">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold text-slate-900 dark:text-white">Your business, on autopilot</div>
            <div className="text-xs text-slate-500 dark:text-white/50">One AI layer across every department</div>
          </div>
          <span className="flex-shrink-0 rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:text-white/50">
            Live demo
          </span>
        </div>

        {/* Hub */}
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <radialGradient id="hub-glow">
                <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="30" fill="url(#hub-glow)" />
            <circle cx="50" cy="50" r={RADIUS} fill="none" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="0.3" strokeDasharray="1 1.5" />
            {areas.map((_, i) => {
              const { x, y } = position(i);
              const isActive = i === active;
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  strokeWidth={isActive ? 0.6 : 0.3}
                  className={isActive ? "stroke-secondary" : "stroke-slate-200 dark:stroke-white/10"}
                  style={{ transition: "stroke 0.4s, stroke-width 0.4s" }}
                />
              );
            })}
            {!reduceMotion && (
              <motion.circle
                key={step}
                r="1.2"
                className="fill-secondary"
                initial={{ cx: 50, cy: 50, opacity: 1 }}
                animate={{ cx: position(active).x, cy: position(active).y, opacity: [1, 1, 0] }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            )}
          </svg>

          {/* AI core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {!reduceMotion && (
              <span className="absolute inset-0 rounded-2xl bg-secondary/30 animate-ping" style={{ animationDuration: "2.6s" }} />
            )}
            <div className="relative flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-secondary/30 sm:h-20 sm:w-20">
              <Cpu className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="mt-0.5 text-[10px] font-semibold tracking-wide">AI core</span>
            </div>
          </div>

          {/* Departments */}
          {areas.map((area, i) => {
            const { x, y } = position(i);
            const isActive = i === active;
            const Icon = area.icon;
            return (
              <div
                key={area.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div
                  className={`flex flex-col items-center gap-1 rounded-xl border px-2.5 py-2 transition-all duration-500 ${
                    isActive
                      ? "scale-110 border-secondary/60 bg-white shadow-lg shadow-secondary/20 dark:bg-slate-800"
                      : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900"
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-colors ${isActive ? "text-secondary" : "text-slate-400 dark:text-white/40"}`} />
                  <span className={`whitespace-nowrap text-[11px] font-medium ${isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-white/50"}`}>
                    {area.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Activity feed */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mb-2 flex items-center gap-2 px-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Just automated
          </div>
          <ul className="space-y-1.5">
            <AnimatePresence initial={false} mode="popLayout">
              {feed.map((item, i) => (
                <motion.li
                  key={`${step - i}`}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: -10 }}
                  animate={{ opacity: i === 0 ? 1 : 0.6 - i * 0.15, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2.5 rounded-lg bg-white px-2.5 py-2 dark:bg-white/[0.04]"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/15">
                    <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-xs text-slate-700 dark:text-white/80">{item.task}</span>
                  <span className="hidden flex-shrink-0 text-[11px] text-slate-500 sm:inline dark:text-white/40">{item.result}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  );
}
