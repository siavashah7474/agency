import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Target, Users, Zap, Globe, Award, TrendingUp,
  Stethoscope, Building, ShoppingCart, ArrowRight, Heart, Sparkles,
} from "lucide-react";
import teamImage from "@assets/generated_images/about_page_team_photo.png";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const stats = t("about.stats", { returnObjects: true }) as Array<{ number: string; label: string }>;
  const deliver = t("about.deliver", { returnObjects: true }) as string[];
  const specialties = t("about.specialties", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const specialtyIcons = [Heart, Sparkles, Users];
  const challenges = t("about.challenges", { returnObjects: true }) as string[];
  const solutions = t("about.solutions", { returnObjects: true }) as string[];
  const realEstateItems = t("about.realEstate.items", { returnObjects: true }) as string[];
  const serviceBItems = t("about.serviceB.items", { returnObjects: true }) as string[];
  const teamItems = t("about.teamItems", { returnObjects: true }) as string[];
  const teamIcons = [TrendingUp, Zap, Globe, Target];

  return (
    <>
      <SEO
        title="About Webimot Agency — AI Automation & Digital Marketing Experts"
        description="Webimot Agency is an AI automation and digital marketing agency trusted by 50+ businesses in 12+ countries. We specialize in WhatsApp AI agents, Shopify automation, SEO, and paid ads — turning businesses into revenue machines."
        keywords="about Webimot Agency, AI automation agency team, digital marketing agency about, AI marketing experts, Shopify automation agency, eCommerce marketing agency, business automation company, AI lead generation agency, marketing automation experts"
        canonicalUrl="https://webimotagency.com/about"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">

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

          {/* Focus + Stats */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/4 border border-white/8 rounded-xl">
                    <div className="text-4xl font-bold text-gradient-ai mb-2">{stat.number}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
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

          {/* Team */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none opacity-50" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src={teamImage} alt="Webimot Team" className="rounded-xl shadow-2xl border border-white/10" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t("about.teamTitle")}</h2>
                  <p className="text-lg text-white/60 mb-6">{t("about.teamP")}</p>
                  <ul className="space-y-3 mb-6">
                    {teamItems.map((item, i) => {
                      const Icon = teamIcons[i];
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
                  <Link href="/book-consultation">
                    <Button data-testid="button-about-cta" size="lg" className="bg-white text-primary hover:bg-white/90">
                      {t("about.teamCta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
