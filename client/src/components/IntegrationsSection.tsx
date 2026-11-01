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
import { SectionHeader } from "@/components/SectionEyebrow";

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
    <section className="bg-white py-16 md:py-24 dark:bg-[#020817]" aria-labelledby="integrations-heading">
      <div className="container mx-auto px-6">
        <SectionHeader
          id="integrations-heading"
          eyebrow="Integrations"
          title="No need to leave the tools you already use."
          lead="Every lead, booking and report flows straight into your CRM, calendar or spreadsheet. No copy-paste, no new software to learn."
          className="mb-10"
        />

        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3" aria-label="Supported integrations">
          {tools.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
            >
              <Icon className="h-4 w-4 flex-shrink-0" style={{ color }} aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-white/50">Plus most other business tools via API.</p>
      </div>
    </section>
  );
}
