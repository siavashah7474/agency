import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button, buttonVariants } from "@/components/ui/button";
import SectionEyebrow from "@/components/SectionEyebrow";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useBookingModal } from "@/hooks/use-booking-modal";

interface Industry {
  id: string;
  emoji: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
  href: string;
}

const industries: Industry[] = [
  {
    id: "healthcare",
    emoji: "🏥",
    tabLabel: "Healthcare",
    title: "Healthcare & Medical Tourism",
    subtitle: "Hair transplant, dental, cosmetic surgery, IVF — and the agencies that serve them",
    description: "Clinics lose 60% of international leads to slow response times. We deploy multilingual AI receptionists that reply in under 2 seconds, evaluate patient photos, book consultations, and follow up automatically — in Arabic, German, Russian, Dutch, English, and 40+ more languages.",
    stats: [
      { value: "0.8s", label: "Avg. response time" },
      { value: "50+", label: "Languages handled" },
      { value: "40%", label: "More consultations booked" },
    ],
    href: "/industries/healthcare",
  },
  {
    id: "real-estate",
    emoji: "🏠",
    tabLabel: "Real Estate",
    title: "Real Estate Agencies",
    subtitle: "Agencies and independent agents who can't afford to miss a single lead",
    description: "Property leads go cold in minutes. We build AI systems that contact every new enquiry in under 60 seconds, qualify them on budget and timeline, schedule viewings automatically, and run follow-up sequences for months — so agents spend their time on viewings, not inboxes.",
    stats: [
      { value: "60s", label: "Lead response time" },
      { value: "3×", label: "More viewings booked" },
      { value: "100%", label: "Follow-up rate" },
    ],
    href: "/industries/real-estate",
  },
  {
    id: "small-business",
    emoji: "🏢",
    tabLabel: "Small Business",
    title: "Small & Growing Businesses",
    subtitle: "Service businesses that want to operate like a large company without hiring like one",
    description: "Small teams can't respond to every lead instantly, follow up consistently, or generate weekly reports manually. We replace those gaps with AI — instant lead response, automated follow-up sequences, database reactivation, and Monday morning performance reports delivered to your inbox.",
    stats: [
      { value: "15h+", label: "Saved per week" },
      { value: "2×", label: "Lead conversion rate" },
      { value: "24/7", label: "Always-on automation" },
    ],
    href: "/industries/small-business",
  },
  {
    id: "ecommerce",
    emoji: "🛒",
    tabLabel: "eCommerce",
    title: "eCommerce & Shopify",
    subtitle: "Stores losing revenue to abandoned carts and cold customer databases",
    description: "Most stores lose 70% of potential revenue to abandoned carts, inactive customers, and slow follow-up. We build AI automation that recovers carts, reactivates past customers, and reports on what's actually driving revenue — every week, automatically.",
    stats: [
      { value: "15–25%", label: "Cart recovery rate" },
      { value: "3×", label: "Faster follow-up speed" },
      { value: "0", label: "Hours of manual reporting" },
    ],
    href: "/industries/ecommerce",
  },
  {
    id: "finance-legal",
    emoji: "⚖️",
    tabLabel: "Finance & Legal",
    title: "Finance & Legal",
    subtitle: "Firms losing hours to manual document work and slow lead response",
    description: "Finance and legal firms waste hours on manual document processing, slow lead response, and inconsistent follow-up. We build AI systems that read documents automatically, respond to enquiries in seconds, and keep every prospect engaged until they convert.",
    stats: [
      { value: "90%", label: "Faster document processing" },
      { value: "60s", label: "Lead response time" },
      { value: "15–25h", label: "Saved per week per team" },
    ],
    href: "/industries/finance-legal",
  },
];

export default function WhoWeHelp() {
  const { openModal } = useBookingModal();
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active)!;

  return (
    <>
      <SEO
        title="Who We Help | Webimot Agency"
        description="AI automation built for healthcare, real estate, small business, eCommerce, and finance & legal — see how we solve each industry's biggest bottleneck."
        keywords="AI automation by industry, healthcare AI, real estate AI, ecommerce automation, finance legal automation"
        canonicalUrl="https://webimotagency.com/who-we-help"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">
          <section className="relative py-16 md:py-24 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center">
              <SectionEyebrow tone="dark" className="mb-6">Who We Help</SectionEyebrow>
              <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Built for your industry's real bottleneck
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                We go deep, not wide. Pick your industry to see the exact problems and systems that apply to you.
              </p>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <Tabs value={active} onValueChange={setActive} className="w-full">
                <TabsList className="w-full h-auto flex-wrap justify-center gap-2 bg-transparent p-0 mb-12">
                  {industries.map((ind) => (
                    <TabsTrigger
                      key={ind.id}
                      value={ind.id}
                      className="min-h-11 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white focus-visible:ring-offset-slate-950 data-[state=active]:border-secondary/50 data-[state=active]:bg-secondary/15 data-[state=active]:text-secondary data-[state=active]:shadow-none"
                    >
                      <span className="mr-1.5" aria-hidden="true">{ind.emoji}</span>{ind.tabLabel}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {industries.map((ind) => (
                  <TabsContent key={ind.id} value={ind.id} className="mt-0">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8 md:p-12">
                      <div className="flex items-start justify-between mb-6 gap-4">
                        <div>
                          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{ind.title}</h2>
                          <p className="text-white/65">{ind.subtitle}</p>
                        </div>
                        <span className="text-4xl flex-shrink-0" aria-hidden="true">{ind.emoji}</span>
                      </div>

                      <div className="mb-6 h-px bg-white/10" />

                      <p className="mb-8 text-base leading-relaxed text-white/75 md:text-lg">{ind.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
                        {ind.stats.map((stat) => (
                          <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                            <div className="text-lg font-bold text-white md:text-xl">{stat.value}</div>
                            <div className="mt-1 text-[11px] leading-tight text-white/60">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button size="lg" className="rounded-full bg-white text-slate-900 border-white hover:bg-white/90 focus-visible:ring-offset-slate-900" onClick={() => openModal()}>Book a Free Audit</Button>
                        <Link href={ind.href} className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-white/25 text-white hover:bg-white/10 hover:text-white focus-visible:ring-offset-slate-900" })}>
                          See Full Breakdown <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">Don't see your industry?</h2>
              <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                The same underlying systems apply to almost any lead-driven business. Book a call and we'll tell you honestly if we're a fit.
              </p>
              <Button size="lg" className="rounded-full" onClick={() => openModal()}>
                Talk to Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
