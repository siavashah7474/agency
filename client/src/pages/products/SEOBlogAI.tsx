import ProductPageLayout from "@/components/ProductPageLayout";

export default function SEOBlogAIPage() {
  return (
    <ProductPageLayout
      seoTitle="SEO Blog AI | Medical Tourism Marketing on Autopilot — Webimot Agency"
      seoDescription="The medical tourism marketing tool that writes itself. SEO Blog AI publishes optimised content for your clinic every week automatically — so you rank for the patients who matter most."
      emoji="✍️"
      name="SEO Blog AI"
      tagline="Publish SEO content on autopilot. Every week."
      heroBrief="Most businesses know they need content but never have time to create it. SEO Blog AI writes, optimises, and publishes posts automatically — so your site ranks while you focus on clients."
      problemParagraphs={[
        "Most businesses know they need content to rank on Google — but content creation is time-consuming, expensive, and the first thing that gets deprioritised when the team is busy.",
        "Hiring writers costs €500–€2,000+ per month. Freelancers are inconsistent. And without SEO expertise, well-written content still doesn't rank. Most businesses end up with a blog that hasn't been updated in months.",
        "SEO Blog AI solves all three problems. It writes, optimises, and publishes high-quality SEO content automatically — consistently, on schedule, for a fraction of the cost of a writer.",
      ]}
      howItWorksSteps={[
        { emoji: "⚙️", title: "Connect", description: "Set your topics, target keywords, and publishing schedule. We connect to your CMS and configure everything in one session." },
        { emoji: "🤖", title: "AI Takes Over", description: "Blog posts are written, SEO-optimised with meta tags and internal links, and published automatically on your schedule." },
        { emoji: "📈", title: "You See Results", description: "Organic traffic grows, keyword rankings improve, and you never have to write a post manually again." },
      ]}
      features={[
        "Automated content generation from your target keywords",
        "SEO optimisation with meta titles, descriptions, and tags",
        "Auto-scheduling and publishing to your CMS",
        "Internal linking to boost site authority",
        "Multi-language content for international audiences",
        "Performance monitoring and keyword tracking",
        "20–30 posts per month on autopilot",
        "Optional review step before publishing",
      ]}
      whoItsFor={[
        { emoji: "🏥", industry: "Clinics and healthcare", useCase: "Rank for high-intent searches like 'hair transplant Turkey' or 'dental veneers Istanbul' automatically." },
        { emoji: "🛒", industry: "eCommerce & Shopify", useCase: "Drive organic traffic to product pages with SEO blog content published on autopilot." },
        { emoji: "⚖️", industry: "Finance & legal firms", useCase: "Build authority in your niche with consistent expert content that generates inbound leads." },
        { emoji: "🏢", industry: "Any business wanting organic traffic", useCase: "Compete on Google without hiring writers or spending hours creating content." },
      ]}
      ctaHeadline="Let AI Write Your Blog While You Run Your Business."
    />
  );
}
