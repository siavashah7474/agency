const stats = [
  { value: "50+", label: "businesses transformed" },
  { value: "12+", label: "countries served" },
  { value: "50+", label: "languages handled by our AI" },
  { value: "15h+", label: "hours saved per team, every week" },
];

const useCases = [
  "Lead response & qualification",
  "Invoice & document processing",
  "Automated weekly reporting",
  "24/7 customer support",
  "CRM & data entry",
  "Follow-up sequences",
  "Team onboarding & HR tasks",
  "Appointment booking",
  "Internal knowledge Q&A",
  "SEO content on autopilot",
  "Database reactivation",
  "E-commerce order automation",
];

export default function StatsStrip() {
  return (
    <section aria-label="Webimot in numbers" className="border-y border-slate-200 bg-white dark:border-white/10 dark:bg-[#020817]">
      <dl className="container mx-auto grid grid-cols-2 gap-x-4 gap-y-10 px-6 py-12 md:grid-cols-4 md:py-14">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dd className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">{stat.value}</dd>
            <dt className="mx-auto mt-2 max-w-[12rem] text-sm leading-snug text-slate-600 dark:text-white/60">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <div className="relative overflow-hidden border-t border-slate-200 py-4 dark:border-white/10" aria-label="What our AI systems handle">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 dark:from-[#020817]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 dark:from-[#020817]" />
        <ul className="flex gap-3 animate-ticker">
          {[...useCases, ...useCases].map((item, i) => (
            <li
              key={i}
              aria-hidden={i >= useCases.length ? "true" : undefined}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
