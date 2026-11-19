import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import {
  Target, Users, Zap, Globe, Award, TrendingUp,
  Stethoscope, Building, ShoppingCart, ArrowRight, Heart, Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useBookingModal } from "@/hooks/use-booking-modal";

const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/sia-ahmadi/";

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://webimotagency.com/about",
  mainEntity: {
    "@type": "Person",
    "@id": "https://webimotagency.com/about#founder",
    name: "Sia Ahmadi",
    jobTitle: "Founder",
    worksFor: { "@id": "https://webimotagency.com/#organization" },
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

export default function About() {
  const { t } = useTranslation();
  const { openModal } = useBookingModal();
  const deliver = t("about.deliver", { returnObjects: true }) as string[];
  const specialties = t("about.specialties", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const specialtyIcons = [Heart, Sparkles, Users];
  const challenges = t("about.challenges", { returnObjects: true }) as string[];
  const solutions = t("about.solutions", { returnObjects: true }) as string[];
  const realEstateItems = t("about.realEstate.items", { returnObjects: true }) as string[];
  const serviceBItems = t("about.serviceB.items", { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title="About Webimot | AI Automation Agency"
        description="Webimot is an AI automation and digital marketing agency founded by Sia Ahmadi, based in Amsterdam and Istanbul. AI systems for clinics and small businesses."
        keywords="AI consultant agency, digital transformation agency, AI consultancy medical tourism, real estate AI consultant, small business digital transformation, AI automation consultancy, Webimot Agency about, AI business transformation"
        canonicalUrl="https://webimotagency.com/about"
        schema={founderSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">

          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute top-2/3 right-1/6 w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Target className="h-4 w-4" />
                {t("about.badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("about.title")}</h1>
              <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto">{t("about.subtitle")}</p>
            </div>
          </section>

          {/* Focus */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t("about.focusTitle")}</h2>
                  <p className="text-lg text-white/60 mb-4">{t("about.focusP1")}</p>
                  <p className="text-lg text-white/60">{t("about.focusP2")}</p>
                </div>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">{t("about.deliverTitle")}</h3>
                  <ul className="space-y-3">
                    {deliver.map((item, i) => {
                      const Icon = [TrendingUp, Zap, Target, Award][i];
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="h-3 w-3 text-secondary" />
                          </div>
                          <span className="text-white/70">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Founder */}
          <section id="founder" className="scroll-mt-24 py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-medium text-white mb-6">
                  <Users className="h-4 w-4" />
                  {t("about.founder.badge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{t("about.founder.name")}</h2>
                <p className="text-base text-secondary mb-6">{t("about.founder.role")}</p>
                <p className="text-lg text-white/70 mb-4">{t("about.founder.p1")}</p>
                <p className="text-lg text-white/70 mb-4">{t("about.founder.p2")}</p>
                <p className="text-lg text-white/70 mb-6">{t("about.founder.p3")}</p>
                <a
                  href={FOUNDER_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2 font-medium text-white underline underline-offset-4 hover:text-white/80"
                >
                  {t("about.founder.linkedin")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Medical Tourism */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none opacity-60" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                  <Stethoscope className="h-4 w-4" />
                  {t("about.medBadge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("about.medTitle")}</h2>
                <p className="text-lg text-white/50 max-w-3xl mx-auto">{t("about.medSubtitle")}</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {specialties.map((s, i) => {
                  const Icon = specialtyIcons[i];
                  return (
                    <div key={i} className="bg-white/4 border border-white/8 rounded-2xl p-6 text-center hover:border-emerald-500/25 transition-colors">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-white">{s.title}</h3>
                      <p className="text-sm text-white/50">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/4 border border-red-500/15 rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-3 text-red-400">{t("about.challengesTitle")}</h3>
                  <ul className="space-y-2 text-sm text-white/55">
                    {challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-3 text-emerald-400">{t("about.solutionTitle")}</h3>
                  <ul className="space-y-2 text-sm text-white/55">
                    {solutions.map((s, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Other Industries */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
                  <Globe className="h-4 w-4" />
                  {t("about.reBadge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("about.reTitle")}</h2>
                <p className="text-lg text-white/50 max-w-3xl mx-auto">{t("about.reSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-blue-500/25 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Building className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-white">{t("about.realEstate.title")}</h3>
                      <p className="text-sm text-white/40">{t("about.realEstate.subtitle")}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-white/55">
                    {realEstateItems.map((item, i) => <li key={i} className="flex items-start gap-2"><span className="text-secondary">•</span>{item}</li>)}
                  </ul>
                </div>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-purple-500/25 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-white">{t("about.serviceB.title")}</h3>
                      <p className="text-sm text-white/40">{t("about.serviceB.subtitle")}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-white/55">
                    {serviceBItems.map((item, i) => <li key={i} className="flex items-start gap-2"><span className="text-secondary">•</span>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Our work */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none opacity-50" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t("about.teamTitle")}</h2>
                <p className="text-lg text-white/60 mb-8">{t("about.teamP")}</p>
                <Button
                  data-testid="button-about-cta"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => openModal()}
                >
                  {t("about.teamCta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
