import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  ArrowRight, Rocket, TrendingUp, Bot, Workflow, GraduationCap, Languages, MapPin, Wrench,
  MessageSquare, Linkedin,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionEyebrow, { SectionHeader } from "@/components/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useDir } from "@/i18n/useDir";
import { caseStudies } from "@/data/caseStudiesData";

const CANONICAL = "https://webimot.com/sia-ahmadi";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/sia-ahmadi/";
const WHATSAPP_LINK = "https://wa.me/31628753175";

// Everything on this page restates facts already published on the site (About page,
// llms-full.txt, caseStudiesData). No results, client counts or years of experience
// beyond those: add a fact here only once it is confirmed elsewhere on the site.

// Same Person @id as the About page, so search engines merge the two descriptions.
const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: CANONICAL,
  name: "Sia Ahmadi",
  mainEntity: {
    "@type": "Person",
    "@id": "https://webimot.com/about#founder",
    name: "Sia Ahmadi",
    url: CANONICAL,
    image: "https://webimot.com/sia-ahmadi-1200.jpg",
    jobTitle: "Entrepreneur, business developer, AI automation specialist and digital transformation consultant",
    description:
      "Entrepreneur, business developer, AI automation specialist and digital transformation consultant, specialised in medical and health tourism, sales funnels, ads optimisation (Meta and Google) and business visibility in search engines and AI assistants. Founder of Webimot Agency.",
    hasOccupation: [
      { "@type": "Occupation", name: "Entrepreneur" },
      { "@type": "Occupation", name: "Business developer" },
      { "@type": "Occupation", name: "AI automation specialist" },
      { "@type": "Occupation", name: "Digital transformation consultant" },
    ],
    knowsAbout: [
      "Medical tourism",
      "Health tourism",
      "Sales funnels",
      "Meta Ads optimisation",
      "Google Ads optimisation",
      "Search and AI search visibility",
      "AI automation",
      "Digital transformation",
      "Business development",
      "WhatsApp AI agents",
    ],
    worksFor: { "@type": "Organization", "@id": "https://webimot.com/#organization", name: "Webimot Agency", url: "https://webimot.com/" },
    homeLocation: [
      { "@type": "City", name: "Amsterdam" },
      { "@type": "City", name: "Istanbul" },
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Rotterdam Business School" },
      { "@type": "CollegeOrUniversity", name: "Azad University" },
    ],
    knowsLanguage: ["English", "Turkish", "Persian", "Kurdish", "Dutch"],
    sameAs: [FOUNDER_LINKEDIN],
  },
};

const ROLES = [
  {
    icon: Rocket,
    title: "Entrepreneur",
    text: "I founded Webimot in January 2025 and built its own product: the Webimot WhatsApp AI, an AI agent that answers clinic enquiries on WhatsApp. I do the client work myself, from the strategy to the build.",
  },
  {
    icon: TrendingUp,
    title: "Business developer",
    text: "I find where a business is losing enquiries, sales and time, then rebuild the path from the first contact to the sale: fast replies, qualification, follow-up and a CRM the team actually uses.",
  },
  {
    icon: Bot,
    title: "AI automation specialist",
    text: "I build AI agents and workflows with n8n, the OpenAI API and the WhatsApp Cloud API, so that replies, follow-ups and reports run every day without anyone doing them by hand.",
  },
  {
    icon: Workflow,
    title: "Digital transformation consultant",
    text: "I help owners move manual work on WhatsApp, email, documents and spreadsheets into systems, and I build those systems too: websites, CRMs, ad campaigns and search optimisation.",
  },
];

// Dated only where the site gives dates. The two earlier Istanbul clinics have no
// individual dates on the site, so they carry none here.
const EXPERIENCE: { period: string; role: string; org: string; text: string }[] = [
  {
    period: "January 2025 – present",
    role: "Founder",
    org: "Webimot Agency",
    text: "AI automation and digital marketing for clinics and small businesses. I do the client work myself: websites, CRMs, ad campaigns, search optimisation and AI agents.",
  },
  {
    period: "November 2023 – present",
    role: "Freelance sales and marketing specialist",
    org: "Dr. Görkem Atsal Clinic, Istanbul",
    text: "Website, CRM, Google Ads and Meta Ads, social media strategy, search optimisation and the sales process for a facial plastic surgery clinic that treats international patients.",
  },
  {
    period: "2021 – 2024",
    role: "Digital marketing",
    org: "WaveMed",
    text: "Digital marketing for a US healthcare startup.",
  },
  {
    period: "",
    role: "International patient sales lead",
    org: "Ariana Health Clinic, Istanbul",
    text: "Led international patient sales for a clinic in Istanbul.",
  },
  {
    period: "",
    role: "Sales and marketing",
    org: "BHT Clinic (Tema Hospital), Istanbul",
    text: "Sales and marketing for a clinic in Istanbul that treats international patients.",
  },
];

