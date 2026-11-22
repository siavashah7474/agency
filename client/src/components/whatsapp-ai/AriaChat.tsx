import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, Check, Loader2, MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDir } from "@/i18n/useDir";

// Aria: the site's one chat, a guided lead chat (no AI, no API key). Three quick questions,
// then contact details. The lead is emailed to the team through the same /api/contact endpoint
// as the contact form, and the visitor can continue on WhatsApp with their answers prefilled.
// Clinic pages ask the clinic questions ("clinic"); every other page asks about the business
// in general ("general").

const WHATSAPP_NUMBER = "31628753175";

type Variant = "clinic" | "general";

const VOLUME_OPTIONS = ["Under 50", "50–200", "More than 200", "Not sure"];

const SCRIPTS = {
  clinic: {
    // Translation keys stay where they were before the general script existed.
    keys: "aria",
    welcome: "Hi! I'm Aria. Answer three quick questions and our team will show you the WhatsApp AI working on your own clinic's enquiries.",
    questions: [
      { id: "clinic", text: "What kind of clinic do you run?", options: ["Hair transplant", "Dental", "Cosmetic surgery", "IVF / fertility", "Other"] },
      {
        id: "challenge",
        text: "What is your biggest challenge with international patient enquiries?",
        options: ["Slow replies", "Too many unqualified leads", "No follow-up", "Too many languages", "Something else"],
      },
      { id: "volume", text: "Roughly how many international enquiries do you get per month?", options: VOLUME_OPTIONS },
    ],
    // English labels are what the team receives; the visitor sees the translated ones.
    summaryLabels: ["Clinic type", "Biggest challenge", "Enquiries per month"],
    askContact: "Thanks. Where can we reach you? We reply within a few hours with times for a 30-minute demo.",
    company: "Clinic name",
    submit: "Request my demo",
    leadTitle: "Lead from the Aria chat (clinic questions)",
    whatsappIntro: "Hi, I'd like a demo of the WhatsApp AI.",
  },
  general: {
    keys: "aria.general",
    welcome: "Hi! I'm Aria. Answer three quick questions and our team will tell you which system would pay back fastest for your business.",
    questions: [
      { id: "business", text: "What kind of business do you run?", options: ["Clinic or healthcare", "Real estate", "Service business", "Online shop", "Other"] },
      {
        id: "goal",
        text: "What would you most like to fix?",
        options: ["Slow replies to enquiries", "No follow-up on leads", "Too much manual paperwork", "Not enough leads", "Something else"],
      },
      { id: "volume", text: "Roughly how many enquiries do you get per month?", options: VOLUME_OPTIONS },
    ],
    summaryLabels: ["Business type", "Wants to fix", "Enquiries per month"],
    askContact: "Thanks. Where can we reach you? We reply within a few hours with times for a free 30-minute call.",
    company: "Business name",
    submit: "Request my free call",
    leadTitle: "Lead from the Aria chat (general questions)",
    whatsappIntro: "Hi, I'd like a free AI audit for my business.",
  },
} as const;

type Status = "idle" | "sending" | "sent" | "error";

