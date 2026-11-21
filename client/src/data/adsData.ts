// Content for the two paid-ads landing pages (/services/meta-ads, /services/google-ads).
// Only real, checkable facts: no invented campaign results. Proof comes from the
// founder's named clinic engagements in caseStudiesData.

export type AdsSlug = "meta-ads" | "google-ads";

export interface AdsPageData {
  slug: AdsSlug;
  platform: string;
  emoji: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  eyebrow: string;
  headline: string;
  lead: string;
  /** Case-study services label that marks a project as using this platform. */
  caseStudyService: string;
  problems: string[];
  deliverables: { title: string; desc: string }[];
  method: { label: string; points: string[] }[];
  policy: { title: string; desc: string };
  minSpend: string;
  faqs: { question: string; answer: string }[];
}

const sharedFaqs = (platform: string, minSpend: string) => [
  {
    question: "What does it cost?",
    answer: `There are two parts. The ad spend is paid by you, directly to ${platform}, so every euro of it goes into the campaigns. Our management fee is quoted after a free 30-minute strategy call, based on the number of campaigns, countries and languages. We recommend at least ${minSpend} a month in ad spend so the campaigns get enough data to optimise.`,
  },
  {
    question: "Who owns the ad account?",
    answer: "You do. Campaigns run in your own ad account, with your payment method, and we work in it as a partner. If you ever stop working with us, the account, the audiences and all the data stay with you.",
  },
  {
    question: "How long until we see results?",
    answer: "Campaigns launch in about two weeks, after tracking is in place. The first 2–4 weeks are a learning phase while the platform gathers data; most of the improvement comes over the following 2–3 months of testing. We will not promise a cost per lead before we have seen your account, your offer and your market.",
  },
  {
    question: "Do you answer the leads the ads bring in?",
    answer: "That is the part most agencies leave out. Leads can go straight into the Webimot WhatsApp AI, which replies in under 3 seconds, 24/7, in 40+ languages, qualifies the patient and books the consultation. It is optional, but it is where ad budget is usually lost: a lead nobody answers within the hour is mostly gone.",
  },
  {
    question: "Which countries and languages can you target?",
    answer: "Any market the platform allows. For medical tourism clinics the usual markets are Germany, the UK, the Netherlands, France and the Gulf, with ads and landing pages in the patient's language. Campaigns are split by country so you can see what each market costs and books.",
  },
];

