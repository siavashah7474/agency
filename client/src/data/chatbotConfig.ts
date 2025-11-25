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
  welcomeMessage: "Hi there! I'm here to help you find the perfect marketing solution for your business. Let me ask you a few quick questions to understand your needs better.",
  companyName: "Webimot",
  agentName: "Mia",
  whatsappNumber: "905551234567",
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
        { label: "Under $1,000", value: "low", nextQuestion: "timeline", tags: ["starter"] },
        { label: "$1,000 - $5,000", value: "medium", nextQuestion: "timeline", tags: ["growth"] },
        { label: "$5,000 - $15,000", value: "high", nextQuestion: "timeline", tags: ["scale"] },
        { label: "$15,000+", value: "enterprise", nextQuestion: "timeline", tags: ["enterprise"] },
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
      serviceName: "WhatsApp AI Agent",
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
      serviceName: "AI SEO Blog Generator",
      description: "Automated content creation optimized for search engines",
      matchScore: 0,
      tags: ["seo", "content", "automation", "ai", "consistency", "long"]
    },
    {
      serviceSlug: "website-development",
      serviceName: "Website Development",
      description: "Professional, conversion-optimized websites",
      matchScore: 0,
      tags: ["website", "presence", "conversion", "funnel"]
    },
    {
      serviceSlug: "funnel-automation",
      serviceName: "Funnel Automation",
      description: "Convert more visitors with automated follow-up sequences",
      matchScore: 0,
      tags: ["funnel", "automation", "conversion", "leads", "short"]
    },
    {
      serviceSlug: "content-creation",
      serviceName: "Social Media Content",
      description: "Consistent, engaging content for your social channels",
      matchScore: 0,
      tags: ["content", "social", "awareness", "branding", "consistency"]
    },
    {
      serviceSlug: "branding",
      serviceName: "Branding & Identity",
      description: "Build a memorable brand that stands out",
      matchScore: 0,
      tags: ["branding", "awareness", "medium", "long"]
    },
    {
      serviceSlug: "ai-marketing-analyst",
      serviceName: "AI Marketing Analyst",
      description: "Data-driven insights to optimize your marketing",
      matchScore: 0,
      tags: ["analytics", "ai", "reporting", "scale", "enterprise"]
    },
    {
      serviceSlug: "reputation-management",
      serviceName: "Reputation Management",
      description: "Monitor and enhance your online reputation",
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

  return recommendations
    .filter(rec => rec.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
}