export default function AriaChat({ variant = "general" }: { variant?: Variant }) {
  const { t } = useTranslation();
  const dir = useDir();
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", clinic: "", email: "", phone: "", website: "" });
  const endRef = useRef<HTMLDivElement>(null);

  const script = SCRIPTS[variant];
  const QUESTIONS = script.questions;
  const step = answers.length;
  const done = step >= QUESTIONS.length;

  useEffect(() => {
    const timer = setTimeout(() => setUnread(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Hides the floating WhatsApp button while the chat is open.
  useEffect(() => {
    document.body.classList.toggle("chat-open", open);
    return () => document.body.classList.remove("chat-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setUnread(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [step, status, open]);

  const question = (i: number) => t(`${script.keys}.questions.${i}.text`, QUESTIONS[i].text);
  const option = (i: number, o: number) => t(`${script.keys}.questions.${i}.options.${o}`, QUESTIONS[i].options[o]);

  // The team reads the answers in English, whatever language the visitor used.
  const summary = () => answers.map((o, i) => `${script.summaryLabels[i]}: ${QUESTIONS[i].options[o]}`);

  const whatsappUrl = () => {
    const lines: string[] = [script.whatsappIntro, ...summary()];
    if (form.name.trim()) lines.push(`Name: ${form.name.trim()}`);
    if (form.clinic.trim()) lines.push(`${script.company}: ${form.clinic.trim()}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          website: form.website,
          message: [
            script.leadTitle,
            `Page: ${window.location.pathname}`,
            form.clinic.trim() ? `${script.company}: ${form.clinic.trim()}` : null,
            ...summary(),
            `Page language: ${document.documentElement.lang || "en"}`,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const bubble = "max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed";
  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition-shadow placeholder:text-slate-400 focus:ring-2 focus:ring-primary/30";

  const AssistantLine = ({ children }: { children: string }) => (
    <div className="flex justify-start gap-2">
      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Bot className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
      </div>
      <div className={`${bubble} rounded-es-sm bg-slate-100 text-slate-800`}>{children}</div>
    </div>
  );

  const WhatsAppLink = ({ primary }: { primary?: boolean }) => (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="link-aria-whatsapp"
      className={
        primary
          ? "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          : "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
      }
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {primary ? t("aria.continueWhatsapp", "Continue on WhatsApp") : t("aria.skipToWhatsapp", "Or message us on WhatsApp now")}
    </a>
  );

  return (
    <div dir={dir} className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3" data-testid="aria-chat">
      {open && (
        <div
          role="dialog"
          aria-label={t("aria.dialogLabel", "Chat with Aria")}
          className="flex h-[540px] max-h-[calc(100dvh-7rem)] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="flex flex-shrink-0 items-center gap-3 bg-gradient-to-r from-primary to-secondary px-4 py-3 text-white">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-none">Aria</p>
              <p className="mt-1 text-xs opacity-80">{t(`${script.keys}.subtitle`, variant === "clinic" ? "Webimot assistant · Book a demo in a minute" : "Webimot assistant · Free AI audit in a minute")}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("aria.close", "Close chat")}
              className="rounded-lg p-1.5 transition-colors hover:bg-white/20"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4" aria-live="polite">
            <AssistantLine>
              {t(`${script.keys}.welcome`, script.welcome)}
            </AssistantLine>

            {QUESTIONS.map((q, i) =>
              i > step ? null : (
                <div key={q.id} className="flex flex-col gap-3">
                  <AssistantLine>{question(i)}</AssistantLine>
                  {i < step ? (
                    <div className="flex justify-end">
                      <div className={`${bubble} rounded-ee-sm bg-slate-900 text-white`}>{option(i, answers[i])}</div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 ps-9" role="group" aria-label={question(i)}>
                      {q.options.map((_, o) => (
                        <button
                          key={o}
                          type="button"
                          onClick={() => setAnswers([...answers, o])}
                          className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
                          data-testid={`button-aria-${q.id}-${o}`}
                        >
                          {option(i, o)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}

            {done && status !== "sent" && (
              <>
                <AssistantLine>
                  {t(`${script.keys}.askContact`, script.askContact)}
                </AssistantLine>
                <form onSubmit={submit} className="flex flex-col gap-2.5 ps-9" data-testid="form-aria-lead">
                  <input
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("aria.form.name", "Your name *")}
                    aria-label={t("aria.form.name", "Your name *")}
                    className={inputClass}
                  />
                  <input
                    maxLength={150}
                    autoComplete="organization"
                    value={form.clinic}
                    onChange={(e) => setForm({ ...form, clinic: e.target.value })}
                    placeholder={t(`${script.keys}.form.clinic`, script.company)}
                    aria-label={t(`${script.keys}.form.clinic`, script.company)}
                    className={inputClass}
                  />
                  <input
                    required
                    type="email"
                    dir="ltr"
                    maxLength={255}
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t("aria.form.email", "Email *")}
                    aria-label={t("aria.form.email", "Email *")}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    dir="ltr"
                    maxLength={30}
                    pattern="[+\d\(][\d\s\-\(\)\.]{4,}"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t("aria.form.phone", "WhatsApp number (with country code)")}
                    aria-label={t("aria.form.phone", "WhatsApp number (with country code)")}
                    className={inputClass}
                  />
                  {/* Honeypot: people never see or fill this in. */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="hidden"
                  />
                  {status === "error" && (
                    <p role="alert" className="text-xs text-red-600">
                      {t("aria.error", "That didn't go through. Please try again, or message us on WhatsApp.")}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    data-testid="button-aria-submit"
                  >
                    {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {t(`${script.keys}.form.submit`, script.submit)}
                  </button>
                  <WhatsAppLink />
                </form>
              </>
            )}

            {status === "sent" && (
              <div className="flex flex-col gap-3">
                <AssistantLine>
                  {t("aria.sent", "Got it, thank you! We have your details and will email you within a few hours. Want a faster answer? Continue on WhatsApp.")}
                </AssistantLine>
                <div className="flex flex-col gap-2 ps-9">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-green-700">
                    <Check className="h-4 w-4" aria-hidden="true" /> {t("aria.sentBadge", "Request sent")}
                  </p>
                  <WhatsAppLink primary />
                </div>
              </div>
            )}

            {!done && (
              <div className="ps-9">
                <WhatsAppLink />
              </div>
            )}
            <div ref={endRef} />
          </div>

          <p className="flex-shrink-0 border-t border-slate-100 px-4 py-2 text-center text-[10px] text-slate-500">
            {t("aria.privacy", "We only use your details to reply to this request.")}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? t("aria.close", "Close chat") : t("aria.open", "Chat with Aria")}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg transition-transform hover:scale-105"
        data-testid="button-aria-toggle"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <>
            <Bot className="h-6 w-6" aria-hidden="true" />
            {unread && <span className="absolute -end-1 -top-1 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-green-400" aria-hidden="true" />}
          </>
        )}
      </button>
    </div>
  );
}
