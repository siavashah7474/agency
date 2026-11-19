// Client projects shown on /case-studies, /clients and the home page.
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
    summary: "For Gorkem Atsal Clinic, an ongoing client, Webimot built the website and CRM and runs Google Ads, Meta Ads, social media strategy and search optimisation.",
    about: "Gorkem Atsal Clinic is an ongoing Webimot client. Gorkem Atsal is also a co-founder of Clinish.",
    workDone: [
      {
        title: "Website",
        description: "We built the clinic's website.",
      },
      {
        title: "CRM",
        description: "We built the clinic's CRM and support it.",
      },
      {
        title: "Google Ads and Meta Ads",
        description: "We run the clinic's Google Ads and Meta Ads.",
      },
      {
        title: "Social media strategy",
        description: "We work on the clinic's social media strategy.",
      },
      {
        title: "Search optimisation",
        description: "We optimise the website for Google, Bing and Yandex: search presence, visibility and awareness.",
      },
      {
        title: "Sales process",
        description: "We work with the clinic on improving its sales process.",
      },
      {
        title: "IT security",
        description: "We improved the clinic's IT security.",
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
    summary: "Webimot built the Clinish website, helped with social media, set up Meta Business Suite and Meta ads, and optimised the site with Google Search Console.",
    about: "Clinish is a clinic founded by Gorkem Atsal and Gulce Yavas.",
    workDone: [
      {
        title: "Website",
        description: "We built the Clinish website.",
      },
      {
        title: "Social media",
        description: "We helped the Clinish team with their social media.",
      },
      {
        title: "Meta Business Suite and Meta ads",
        description: "We set up their Meta Business Suite and started Meta ads for the website.",
      },
      {
        title: "Search and analytics",
        description: "We optimised the website using Google Search Console and Google Analytics.",
      },
    ],
    services: ["Website development", "Social media support", "Meta Business Suite setup", "Meta ads", "Google Search Console", "Google Analytics"],
  },
];
