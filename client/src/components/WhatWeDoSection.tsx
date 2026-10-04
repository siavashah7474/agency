import { Link } from "wouter";
import { ArrowRight, BarChart3, Bot, Workflow, type LucideIcon } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "@/components/SectionEyebrow";
import { useBookingModal } from "@/hooks/use-booking-modal";

interface Service {
  icon: LucideIcon | IconType;
  iconStyle: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  href: string;
  linkLabel: string;
  startsHere?: boolean;
}

const services: Service[] = [
  {
    icon: Workflow,
    iconStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    title: "We digitalise your workflow",
    problem: "Work runs on manual steps, spreadsheets and copy-paste.",
    solution: "We map how your team works today, find the repetitive steps, and redesign them with AI.",
    result: "Your top 5 automation opportunities in 3 days",
    href: "/solutions",
    linkLabel: "See our approach",
    startsHere: true,
  },
  {
    icon: Bot,
    iconStyle: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    title: "AI agents for your daily tasks",
    problem: "Your team loses hours to invoices, data entry and admin.",
    solution: "AI agents process documents, update your systems and send reminders and follow-ups in the background.",
    result: "15h+ saved per team, every week",
    href: "/services/ai-ops-autopilot",
    linkLabel: "See AI task automation",
  },
  {
    icon: SiWhatsapp,
    iconStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    title: "A WhatsApp AI agent for your leads",
    problem: "Enquiries wait hours for a reply and go cold.",
    solution: "Your AI agent answers every lead 24/7 in their language, qualifies them and books the appointment.",
    result: "Replies in under 2 seconds, in 50+ languages",
    href: "/products/whatsapp-ai",
    linkLabel: "See the WhatsApp AI agent",
  },
  {
    icon: BarChart3,
    iconStyle: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    title: "Reports and insights on autopilot",
    problem: "You only see your numbers when someone builds a spreadsheet.",
    solution: "AI pulls data from your tools and writes a plain-English report on sales, leads and team performance.",
    result: "Your report arrives every Monday morning",
    href: "/products/cleardesk",
    linkLabel: "See automated reporting",
  },
];

const steps = [
  { label: "Free AI audit", time: "3 days" },
  { label: "We build it", time: "2–4 weeks" },
  { label: "We run and improve it", time: "Monthly" },
];

export default function WhatWeDoSection() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24 dark:bg-[#020817]">
      <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionEyebrow className="mb-4">What we do</SectionEyebrow>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            What we do for your business
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/50">
            We start with how your business works, then put AI where it saves the most time and money.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-900 dark:hover:shadow-black/30 ${
                s.startsHere
                  ? "border-blue-300 ring-1 ring-blue-200 dark:border-blue-500/40 dark:ring-blue-500/20"
                  : "border-slate-200 dark:border-white/10"
              }`}
            >
              {s.startsHere && (
                <span className="absolute -top-3 left-6 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white dark:bg-white dark:text-slate-900">
                  Starts here
                </span>
              )}
              <div className="mb-5 flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.iconStyle}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-sm font-semibold text-slate-300 dark:text-white/20">0{i + 1}</span>
              </div>

              <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 dark:text-white">{s.title}</h3>

              <dl className="mb-5 flex-1 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-white/35">The problem</dt>
                  <dd className="text-slate-600 dark:text-white/55">{s.problem}</dd>
                </div>
                <div>
                  <dt className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-white/35">What we build</dt>
                  <dd className="text-slate-700 dark:text-white/75">{s.solution}</dd>
                </div>
              </dl>

              <div className="mb-5 rounded-xl bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300">
                {s.result}
              </div>

              <Link
                href={s.href}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 dark:text-white"
              >
                {s.linkLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* How it starts */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8 dark:border-white/10 dark:bg-slate-900/60">
          <div className="mb-6 text-center text-sm font-semibold text-slate-900 dark:text-white">How it works</div>
          <ol className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
            {steps.map((step, i) => (
              <li key={step.label} className="flex items-center md:flex-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{step.label}</div>
                    <div className="text-xs text-slate-500 dark:text-white/45">{step.time}</div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="mx-4 hidden h-px flex-1 bg-slate-200 md:block dark:bg-white/10" />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-8 text-center">
            <Button
              data-testid="button-what-we-do-audit"
              size="lg"
              className="rounded-full bg-slate-900 px-8 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
              onClick={() => openModal()}
            >
              Start with a free AI audit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-3 text-xs text-slate-500 dark:text-white/40">No credit card · No commitment · Results in 3 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