const EDUCATION = [
  { degree: "MSc Consultancy and Entrepreneurship", school: "Rotterdam Business School", note: "In progress" },
  { degree: "MSc Information Technology", school: "Azad University", note: "" },
];

const LANGUAGES = ["English", "Turkish", "Persian", "Kurdish", "Dutch (basic)"];
const TOOLS = ["n8n", "OpenAI API", "WhatsApp Cloud API"];

// One short line per project, keyed by case-study slug. Scope of work only, no results.
const WORK_TEXT: Record<string, string> = {
  "gorkem-atsal-clinic": "Ongoing since November 2023: website, CRM, Google Ads and Meta Ads, social media strategy and search optimisation.",
  "clinish-dental-clinic": "Website, social media, Meta Business Suite and Meta ads set-up, and search optimisation.",
  "webimot-whatsapp-ai": "My own product: an AI agent on WhatsApp that answers clinic enquiries, asks qualifying questions and passes warm leads to the sales team.",
  "prime-hair": "Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
  "msb-aesthetic": "Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
  estetizm: "Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
};

const WAYS = [
  {
    title: "Consulting for clinics",
    text: "We start with a call. I look at the path from the first ad or message to the booked consultation and tell you what I would fix first.",
    href: "/clinics",
    link: "How I work with clinics",
  },
  {
    title: "Done-for-you systems",
    text: "I build and run the systems for you: capturing enquiries, follow-up, operations and reporting, connected to the tools you already use.",
    href: "/systems",
    link: "See the four systems",
  },
  {
    title: "Ads management",
    text: "Meta and Google campaigns for clinics, run in your own ad account and measured by booked consultations, not by clicks.",
    href: "/services/meta-ads",
    link: "See ads management",
  },
  {
    title: "WhatsApp AI for your clinic",
    text: "An AI agent on your clinic's own WhatsApp Business number that answers enquiries, qualifies patients and passes warm leads to your team.",
    href: "/products/whatsapp-ai",
    link: "See the WhatsApp AI",
  },
];

