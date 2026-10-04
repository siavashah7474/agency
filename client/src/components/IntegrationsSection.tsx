import {
  SiWhatsapp,
  SiHubspot,
  SiSalesforce,
  SiGooglesheets,
  SiGooglecalendar,
  SiCalendly,
  SiShopify,
  SiSlack,
  SiGmail,
  SiNotion,
  SiMeta,
} from "react-icons/si";
import type { IconType } from "react-icons";
import SectionEyebrow from "@/components/SectionEyebrow";

const tools: { name: string; icon: IconType; color: string }[] = [
  { name: "WhatsApp Business", icon: SiWhatsapp, color: "#25D366" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
  { name: "Google Sheets", icon: SiGooglesheets, color: "#34A853" },
  { name: "Google Calendar", icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Calendly", icon: SiCalendly, color: "#006BFF" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "Slack", icon: SiSlack, color: "#E01E5A" },
  { name: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "Notion", icon: SiNotion, color: "currentColor" },
  { name: "Meta Ads", icon: SiMeta, color: "#0467DF" },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-white py-16 md:py-24 dark:bg-[#020817]">
      <div className="container mx-auto px-6 text-center">
        <SectionEyebrow className="mb-4">Integrations</SectionEyebrow>
        <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          No need to leave the tools you already use.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-white/50">
          Every lead, booking and report flows straight into your CRM, calendar or spreadsheet. No copy-paste, no new software to learn.
        </p>

        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
          {tools.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80"
            >
              <Icon className="h-4 w-4" style={{ color }} aria-hidden />
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-500 dark:text-white/40">Plus most other business tools via API.</p>
      </div>
    </section>
  );
}
