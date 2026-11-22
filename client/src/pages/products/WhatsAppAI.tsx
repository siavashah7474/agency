import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  CheckCircle2,
  Clock,
  Filter,
  HelpCircle,
  Hourglass,
  Inbox,
  Languages,
  Lock,
  MessageSquare,
  Play,
  Mic,
  Repeat,
  Route,
  ScanEye,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ChatMockup from "@/components/whatsapp-ai/ChatMockup";
import DemoVideo from "@/components/whatsapp-ai/DemoVideo";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useDir } from "@/i18n/useDir";
import { systemById } from "@/data/systemsData";
import { caseStudies } from "@/data/caseStudiesData";
import { FOUNDING_OFFER, foundingOfferBadge, foundingOfferSpots } from "@/data/foundingOffer";

// The WhatsApp AI product page. It carries everything that was on webimot.com (the product's
// former standalone site) plus the agency's own WhatsApp AI content. English is inline as t()
// defaults; Turkish, Dutch and Spanish live in locales/<lng>-pages/whatsappAi.json.

const CANONICAL = "https://webimotagency.com/products/whatsapp-ai";
const WHATSAPP_LINK = "https://wa.me/31628753175";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/sia-ahmadi/";
const CAPTURE = systemById("capture");
// Exact "Service of interest" value in the booking modal (SYSTEMS name).
const BOOKING_SERVICE = CAPTURE?.name ?? "Capture system";

const SETUP_FEE = "€1,399";
const ESSENTIAL_MONTHLY = "€599";
const PRO_MONTHLY = "€999";

const TRUST = ["Live on your WhatsApp in 48 hours", "Replies in under 3 seconds", "40+ languages", "GDPR-compliant"];

const PROBLEMS = [
  { icon: Clock, title: "Time zone barriers", description: "Enquiries sit unanswered for hours while your team sleeps." },
  { icon: Hourglass, title: "Response delays", description: "Delayed replies turn warm patients into cold leads." },
  { icon: Users, title: "Coordinator overload", description: "Staff spend valuable time filtering unqualified enquiries by hand instead of focusing on serious patients." },
  { icon: Repeat, title: "Missed follow-ups", description: "Without automation, potential patients slip through the cracks." },
];

const PROBLEM_PARAGRAPHS = [
  "WhatsApp is the main channel patients use in many markets, including Turkey, the Gulf and across Europe. But staffing WhatsApp 24/7 is expensive, and every missed message is a missed patient.",
  "A patient who messages at 11pm and gets no reply until the next morning has often already contacted other clinics. The first clinic to reply usually wins the conversation.",
];

const SOLUTIONS = [
  { icon: Zap, title: "Replies instantly", description: "24/7 replies to every enquiry in under 3 seconds, whatever the time zone." },
  { icon: Filter, title: "Automated qualification", description: "Sorts patients by treatment type, budget and timeline, and scores each lead." },
  { icon: Repeat, title: "Smart follow-up", description: "Re-engages patients automatically when they stop replying." },
  { icon: Route, title: "High-value routing", description: "Only serious, qualified patients are handed over to your clinic team." },
  { icon: ScanEye, title: "Vision AI photo pre-sorting", description: "Patient photos are sorted against your doctors' rules and queued for review. Never a diagnosis." },
  { icon: UserRound, title: "Human handoff", description: "Medical questions, complaints and anything outside its instructions go to a person, with a summary." },
];

const EXTRAS = [
  { icon: Languages, title: "Detects the patient's language", description: "Replies in the language the patient writes in, from 40+ languages." },
  { icon: Mic, title: "Voice notes understood", description: "Voice messages are transcribed and answered like any other message." },
  { icon: CalendarCheck, title: "Bookings in your calendar", description: "Consultations are booked straight into your calendar." },
  { icon: Inbox, title: "Every conversation visible", description: "Your team sees every chat on your own WhatsApp Business number and can take over at any point." },
];

const GUARDRAILS = [
  { icon: ShieldCheck, title: "Pre-qualification and intake only", description: "It answers practical questions, collects treatment interest, budget, travel dates and photos, and prepares the case for your coordinators." },
  { icon: Stethoscope, title: "Never a diagnosis", description: "It never gives a diagnosis, a candidacy decision or a final price. Photos are sorted against your doctors' rules and always reviewed by your medical team." },
  { icon: UserRound, title: "Medical questions go to a person", description: "Medical questions, complaints and anything outside its instructions go straight to a person, with a summary. Your team can take over any chat." },
  { icon: Lock, title: "GDPR and EU data handling", description: "GDPR-compliant, encrypted and never shared with third parties. Conversations stay in your own WhatsApp Business account and systems." },
];

const STEPS = [
  { title: "We build it for you", description: "We connect your WhatsApp Business number and set up and train the whole system within 48 hours of onboarding. No technical skills needed on your side." },
  { title: "A patient enquires", description: "An international patient sends your clinic a message on WhatsApp, at any hour." },
  { title: "The AI replies and qualifies", description: "The AI replies in under 3 seconds, answers the key questions, sorts the photos and collects the qualification details." },
  { title: "Handoff to your team", description: "Qualified patients go to your coordinators to book the consultation. Your team sees every conversation and can step in at any time." },
];

