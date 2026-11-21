import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, Send, Sparkles, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { systemById } from "@/data/systemsData";

// Aria: the live AI sales assistant from webimot.com, shown on the WhatsApp AI page in place
// of the scripted Mia chatbot. Replies come from /api/chat (Claude), which needs
// ANTHROPIC_API_KEY set in the Vercel project; without it the endpoint returns 503 and the
// widget shows the connection message with the booking and WhatsApp fallbacks.

const MAX_USER_MESSAGES = 12;
const WHATSAPP_URL = "https://wa.me/31628753175";

type Message = { role: "user" | "assistant"; content: string };

export default function AriaChat() {
  const { t, i18n } = useTranslation();
  const { openModal } = useBookingModal();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [unread, setUnread] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const rtl = i18n.language === "ar";
  const userCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userCount >= MAX_USER_MESSAGES;
  const welcome = t(
    "aria.welcome",
    "Hi! I'm Aria, Webimot's AI assistant. I can answer any questions about how our WhatsApp AI helps medical tourism clinics get more international patients. What would you like to know?",
  );

  useEffect(() => {
    const timer = setTimeout(() => setUnread(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Same as Mia: hides the floating WhatsApp button while the chat is open.
  useEffect(() => {
    document.body.classList.toggle("chat-open", open);
    return () => document.body.classList.remove("chat-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setUnread(false);
    const timer = setTimeout(() => inputRef.current?.focus(), 120);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading || limitReached) return;
    const history = [...messages, { role: "user" as const, content: text }];
    setMessages(history);
    setInput("");
    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-20) }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { message?: string };
      if (!data.message) throw new Error("empty");
      setMessages((prev) => [...prev, { role: "assistant", content: data.message! }]);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  const book = () => {
    setOpen(false);
    openModal(systemById("capture").name);
  };

  const bubble = (role: Message["role"]) =>
    role === "user"
      ? "bg-slate-900 text-white rounded-ee-sm"
      : "bg-slate-100 text-slate-800 rounded-es-sm";

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3" data-testid="aria-chat">
      {open && (
        <div
          role="dialog"
          aria-label={t("aria.dialogLabel", "Chat with Aria")}
          className="flex h-[520px] max-h-[calc(100dvh-7rem)] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="flex flex-shrink-0 items-center gap-3 bg-gradient-to-r from-primary to-secondary px-4 py-3 text-white">
            <div className="relative flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-none">Aria</p>
              <p className="mt-1 flex items-center gap-1 text-xs opacity-80">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                {t("aria.subtitle", "Webimot AI · Powered by Claude")}
              </p>
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
            {[{ role: "assistant" as const, content: welcome }, ...messages].map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  </div>
                )}
                <div dir="auto" className={`max-w-[78%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${bubble(msg.role)}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start gap-2" aria-label={t("aria.typing", "Aria is typing")}>
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-es-sm bg-slate-100 px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:160ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:320ms]" />
                </div>
              </div>
            )}

            {(failed || limitReached) && !loading && (
              <div className="mx-auto mt-1 w-full rounded-xl bg-slate-50 px-4 py-3 text-center">
                <p className="mb-2 text-xs text-slate-600">
                  {failed
                    ? t("aria.error", "Sorry, I'm having a connection issue. Book a demo or reach us on WhatsApp instead.")
                    : t("aria.limit", "Session limit reached. Want to continue?")}
                </p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                  <button type="button" onClick={book} className="text-xs font-semibold text-primary hover:underline">
                    {t("aria.bookDemo", "Book a free demo")}
                  </button>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline">
                    {t("aria.whatsapp", "Chat on WhatsApp")}
                  </a>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {!limitReached && (
            <form
              className="flex flex-shrink-0 items-center gap-2 border-t border-slate-200 px-3 py-3"
              onSubmit={(e) => {
                e.preventDefault();
                void send();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                dir="auto"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("aria.placeholder", "Ask me anything...")}
                aria-label={t("aria.placeholder", "Ask me anything...")}
                maxLength={500}
                disabled={loading}
                className="flex-1 rounded-xl bg-slate-100 px-4 py-2.5 text-sm outline-none transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label={t("aria.send", "Send message")}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />}
              </button>
            </form>
          )}

          <p className="flex-shrink-0 pb-2 text-center text-[10px] text-slate-500">
            {t("aria.disclaimer", "AI can make mistakes · Verify important info")}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? t("aria.close", "Close chat") : t("aria.open", "Chat with Aria, Webimot AI")}
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
