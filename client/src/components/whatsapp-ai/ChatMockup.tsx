import { Bot, CheckCheck, Stethoscope } from "lucide-react";

export interface ChatMockupTexts {
  ariaLabel: string;
  clinicName: string;
  online: string;
  patientMsg: string;
  aiMsg1: string;
  aiMsg2: string;
  aiTyping: string;
  time: string;
  caption: string;
}

// Illustrative WhatsApp conversation for the WhatsApp AI hero, in the agency's surface-card style.
// All texts come in already translated; the clinic is a made-up example, not a client.
export default function ChatMockup({ texts }: { texts: ChatMockupTexts }) {
  return (
    <figure className="mx-auto w-full max-w-sm">
      <div className="surface-card overflow-hidden p-0" role="img" aria-label={texts.ariaLabel}>
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-3 text-white">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10" aria-hidden="true">
            <Stethoscope className="h-5 w-5 text-secondary" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{texts.clinicName}</p>
            <p className="flex items-center gap-1.5 text-xs text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {texts.online}
            </p>
          </div>
        </div>
        <div className="space-y-3 bg-slate-50 px-4 py-5" aria-hidden="true">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-se-sm bg-emerald-100 px-4 py-2 text-slate-900">
              <p className="text-sm leading-relaxed">{texts.patientMsg}</p>
              <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                {texts.time} <CheckCheck className="h-3 w-3 text-blue-600" />
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-ss-sm border border-slate-200 bg-white px-4 py-2 text-slate-900">
              <p className="text-sm leading-relaxed">{texts.aiMsg1}</p>
              <p className="mt-2 text-sm leading-relaxed">{texts.aiMsg2}</p>
              <p className="mt-1 text-[10px] text-slate-500">{texts.time}</p>
            </div>
          </div>
          <div className="flex justify-start">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
              <Bot className="h-3.5 w-3.5" />
              {texts.aiTyping}
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-slate-500">{texts.caption}</figcaption>
    </figure>
  );
}
