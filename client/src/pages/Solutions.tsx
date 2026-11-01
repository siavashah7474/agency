import { Link } from "wouter";
import { ArrowRight, Zap, Repeat, FileStack, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button, buttonVariants } from "@/components/ui/button";
import SectionEyebrow from "@/components/SectionEyebrow";
import { useBookingModal } from "@/hooks/use-booking-modal";

interface Product {
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  flagship?: boolean;
}

interface OutcomeGroup {
  icon: typeof Zap;
  label: string;
  title: string;
  description: string;
  products: Product[];
}

const groups: OutcomeGroup[] = [
  {
    icon: Zap,
    label: "Capture every lead",
    title: "Respond before they go cold",
    description: "Most leads go to whoever answers first. These systems make sure that's always you — in seconds, in any language, any time of day.",
    products: [
      { emoji: "💬", name: "WhatsApp AI", tagline: "24/7 AI receptionist on WhatsApp", description: "Replies to leads in any language, evaluates photos, books consultations — in under 2 seconds.", href: "/products/whatsapp-ai", flagship: true },
      { emoji: "⚡", name: "LeadFire", tagline: "Contact every lead in under 60 seconds", description: "Instant reply, AI qualification, and automatic calendar booking the moment a lead comes in.", href: "/products/leadfire" },
    ],
  },
  {
    icon: Repeat,
    label: "Never lose a customer",
    title: "Turn cold contacts into pipeline",
    description: "Follow-up is where most revenue quietly leaks away. These systems keep working a lead or customer long after a human would have given up.",
    products: [
      { emoji: "🔁", name: "NurtureLoop", tagline: "Never let a lead go cold again", description: "Multi-channel follow-up sequences across email, SMS, and WhatsApp — stops the moment they respond.", href: "/products/nurtureloop" },
      { emoji: "💎", name: "ReviveIQ", tagline: "Reactivate your cold contact database", description: "AI-personalised campaigns that turn old leads and past clients into active pipeline again.", href: "/products/reviveiq" },
    ],
  },
  {
    icon: FileStack,
    label: "Cut the busywork",
    title: "Free your team from admin",
    description: "Paperwork and reporting eat hours every week. These systems handle it automatically, in the background.",
    products: [
      { emoji: "📄", name: "DocuMind", tagline: "Turn paperwork into data in seconds", description: "Reads invoices, intake forms, and contracts — extracts every field and fills your CRM.", href: "/products/documind" },
      { emoji: "📊", name: "ClearDesk", tagline: "Business report delivered every Monday", description: "Plain-English performance summary across your CRM, ads, and sales pipeline — automatically.", href: "/products/cleardesk" },
    ],
  },
  {
    icon: TrendingUp,
    label: "Get found online",
    title: "Grow organic visibility on autopilot",
    description: "Consistent content is the single biggest lever for organic growth — and the easiest thing to fall behind on.",
    products: [
      { emoji: "✍️", name: "SEO Blog AI", tagline: "Publish SEO content on autopilot", description: "20–30 keyword-targeted blog posts published to your site every month — automatically.", href: "/products/seo-blog-ai" },
    ],
  },
];

export default function Solutions() {
  const { openModal } = useBookingModal();

  return (
    <>
      <SEO
        title="AI Solutions for Business Automation"
        description="Seven AI systems that capture and answer leads, follow up automatically, process documents, report on your numbers and publish SEO content — built and run by Webimot."
        keywords="AI automation solutions, AI agency products, lead automation, WhatsApp AI, document automation, SEO automation"
        canonicalUrl="https://webimotagency.com/solutions"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">
          <section className="relative py-16 md:py-24 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center">
              <SectionEyebrow tone="dark" className="mb-6">7 AI systems, organized by what they solve</SectionEyebrow>
              <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                AI systems that digitalise every part of your business
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                We start by mapping how your business works, then deploy the AI systems that save the most time: for leads, follow-up, admin, reporting and content. Each one connects to the tools you already use and runs on its own or together.
              </p>
              <Button size="lg" className="rounded-full border-white bg-white text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]" onClick={() => openModal()}>
                Book a Free AI Audit
              </Button>
            </div>
          </section>

          {groups.map((group, i) => {
            const Icon = group.icon;
            const dark = i % 2 === 1;
            return (
              <section key={group.label} className={`py-16 md:py-24 ${dark ? "bg-slate-950 relative overflow-hidden" : "bg-white"}`} aria-labelledby={`solutions-group-${i}`}>
                {dark && <div className="absolute inset-0 neural-grid-dark pointer-events-none" />}
                <div className="container mx-auto px-6 relative z-10">
                  <div className="max-w-2xl mb-10">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border ${dark ? "bg-secondary/10 border-secondary/20 text-secondary" : "bg-primary/10 border-primary/20 text-primary"}`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{group.label}</span>
                    </div>
                    <h2 id={`solutions-group-${i}`} className={`mb-3 text-2xl font-bold md:text-3xl ${dark ? "text-white" : "text-slate-900"}`}>{group.title}</h2>
                    <p className={`text-base leading-relaxed md:text-lg ${dark ? "text-white/65" : "text-slate-600"}`}>{group.description}</p>
                  </div>

                  <div className={`grid gap-6 ${group.products.length > 1 ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
                    {group.products.map((p) => (
                      <Link key={p.href} href={p.href} className={`group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${dark ? "focus-visible:ring-offset-slate-950" : ""}`}>
                        <div className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                          dark
                            ? `bg-slate-900 hover:border-secondary/40 ${p.flagship ? "border-secondary/30 ring-1 ring-secondary/20" : "border-white/10"}`
                            : "surface-card-interactive"
                        }`}>
                          {p.flagship && <span className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-secondary">Flagship</span>}
                          <div className="mb-3 text-3xl" aria-hidden="true">{p.emoji}</div>
                          <h3 className={`mb-1 text-lg font-bold ${dark ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
                          <div className={`mb-3 text-sm font-medium ${dark ? "text-secondary" : "text-primary"}`}>{p.tagline}</div>
                          <p className={`flex-1 text-sm leading-relaxed ${dark ? "text-white/65" : "text-slate-600"}`}>{p.description}</p>
                          <div className={`mt-4 flex items-center gap-1 text-sm font-medium transition-colors ${dark ? "text-white/60 group-hover:text-secondary" : "text-primary group-hover:text-slate-900"}`}>
                            Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">Also need ads, SEO, or a new website?</h2>
              <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                We also run traditional marketing services — Meta Ads, Google Ads, SEO, website development, branding, and more.
              </p>
              <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full bg-white" })}>
                See All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#020817] py-16 md:py-24">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container relative z-10 mx-auto px-6 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Not sure which one you need?</h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                Book a free 30-minute AI audit — we'll map your biggest opportunities and recommend exactly where to start.
              </p>
              <Button size="lg" className="rounded-full border-white bg-white text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]" onClick={() => openModal()}>
                Book My Free AI Audit
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
