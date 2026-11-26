// Work by the founder, shown on /case-studies, the founder page and the home page.
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
  /** Optional screenshot of the project, served from client/public. */
  image?: { src: string; alt: string; width: number; height: number };
  /** Optional further screenshots, shown with a caption below the scope of work. */
  gallery?: { src: string; alt: string; width: number; height: number; caption: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "gorkem-atsal-clinic",
    title: "Gorkem Atsal Clinic: website, CRM, ads and search",
    client: "Gorkem Atsal Clinic",
    category: "Clinic",
    summary: "Ongoing engagement by Webimot's founder, Sia Ahmadi, for Gorkem Atsal Clinic: website, CRM, Google Ads, Meta Ads, social media strategy and SEO.",
    about: "Dr. Görkem Atsal Clinic is a facial plastic surgery clinic in Istanbul. Webimot's founder, Sia Ahmadi, has worked with the clinic as a freelance sales and marketing specialist since November 2023. The engagement is ongoing and covers international patient acquisition, from the first ad to the booked consultation. Gorkem Atsal is also a co-founder of Clinish.",
    workDone: [
      {
        title: "Website",
        description: "Design, build and ongoing maintenance of the clinic's website and the landing pages used by its advertising campaigns. The site is built in WordPress with Elementor.",
      },
      {
        title: "CRM and automation",
        description: "Development and ongoing support of the clinic's CRM. n8n workflows handle lead tracking in the CRM, appointment reminders and reporting.",
      },
      {
        title: "AI WhatsApp chatbot",
        description: "Development of an AI chatbot on WhatsApp that answers patient enquiries and carries out initial pre-screening before handover to the clinic's team.",
      },
      {
        title: "Google Ads and Meta Ads",
        description: "Management of the clinic's Google Ads and Meta Ads, including a redesign of the campaigns and their landing pages. The scope covers campaign structure, audience targeting, ad copy and creatives, and budget allocation, with ongoing optimisation based on which ads generate enquiries.",
      },
      {
        title: "Social media strategy",
        description: "Social media strategy for the clinic: content direction, target patient groups and alignment with the advertising campaigns.",
      },
      {
        title: "Search optimisation",
        description: "Optimisation of the website for Google, Bing and Yandex to strengthen search presence, visibility and awareness. This includes SEO content and performance tracking in Google Analytics 4 and Google Search Console.",
      },
      {
        title: "Sales process",
        description: "Improvement of the clinic's sales process: needs-based patient conversations and structured follow-up after the first enquiry.",
      },
      {
        title: "IT security",
        description: "Improvements to the clinic's IT security.",
      },
    ],
    services: ["Website development (WordPress, Elementor)", "CRM development and support", "n8n workflows", "AI WhatsApp chatbot", "Google Ads", "Meta Ads", "Social media strategy", "SEO for Google, Bing and Yandex", "Google Analytics 4", "Google Search Console", "Sales process", "IT security"],
    link: { href: "https://gorkematsal.com/", label: "Visit gorkematsal.com" },
    image: { src: "/work/gorkem-atsal-clinic.jpg", alt: "Home page of the Dr. Görkem Atsal Clinic website", width: 1290, height: 795 },
    gallery: [
      {
        src: "/work/gorkem-atsal-clinic-bing.png",
        alt: "Bing Webmaster Tools chart of clicks and impressions for the clinic website over twelve months",
        width: 1320,
        height: 310,
        caption: "The clinic website's visibility on Bing over the past twelve months, from Bing Webmaster Tools.",
      },
    ],
  },
  {
    // The slug is historical and kept so the URL keeps working.
    slug: "clinish-dental-clinic",
    title: "Clinish: website, social media, Meta ads and search setup",
    client: "Clinish",
    category: "Clinic",
    summary: "Engagement by Webimot's founder, Sia Ahmadi, for Clinish: website, social media, Meta Business Suite and Meta ads set-up, and Search Console optimisation.",
    about: "Clinish is a clinic founded by Gorkem Atsal and Gulce Yavas. The engagement, delivered by Webimot's founder, Sia Ahmadi, established the clinic's online presence: the website, the social and advertising accounts, and the search and analytics tools behind them.",
    workDone: [
      {
        title: "Website",
        description: "Design and build of the Clinish website, including its structure, pages and content.",
      },
      {
        title: "Social media",
        description: "Social media support for the Clinish team: content direction and consistency between the profiles and the website.",
      },
      {
        title: "Meta Business Suite and Meta ads",
        description: "Set-up of Meta Business Suite, bringing the Facebook and Instagram accounts and the ad account under one login, and launch of Meta ads directing visitors to the website.",
      },
      {
        title: "Search and analytics",
        description: "Optimisation of the website using Google Search Console and Google Analytics: indexing checks, analysis of the searches that bring visitors and page adjustments based on the findings.",
      },
    ],
    services: ["Website development", "Social media support", "Meta Business Suite setup", "Meta ads", "Google Search Console", "Google Analytics"],
  },
  {
    slug: "webimot-whatsapp-ai",
    title: "Webimot WhatsApp AI: an AI agent for clinic enquiries",
    client: "Webimot WhatsApp AI",
    category: "Product",
    summary: "Webimot's own product, designed and built by founder Sia Ahmadi: an AI agent on WhatsApp for clinics, now presented on its own product page on this site.",
    about: "Webimot WhatsApp AI is Webimot's own product: an AI agent on WhatsApp for medical tourism clinics. It was designed and built by Webimot's founder, Sia Ahmadi, and draws on several years of first-hand experience handling patient enquiries for clinics.",
    workDone: [
      {
        title: "WhatsApp AI agent",
        description: "Design of an AI agent that answers enquiries on WhatsApp, asks qualifying questions and passes qualified leads to a clinic's sales team, so that staff time goes to prospects who are ready to talk.",
      },
      {
        title: "Workflows and integrations",
        description: "Workflows built with n8n, the OpenAI API and the WhatsApp Cloud API: n8n orchestrates the steps, the OpenAI API generates the replies and the WhatsApp Cloud API sends and receives the messages.",
      },
      {
        title: "Product website",
        description: "Design and build of the product's website and landing page, now the WhatsApp AI page on webimot.com.",
      },
    ],
    services: ["WhatsApp AI agent", "n8n", "OpenAI API", "WhatsApp Cloud API", "Product website"],
    link: { href: "/products/whatsapp-ai", label: "See the WhatsApp AI page" },
  },
  {
    slug: "prime-hair",
    title: "Prime Hair: ads, website, SEO, sales and social media",
    client: "Prime Hair",
    category: "Clinic",
    summary: "Freelance engagement by Webimot's founder, Sia Ahmadi, for Prime Hair: Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
    about: "Prime Hair is a hair clinic. The engagement was delivered by Webimot's founder, Sia Ahmadi, on a freelance basis and covered the full path from the first ad a patient sees to the booked consultation.",
    workDone: [
      {
        title: "Meta and Google ads",
        description: "Set-up and management of the clinic's advertising campaigns on Meta (Facebook and Instagram) and Google. The scope covers campaign structure, audience targeting, ad copy and creatives, and budget allocation, with ongoing optimisation based on which ads generate enquiries.",
      },
      {
        title: "Website and SEO",
        description: "Development work on the clinic's website and its search engine optimisation. The scope covers page structure and content, page titles and descriptions, and ensuring the site is indexed and readable for search engines.",
      },
      {
        title: "Sales and patient enquiries",
        description: "Handling of incoming patient enquiries and the sales conversations that followed. The scope covers responding to new enquiries, answering treatment questions, following up with prospects and arranging consultations.",
      },
      {
        title: "Social media",
        description: "Planning and management of the clinic's social media. The scope covers the content plan, the posts themselves and keeping the clinic's profiles active and consistent.",
      },
    ],
    services: ["Meta Ads", "Google Ads", "Website", "SEO", "Sales and patient enquiries", "Social media"],
  },
  {
    slug: "msb-aesthetic",
    title: "MSB Aesthetic: ads, website, SEO, sales and social media",
    client: "MSB Aesthetic",
    category: "Clinic",
    summary: "Freelance engagement by Webimot's founder, Sia Ahmadi, for MSB Aesthetic: Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
    about: "MSB Aesthetic is a clinic. The engagement was delivered by Webimot's founder, Sia Ahmadi, on a freelance basis and covered the full path from the first ad a patient sees to the booked consultation.",
    workDone: [
      {
        title: "Meta and Google ads",
        description: "Set-up and management of the clinic's advertising campaigns on Meta (Facebook and Instagram) and Google. The scope covers campaign structure, audience targeting, ad copy and creatives, and budget allocation, with ongoing optimisation based on which ads generate enquiries.",
      },
      {
        title: "Website and SEO",
        description: "Development work on the clinic's website and its search engine optimisation. The scope covers page structure and content, page titles and descriptions, and ensuring the site is indexed and readable for search engines.",
      },
      {
        title: "Sales and patient enquiries",
        description: "Handling of incoming patient enquiries and the sales conversations that followed. The scope covers responding to new enquiries, answering treatment questions, following up with prospects and arranging consultations.",
      },
      {
        title: "Social media",
        description: "Planning and management of the clinic's social media. The scope covers the content plan, the posts themselves and keeping the clinic's profiles active and consistent.",
      },
    ],
    services: ["Meta Ads", "Google Ads", "Website", "SEO", "Sales and patient enquiries", "Social media"],
  },
  {
    slug: "estetizm",
    title: "Estetizm: ads, website, SEO, sales and social media",
    client: "Estetizm",
    category: "Clinic",
    summary: "Freelance engagement by Webimot's founder, Sia Ahmadi, for Estetizm: Meta and Google ads, website and SEO, sales and patient enquiries, and social media.",
    about: "Estetizm is a clinic owned by Ramazan Sabaz. The engagement was delivered by Webimot's founder, Sia Ahmadi, on a freelance basis and covered the full path from the first ad a patient sees to the booked consultation.",
    workDone: [
      {
        title: "Meta and Google ads",
        description: "Set-up and management of the clinic's advertising campaigns on Meta (Facebook and Instagram) and Google. The scope covers campaign structure, audience targeting, ad copy and creatives, and budget allocation, with ongoing optimisation based on which ads generate enquiries.",
      },
      {
        title: "Website and SEO",
        description: "Development work on the clinic's website and its search engine optimisation. The scope covers page structure and content, page titles and descriptions, and ensuring the site is indexed and readable for search engines.",
      },
      {
        title: "Sales and patient enquiries",
        description: "Handling of incoming patient enquiries and the sales conversations that followed. The scope covers responding to new enquiries, answering treatment questions, following up with prospects and arranging consultations.",
      },
      {
        title: "Social media",
        description: "Planning and management of the clinic's social media. The scope covers the content plan, the posts themselves and keeping the clinic's profiles active and consistent.",
      },
    ],
    services: ["Meta Ads", "Google Ads", "Website", "SEO", "Sales and patient enquiries", "Social media"],
  },
];
