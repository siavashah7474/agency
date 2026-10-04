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
      <div className="container mx-auto grid grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">{stat.value}</div>
            <div className="mt-2 text-sm text-slate-500 dark:text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden border-t border-slate-200 py-4 dark:border-white/10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#020817]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#020817]" />
        <div className="flex gap-3 animate-ticker">
          {[...useCases, ...useCases].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= useCases.length}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