const DESIGNED_FOR = [
  "Medical tourism clinics actively serving international patients",
  "Clinics receiving high volumes of WhatsApp enquiries",
  "Clinic owners who want a fully managed lead qualification system, without hiring extra staff",
];
const NOT_FOR = ["Clinics that do not handle international patients", "Clinics unwilling to implement structured automation"];

const OTHER_INDUSTRIES = [
  { industry: "Real estate agencies", useCase: "Reply instantly to every property enquiry and schedule viewings automatically." },
  { industry: "eCommerce stores", useCase: "Handle order questions, returns and product support on WhatsApp around the clock." },
  { industry: "Any business on WhatsApp", useCase: "Turn every WhatsApp message into a qualified lead without extra staff." },
];

const RESULTS = [
  { value: "< 3s", label: "Response time", description: "Every patient gets an instant reply, day or night" },
  { value: "24/7", label: "Always on", description: "No missed leads because of time zones or office hours" },
  { value: "40+", label: "Hours saved per month", description: "Less manual messaging for your team" },
  { value: "+60%", label: "More consultations booked", description: "What clinics can expect once qualified leads move straight to booking" },
];

const ESSENTIAL_FEATURES = [
  "24/7 AI replies on your WhatsApp number",
  "Automated patient qualification",
  "Smart follow-up sequences",
  "Qualified lead handoff",
  "Replies in 40+ languages",
];
const PRO_FEATURES = ["Up to 3 WhatsApp numbers", "Weekly reporting dashboard", "Dedicated account manager"];

// Scope of each clinic project, as on webimot.com (no performance figures).
const PROJECT_SCOPE: Record<string, string> = {
  "gorkem-atsal-clinic": "Facial plastic surgery clinic, Istanbul · website, CRM, AI WhatsApp chatbot, Google and Meta Ads, SEO",
  "clinish-dental-clinic": "Clinic · website, social media, Meta Business Suite and Meta ads, search and analytics",
  "prime-hair": "Clinic · Meta and Google ads, website and SEO, sales and patient enquiries, social media",
  "msb-aesthetic": "Clinic · Meta and Google ads, website and SEO, sales and patient enquiries, social media",
  estetizm: "Clinic · Meta and Google ads, website and SEO, sales and patient enquiries, social media",
};
const clinicProjects = caseStudies.filter((cs) => cs.category === "Clinic");

const FOUNDER_FACTS = [
  { label: "Clinic sales and marketing since 2021", description: "BHT Clinic (Tema Hospital), Ariana Health Clinic and Dr. Görkem Atsal Clinic in Istanbul; digital marketing for WaveMed, a US healthcare startup" },
  { label: "AI agents and automation", description: "WhatsApp AI agents, CRMs and workflows built with n8n, the OpenAI API and the WhatsApp Cloud API" },
  { label: "MSc Information Technology", description: "Azad University; completing an MSc in Consultancy and Entrepreneurship at Rotterdam Business School" },
  { label: "Languages", description: "English · Turkish · Persian · Kurdish · basic Dutch" },
];

const POSTS = [
  {
    slug: "why-clinics-lose-international-leads",
    category: "Lead management",
    title: "Why Hair Transplant Clinics Lose International Leads (And How to Fix It)",
    description: "International patients message several clinics before choosing one. If your clinic does not reply within minutes, the lead is gone. Here is the fix.",
  },
  {
    slug: "whatsapp-automation-medical-tourism",
    category: "Clinic automation",
    title: "WhatsApp Automation for Medical Tourism: How Clinics Book More Consultations Without More Staff",
    description: "How medical tourism clinics use WhatsApp automation to qualify leads, follow up 24/7 and turn more enquiries into consultations.",
  },
  {
    slug: "qualify-international-patients-automatically",
    category: "Operations",
    title: "How to Qualify International Patients Automatically (Without Hiring More Staff)",
    description: "A systematic approach to qualifying international patient enquiries automatically, so your coordinators only talk to serious patients.",
  },
];

const DEMO_BENEFITS = [
  { title: "Quick setup", description: "Live on your WhatsApp within 48 hours" },
  { title: "No technical skills required", description: "We handle the entire setup for you" },
  { title: "GDPR-compliant", description: "Your patient data is secure and protected" },
];

