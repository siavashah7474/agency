import type { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
  /** Use on dark backgrounds (navy / slate-950 sections). */
  tone?: "light" | "dark";
}

/**
 * Small mono label that sits above a section heading.
 * Light tone: blue-700 on white (≥ 5.7:1). Dark tone: brand secondary on navy.
 */
export default function SectionEyebrow({ children, className = "", tone = "light" }: SectionEyebrowProps) {
  const color = tone === "dark" ? "text-secondary" : "text-blue-700 dark:text-secondary";
  return (
    <p className={`inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] md:text-xs ${color} ${className}`}>
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
      {children}
    </p>
  );
}

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  /** Heading level. Defaults to h2 (section heading). */
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Optional id for the heading so sections can be linked with aria-labelledby. */
  id?: string;
}

/**
 * One eyebrow / heading / lead pattern for every section.
 * Heading: text-3xl md:text-4xl, tight tracking. Lead: text-lg muted, max-w-2xl.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
  as: Heading = "h2",
  className = "",
  id,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const headingColor = tone === "dark" ? "text-white" : "text-slate-900 dark:text-white";
  const leadColor = tone === "dark" ? "text-white/70" : "text-slate-600 dark:text-white/60";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <SectionEyebrow tone={tone} className="mb-4">{eyebrow}</SectionEyebrow>}
      <Heading id={id} className={`text-3xl font-bold leading-[1.15] md:text-4xl ${headingColor} ${lead ? "mb-4" : ""}`}>
        {title}
      </Heading>
      {lead && <p className={`text-lg leading-relaxed ${leadColor}`}>{lead}</p>}
    </div>
  );
}
