import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { ArrowRight, Star, TrendingUp, Users, Clock } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Gorkem Atsal",
    role: "Owner",
    company: "Gorkem Atsal Clinic",
    industry: "Cosmetic Surgery · Istanbul",
    content: "The WhatsApp AI agent completely transformed our lead handling. We went from missing 40% of inquiries to responding to 100% within seconds. Our conversion rate doubled in just 3 months.",
    result: "2× conversion rate",
  },
  {
    name: "Dr. Babak Yunuszade",
    role: "Founder",
    company: "Clinish",
    industry: "Dental · Istanbul",
    content: "The AI agent handles 80% of our inquiries without any human intervention. Our conversion rate skyrocketed because we now respond instantly, even at 3am when patients in the US are researching.",
    result: "+40% consultations booked",
  },
  {
    name: "Ramazan Sabaz",
    role: "Hair Transplant Specialist",
    company: "Estetizm",
    industry: "Hair Transplant · Istanbul",
    content: "We went from being invisible on Google to ranking top 10 for key terms. The AI-generated content is so good that even our doctors are impressed. Our organic leads now exceed paid leads.",
    result: "+20% organic traffic in 6 months",
  },
  {
    name: "Pouyan Azizpour",
    role: "CEO",
    company: "Wavemed.io",
    industry: "MedTech · Netherlands",
    content: "Webimot's SEO Blog Generator has been a game-changer. We publish 20 optimised posts per month without any manual work. Our organic traffic increased significantly within months of starting.",
    result: "20 posts/month — zero manual work",
  },
  {
    name: "Dr. Hamed Gholami",
    role: "Owner",
    company: "Novin Ariana Health Group",
    industry: "Healthcare · Istanbul",
    content: "The AI Operations Autopilot saves us 20+ hours every week. Invoice reminders, HR checklists, planning reports — all handled automatically. Our team finally focuses on real work instead of admin.",
    result: "20+ hours saved per week",
  },
  {
    name: "Mehmet Salih",
    role: "Owner",
    company: "MSB Aesthetics",
    industry: "Cosmetic Surgery · Istanbul",
    content: "We were sceptical at first, but the results speak for themselves. The AI handles patient inquiries in 8 languages, evaluates photos, and books consultations automatically.",
    result: "8 languages handled — 24/7",
  },
];

const caseStudies = [
  {
    company: "Clinish",
    industry: "Dental Clinic · Istanbul",
    headline: "+40% patient inquiries",
    description:
      "Deployed WhatsApp AI Agent with multilingual support and Vision AI for dental photo evaluation. Response time dropped from 4–6 hours to under 30 seconds. Conversion rate improved by 55%.",
    metrics: [
      { label: "Response time", value: "< 30s" },
      { label: "Conversion lift", value: "+55%" },
      { label: "Staff hours saved", value: "120/mo" },
    ],
  },
  {
    company: "Estetizm",
    industry: "Hair Transplant · Istanbul",
    headline: "+20% organic traffic",
    description:
      "SEO Blog AI published 150+ optimised articles over 6 months targeting high-intent searches across German, Dutch, and UK markets. Clinic moved from page 5+ to top 10 for 15 key terms.",
    metrics: [
      { label: "Blog posts published", value: "150+" },
      { label: "Keywords in top 10", value: "15" },
      { label: "Cost per lead", value: "−55%" },
    ],
  },
  {
    company: "Prime Properties Istanbul",
    industry: "Real Estate · Istanbul",
    headline: "+120% revenue YoY",
    description:
      "Built complete lead automation — instant WhatsApp reply, AI lead scoring on budget/timeline, CRM integration, and weekly performance reports. Every lead responded within 60 seconds, 24/7.",
    metrics: [
      { label: "Lead response", value: "100%" },
      { label: "Qualified leads", value: "+85%" },
      { label: "Sales cycle", value: "−40%" },
    ],
  },
];

const stats = [
  { value: "50+", label: "Businesses transformed", icon: Users },
  { value: "12+", label: "Countries served", icon: TrendingUp },
  { value: "< 60s", label: "Avg. lead response time", icon: Clock },
  { value: "4.9 / 5", label: "Average client rating", icon: Star },
];

export default function Clients() {
  const { openModal } = useBookingModal();

  return (
    <>
      <SEO
        title="Client Results — Webimot AI Consultant Agency"
        description="Real results from real businesses. See how medical tourism clinics, real estate agencies, and small businesses use Webimot's AI systems to grow faster."
        keywords="AI agency client results, medical tourism AI success, clinic automation results, Webimot clients, AI lead generation results, WhatsApp AI results"
        canonicalUrl="https://webimotagency.com/clients"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">

          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400" />
                Real results from real businesses
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                What Our Clients Say
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                50+ businesses across medical tourism, real estate, and eCommerce use Webimot AI to grow faster, respond instantly, and operate without extra headcount.
              </p>
            </div>
          </section>

          {/* Stats bar */}
          <section className="py-12 bg-slate-900 border-y border-white/6">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-9 h-9 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-secondary" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-gradient-ai">{s.value}</div>
                      <div className="text-xs text-white/45 mt-1">{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Case Studies</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Results in numbers</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {caseStudies.map((cs, i) => (
                  <div key={i} className="bg-slate-900 rounded-xl border border-white/6 overflow-hidden flex flex-col">
                    <div className="px-5 pt-5 pb-4 border-b border-white/6">
                      <div className="text-xs font-semibold text-secondary/70 uppercase tracking-wider mb-1">{cs.industry}</div>
                      <div className="text-white font-bold text-lg">{cs.company}</div>
                      <div className="text-2xl font-bold text-gradient-ai mt-1">{cs.headline}</div>
                    </div>
                    <div className="px-5 py-4 flex-1">
                      <p className="text-sm text-white/55 leading-relaxed mb-5">{cs.description}</p>
                      <div className="grid grid-cols-3 gap-2">
                        {cs.metrics.map((m, j) => (
                          <div key={j} className="bg-white/4 border border-white/8 rounded-lg p-2.5 text-center">
                            <div className="text-sm font-bold text-white">{m.value}</div>
                            <div className="text-[10px] text-white/40 mt-0.5 leading-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">In their own words</h2>
                <p className="text-white/50 text-lg max-w-xl mx-auto">Unedited feedback from business owners running our AI systems.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-slate-900 rounded-xl border border-white/6 p-5 flex flex-col hover:border-white/12 transition-colors">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-white/65 leading-relaxed mb-5 flex-1">"{t.content}"</p>
                    <div className="border-t border-white/6 pt-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-white">{t.name}</div>
                        <div className="text-xs text-white/40">{t.role} · {t.company}</div>
                        <div className="text-[10px] text-white/30 mt-0.5">{t.industry}</div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-2.5 py-1 whitespace-nowrap">{t.result}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 md:py-28 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to join them?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Book a free AI Audit and we'll show you exactly what's possible for your business — with numbers, not promises.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                Book My Free AI Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-white/30 mt-4">No credit card · Results in 3 days · No commitment</p>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