// English FAQ (webimot.com FAQ merged with the agency's WhatsApp AI answers). The founding-offer
// numbers are interpolated so they always match foundingOffer.ts.
const FAQ_VALUES = { setupFee: FOUNDING_OFFER.setupFee, spotsLeft: FOUNDING_OFFER.spotsLeft, spotsTotal: FOUNDING_OFFER.spotsTotal };
const FAQS = [
  {
    question: "What exactly does the WhatsApp AI do?",
    answer: "Webimot's WhatsApp AI is an AI agent for medical tourism clinics, built and managed for you. It replies to every patient enquiry on WhatsApp in under 3 seconds, 24/7, qualifies leads by treatment type, budget and timeline, and routes serious patients straight to your team, so no booking is missed.",
  },
  {
    question: "Does the AI run on our own WhatsApp number?",
    answer: "Yes. We connect the AI to your clinic's existing WhatsApp Business number, so patients keep writing to the number they already know. Your team sees every conversation and can take over at any point.",
  },
  {
    question: "How quickly can we get started?",
    answer: "The WhatsApp AI is live within 48 hours of onboarding. We do the full setup: you answer a few questions about your clinic, procedures, prices and FAQs.",
  },
  {
    question: "Which languages does it handle?",
    answer: "40+ languages, detected automatically from the first message. For medical tourism clinics the most common are English, German, Dutch, Arabic, French, Russian and Turkish. Patients write in their own language and get a natural, accurate reply.",
  },
  {
    question: "How does patient qualification work?",
    answer: "The AI asks structured follow-up questions about the treatment the patient wants, their budget range and travel timeline. Only patients who meet your criteria are passed to your team, which saves hours of manual back-and-forth.",
  },
  {
    question: "How does photo pre-qualification work, and is it medically safe?",
    answer: "Patients send photos on WhatsApp as they do today. The AI sorts and pre-qualifies them against rules your doctors define (for example graft range), so your coordinators and doctors see a prepared case, not a raw chat. It never gives a diagnosis, a candidacy decision or a final price: those always come from your medical team.",
  },
  {
    question: "Does the AI give medical advice?",
    answer: "No. The AI is a front desk, not a doctor. It handles practical questions, collects treatment interest, budget, travel dates and photos, and prepares the case for your coordinators. Medical questions are handed to a person, with a summary.",
  },
  {
    question: "Is our patient data secure and GDPR-compliant?",
    answer: "Yes. Conversations and photos are encrypted, handled under EU data protection rules (GDPR) and never shared with third parties or used to train public models. Patient data stays in your WhatsApp Business account and your own systems.",
  },
  {
    question: "How much does it cost?",
    answer: `Essential is ${SETUP_FEE} one-time setup plus ${ESSENTIAL_MONTHLY} per month. Pro, with up to 3 WhatsApp numbers, a weekly reporting dashboard and a dedicated account manager, is ${PRO_MONTHLY} per month. Founding client offer: the {{setupFee}} setup fee is waived for our first {{spotsTotal}} WhatsApp AI clinics ({{spotsLeft}} of {{spotsTotal}} spots remaining). One extra international booking (typically €3,000–€15,000) covers the monthly fee.`,
  },
  {
    question: "Is there a minimum commitment, and what if it does not work?",
    answer: "We ask for a 3-month minimum so the system has time to learn your clinic. If it does not generate at least 3 qualified patient leads in your first 30 days, we refund your first month.",
  },
];
const fillFounding = (s: string) =>
  s.replace(/\{\{(\w+)\}\}/g, (_, k: keyof typeof FAQ_VALUES) => String(FAQ_VALUES[k] ?? ""));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "WhatsApp AI",
      alternateName: "Webimot WhatsApp AI",
      description:
        "AI agent for clinics and medical tourism on WhatsApp: replies to every patient enquiry in under 3 seconds, 24/7, in 40+ languages, qualifies leads, pre-sorts photos (never a diagnosis) and books consultations. Live in 48 hours.",
      url: CANONICAL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "WhatsApp Business",
      audience: { "@type": "Audience", audienceType: "Clinics, hair transplant, dental, cosmetic surgery and medical tourism providers" },
      provider: { "@type": "Organization", name: "Webimot Agency", url: "https://webimotagency.com" },
      featureList: [...SOLUTIONS, ...EXTRAS].map((f) => f.title),
      offers: [
        {
          "@type": "Offer",
          name: "Essential",
          url: `${CANONICAL}#pricing`,
          priceCurrency: "EUR",
          price: "599",
          description: "€1,399 one-time setup plus €599 per month. 3-month minimum.",
          priceSpecification: [
            { "@type": "UnitPriceSpecification", price: "599", priceCurrency: "EUR", unitCode: "MON", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
            { "@type": "PriceSpecification", name: "One-time setup", price: "1399", priceCurrency: "EUR" },
          ],
        },
        {
          "@type": "Offer",
          name: "Pro",
          url: `${CANONICAL}#pricing`,
          priceCurrency: "EUR",
          price: "999",
          description: "Everything in Essential, up to 3 WhatsApp numbers, weekly reporting dashboard and a dedicated account manager. €999 per month, 3-month minimum.",
          priceSpecification: [
            { "@type": "UnitPriceSpecification", price: "999", priceCurrency: "EUR", unitCode: "MON", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
          ],
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: fillFounding(f.answer) } })),
    },
  ],
};

