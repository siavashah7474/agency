import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { systemById, type SystemId } from "@/data/systemsData";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

export interface ScenarioStep {
  time: string;
  event: string;
  detail: string;
  highlight?: boolean;
}

export interface ProductPageProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string;
  emoji: string;
  name: string;
  tagline: string;
  heroBrief: string;
  results?: { value: string; label: string; context: string }[];
  problemParagraphs: string[];
  howItWorksSteps: { title: string; description: string; emoji: string }[];
  scenario?: { heading: string; description: string; steps: ScenarioStep[] };
  features: string[];
  featureDetails?: { title: string; description: string }[];
  whoItsFor: { emoji: string; industry: string; useCase: string }[];
  ctaHeadline: string;
  // Products that have their own site (none at the moment) link to it as a reference.
  referenceLink?: { href: string; label: string };
  /** Replaces the default "custom quote" pricing note with fixed prices and terms. */
  pricingNote?: { headline: string; lines: string[] };
  // The system this product belongs to ("Part of the Capture system →"). Leave unset for add-ons.
  system?: SystemId;
  // For add-ons: the system this product feeds ("Add-on that feeds the Capture system →").
  addOnFor?: SystemId;
  /** Key under "productPages" holding this product's Turkish texts (e.g. "leadfire"). */
  contentKey?: string;
  /** Interpolation values for translated texts (e.g. founding-offer numbers). */
  contentValues?: Record<string, string | number>;
}

// Fields that are never translated (icons, links, flags).
const UNTRANSLATED_FIELDS = new Set(["emoji", "href", "highlight"]);

// Walks the content props and replaces every string with t("<key>.<path>", englishDefault).
// English (and any language without these keys) renders the default, i.e. the original text.
function translateDeep<T>(value: T, key: string, t: TFunction, values?: Record<string, string | number>): T {
  if (typeof value === "string") return t(key, { defaultValue: value, ...values }) as T;
  if (Array.isArray(value)) return value.map((v, i) => translateDeep(v, `${key}.${i}`, t, values)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, UNTRANSLATED_FIELDS.has(k) ? v : translateDeep(v, `${key}.${k}`, t, values)]),
    ) as T;
  }
  return value;
}

const BASE_KEYWORDS = "medical tourism AI system, AI agent for clinics, clinic AI system, medical tourism marketing, AI automation agency, business automation, lead generation, WhatsApp AI, AI receptionist for clinics, clinic automation software";

