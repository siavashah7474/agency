// Work by the founder, shown on /case-studies, /clients and the home page.
// Only confirmed facts go in here: what was built and for whom. No metrics,
// quotes or outcomes unless the client has confirmed them in writing.
export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  /** Short neutral label, e.g. "Clinic". */
  category: string;
  /** One or two sentences used on cards and as the meta description (70–160 characters). */
  summary: string;
  /** One plain sentence about the client, confirmed facts only. */
  about: string;
  /** The work Webimot did, one item per piece of work. */
  workDone: {
    title: string;
    description: string;
  }[];
  services: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "gorkem-atsal-clinic",
    title: "Gorkem Atsal Clinic: website, CRM, ads and search",
    client: "Gorkem Atsal Clinic",
    category: "Clinic",
    summary: "Work by Webimot's founder, Sia Ahmadi, for Gorkem Atsal Clinic: website, CRM, Google Ads, Meta Ads, social media strategy and search optimisation.",
    about: "Sia Ahmadi, Webimot's founder, has worked with Gorkem Atsal Clinic as a freelance sales and marketing specialist since November 2023, and still does. Gorkem Atsal is also a co-founder of Clinish.",
    workDone: [
      {
        title: "Website",
        description: "Sia built the clinic's website.",
      },
      {
        title: "CRM",
        description: "Sia built the clinic's CRM and supports it.",
      },
      {
        title: "Google Ads and Meta Ads",
        description: "Sia runs the clinic's Google Ads and Meta Ads.",
      },
      {
        title: "Social media strategy",
        description: "Sia works on the clinic's social media strategy.",
      },
      {
        title: "Search optimisation",
        description: "Sia optimises the website for Google, Bing and Yandex: search presence, visibility and awareness.",
      },
      {
        title: "Sales process",
        description: "Sia works with the clinic on improving its sales process.",
      },
      {
        title: "IT security",
        description: "Sia improved the clinic's IT security.",
      },
    ],
    services: ["Website development", "CRM development and support", "Google Ads", "Meta Ads", "Social media strategy", "SEO for Google, Bing and Yandex", "Sales process", "IT security"],
  },
  {
    // The slug is historical and kept so the URL keeps working.
    slug: "clinish-dental-clinic",
    title: "Clinish: website, social media, Meta ads and search setup",
    client: "Clinish",
    category: "Clinic",
    summary: "Work by Webimot's founder, Sia Ahmadi, for Clinish: website, social media, Meta Business Suite and Meta ads setup, and Search Console optimisation.",
    about: "Clinish is a clinic founded by Gorkem Atsal and Gulce Yavas. This is work done by Webimot's founder, Sia Ahmadi.",
    workDone: [
      {
        title: "Website",
        description: "Sia built the Clinish website.",
      },
      {
        title: "Social media",
        description: "Sia helped the Clinish team with their social media.",
      },
      {
        title: "Meta Business Suite and Meta ads",
        description: "Sia set up their Meta Business Suite and started Meta ads for the website.",
      },
      {
        title: "Search and analytics",
        description: "Sia optimised the website using Google Search Console and Google Analytics.",
      },
    ],
    services: ["Website development", "Social media support", "Meta Business Suite setup", "Meta ads", "Google Search Console", "Google Analytics"],
  },
  {
    slug: "apex-ai-trading-bots",
    title: "Apex AI: customised AI-powered crypto trading bots",
    client: "Apex AI",
    category: "Software",
    summary: "Current project by Webimot's founder, Sia Ahmadi: Apex AI, an app with customised AI-powered crypto trading bots, built for a private client in the Netherlands.",
    about: "Apex AI is an app for building and running AI-powered crypto trading bots. Sia Ahmadi, Webimot's founder, is building it for a private client in the Netherlands. This is a current project.",
    workDone: [
      {
        title: "Trading bot app",
        description: "Sia is building the Apex AI app, where the client sets up and runs trading bots.",
      },
      {
        title: "Customised AI-powered bots",
        description: "Sia builds the AI-powered trading bots and customises them to the client's own strategy.",
      },
    ],
    services: ["Custom software development", "AI-powered trading bots", "Crypto"],
  },
  {
    slug: "clinic-freelance-work",
    title: "Prime Hair, MSB Aesthetic, Estetizm: ads, sites, sales",
    client: "Prime Hair, MSB Aesthetic and Estetizm",
    category: "Clinic",
    summary: "Freelance work by Webimot's founder, Sia Ahmadi, for three clinics: Meta and Google ads, websites and SEO, and sales and patient enquiries.",
    about: "Prime Hair is a hair clinic, MSB Aesthetic is a clinic, and Estetizm is a clinic owned by Ramazan Sabaz. Sia Ahmadi, Webimot's founder, worked with all three as a freelancer.",
    workDone: [
      {
        title: "Meta and Google ads",
        description: "Sia set up and ran ad campaigns on Meta and Google.",
      },
      {
        title: "Websites and SEO",
        description: "Sia worked on the clinics' websites and their search optimisation.",
      },
      {
        title: "Sales and patient enquiries",
        description: "Sia handled patient enquiries and sales conversations.",
      },
    ],
    services: ["Meta Ads", "Google Ads", "Website development", "SEO", "Sales and patient enquiries"],
  },
];