export const ADS_PAGES: Record<AdsSlug, AdsPageData> = {
  "meta-ads": {
    slug: "meta-ads",
    platform: "Meta",
    emoji: "📣",
    seoTitle: "Meta Ads for Clinics & Medical Tourism | Webimot Agency",
    seoDescription:
      "Facebook and Instagram ads for clinics and medical tourism, run by a team that has managed ads for Istanbul clinics. Every lead answered on WhatsApp in under 3 seconds.",
    keywords:
      "Meta Ads for clinics, Facebook ads for clinics, Instagram ads medical tourism, hair transplant Facebook ads, dental clinic Meta ads, medical tourism advertising, Meta ads agency, clinic lead generation",
    eyebrow: "Meta Ads · Facebook & Instagram",
    headline: "Meta ads that fill your consultation calendar, not just your inbox.",
    lead:
      "Facebook and Instagram campaigns for clinics and medical tourism providers, built around the patient's whole path: the ad, the WhatsApp conversation and the booked consultation. Every lead answered in under 3 seconds.",
    caseStudyService: "Meta",
    problems: [
      "Leads arrive from instant forms at 23:00 and nobody answers until the next day. By then the patient has messaged three other clinics.",
      "The campaign is optimised for cheap leads, so the inbox fills with people who never meant to travel for treatment.",
      "Ads get rejected or the account gets restricted because health ads break Meta's rules on before-and-after images and personal attributes.",
      "Nobody can say which campaign produced a booked consultation, so budget goes to whatever looks cheapest per lead.",
    ],
    deliverables: [
      { title: "Strategy and audience research", desc: "Your treatments, prices and markets turned into a campaign plan: which countries, which audiences, which offer, which budget split." },
      { title: "Creatives and copy", desc: "Image and video ads and copy in the patient's language, written to fit Meta's health advertising policies." },
      { title: "Lead forms and click-to-WhatsApp", desc: "Instant forms with qualifying questions, or ads that open a WhatsApp chat with your clinic directly." },
      { title: "Tracking that reaches the booking", desc: "Meta Pixel, Conversions API and CRM events, so the platform learns from booked consultations, not just form fills." },
      { title: "Testing and optimisation", desc: "Creative, audience and offer tests every week; budget moved to what books consultations." },
      { title: "Weekly report", desc: "Spend, leads, qualified leads and consultations per campaign and country, in plain language." },
    ],
    method: [
      { label: "Research", points: ["Competitor ads in the Meta Ad Library", "What your best patients have in common", "Winning formats and angles in your niche", "Offer and price positioning per market"] },
      { label: "Target", points: ["Country-level campaigns: DE, UK, NL, Gulf and more", "Lookalike audiences built from real patients", "Retargeting of website and Instagram visitors", "Language-specific creatives and forms"] },
      { label: "Convert", points: ["Lead forms with qualifying questions", "Instant WhatsApp reply, 24/7", "Conversion events sent back to Meta", "Monthly creative refresh against ad fatigue"] },
    ],
    policy: {
      title: "Built to pass Meta's health ad rules",
      desc: "Meta restricts ads that imply knowledge of a person's health, and limits before-and-after imagery and certain claims for cosmetic and medical procedures. We write and design within those rules from the start, so campaigns are not stopped halfway through the learning phase.",
    },
    minSpend: "€500",
    faqs: [],
  },
  "google-ads": {
    slug: "google-ads",
    platform: "Google",
    emoji: "🔍",
    seoTitle: "Google Ads for Clinics & Medical Tourism | Webimot Agency",
    seoDescription:
      "Google Search ads for clinics and medical tourism: reach patients already searching for your treatment, with tracking to booked consultations and instant WhatsApp replies.",
    keywords:
      "Google Ads for clinics, Google Ads medical tourism, hair transplant Google Ads, dental clinic Google Ads, PPC for clinics, medical tourism PPC, Google Ads agency clinics, search ads clinics",
    eyebrow: "Google Ads · Search & YouTube",
    headline: "Google Ads for patients already searching for your treatment.",
    lead:
      "Search campaigns for clinics and medical tourism providers that target buying intent, such as \"hair transplant Turkey price\", in each patient's language and market, with tracking all the way to the booked consultation.",
    caseStudyService: "Google",
    problems: [
      "Broad keywords spend the budget on students, job seekers and people comparing free information.",
      "Ads send German and Arabic speakers to an English page, and the click is wasted.",
      "Conversion tracking counts page views or button clicks, so Google optimises for the wrong thing.",
      "Healthcare ads get disapproved under Google's healthcare and medicines policy, or never reach the countries that matter.",
    ],
    deliverables: [
      { title: "Keyword and market research", desc: "Search terms with buying intent per treatment, country and language, plus a negative keyword list that stops wasted clicks from day one." },
      { title: "Campaign structure", desc: "Campaigns split by treatment and country, so you see what each market costs and books." },
      { title: "Ad copy in the patient's language", desc: "Responsive search ads and assets written per market and checked against Google's healthcare policy." },
      { title: "Landing page recommendations", desc: "What each landing page needs to convert: price signals, trust, WhatsApp button, page speed." },
      { title: "Tracking to the booking", desc: "Google Ads conversions, GA4 and offline conversion import from your CRM, so bidding learns from consultations." },
      { title: "Weekly report", desc: "Spend, clicks, leads and consultations per campaign, plus the search terms we added or blocked." },
    ],
    method: [
      { label: "Research", points: ["Keyword intent mapping: buyer vs browser", "Competitor ads and landing pages", "Search volume by country and language", "Negative keywords before launch"] },
      { label: "Target", points: ["High-intent treatment and price searches", "Geo-targeting: Germany, UK, NL, Gulf and more", "Device and time-of-day bid adjustments", "Remarketing to past visitors"] },
      { label: "Convert", points: ["Ad copy tested in each language", "Landing pages built to convert", "WhatsApp and call tracking per campaign", "Bidding on booked consultations, not clicks"] },
    ],
    policy: {
      title: "Built to pass Google's healthcare policy",
      desc: "Google restricts some healthcare and medicine ads by country and treatment, and requires accurate claims and landing pages. We check each market's rules before launch, so campaigns run where your patients actually search.",
    },
    minSpend: "€1,000",
    faqs: [],
  },
};

for (const page of Object.values(ADS_PAGES)) {
  page.faqs = sharedFaqs(page.platform, page.minSpend);
}

export const isAdsSlug = (slug: string): slug is AdsSlug => slug === "meta-ads" || slug === "google-ads";