export default function WhatsAppAIPage() {
  const { openModal } = useBookingModal();
  const { t, i18n } = useTranslation();
  const lng = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);
  const dir = useDir();
  // Turkish, Dutch and Spanish write €1,399 as €1.399; Arabic keeps the English €1,399. The number
  // itself comes from FOUNDING_OFFER.
  const setupFee = lng === "en" || lng === "ar" ? FOUNDING_OFFER.setupFee : FOUNDING_OFFER.setupFee.replace(/,/g, ".");
  const founding = { setupFee, spotsLeft: FOUNDING_OFFER.spotsLeft, spotsTotal: FOUNDING_OFFER.spotsTotal };
  const book = () => openModal(BOOKING_SERVICE);

  const trust = TRUST.map((x, i) => t(`whatsappAiPage.hero.trust.${i}`, x));
  const problems = PROBLEMS.map((x, i) => ({ ...x, title: t(`whatsappAiPage.problem.items.${i}.title`, x.title), description: t(`whatsappAiPage.problem.items.${i}.description`, x.description) }));
  const problemParagraphs = PROBLEM_PARAGRAPHS.map((x, i) => t(`whatsappAiPage.problem.paragraphs.${i}`, x));
  const solutions = SOLUTIONS.map((x, i) => ({ ...x, title: t(`whatsappAiPage.solution.items.${i}.title`, x.title), description: t(`whatsappAiPage.solution.items.${i}.description`, x.description) }));
  const extras = EXTRAS.map((x, i) => ({ ...x, title: t(`whatsappAiPage.solution.extras.${i}.title`, x.title), description: t(`whatsappAiPage.solution.extras.${i}.description`, x.description) }));
  const guardrails = GUARDRAILS.map((x, i) => ({ ...x, title: t(`whatsappAiPage.guardrails.items.${i}.title`, x.title), description: t(`whatsappAiPage.guardrails.items.${i}.description`, x.description) }));
  const steps = STEPS.map((x, i) => ({ title: t(`whatsappAiPage.howItWorks.steps.${i}.title`, x.title), description: t(`whatsappAiPage.howItWorks.steps.${i}.description`, x.description) }));
  const designedFor = DESIGNED_FOR.map((x, i) => t(`whatsappAiPage.whoIsItFor.designedFor.${i}`, x));
  const notFor = NOT_FOR.map((x, i) => t(`whatsappAiPage.whoIsItFor.notFor.${i}`, x));
  const otherIndustries = OTHER_INDUSTRIES.map((x, i) => ({ industry: t(`whatsappAiPage.whoIsItFor.other.items.${i}.industry`, x.industry), useCase: t(`whatsappAiPage.whoIsItFor.other.items.${i}.useCase`, x.useCase) }));
  const results = RESULTS.map((x, i) => ({ value: t(`whatsappAiPage.results.stats.${i}.value`, x.value), label: t(`whatsappAiPage.results.stats.${i}.label`, x.label), description: t(`whatsappAiPage.results.stats.${i}.description`, x.description) }));
  const essentialFeatures = ESSENTIAL_FEATURES.map((x, i) => t(`whatsappAiPage.pricing.essentialFeatures.${i}`, x));
  const proFeatures = PRO_FEATURES.map((x, i) => t(`whatsappAiPage.pricing.proFeatures.${i}`, x));
  const founderFacts = FOUNDER_FACTS.map((x, i) => ({ label: t(`whatsappAiPage.founder.facts.${i}.label`, x.label), description: t(`whatsappAiPage.founder.facts.${i}.description`, x.description) }));
  const posts = POSTS.map((x, i) => ({ ...x, category: t(`whatsappAiPage.blog.posts.${i}.category`, x.category), title: t(`whatsappAiPage.blog.posts.${i}.title`, x.title), description: t(`whatsappAiPage.blog.posts.${i}.description`, x.description) }));
  const demoBenefits = DEMO_BENEFITS.map((x, i) => ({ title: t(`whatsappAiPage.demo.benefits.${i}.title`, x.title), description: t(`whatsappAiPage.demo.benefits.${i}.description`, x.description) }));
  const faqs = FAQS.map((f, i) => ({
    question: t(`whatsappAiPage.faq.items.${i}.question`, f.question),
    answer: t(`whatsappAiPage.faq.items.${i}.answer`, { defaultValue: f.answer, ...founding }),
  }));

  const chatTexts = {
    ariaLabel: t("whatsappAiPage.hero.chat.ariaLabel", "Example WhatsApp conversation: a patient asks about a hair transplant at 3:42 AM and the AI replies instantly."),
    clinicName: t("whatsappAiPage.hero.chat.clinicName", "Istanbul Hair Clinic"),
    online: t("whatsappAiPage.hero.chat.online", "Online"),
    patientMsg: t("whatsappAiPage.hero.chat.patientMsg", "Hi, I'm interested in a hair transplant. What's the cost?"),
    aiMsg1: t("whatsappAiPage.hero.chat.aiMsg1", "Hello! Thank you for reaching out. I'm the AI assistant for Istanbul Hair Clinic."),
    aiMsg2: t("whatsappAiPage.hero.chat.aiMsg2", "Our medical team confirms the price after reviewing your case. To prepare it, may I ask a few quick questions?"),
    aiTyping: t("whatsappAiPage.hero.chat.aiTyping", "AI replying instantly..."),
    time: t("whatsappAiPage.hero.chat.time", "3:42 AM"),
    caption: t("whatsappAiPage.hero.chat.caption", "Illustrative example. The clinic is not a real client."),
  };
  const videoTexts = {
    posterText: t("whatsappAiPage.video.posterText", "Click to watch the video"),
    playLabel: t("whatsappAiPage.video.playLabel", "Play the WhatsApp AI demo video (loads YouTube)"),
    closeLabel: t("whatsappAiPage.video.closeLabel", "Close the video"),
    iframeTitle: t("whatsappAiPage.video.iframeTitle", "WhatsApp AI demo video"),
    regionLabel: t("whatsappAiPage.video.regionLabel", "Demo video"),
  };

  return (
    <>
      <SEO
        title="WhatsApp AI Agent for Clinics & Medical Tourism | Webimot"
        description="WhatsApp AI agent for clinics and medical tourism: replies to every patient enquiry in under 3 seconds, 24/7, in 40+ languages, qualifies leads and books consultations. Live in 48 hours. From €599/month."
        keywords="WhatsApp AI agent for clinics, medical tourism WhatsApp AI, WhatsApp chatbot for clinics, AI receptionist for clinics, hair transplant clinic WhatsApp, dental clinic WhatsApp automation, patient enquiry automation, WhatsApp Business AI"
        canonicalUrl={CANONICAL}
        schema={schema}
      />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />
        <main id="main-content" dir={dir} className="flex-1 overflow-x-clip">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-16 md:py-24">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
            <div className="container relative z-10 mx-auto px-6">
              <Breadcrumbs
                items={[
                  { label: t("whatsappAiPage.breadcrumb.systems", "Systems"), href: "/systems" },
                  { label: "WhatsApp AI" },
                ]}
              />
              <div className="grid items-center gap-12 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-7">
                  <SectionHeader
                    as="h1"
                    align="left"
                    eyebrow={t("whatsappAiPage.hero.eyebrow", "WhatsApp AI for clinics · Amsterdam · Istanbul")}
                    title={
                      <>
                        {t("whatsappAiPage.hero.title", "Stop losing international patient enquiries to")}{" "}
                        <span className="text-gradient-ai">{t("whatsappAiPage.hero.titleHighlight", "delayed replies")}</span>
                      </>
                    }
                    lead={t(
                      "whatsappAiPage.hero.lead",
                      "The AI-powered WhatsApp system, built and managed for you, that replies to international patient enquiries in under 3 seconds, qualifies leads and books more consultations, 24/7 and in 40+ languages.",
                    )}
                    className="max-w-3xl"
                  />
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800" onClick={book} data-testid="button-hero-demo">
                      {t("whatsappAiPage.cta.book", "Book a demo")} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white">
                      <a href="#how-it-works">
                        <Play className="me-2 h-4 w-4" aria-hidden="true" /> {t("whatsappAiPage.hero.seeHow", "See how it works")}
                      </a>
                    </Button>
                  </div>
                  <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-slate-600 sm:grid-cols-2" aria-label={t("whatsappAiPage.hero.trustLabel", "Key facts")}>
                    {trust.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-700" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                    <Link href="/systems#capture" data-testid="link-product-system" className="inline-flex items-center gap-1.5 text-blue-700 hover:text-slate-900">
                      <span aria-hidden="true">{CAPTURE?.emoji}</span>
                      {t("whatsappAiPage.hero.partOf", "Part of the Capture system")}
                      <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-blue-700 hover:text-slate-900">
                      <MessageSquare className="h-4 w-4" aria-hidden="true" /> {t("whatsappAiPage.cta.whatsapp", "Chat on WhatsApp")}
                    </a>
                  </div>
                </div>
                <div className="min-w-0 lg:col-span-5">
                  <ChatMockup texts={chatTexts} />
                </div>
              </div>
              <div className="mx-auto mt-16 max-w-4xl">
                <DemoVideo texts={videoTexts} />
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24" aria-labelledby="problem-title">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-5xl px-6">
              <SectionHeader
                id="problem-title"
                tone="dark"
                eyebrow={t("whatsappAiPage.problem.eyebrow", "The challenge")}
                title={t("whatsappAiPage.problem.title", "Why clinics lose international patient enquiries")}
                lead={t("whatsappAiPage.problem.lead", "Handling international patient leads is a race against time. When patients enquire from other time zones, your clinic is often closed.")}
                className="mb-10"
              />
              <ul className="grid gap-4 sm:grid-cols-2">
                {problems.map((p) => (
                  <li key={p.title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
                    <p.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" aria-hidden="true" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{p.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold text-white md:text-2xl">
                {t("whatsappAiPage.problem.quote", "This is not a staff failure. It is a")}{" "}
                <span className="text-secondary">{t("whatsappAiPage.problem.quoteHighlight", "system limitation")}</span>
                {t("whatsappAiPage.problem.quoteEnd", ".")}
              </p>
              <div className="mx-auto mt-10 max-w-3xl space-y-4">
                {problemParagraphs.map((p) => (
                  <p key={p} className="text-lg leading-relaxed text-white/70">{p}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="solution-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="solution-title"
                eyebrow={t("whatsappAiPage.solution.eyebrow", "The solution")}
                title={t("whatsappAiPage.solution.title", "Automate patient acquisition on WhatsApp")}
                lead={t("whatsappAiPage.solution.lead", "We install a dedicated AI-powered WhatsApp system designed for medical tourism. It handles every incoming message the moment it arrives, in the patient's language, at any hour.")}
                className="mb-10"
              />
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {solutions.map((s) => (
                  <li key={s.title} className="surface-card flex flex-col p-6">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700" aria-hidden="true">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mb-4 mt-12 text-center text-lg font-semibold text-slate-900">{t("whatsappAiPage.solution.extrasTitle", "Also included")}</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {extras.map((e) => (
                  <li key={e.title} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <e.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">{e.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{e.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Medical and privacy guardrails */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="guardrails-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="guardrails-title"
                eyebrow={t("whatsappAiPage.guardrails.eyebrow", "Medical and privacy guardrails")}
                title={t("whatsappAiPage.guardrails.title", "What the AI does, and what it never does")}
                lead={t("whatsappAiPage.guardrails.lead", "The AI is a front desk, not a doctor. It prepares patients for your team; your medical team makes every medical decision.")}
                className="mb-10"
              />
              <ul className="grid gap-4 md:grid-cols-2">
                {guardrails.map((g) => (
                  <li key={g.title} className="surface-card flex items-start gap-3 p-5">
                    <g.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" aria-hidden="true" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900">{g.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{g.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="scroll-mt-24 bg-white py-16 md:py-24" aria-labelledby="how-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="how-title"
                eyebrow={t("whatsappAiPage.howItWorks.eyebrow", "How it works")}
                title={t("whatsappAiPage.howItWorks.title", "A simple 4-step process")}
                className="mb-10"
              />
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="surface-card flex flex-col p-6">
                    <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 font-mono text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Who it's for */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="who-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="who-title"
                eyebrow={t("whatsappAiPage.whoIsItFor.eyebrow", "Who it's for")}
                title={t("whatsappAiPage.whoIsItFor.title", "Is the WhatsApp AI right for your clinic?")}
                className="mb-10"
              />
              <div className="grid gap-6 md:grid-cols-2">
                <div className="surface-card p-6 md:p-7">
                  <h3 className="mb-4 font-bold text-slate-900">{t("whatsappAiPage.whoIsItFor.designedForTitle", "Designed for")}</h3>
                  <ul className="space-y-3">
                    {designedFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="surface-card p-6 md:p-7">
                  <h3 className="mb-4 font-bold text-slate-900">{t("whatsappAiPage.whoIsItFor.notForTitle", "Not for")}</h3>
                  <ul className="space-y-3">
                    {notFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="mb-4 text-center text-lg font-semibold text-slate-900">{t("whatsappAiPage.whoIsItFor.other.title", "Not a clinic? The same WhatsApp AI also runs for")}</h3>
                <ul className="grid gap-3 md:grid-cols-3">
                  {otherIndustries.map((o) => (
                    <li key={o.industry} className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-sm font-semibold text-slate-900">{o.industry}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{o.useCase}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-center">
                  <Link href="/small-business" className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-slate-900">
                    {t("whatsappAiPage.whoIsItFor.other.link", "How we help small businesses")} <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Clinic work by our founder */}
          {clinicProjects.length > 0 && (
            <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="work-title">
              <div className="container mx-auto max-w-5xl px-6">
                <SectionHeader
                  id="work-title"
                  eyebrow={t("whatsappAiPage.work.eyebrow", "Our work")}
                  title={t("whatsappAiPage.work.title", "Clinic work by our founder")}
                  lead={t("whatsappAiPage.work.lead", "Projects delivered by our founder, Sia Ahmadi, for clinics in Istanbul. Each write-up sets out the scope of the work, without performance figures or quotes.")}
                  className="mb-10"
                />
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {clinicProjects.map((cs) => (
                    <li key={cs.slug}>
                      <Link href={`/case-studies/${cs.slug}`} className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <article className="surface-card-interactive flex h-full flex-col p-6">
                          <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{t("whatsappAiPage.work.label", "Work by our founder")}</p>
                          <h3 className="mb-2 font-bold leading-snug text-slate-900">{cs.client}</h3>
                          <p className="flex-1 text-sm leading-relaxed text-slate-600">
                            {PROJECT_SCOPE[cs.slug] ? t(`whatsappAiPage.work.projects.${cs.slug}`, PROJECT_SCOPE[cs.slug]) : cs.summary}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-slate-900">
                            {t("whatsappAiPage.work.readMore", "Read the project write-up")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                          </span>
                        </article>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/case-studies/webimot-whatsapp-ai" className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <article className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center">
                        <Wrench className="mx-auto mb-3 h-5 w-5 text-blue-700" aria-hidden="true" />
                        <h3 className="font-bold text-slate-900">{t("whatsappAiPage.work.productTitle", "How we built the WhatsApp AI")}</h3>
                        <span className="mt-2 inline-flex items-center justify-center gap-1 text-sm font-medium text-blue-700 group-hover:text-slate-900">
                          {t("whatsappAiPage.work.productLink", "Read the product write-up")} <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                        </span>
                      </article>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <article className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Webimot Agency</span>
                        <span className="mt-2 inline-flex items-center gap-1 font-semibold text-blue-700 group-hover:text-slate-900">
                          {t("whatsappAiPage.work.all", "See all our work")} <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                        </span>
                      </article>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          )}

          {/* Results */}
          <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24" aria-labelledby="results-title">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-5xl px-6">
              <SectionHeader
                id="results-title"
                tone="dark"
                eyebrow={t("whatsappAiPage.results.eyebrow", "Results")}
                title={t("whatsappAiPage.results.title", "Results clinics can expect")}
                lead={t("whatsappAiPage.results.lead", "From the moment the WhatsApp AI goes live, every international enquiry gets an answer and the serious patients reach your coordinators.")}
                className="mb-10"
              />
              <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {results.map((r) => (
                  <div key={r.label} className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                    <dt className="order-2 text-sm font-semibold text-white">{r.label}</dt>
                    <dd dir="ltr" className="order-1 mb-1 text-3xl font-bold text-gradient-ai md:text-4xl">{r.value}</dd>
                    <dd className="order-3 mt-1 text-xs leading-relaxed text-white/60">{r.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-white/50">
                {t("whatsappAiPage.results.note", "Figures show what clinics can expect once the system is live, not guaranteed results.")}
              </p>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="scroll-mt-24 bg-white py-16 md:py-24" aria-labelledby="pricing-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="pricing-title"
                eyebrow={t("whatsappAiPage.pricing.eyebrow", "Pricing")}
                title={t("whatsappAiPage.pricing.title", "Transparent pricing")}
                className="mb-10"
              />
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    name: "Essential",
                    monthly: ESSENTIAL_MONTHLY,
                    recommended: true,
                    items: essentialFeatures,
                  },
                  {
                    name: "Pro",
                    monthly: PRO_MONTHLY,
                    recommended: false,
                    items: [t("whatsappAiPage.pricing.everythingInEssential", "Everything in Essential"), ...proFeatures],
                  },
                ].map((plan) => (
                  <div key={plan.name} className={`surface-card relative flex flex-col p-6 md:p-7 ${plan.recommended ? "ring-2 ring-slate-900" : ""}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                      {plan.recommended && (
                        <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-white">{t("whatsappAiPage.pricing.recommended", "Recommended")}</span>
                      )}
                    </div>
                    <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <span className="line-through decoration-slate-400">{t("whatsappAiPage.pricing.setup", "€1,399 one-time setup")}</span>
                      <span className="rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">{t("whatsappAiPage.founding.badge", foundingOfferBadge)}</span>
                    </p>
                    <p className="mt-3 text-4xl font-bold text-slate-900">
                      {plan.monthly}
                      <span className="text-base font-normal text-slate-500">{t("whatsappAiPage.pricing.perMonth", "/month")}</span>
                    </p>
                    <ul className="mt-5 flex-1 space-y-2">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700" aria-hidden="true" /> {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      variant={plan.recommended ? "default" : "outline"}
                      className={`mt-6 w-full rounded-full ${plan.recommended ? "bg-slate-900 text-white hover:bg-slate-800" : "border-slate-300 text-slate-900"}`}
                      onClick={book}
                    >
                      {t("whatsappAiPage.cta.book", "Book a demo")}
                    </Button>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-semibold text-amber-800" data-testid="text-founding-offer">
                {t("whatsappAiPage.founding.spots", foundingOfferSpots, founding)}.{" "}
                {t("whatsappAiPage.founding.waived", "The {{setupFee}} setup fee is waived for our first {{spotsTotal}} WhatsApp AI clinics.", founding)}
              </p>
              <div className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-700" aria-hidden="true" />
                <p className="text-sm font-medium leading-relaxed text-emerald-900">
                  {t("whatsappAiPage.pricing.guarantee", "3-month minimum, so the system has time to learn your clinic. If it does not generate at least 3 qualified patient leads in your first 30 days, we refund your first month, no questions asked.")}
                </p>
              </div>
              <div className="mx-auto mt-6 max-w-3xl space-y-1 text-center">
                <p className="font-medium text-slate-900">{t("whatsappAiPage.pricing.roi", "One additional international patient booking covers the entire monthly fee.")}</p>
                <p className="text-sm text-slate-600">{t("whatsappAiPage.pricing.roiSub", "Typical medical tourism procedure value: €3,000–€15,000.")}</p>
                <p className="pt-3 text-sm text-slate-600">{t("whatsappAiPage.pricing.setupNote", "We build and configure the entire system for you. No technical knowledge required.")}</p>
                <p className="text-sm text-slate-600">{t("whatsappAiPage.pricing.note", "The system works 24/7 for a fraction of the cost of hiring one extra patient coordinator.")}</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24 bg-muted/30 py-16 md:py-24" aria-labelledby="faq-title">
            <div className="container mx-auto max-w-3xl px-6">
              <div className="mb-10 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{t("whatsappAiPage.faq.badge", "FAQ")}</span>
                </div>
                <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">{t("whatsappAiPage.faq.title", "Frequently asked questions")}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className="text-start text-base font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Founder */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="founder-title">
            <div className="container mx-auto max-w-4xl px-6">
              <div className="surface-card grid items-start gap-8 p-6 md:grid-cols-[200px_1fr] md:gap-10 md:p-10">
                <img
                  src="/sia-ahmadi-720.webp"
                  srcSet="/sia-ahmadi-480.webp 480w, /sia-ahmadi-720.webp 720w"
                  sizes="200px"
                  alt={t("whatsappAiPage.founder.imageAlt", "Sia Ahmadi, founder of Webimot Agency")}
                  width={1200}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto w-full max-w-[200px] rounded-2xl border border-slate-200 object-cover md:mx-0"
                />
                <div className="min-w-0">
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{t("whatsappAiPage.founder.eyebrow", "Meet the founder")}</p>
                  <h2 id="founder-title" className="text-2xl font-bold leading-snug text-slate-900 md:text-3xl">
                    {t("whatsappAiPage.founder.title", "Built by someone who has answered patient enquiries first-hand")}
                  </h2>
                  <p className="mb-4 mt-2 text-sm font-medium text-blue-700">{t("about.founder.name")} · {t("about.founder.role")}</p>
                  <p className="mb-5 leading-relaxed text-slate-600">
                    {t(
                      "whatsappAiPage.founder.bio",
                      "I founded Webimot in January 2025 and do the work myself: websites, CRMs, ad campaigns, search optimisation and the AI agents, which I build with n8n, the OpenAI API and the WhatsApp Cloud API. Since 2021 I have worked in sales and marketing for clinics in Istanbul that treat international patients, and since November 2023 with Dr. Görkem Atsal Clinic as a freelance sales and marketing specialist. Webimot's WhatsApp AI is what I wish had existed when I was handling those enquiries myself.",
                    )}
                  </p>
                  <dl className="mb-6 space-y-3">
                    {founderFacts.map((f) => (
                      <div key={f.label}>
                        <dt className="text-sm font-semibold text-slate-900">{f.label}</dt>
                        <dd className="text-sm leading-relaxed text-slate-600">{f.description}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <Link href="/sia-ahmadi" className="inline-flex items-center gap-2 font-semibold text-blue-700 underline-offset-4 hover:underline" data-testid="link-founder-bio">
                      {t("whatsappAiPage.founder.link", "Read the full bio")} <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                    <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-slate-700 underline-offset-4 hover:underline">
                      {t("whatsappAiPage.founder.linkedin", "Sia on LinkedIn")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* From the blog */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="blog-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="blog-title"
                eyebrow={t("whatsappAiPage.blog.eyebrow", "Resources")}
                title={t("whatsappAiPage.blog.title", "From the blog")}
                className="mb-10"
              />
              <ul className="grid gap-4 md:grid-cols-3">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <article className="surface-card-interactive flex h-full flex-col p-6">
                        <span className="mb-3 self-start rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">{post.category}</span>
                        <h3 className="mb-2 font-semibold leading-snug text-slate-900">{post.title}</h3>
                        <p className="flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-slate-900">
                          {t("whatsappAiPage.blog.read", "Read the article")} <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                        </span>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
              {lng !== "en" && <p className="mt-6 text-center text-xs text-slate-500">{t("whatsappAiPage.blog.lang", "Articles are in English.")}</p>}
              <p className="mt-4 text-center">
                <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-slate-900">
                  {t("whatsappAiPage.blog.all", "All articles")} <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </section>

          {/* Final demo CTA */}
          <section className="relative overflow-hidden bg-[#020817] py-16 md:py-24" aria-labelledby="demo-title">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
              <p className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary md:text-xs">
                <Bot className="h-4 w-4" aria-hidden="true" /> {t("whatsappAiPage.demo.eyebrow", "Get started")}
              </p>
              <h2 id="demo-title" className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {t("whatsappAiPage.demo.title", "Professionalise your international patient communication")}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                {t("whatsappAiPage.demo.text", "Eliminate missed leads and response delays. Book a 30-minute demo on your own WhatsApp number: send a real patient enquiry and watch the AI answer it in the patient's language. No commitment.")}
              </p>
              <ul className="mx-auto mb-8 grid max-w-2xl gap-3 text-start sm:grid-cols-3">
                {demoBenefits.map((b) => (
                  <li key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                      <Check className="h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" /> {b.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/60">{b.description}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full bg-white px-7 text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]" onClick={book} data-testid="button-demo-cta">
                  {t("whatsappAiPage.cta.book", "Book a demo")} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/10 px-7 text-white hover:bg-white/15 hover:text-white focus-visible:ring-offset-[#020817]">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="me-2 h-4 w-4" aria-hidden="true" /> {t("whatsappAiPage.cta.whatsapp", "Chat on WhatsApp")}
                  </a>
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
