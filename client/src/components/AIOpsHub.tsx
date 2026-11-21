import { useEffect, useState } from "react";
import { isPrerendering } from "@/lib/prerender";
import { useTranslation } from "react-i18next";
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
  /** What arrives: the raw message, document or trigger. */
  incoming: string;
  /** What the AI did with it. */
  task: string;
  result: string;
}

// Illustrative examples of work our AI systems handle — not live customer data.
const areas: Area[] = [
  { label: "Sales", icon: MessageSquare, incoming: "WhatsApp · „Hallo, ist morgen ein Termin frei?“", task: "Enquiry answered in German", result: "Qualified · call booked" },
  { label: "Documents", icon: FileText, incoming: "Email · supplier invoice PDF received", task: "Invoice read and logged", result: "Synced to accounting" },
  { label: "Reporting", icon: BarChart3, incoming: "Monday 07:55 · weekly data pulled", task: "KPI report compiled", result: "Sent to managers · 08:00" },
  { label: "Support", icon: Headphones, incoming: "Web chat · “Where is my order?”", task: "Order-status question resolved", result: "No human needed" },
  { label: "Team ops", icon: Users, incoming: "HR · new hire starts Monday", task: "Onboarding started", result: "12 tasks assigned" },
  { label: "Content", icon: PenTool, incoming: "Calendar · article due this week", task: "SEO article drafted and published", result: "Live on the blog" },
];

// Each step plays a short story: something arrives at a department, travels to the
// AI core, and comes back as a finished task in the feed.
const STEP_MS = 3400;
const THINK_MS = 1500;
const RADIUS = 37; // % of the square hub, from centre to each area

function position(i: number) {
  const angle = ((-90 + i * (360 / areas.length)) * Math.PI) / 180;
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) };
}

export default function AIOpsHub() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion && !isPrerendering;
  const [step, setStep] = useState(0);
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    if (!animate) return;
    let settle = 0;
    const id = window.setInterval(() => {
      setStep((s) => s + 1);
      setThinking(true);
      settle = window.setTimeout(() => setThinking(false), THINK_MS);
    }, STEP_MS);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(settle);
    };
  }, [animate]);

  const active = step % areas.length;
  const localAreas = areas.map((a, i) => ({
    ...a,
    label: t(`homePage.opsHub.areas.${i}.label`, a.label),
    incoming: t(`homePage.opsHub.areas.${i}.incoming`, a.incoming),
    task: t(`homePage.opsHub.areas.${i}.task`, a.task),
    result: t(`homePage.opsHub.areas.${i}.result`, a.result),
  }));
  const feed = [0, 1, 2].map((back) => localAreas[(step - back + areas.length * 3) % areas.length]);
  const target = position(active);

  return (
    <div className="relative" role="img" aria-label={t("homePage.opsHub.ariaLabel", "Illustration: one AI core connected to sales, documents, reporting, support, team operations and content, with an example feed of automated tasks")}>
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-secondary/20 via-accent/10 to-transparent blur-2xl" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/40">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold text-slate-900 dark:text-white">{t("homePage.opsHub.title", "Your business, on autopilot")}</div>
            <div className="text-xs text-slate-600 dark:text-white/50">{t("homePage.opsHub.subtitle", "One AI layer across every department")}</div>
          </div>
          <span className="flex-shrink-0 rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:text-white/50">
            {t("homePage.opsHub.badge", "Illustration")}
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
            {animate && (
              // Request travels in from the department, then the answer travels back out.
              <motion.circle
                key={step}
                r="1.2"
                className="fill-secondary"
                initial={{ cx: target.x, cy: target.y, opacity: 0 }}
                animate={{
                  cx: [target.x, 50, 50, target.x],
                  cy: [target.y, 50, 50, target.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 2.2, times: [0, 0.35, 0.65, 1], ease: "easeInOut" }}
              />
            )}
          </svg>

          {/* AI core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {animate && (
              <span
                className="absolute inset-0 rounded-2xl bg-secondary/30 animate-ping"
                style={{ animationDuration: thinking ? "1s" : "2.6s" }}
              />
            )}
            <motion.div
              className="relative flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-secondary/30 sm:h-20 sm:w-20"
              animate={animate ? { scale: thinking ? 1.08 : 1 } : undefined}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Cpu className={`h-6 w-6 sm:h-7 sm:w-7 ${animate && thinking ? "animate-spin" : ""}`} style={{ animationDuration: "3s" }} />
              <span className="mt-0.5 text-[11px] font-semibold tracking-wide">{animate && thinking ? t("homePage.opsHub.working", "Working") : t("homePage.opsHub.core", "AI core")}</span>
            </motion.div>
          </div>

          {/* Departments */}
          {localAreas.map((area, i) => {
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
                {/* Unread badge while the request is being handled */}
                {animate && isActive && thinking && (
                  <motion.span
                    className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-white shadow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    1
                  </motion.span>
                )}
              </div>
            );
          })}
        </div>

        {/* Activity feed */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mb-2 flex items-center gap-2 px-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-600 dark:text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {t("homePage.opsHub.feedTitle", "Example tasks")}
          </div>
          <ul className="space-y-1.5" aria-live="off">
            <AnimatePresence initial={false} mode="popLayout">
              {feed.map((item, i) => {
                const incoming = animate && i === 0 && thinking;
                return (
                  <motion.li
                    key={`${step - i}`}
                    layout={animate}
                    initial={animate ? { opacity: 0, y: -10 } : false}
                    animate={{ opacity: i === 0 ? 1 : 0.6 - i * 0.15, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors duration-500 ${
                      incoming ? "bg-amber-50 dark:bg-amber-500/10" : "bg-white dark:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                        incoming ? "bg-amber-100 dark:bg-amber-500/20" : "bg-emerald-100 dark:bg-emerald-500/15"
                      }`}
                    >
                      {incoming ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                      ) : (
                        <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-xs text-slate-700 dark:text-white/80">
                      {incoming ? item.incoming : item.task}
                    </span>
                    <span className="hidden flex-shrink-0 text-[11px] text-slate-600 sm:inline dark:text-white/40">
                      {incoming ? t("homePage.opsHub.workingDots", "Working…") : item.result}
                    </span>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  );
}
