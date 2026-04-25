export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  services: string[];
  duration: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "clinish-dental-clinic",
    title: "How Clinish Increased Patient Inquiries by 40%",
    client: "Clinish",
    industry: "Medical Tourism - Dental",
    location: "Istanbul, Turkey",
    challenge: "The clinic was receiving hundreds of WhatsApp inquiries daily from international patients but could only respond during business hours. They were losing 60% of leads to competitors who responded faster. The multilingual nature of inquiries (English, Arabic, Russian, German) made it difficult to handle with a small team.",
    solution: "We implemented our WhatsApp AI Agent with multilingual support and Vision AI for dental photo evaluation. The system was trained on their specific treatments (veneers, implants, full mouth restoration) and integrated with their booking calendar. We also set up automated follow-up sequences for leads who didn't book immediately.",
    results: [
      { metric: "Lead Response Time", value: "< 30 seconds", description: "Down from 4-6 hours average" },
      { metric: "Patient Inquiries", value: "+40%", description: "Monthly qualified leads increased" },
      { metric: "Conversion Rate", value: "+55%", description: "From inquiry to booked consultation" },
      { metric: "Staff Hours Saved", value: "120+ hours/month", description: "Redirected to patient care" }
    ],
    testimonial: {
      quote: "The AI agent handles 80% of our inquiries without any human intervention. Our conversion rate skyrocketed because we now respond instantly, even at 3 AM when patients in the US are researching.",
      name: "Dr Babak Yunuszade",
      role: "Founder, Clinish"
    },
    services: ["WhatsApp AI Agent", "Lead Qualification", "Calendar Automation", "Meta Ads"],
    duration: "2 weeks setup + ongoing"
  },
  {
    slug: "hair-transplant-seo-growth",
    title: "20% Organic Traffic Growth for Premium Hair Transplant Clinic",
    client: "Estetizm",
    industry: "Medical Tourism - Hair Transplant",
    location: "Istanbul, Turkey",
    challenge: "Despite offering premium FUE and DHI hair transplants, the clinic was invisible in Google searches. They were spending heavily on paid ads but getting low-quality leads. Their website had no blog content and poor SEO, ranking on page 5+ for key terms.",
    solution: "We deployed our SEO Blog Generator AI to create 25+ optimized articles monthly covering hair transplant topics. Combined with technical SEO fixes, local SEO optimization, and a comprehensive link-building strategy. The AI content was reviewed by their medical team for accuracy before publishing.",
    results: [
      { metric: "Organic Traffic", value: "+20%", description: "In 6 months" },
      { metric: "Keyword Rankings", value: "Top 10", description: "For 15 high-value keywords" },
      { metric: "Cost Per Lead", value: "-55%", description: "Reduced paid ad dependency" },
      { metric: "Blog Posts", value: "150+", description: "Published in first 6 months" }
    ],
    testimonial: {
      quote: "We went from being invisible to ranking #1 for 'best hair transplant Turkey'. The AI-generated content is so good that even our doctors are impressed. Our organic leads now exceed paid leads.",
      name: "Ramazan Sabaz",
      role: "Hair Transplant Specialist, Estetizm"
    },
    services: ["SEO Blog Generator", "Technical SEO", "Local SEO"],
    duration: "6 months campaign"
  },
  {
    slug: "real-estate-lead-automation",
    title: "Turkish Real Estate Agency Automates 300+ Monthly Leads",
    client: "Prime Properties Istanbul",
    industry: "Real Estate",
    location: "Istanbul, Turkey",
    challenge: "The agency was overwhelmed with leads from multiple sources (website, portals, social media) but had no system to qualify them. Sales agents were wasting time on unqualified leads while hot prospects went cold. They needed a way to handle inquiries 24/7 for international investors in different time zones.",
    solution: "We built a complete lead automation system: WhatsApp AI Agent for instant response, automated lead scoring based on budget/timeline/preferences, CRM integration for pipeline management, and the AI Operations Autopilot for coordinating internal workflows and weekly performance reporting. The AI was trained on Turkish property law basics and investment visa requirements.",
    results: [
      { metric: "Lead Response", value: "100%", description: "All leads responded within 1 minute" },
      { metric: "Qualified Leads", value: "+85%", description: "Increase in sales-ready leads" },
      { metric: "Sales Cycle", value: "-40%", description: "Faster time to close" },
      { metric: "Revenue", value: "+120%", description: "Year-over-year growth" }
    ],
    testimonial: {
      quote: "We were drowning in leads but closing few deals. Now our AI qualifies every lead, and our sales team only talks to serious buyers. Our revenue more than doubled while our team stayed the same size.",
      name: "Vahid Tokmak",
      role: "CEO, Prime Properties Istanbul"
    },
    services: ["WhatsApp AI Agent", "Lead Scoring", "CRM Integration", "AI Operations Autopilot"],
    duration: "3 weeks setup + ongoing"
  },
  {
    slug: "cosmetic-surgery-meta-ads",
    title: "Cosmetic Surgery Clinic Achieves 8.5x ROAS with Meta Ads",
    client: "MSB Aesthetic Istanbul",
    industry: "Medical Tourism - Cosmetic Surgery",
    location: "Istanbul, Turkey",
    challenge: "The clinic's previous agency was running Meta ads with poor targeting, resulting in expensive clicks from unqualified audiences. Their ROAS was below 2x, making paid advertising unsustainable. They needed to reach serious patients considering procedures like rhinoplasty, BBL, and mommy makeovers.",
    solution: "We restructured their entire Meta advertising strategy: new audience research targeting high-intent users, compelling before/after creative strategy, retargeting funnels for website visitors, and integration with WhatsApp for lead capture. We also implemented conversion tracking and created procedure-specific campaigns.",
    results: [
      { metric: "ROAS", value: "8.5x", description: "Return on ad spend" },
      { metric: "Cost Per Lead", value: "-62%", description: "Compared to previous agency" },
      { metric: "Booked Surgeries", value: "+45%", description: "From Meta ad leads" },
      { metric: "Ad Spend Efficiency", value: "3x", description: "Better results with same budget" }
    ],
    testimonial: {
      quote: "Our previous agency was burning our budget. Webimot completely transformed our advertising. We now get 4x more qualified consultations with the same ad spend, and our surgery bookings are up 45%.",
      name: "Mehmet Salih",
      role: "Medical Director, MSB Aesthetic Istanbul"
    },
    services: ["Meta Ads Management", "Creative Strategy", "Conversion Optimization"],
    duration: "Ongoing monthly retainer"
  }
];
