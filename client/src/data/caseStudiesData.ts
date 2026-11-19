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
  /** Optional public link for the project, e.g. a product's own site. */
  link?: { href: string; label: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "gorkem-atsal-clinic",
    title: "Gorkem Atsal Clinic: website, CRM, ads and search",
    client: "Gorkem Atsal Clinic",
    category: "Clinic",
    summary: "Work by Webimot's founder, Sia Ahmadi, for Gorkem Atsal Clinic: website, CRM, Google Ads, Meta Ads, social media strategy and search optimisation.",
    about: "Dr. Görkem Atsal Clinic is a facial plastic surgery clinic in Istanbul. Sia Ahmadi, Webimot's founder, has worked with the clinic as a freelance sales and marketing specialist since November 2023, and still does, handling international patient acquisition from the first ad to the booked consultation. Gorkem Atsal is also a co-founder of Clinish.",
    workDone: [
      {
        title: "Website",
        description: "Sia built the clinic's website and maintains it, together with the landing pages the ad campaigns send visitors to. The site is built in WordPress with Elementor.",
      },
      {
        title: "CRM and automation",
        description: "Sia built the clinic's CRM and supports it. n8n workflows track each lead in the CRM, send appointment reminders and produce the reporting.",
      },
      {
        title: "AI WhatsApp chatbot",
        description: "Sia built an AI chatbot on WhatsApp that answers patient enquiries and does the first pre-screening before a person takes over.",
      },
      {
        title: "Google Ads and Meta Ads",
        description: "Sia runs the clinic's Google Ads and Meta Ads and redesigned the campaigns and their landing pages. This covers the campaign structure, audience targeting, ad copy and creatives, and the budget split between campaigns, with regular changes based on which ads bring enquiries.",
      },
      {
        title: "Social media strategy",
        description: "Sia works on the clinic's social media strategy: what to post, for which patients and how it supports the ad campaigns.",
      },
      {
        title: "Search optimisation",
        description: "Sia optimises the website for Google, Bing and Yandex: search presence, visibility and awareness. This includes writing SEO content and tracking the site in Google Analytics 4 and Google Search Console.",
      },
      {
        title: "Sales process",
        description: "Sia works with the clinic on its sales process: needs-based conversations with patients and structured follow-up after the first enquiry.",
      },
      {
        title: "IT security",
        description: "Sia improved the clinic's IT security.",
      },
    ],
    services: ["Website development (WordPress, Elementor)", "CRM development and support", "n8n workflows", "AI WhatsApp chatbot", "Google Ads", "Meta Ads", "Social media strategy", "SEO for Google, Bing and Yandex", "Google Analytics 4", "Google Search Console", "Sales process", "IT security"],
  },
  {
    // The slug is historical and kept so the URL keeps working.
    slug: "clinish-dental-clinic",
    title: "Clinish: website, social media, Meta ads and search setup",
    client: "Clinish",
    category: "Clinic",
    summary: "Work by Webimot's founder, Sia Ahmadi, for Clinish: website, social media, Meta Business Suite and Meta ads setup, and Search Console optimisation.",
    about: "Clinish is a clinic founded by Gorkem Atsal and Gulce Yavas. Sia Ahmadi, Webimot's founder, set up the clinic's online presence: the website, the social and advertising accounts, and the search and analytics tools behind them.",
    workDone: [
      {
        title: "Website",
        description: "Sia built the Clinish website: its structure, pages and content.",
      },
      {
        title: "Social media",
        description: "Sia helped the Clinish team with their social media: what to post and how to keep the profiles consistent with the website.",
      },
      {
        title: "Meta Business Suite and Meta ads",
        description: "Sia set up their Meta Business Suite, which brings the Facebook and Instagram accounts and the ad account under one login, and started Meta ads that send visitors to the website.",
      },
      {
        title: "Search and analytics",
        description: "Sia optimised the website using Google Search Console and Google Analytics: checking that pages are indexed, seeing which searches bring visitors and adjusting pages accordingly.",
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
    about: "Apex AI is an app for building and running AI-powered crypto trading bots. Sia Ahmadi, Webimot's founder, is building it for a private client in the Netherlands. This is a current project, and this page describes the software only.",
    workDone: [
      {
        title: "Trading bot app",
        description: "Sia is building the Apex AI app, where the client sets up and runs trading bots. The app has screens for the client's bots, a bot builder, balances, trade history, notifications and settings, and a simulation mode for trying a bot without real money.",
      },
      {
        title: "Customised AI-powered bots",
        description: "Sia builds the AI-powered trading bots and customises them to the client's own strategy, so each bot follows rules the client has chosen.",
      },
    ],
    services: ["Custom software development", "AI-powered trading bots", "Crypto", "Simulation mode"],
  },
  {
    slug: "webimot-whatsapp-ai",
    title: "Webimot WhatsApp AI: an AI agent for clinic enquiries",
    client: "Webimot WhatsApp AI",
    category: "Product",
    summary: "Webimot's own product, built by founder Sia Ahmadi: an AI agent on WhatsApp for clinics, with its own site at webimot.com.",
    about: "Webimot WhatsApp AI is Webimot's own product: an AI agent on WhatsApp for medical tourism clinics. It has its own site at webimot.com. Sia Ahmadi, Webimot's founder, designed and built it, drawing on several years of handling patient enquiries for clinics by hand.",
    workDone: [
      {
        title: "WhatsApp AI agent",
        description: "Sia designed the agent to answer enquiries on WhatsApp, ask qualifying questions and pass warm leads to a clinic's sales team, so staff spend their time on people who are ready to talk.",
      },
      {
        title: "Workflows and integrations",
        description: "Sia built the workflows with n8n, the OpenAI API and the WhatsApp Cloud API: n8n runs the steps, the OpenAI API writes the replies and the WhatsApp Cloud API sends and receives the messages.",
      },
      {
        title: "Product website",
        description: "Sia built the product's own website at webimot.com.",
      },
    ],
    services: ["WhatsApp AI agent", "n8n", "OpenAI API", "WhatsApp Cloud API", "Product website"],
    link: { href: "https://www.webimot.com/", label: "Visit webimot.com" },
  },
  {
    slug: "prime-hair",
    title: "Prime Hair: ads, website, SEO, sales and social media",
    client: "Prime Hair",
    category: "Clinic",
    summary: "Freelance work by Webimot's founder, Sia Ahmadi, for Prime Hair: Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
    about: "Prime Hair is a hair clinic. Sia Ahmadi, Webimot's founder, worked with the clinic as a freelancer, covering the path from the first ad a patient sees to the booked consultation.",
    workDone: [
      {
        title: "Meta and Google ads",
        description: "Sia set up and ran the clinic's ad campaigns on Meta (Facebook and Instagram) and on Google. This covers the campaign structure, audience targeting, ad copy and creatives, and the budget split between campaigns, with regular changes based on which ads bring enquiries.",
      },
      {
        title: "Website and SEO",
        description: "Sia worked on the clinic's website and optimised it for search engines. This covers page structure and content, page titles and descriptions, and making sure the site is indexed and readable for search engines.",
      },
      {
        title: "Sales and patient enquiries",
        description: "Sia handled incoming patient enquiries and the sales conversations that followed. This covers replying to new enquiries, answering questions about treatments, following up with people who went quiet and arranging consultations.",
      },
      {
        title: "Social media",
        description: "Sia planned and managed the clinic's social media. This covers the content plan, the posts themselves and keeping the clinic's profiles active and consistent.",
      },
    ],
    services: ["Meta Ads", "Google Ads", "Website", "SEO", "Sales and patient enquiries", "Social media"],
  },
  {
    slug: "msb-aesthetic",
    title: "MSB Aesthetic: ads, website, SEO, sales and social media",
    client: "MSB Aesthetic",
    category: "Clinic",
    summary: "Freelance work by Webimot's founder, Sia Ahmadi, for MSB Aesthetic: Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
    about: "MSB Aesthetic is a clinic. Sia Ahmadi, Webimot's founder, worked with the clinic as a freelancer, covering the path from the first ad a patient sees to the booked consultation.",
    workDone: [
      {
        title: "Meta and Google ads",
        description: "Sia set up and ran the clinic's ad campaigns on Meta (Facebook and Instagram) and on Google. This covers the campaign structure, audience targeting, ad copy and creatives, and the budget split between campaigns, with regular changes based on which ads bring enquiries.",
      },
      {
        title: "Website and SEO",
        description: "Sia worked on the clinic's website and optimised it for search engines. This covers page structure and content, page titles and descriptions, and making sure the site is indexed and readable for search engines.",
      },
      {
        title: "Sales and patient enquiries",
        description: "Sia handled incoming patient enquiries and the sales conversations that followed. This covers replying to new enquiries, answering questions about treatments, following up with people who went quiet and arranging consultations.",
      },
      {
        title: "Social media",
        description: "Sia planned and managed the clinic's social media. This covers the content plan, the posts themselves and keeping the clinic's profiles active and consistent.",
      },
    ],
    services: ["Meta Ads", "Google Ads", "Website", "SEO", "Sales and patient enquiries", "Social media"],
  },
  {
    slug: "estetizm",
    title: "Estetizm: ads, website, SEO, sales and social media",
    client: "Estetizm",
    category: "Clinic",
    summary: "Freelance work by Webimot's founder, Sia Ahmadi, for Estetizm: Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
    about: "Estetizm is a clinic owned by Ramazan Sabaz. Sia Ahmadi, Webimot's founder, worked with the clinic as a freelancer, covering the path from the first ad a patient sees to the booked consultation.",
    workDone: [
      {
        title: "Meta and Google ads",
        description: "Sia set up and ran the clinic's ad campaigns on Meta (Facebook and Instagram) and on Google. This covers the campaign structure, audience targeting, ad copy and creatives, and the budget split between campaigns, with regular changes based on which ads bring enquiries.",
      },
      {
        title: "Website and SEO",
        description: "Sia worked on the clinic's website and optimised it for search engines. This covers page structure and content, page titles and descriptions, and making sure the site is indexed and readable for search engines.",
      },
      {
        title: "Sales and patient enquiries",
        description: "Sia handled incoming patient enquiries and the sales conversations that followed. This covers replying to new enquiries, answering questions about treatments, following up with people who went quiet and arranging consultations.",
      },
      {
        title: "Social media",
        description: "Sia planned and managed the clinic's social media. This covers the content plan, the posts themselves and keeping the clinic's profiles active and consistent.",
      },
    ],
    services: ["Meta Ads", "Google Ads", "Website", "SEO", "Sales and patient enquiries", "Social media"],
  },
];