export default function ProductPageLayout(props: ProductPageProps) {
  const { t, i18n } = useTranslation();
  const { seoTitle, seoDescription, seoKeywords, emoji, name, features: schemaFeatures, system, addOnFor, contentKey, contentValues } = props;
  // Visible texts, translated when contentKey is set (SEO props and the JSON-LD feature list stay English).
  const raw = {
    tagline: props.tagline,
    heroBrief: props.heroBrief,
    results: props.results,
    problemParagraphs: props.problemParagraphs,
    howItWorksSteps: props.howItWorksSteps,
    scenario: props.scenario,
    features: props.features,
    featureDetails: props.featureDetails,
    whoItsFor: props.whoItsFor,
    ctaHeadline: props.ctaHeadline,
    referenceLink: props.referenceLink,
    pricingNote: props.pricingNote,
  };
  const { tagline, heroBrief, results, problemParagraphs, howItWorksSteps, scenario, features, featureDetails, whoItsFor, ctaHeadline, referenceLink, pricingNote } =
    contentKey ? translateDeep(raw, `productPages.${contentKey}`, t, contentValues) : raw;
  const { openModal } = useBookingModal();
  const [pathname] = useLocation();
  const canonicalUrl = `https://webimot.com${pathname}`;

  // One line at the top of the hero placing the product in the ladder; `system` wins if both are set.
  const parentSystem = system ? systemById(system) : addOnFor ? systemById(addOnFor) : undefined;
  const parentLabelBefore = system
    ? t("productLayout.parent.partBefore", "Part of the")
    : t("productLayout.parent.addOnBefore", "Add-on that feeds the");
  // English has no text after the system name; Turkish puts the label after it.
  const afterKey = system ? "productLayout.parent.partAfter" : "productLayout.parent.addOnAfter";
  const parentLabelAfter = i18n.exists(afterKey) ? t(afterKey) : "";
  const parentName = parentSystem
    ? system
      ? t(`productLayout.systems.${parentSystem.id}.part`, parentSystem.name)
      : t(`productLayout.systems.${parentSystem.id}.addOn`, parentSystem.name)
    : "";
  const parentNamePlain = parentSystem ? t(`productLayout.systems.${parentSystem.id}.name`, parentSystem.name) : "";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": seoDescription,
    "url": canonicalUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "provider": {
      "@type": "Organization",
      "name": "Webimot Agency",
      "url": "https://webimot.com"
    },
    "featureList": schemaFeatures
  };

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords ? `${seoKeywords}, ${BASE_KEYWORDS}` : BASE_KEYWORDS} canonicalUrl={canonicalUrl} schema={productSchema} />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">

          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
              {parentSystem && (
                <nav aria-label={t("productLayout.breadcrumb", "Breadcrumb: Systems, {{system}}, {{product}}", { system: parentNamePlain, product: name })} className="mb-6">
                  <Link
                    href={`/systems#${parentSystem.id}`}
                    data-testid="link-product-system"
                    className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <span aria-hidden="true">{parentSystem.emoji}</span>
                    <span>{parentLabelBefore && <>{parentLabelBefore} </>}<span className="font-semibold text-white/85">{parentName}</span>{parentLabelAfter && <> {parentLabelAfter}</>}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </nav>
              )}
              <div className="text-5xl mb-4">{emoji}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">{name}</h1>
              <p className="text-xl md:text-2xl font-semibold text-yellow-300 mb-6">{tagline}</p>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">{heroBrief}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>{t("productLayout.hero.bookCall", "Book Free Strategy Call")}</Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/15 text-white hover:bg-white/15 backdrop-blur-sm" onClick={() => openModal()}>{t("productLayout.hero.seePricing", "See Pricing")}</Button>
              </div>
              {referenceLink && (
                <a
                  href={referenceLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm text-white/80 underline underline-offset-4 hover:text-white"
                  data-testid="link-product-reference"
                >
                  {referenceLink.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </section>

          {/* Design facts bar */}
          {results && (
            <section className="py-12 bg-slate-900 border-y border-white/10 relative overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {results.map((r, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-gradient-ai mb-1">{r.value}</div>
                      <div className="text-sm font-semibold text-white mb-1">{r.label}</div>
                      <div className="text-xs text-white/40">{r.context}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Problem */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 max-w-3xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">{t("productLayout.problem.badge", "The Problem")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{t("productLayout.problem.title", "The problem most businesses ignore")}</h2>
              </div>
              <div className="space-y-5">
                {problemParagraphs.map((p, i) => <p key={i} className="text-lg text-white/65 leading-relaxed">{p}</p>)}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">{t("productLayout.howItWorks.badge", "How It Works")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{t("productLayout.howItWorks.title", "How {{name}} works", { name })}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {howItWorksSteps.map((step, i) => (
                  <div key={i} className="bg-slate-900 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-3">{step.emoji}</div>
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-3">{i + 1}</div>
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Example scenario (illustrative) */}
          {scenario && (
            <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
              <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
              <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-sm font-medium">{t("productLayout.scenario.badge", "Example scenario")}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{scenario.heading}</h2>
                  <p className="mt-4 text-white/50 text-base leading-relaxed">{scenario.description}</p>
                  <p className="mt-3 text-sm text-white/60 italic" data-testid="text-scenario-disclaimer">{t("productLayout.scenario.disclaimer", "Example scenario. Illustrative, not a client result.")}</p>
                </div>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-4 bottom-4 w-px bg-white/10 hidden sm:block" />
                  <div className="space-y-4">
                    {scenario.steps.map((step, i) => (
                      <div key={i} className={`relative flex gap-4 sm:gap-6 rounded-xl p-4 border transition-colors ${step.highlight ? "bg-secondary/10 border-secondary/25" : "bg-white/5 border-white/10"}`}>
                        {/* Dot */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border ${step.highlight ? "bg-secondary/20 border-secondary/40 text-secondary" : "bg-white/10 border-white/10 text-white/40"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${step.highlight ? "bg-secondary/20 text-secondary" : "bg-white/10 text-white/40"}`}>{step.time}</span>
                            <span className="text-sm font-semibold text-white">{step.event}</span>
                          </div>
                          <p className="text-sm text-white/55 leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Features */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">{t("productLayout.features.badge", "Features")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{t("productLayout.features.title", "Everything included")}</h2>
              </div>
              {featureDetails ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {featureDetails.map((f, i) => (
                    <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-secondary/25 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">{f.title}</div>
                        <div className="text-xs text-white/50 leading-relaxed">{f.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/75">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{t("productLayout.whoItsFor.title", "Built for businesses like yours")}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {whoItsFor.map((item) => (
                  <div key={item.industry} className="bg-slate-900 rounded-xl p-5 text-center">
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{item.industry}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{item.useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Note */}
          <section className="py-16 md:py-20 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{pricingNote?.headline ?? t("productLayout.pricing.title", "Simple, transparent pricing")}</h2>
              {pricingNote ? (
                <div className="mb-8 space-y-3">
                  {pricingNote.lines.map((line) => (
                    <p key={line} className="text-white/60 leading-relaxed">{line}</p>
                  ))}
                </div>
              ) : (
                <p className="text-white/60 mb-8 leading-relaxed">
                  {t("productLayout.pricing.note", "Pricing is based on your business size, existing tools, and automation complexity. We give every client a custom quote after a free 30-minute AI Audit. No surprises.")}
                </p>
              )}
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                {t("productLayout.pricing.cta", "Book Your Free Audit")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
            <div className="container mx-auto px-6 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{ctaHeadline}</h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                {t("productLayout.cta.subtitle", "Book a free 30-minute strategy call. We'll show you exactly how {{name}} will work for your business.", { name })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                  {t("productLayout.cta.button", "Book Your Free Strategy Call")}
                </Button>
                {referenceLink && (
                  <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/15 text-white hover:bg-white/15 backdrop-blur-sm">
                    <a href={referenceLink.href} target="_blank" rel="noopener noreferrer">
                      {referenceLink.label} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
