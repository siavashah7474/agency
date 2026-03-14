import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10" />
            <div className="absolute inset-0 opacity-10 -z-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-6 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Target className="h-4 w-4" />
                {t("about.badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("about.title")}</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{t("about.subtitle")}</p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.focusTitle")}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{t("about.focusP1")}</p>
                  <p className="text-lg text-muted-foreground">{t("about.focusP2")}</p>
                </div>
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4">{t("about.deliverTitle")}</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {deliver.map((item, i) => {
                        const Icon = [TrendingUp, Zap, Target, Award][i];
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Icon className="h-3 w-3 text-primary" />
                            </div>
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover-elevate">
                    <CardContent className="pt-8 pb-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-br from-green-500/10 to-emerald-600/10">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
                  <Stethoscope className="h-4 w-4" />
                  {t("about.medBadge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.medTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("about.medSubtitle")}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                {specialties.map((s, i) => {
                  const Icon = specialtyIcons[i];
                  return (
                    <Card key={i} className="border-green-200 dark:border-green-800">
                      <CardContent className="pt-6 text-center">
                        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3 text-red-600">{t("about.challengesTitle")}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-red-500">•</span>{c}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-200 dark:border-green-800">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3 text-green-600">{t("about.solutionTitle")}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {solutions.map((s, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-green-500">✓</span>{s}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  <Globe className="h-4 w-4" />
                  {t("about.reBadge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.reTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("about.reSubtitle")}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="hover-elevate border-blue-200 dark:border-blue-800">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Building className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">{t("about.realEstate.title")}</h3>
                        <p className="text-sm text-muted-foreground">{t("about.realEstate.subtitle")}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {realEstateItems.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                        <ShoppingCart className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">{t("about.serviceB.title")}</h3>
                        <p className="text-sm text-muted-foreground">{t("about.serviceB.subtitle")}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {serviceBItems.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src={teamImage} alt="Webimot Team" className="rounded-xl shadow-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.teamTitle")}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{t("about.teamP")}</p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    {teamItems.map((item, i) => {
                      const Icon = teamIcons[i];
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="h-3 w-3 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link href="/book-consultation">
                    <Button data-testid="button-about-cta" size="lg">
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