export default function Founder() {
  const { t } = useTranslation();
  const dir = useDir();
  const { openModal } = useBookingModal();

  const roles = ROLES.map((r, i) => ({
    ...r,
    title: t(`founderPage.roles.items.${i}.title`, r.title),
    text: t(`founderPage.roles.items.${i}.text`, r.text),
  }));
  const specialties = t("about.founder.specialties", { returnObjects: true }) as { title: string; desc: string }[];
  const experience = EXPERIENCE.map((e, i) => ({
    period: e.period ? t(`founderPage.experience.items.${i}.period`, e.period) : "",
    role: t(`founderPage.experience.items.${i}.role`, e.role),
    org: t(`founderPage.experience.items.${i}.org`, e.org),
    text: t(`founderPage.experience.items.${i}.text`, e.text),
  }));
  const education = EDUCATION.map((e, i) => ({
    degree: t(`founderPage.education.items.${i}.degree`, e.degree),
    school: t(`founderPage.education.items.${i}.school`, e.school),
    note: e.note ? t(`founderPage.education.items.${i}.note`, e.note) : "",
  }));
  const languages = LANGUAGES.map((l, i) => t(`founderPage.languages.items.${i}`, l));
  const work = caseStudies.map((cs) => ({
    slug: cs.slug,
    client: cs.client,
    category: t(`founderPage.work.categories.${cs.category}`, cs.category),
    text: t(`founderPage.work.items.${cs.slug}`, WORK_TEXT[cs.slug] ?? cs.summary),
  }));
  const ways = WAYS.map((w, i) => ({
    ...w,
    title: t(`founderPage.ways.items.${i}.title`, w.title),
    text: t(`founderPage.ways.items.${i}.text`, w.text),
    link: t(`founderPage.ways.items.${i}.link`, w.link),
  }));

  return (
    <>
      <SEO
        title="Sia Ahmadi | Entrepreneur & AI Automation Consultant"
        description="Sia Ahmadi: entrepreneur, business developer, AI automation specialist and digital transformation consultant for clinics and medical tourism businesses."
        keywords="Sia Ahmadi, AI automation consultant, digital transformation consultant, medical tourism marketing consultant, health tourism sales funnel, Meta Ads clinics, Webimot founder"
        canonicalUrl={CANONICAL}
        schema={profileSchema}
      />
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navigation />
        <main id="main-content" dir={dir} className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-12 md:py-20">
            <div className="pointer-events-none absolute end-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 neural-grid-adaptive" />
            <div className="container relative z-10 mx-auto px-6">
              <Breadcrumbs items={[{ label: "Sia Ahmadi" }]} />
              <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
                <div className="min-w-0">
                  <SectionEyebrow className="mb-4">{t("founderPage.hero.eyebrow", "Founder of Webimot Agency")}</SectionEyebrow>
                  <h1 className="text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl lg:text-6xl">
                    {t("about.founder.name")}
                  </h1>
                  <p className="mt-4 text-base font-semibold leading-relaxed text-primary md:text-lg" data-testid="text-founder-role">
                    {t("about.founder.role")}
                  </p>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                    {t(
                      "founderPage.hero.lead",
                      "I help clinics and small businesses grow. I find where enquiries, sales and time are being lost, then fix it with better sales funnels, better ads, more visibility and AI automation. My specialism is medical and health tourism, and I do the work myself, from the strategy to the build.",
                    )}
                  </p>
                  <p className="mt-4 flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" aria-hidden="true" />
                    {t("founderPage.hero.location", "Based between Amsterdam and Istanbul. I work in English, Turkish, Persian and Kurdish, with basic Dutch.")}
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button
                      size="lg"
                      className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800"
                      onClick={() => openModal()}
                      data-testid="button-founder-book"
                    >
                      {t("founderPage.hero.ctaBook", "Book a call with Sia")}
                      <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </Button>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex" data-testid="link-founder-whatsapp">
                      <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto" tabIndex={-1}>
                        <MessageSquare className="me-2 h-4 w-4" aria-hidden="true" />
                        {t("founderPage.hero.ctaWhatsapp", "Message on WhatsApp")}
                      </Button>
                    </a>
                    <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer me" className="inline-flex" data-testid="link-founder-linkedin">
                      <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto" tabIndex={-1}>
                        <Linkedin className="me-2 h-4 w-4" aria-hidden="true" />
                        {t("about.founder.linkedin")}
                      </Button>
                    </a>
                  </div>
                </div>
                <img
                  src="/sia-ahmadi-720.webp"
                  srcSet="/sia-ahmadi-480.webp 480w, /sia-ahmadi-720.webp 720w"
                  sizes="(min-width: 768px) 380px, 260px"
                  alt={t("founderPage.hero.imageAlt", "Sia Ahmadi, entrepreneur and founder of Webimot Agency")}
                  width={1200}
                  height={1600}
                  decoding="async"
                  className="order-first mx-auto h-auto w-full max-w-[260px] rounded-2xl border border-slate-200 object-cover shadow-lg md:order-none md:max-w-none"
                />
              </div>
            </div>
          </section>

          {/* What I do */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="founder-roles-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="founder-roles-title"
                eyebrow={t("founderPage.roles.eyebrow", "Four roles, one person")}
                title={t("founderPage.roles.title", "What I do")}
                lead={t("founderPage.roles.lead", "I work on the business problem first and the technology second. These are the four things clients come to me for.")}
                className="mb-12"
              />
              <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
                {roles.map((r) => (
                  <li key={r.title} className="surface-card p-6 md:p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <r.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{r.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{r.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* What I specialise in */}
          <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24" aria-labelledby="founder-specialties-title">
            <div className="pointer-events-none absolute inset-0 neural-grid-dark" />
            <div className="container relative z-10 mx-auto px-6">
              <SectionHeader
                id="founder-specialties-title"
                tone="dark"
                eyebrow={t("founderPage.specialties.eyebrow", "Specialisms")}
                title={t("about.founder.specialtiesTitle")}
                className="mb-12"
              />
              <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-6" data-testid="list-founder-page-specialties">
                {specialties.map((s, i) => (
                  <li
                    key={s.title}
                    className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === specialties.length - 1 && specialties.length % 2 === 1 ? "sm:col-span-2" : ""}`}
                  >
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="founder-experience-title">
            <div className="container mx-auto max-w-3xl px-6">
              <SectionHeader
                id="founder-experience-title"
                eyebrow={t("founderPage.experience.eyebrow", "Experience")}
                title={t("founderPage.experience.title", "Where I have worked")}
                lead={t("founderPage.experience.lead", "Since 2021 I have worked in sales and marketing for clinics in Istanbul that treat international patients, so I know the patient's path from the first message to the booked consultation.")}
                className="mb-12"
              />
              <ol className="relative space-y-8 border-s border-slate-200 ps-6 md:ps-8">
                {experience.map((e) => (
                  <li key={e.org} className="relative">
                    <span className="absolute -start-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-primary ring-1 ring-slate-200 md:-start-[39px]" aria-hidden="true" />
                    {e.period && (
                      <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{e.period}</p>
                    )}
                    <h3 className="text-lg font-bold text-slate-900">{e.role}</h3>
                    <p className="font-medium text-primary">{e.org}</p>
                    <p className="mt-2 leading-relaxed text-slate-600">{e.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Education and languages */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="founder-education-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="founder-education-title"
                eyebrow={t("founderPage.education.eyebrow", "Background")}
                title={t("founderPage.education.title", "Education and languages")}
                className="mb-12"
              />
              <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
                <div className="surface-card p-6 md:p-7">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                    <GraduationCap className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    {t("founderPage.education.heading", "Education")}
                  </h3>
                  <ul className="space-y-4">
                    {education.map((e) => (
                      <li key={e.degree}>
                        <p className="font-semibold text-slate-900">{e.degree}</p>
                        <p className="text-sm text-slate-600">
                          {e.school}
                          {e.note && <span className="ms-2 inline-block rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700">{e.note}</span>}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="surface-card space-y-6 p-6 md:p-7">
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">
                      <Languages className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      {t("founderPage.languages.heading", "Languages")}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {languages.map((l) => (
                        <li key={l} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">{l}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">
                      <Wrench className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      {t("founderPage.tools.heading", "What I build AI agents with")}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {TOOLS.map((tool) => (
                        <li key={tool} dir="ltr" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Selected work */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="founder-work-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="founder-work-title"
                eyebrow={t("founderPage.work.eyebrow", "Selected work")}
                title={t("founderPage.work.title", "Clinics I have worked for and products I have built")}
                lead={t("founderPage.work.lead", "Each page describes what I did and for whom.")}
                className="mb-12"
              />
              <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {work.map((w) => (
                  <li key={w.slug} className="flex">
                    <Link
                      href={`/case-studies/${w.slug}`}
                      className="surface-card-interactive group flex w-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      data-testid={`link-founder-work-${w.slug}`}
                    >
                      <span className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{w.category}</span>
                      <span className="text-lg font-bold text-slate-900 group-hover:text-primary">{w.client}</span>
                      <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{w.text}</span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        {t("founderPage.work.cardLink", "See the project")}
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How to work with me */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="founder-ways-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="founder-ways-title"
                eyebrow={t("founderPage.ways.eyebrow", "Working together")}
                title={t("founderPage.ways.title", "How to work with me")}
                lead={t("founderPage.ways.lead", "You work with me directly, through Webimot. Pick the starting point that fits your business.")}
                className="mb-12"
              />
              <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
                {ways.map((w) => (
                  <li key={w.href} className="surface-card flex flex-col p-6 md:p-7">
                    <h3 className="text-lg font-bold text-slate-900">{w.title}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-slate-600">{w.text}</p>
                    <Link
                      href={w.href}
                      className="mt-4 inline-flex items-center gap-1.5 self-start font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {w.link}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Final CTA */}
          <section className="relative overflow-hidden bg-[#020817] py-16 md:py-24">
            <div className="pointer-events-none absolute inset-0 neural-grid" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {t("founderPage.cta.title", "Tell me where your business is losing enquiries")}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                {t("founderPage.cta.text", "Book a free 30-minute call. You describe your clinic or business, and I tell you honestly what I would fix first, whether or not we end up working together.")}
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-7 text-primary hover:bg-white/90"
                  onClick={() => openModal()}
                  data-testid="button-founder-cta"
                >
                  {t("founderPage.hero.ctaBook", "Book a call with Sia")}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Button size="lg" variant="outline" className="w-full rounded-full border-white bg-transparent px-7 text-white hover:bg-white/10 sm:w-auto" tabIndex={-1}>
                    <MessageSquare className="me-2 h-4 w-4" aria-hidden="true" />
                    {t("founderPage.hero.ctaWhatsapp", "Message on WhatsApp")}
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
