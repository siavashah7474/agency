import { Stethoscope, Sparkles, Leaf, Plane, SmilePlus, Scissors, ShoppingBag } from "lucide-react";

export interface PortfolioProject {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  description: string;
  highlights: string[];
  creativeElements: string[];
  gradient: string;
  icon: typeof Stethoscope;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "gorkem-atsal-clinic",
    name: "Görkem Atsal Clinic",
    industry: "Cosmetic Surgery",
    tagline: "Premium Aesthetics, Elevated Experience",
    description: "A luxury cosmetic surgery clinic requiring a sophisticated digital presence that conveys trust, expertise, and transformative results for international patients.",
    highlights: [
      "Custom AI Assistant content creation for SEO and blogs writing",
      "Meta Ads optimized lead generation funnel",
      "Multilingual WhatsApp AI Agent automation in 6 languages that increase their sales by 15%",
      "VIP consultation booking system with concierge features"
    ],
    creativeElements: [
      "Elegant gold & deep navy color palette reflecting premium positioning",
      "Smooth micro-animations conveying surgical precision",
      "Interactive treatment explorer with 3D visualization concepts",
      "Testimonial carousel with verified patient stories"
    ],
    gradient: "from-amber-500 to-rose-600",
    icon: Sparkles
  },
  {
    id: "clinish-aesthetic-agency",
    name: "Clinish Aesthetic Agency",
    industry: "Medical Tourism Agency",
    tagline: "Connecting Patients to World-Class Care",
    description: "A medical tourism agency matching international patients with top clinics across Turkey, requiring a platform that builds trust and simplifies the complex decision-making process.",
    highlights: [
      "Clinic comparison tool with verified ratings",
      "AI-powered SEO Blog Creator for health topics and articles",
      "AI Powered What's app Lead Convertor 24/7",
      "Multi-Language WhatsApp AI Assistant"
    ],
    creativeElements: [
      "Trust-building design with verified clinic badges",
      "Interactive destination maps showing clinic locations",
      "Patient success story timeline visualization",
      "Seamless multi-step booking wizard"
    ],
    gradient: "from-teal-500 to-cyan-600",
    icon: Stethoscope
  },
  {
    id: "datura-clinic",
    name: "DaturaClinic",
    industry: "Wellness & Aesthetics",
    tagline: "Where Nature Meets Beauty",
    description: "A holistic wellness and aesthetics clinic blending natural treatments with modern medical procedures, requiring a brand that reflects their unique organic-meets-medical philosophy.",
    highlights: [
      "Integrated wellness journey planner",
      "Treatment package customization tool",
      "Holistic consultation questionnaire",
      "Post-treatment care automation"
    ],
    creativeElements: [
      "Organic flowing design elements inspired by nature",
      "Earthy greens with soft pink accents for warmth",
      "Botanical illustrations as subtle background textures",
      "Calming micro-interactions throughout the experience"
    ],
    gradient: "from-emerald-500 to-teal-600",
    icon: Leaf
  },
  {
    id: "ariana-health-tourism",
    name: "ArianaHealthTourism",
    industry: "Health Tourism",
    tagline: "Your Global Health Journey Starts Here",
    description: "A comprehensive health tourism company offering medical travel packages, requiring a platform that handles complex multi-service bookings while maintaining a seamless user experience.",
    highlights: [
      "All-inclusive package builder (treatment + travel + stay)",
      "Real-time availability and pricing engine",
      "Multi-destination comparison tools",
      "24/7 AI concierge for trip planning"
    ],
    creativeElements: [
      "Journey-focused design with visual progress indicators",
      "Destination showcase with immersive imagery",
      "Interactive cost calculator with transparency focus",
      "Cultural guide integration for each destination"
    ],
    gradient: "from-blue-500 to-indigo-600",
    icon: Plane
  },
  {
    id: "clinish-dental-istanbul",
    name: "Clinish",
    industry: "Dental Tourism",
    tagline: "Your Perfect Smile Awaits",
    description: "A premier dental clinic specializing in smile makeovers, veneers, and full mouth restorations for international patients seeking affordable excellence in dental care.",
    highlights: [
      "Virtual smile preview with AI simulation",
      "Treatment timeline with realistic expectations",
      "Dental photo evaluation via WhatsApp",
      "Aftercare support automation system"
    ],
    creativeElements: [
      "Bright, confidence-inspiring white and blue palette",
      "Interactive tooth diagram for treatment selection",
      "Smile transformation gallery with slider comparison",
      "Patient journey infographic showing the Istanbul experience"
    ],
    gradient: "from-sky-500 to-blue-600",
    icon: SmilePlus
  },
  {
    id: "luxe-skincare-shopify",
    name: "Luxe Skincare Co.",
    industry: "eCommerce / Shopify",
    tagline: "Skincare That Sells on Autopilot",
    description: "A premium Shopify skincare brand scaling from €20k to €80k/month with AI-powered abandoned cart recovery, automated customer support, and a full-funnel Meta & Google Ads strategy.",
    highlights: [
      "Abandoned cart WhatsApp sequences recovering 28% of lost carts",
      "AI customer support handling 400+ order/returns queries monthly",
      "Meta & Google Shopping ads delivering 6.4× ROAS",
      "Automated post-purchase upsell flows increasing AOV by 35%"
    ],
    creativeElements: [
      "Minimalist luxury aesthetic with soft cream and gold tones",
      "Product story sections with ingredient transparency",
      "Shoppable Instagram feed integration",
      "Mobile-first checkout optimized for impulse purchases"
    ],
    gradient: "from-pink-500 to-rose-600",
    icon: ShoppingBag
  },
  {
    id: "prime-hair-group",
    name: "PrimeHairGroup",
    industry: "Hair Transplant",
    tagline: "Restore Your Confidence, Transform Your Life",
    description: "A leading hair transplant clinic offering FUE and DHI procedures, requiring a digital presence that addresses patient concerns sensitively while showcasing impressive results.",
    highlights: [
      "Graft calculator with personalized assessment",
      "AI-powered hair analysis from photos",
      "Recovery timeline with realistic milestones",
      "Long-term result tracking dashboard"
    ],
    creativeElements: [
      "Masculine yet approachable design aesthetic",
      "Before/after timeline showing 12-month progression",
      "Interactive hair density visualization",
      "Discreet consultation booking with privacy focus"
    ],
    gradient: "from-slate-600 to-zinc-800",
    icon: Scissors
  }
];
