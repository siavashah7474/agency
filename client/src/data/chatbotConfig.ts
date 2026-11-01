export interface ChatbotQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    nextQuestion?: string;
    tags?: string[];
  }[];
}

export interface ServiceRecommendation {
  serviceSlug: string;
  /**
   * Full path to link to instead of `/services/${serviceSlug}`.
   * Use for recommendations that should land on a /products/* page or a /systems#section.
   */
  href?: string;
  serviceName: string;
  description: string;
  matchScore: number;
  tags: string[];
}

export interface ChatbotConfig {
  welcomeMessage: string;
  companyName: string;
  agentName: string;
  agentAvatar?: string;
  whatsappNumber: string;
  whatsappMessage: string;
  questions: ChatbotQuestion[];
  recommendations: ServiceRecommendation[];
  closingMessage: string;
  ctaText: string;
}

export const chatbotConfig: ChatbotConfig = {
  // ========================================
  // CUSTOMIZE THESE VALUES FOR YOUR BUSINESS
  // ========================================
  welcomeMessage: "Hi there! I'm here to help you find the perfect marketing solution for your business. Let me ask you a few quick questions to understand your needs better.",
  companyName: "Webimot",           // Your company name
  agentName: "Mia",                 // Name shown in chat header
  whatsappNumber: "31628753175",   // Format: country code + number (no + or spaces)
  whatsappMessage: "Hi! I just completed the questionnaire on your website and I'm interested in learning more about your services.",
  closingMessage: "Based on your answers, I've found the perfect solutions for you! Our team would love to discuss how we can help grow your business.",
  ctaText: "Chat with Our Team on WhatsApp",
  
  questions: [
    {
      id: "industry",
      question: "What industry is your business in?",
      options: [
        { label: "Medical Tourism / Healthcare", value: "medical", nextQuestion: "goal", tags: ["medical", "healthcare"] },
        { label: "Real Estate", value: "realestate", nextQuestion: "goal", tags: ["realestate", "property"] },
        { label: "E-commerce / Retail", value: "ecommerce", nextQuestion: "goal", tags: ["ecommerce", "retail"] },
        { label: "Service Business", value: "service", nextQuestion: "goal", tags: ["service", "local"] },
        { label: "Other", value: "other", nextQuestion: "goal", tags: ["general"] }
      ]
    },
    {
      id: "goal",
      question: "What's your primary goal right now?",
      options: [
        { label: "Get more leads & inquiries", value: "leads", nextQuestion: "challenge", tags: ["leads", "acquisition"] },
        { label: "Increase brand awareness", value: "awareness", nextQuestion: "challenge", tags: ["branding", "awareness"] },
        { label: "Improve online presence", value: "presence", nextQuestion: "challenge", tags: ["website", "seo", "social"] },
        { label: "Automate customer communication", value: "automation", nextQuestion: "challenge", tags: ["automation", "ai", "whatsapp"] },
        { label: "All of the above", value: "all", nextQuestion: "challenge", tags: ["leads", "branding", "automation", "seo"] }
      ]
    },
    {
      id: "challenge",
      question: "What's your biggest challenge?",
      options: [
        { label: "Not enough time to respond to inquiries", value: "time", nextQuestion: "budget", tags: ["automation", "whatsapp", "ai"] },
        { label: "Low website traffic", value: "traffic", nextQuestion: "budget", tags: ["seo", "ads", "content"] },
        { label: "Leads don't convert to customers", value: "conversion", nextQuestion: "budget", tags: ["funnel", "ads", "website"] },
        { label: "Don't know what's working", value: "analytics", nextQuestion: "budget", tags: ["analytics", "ai", "reporting"] },
        { label: "Inconsistent marketing efforts", value: "consistency", nextQuestion: "budget", tags: ["content", "social", "automation"] }
      ]
    },
    {
      id: "budget",
      question: "What's your monthly marketing budget?",
      options: [
        { label: "Under €1,000", value: "low", nextQuestion: "timeline", tags: ["starter"] },
        { label: "€1,000 - €5,000", value: "medium", nextQuestion: "timeline", tags: ["growth"] },
        { label: "€5,000 - €15,000", value: "high", nextQuestion: "timeline", tags: ["scale"] },
        { label: "€15,000+", value: "enterprise", nextQuestion: "timeline", tags: ["enterprise"] },
        { label: "Not sure yet", value: "unsure", nextQuestion: "timeline", tags: ["consultation"] }
      ]
    },
    {
      id: "timeline",
      question: "When do you want to see results?",
      options: [
        { label: "As soon as possible", value: "urgent", tags: ["ads", "whatsapp"] },
        { label: "Within 1-3 months", value: "short", tags: ["ads", "funnel", "automation"] },
        { label: "Within 3-6 months", value: "medium", tags: ["seo", "content", "branding"] },
        { label: "Long-term growth", value: "long", tags: ["seo", "branding", "content"] }
      ]
    }
  ],

  recommendations: [
    {
      serviceSlug: "whatsapp-ai-agent",
      href: "/products/whatsapp-ai",
      serviceName: "WhatsApp AI (Capture system)",
      description: "24/7 automated responses to capture and qualify leads instantly",
      matchScore: 0,
      tags: ["automation", "whatsapp", "ai", "leads", "medical", "realestate", "time"]
    },
    {
      serviceSlug: "meta-ads",
      serviceName: "Meta Ads Management",
      description: "Targeted Facebook & Instagram campaigns for quality leads",
      matchScore: 0,
      tags: ["ads", "leads", "acquisition", "ecommerce", "medical", "realestate", "urgent", "short"]
    },
    {
      serviceSlug: "google-ads",
      serviceName: "Google Ads Management",
      description: "Capture high-intent customers searching for your services",
      matchScore: 0,
      tags: ["ads", "leads", "acquisition", "traffic", "urgent", "short"]
    },
    {
      serviceSlug: "seo",
      serviceName: "SEO Services",
      description: "Rank higher and drive organic traffic long-term",
      matchScore: 0,
      tags: ["seo", "traffic", "presence", "medium", "long", "content"]
    },
    {
      serviceSlug: "seo-blog-generator",
      href: "/products/seo-blog-ai",
      serviceName: "AI SEO Blog Generator",
      description: "Automated content creation optimized for search engines",
      matchScore: 0,
      tags: ["seo", "content", "automation", "ai", "consistency", "long"]
    },
    // Parked services (website-development, funnel-automation, content-creation, branding,
    // ai-ops-autopilot, reputation-management) now point at the system that replaced them.
    {
      serviceSlug: "website-development",
      href: "/systems#capture",
      serviceName: "Capture system",
      description: "Web chat and WhatsApp AI that turn website visitors into qualified, booked leads",
      matchScore: 0,
      tags: ["website", "presence", "conversion", "funnel"]
    },
    {
      serviceSlug: "funnel-automation",
      href: "/systems#convert",
      serviceName: "Follow-up system",
      description: "Automated follow-up across WhatsApp, email and SMS until the lead books or opts out",
      matchScore: 0,
      tags: ["funnel", "automation", "conversion", "leads", "short"]
    },
    {
      serviceSlug: "content-creation",
      href: "/systems#capture",
      serviceName: "Capture system",
      description: "Every enquiry from your social channels answered in seconds, in the customer's language",
      matchScore: 0,
      tags: ["content", "social", "awareness", "branding", "consistency"]
    },
    {
      serviceSlug: "branding",
      href: "/clinics",
      serviceName: "AI systems for clinics",
      description: "Stand out with a clinic that replies instantly, follows up and books 24/7",
      matchScore: 0,
      tags: ["branding", "awareness", "medium", "long", "medical"]
    },
    {
      serviceSlug: "ai-ops-autopilot",
      href: "/systems#operate",
      serviceName: "Operations system",
      description: "AI agents that process invoices, documents and data entry instead of your team",
      matchScore: 0,
      tags: ["automation", "ai", "operations", "admin", "hr", "invoices", "workflows", "scale", "enterprise"]
    },
    {
      serviceSlug: "reputation-management",
      href: "/systems#capture",
      serviceName: "Capture system",
      description: "Fast, consistent replies to every customer message — the first step to a better reputation",
      matchScore: 0,
      tags: ["reputation", "local", "service", "awareness"]
    }
  ]
};

export function calculateRecommendations(selectedTags: string[]): ServiceRecommendation[] {
  const recommendations = chatbotConfig.recommendations.map(rec => {
    const matchCount = rec.tags.filter(tag => selectedTags.includes(tag)).length;
    return {
      ...rec,
      matchScore: matchCount
    };
  });

  // Several legacy recommendations now point at the same system; keep only the best match per destination.
  const seen = new Set<string>();
  return recommendations
    .filter(rec => rec.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .filter(rec => {
      const destination = rec.href ?? `/services/${rec.serviceSlug}`;
      if (seen.has(destination)) return false;
      seen.add(destination);
      return true;
    })
    .slice(0, 3);
}
