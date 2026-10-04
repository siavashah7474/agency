import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PricingPackagesSection from "@/components/PricingPackagesSection";

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Webimot Agency"
        description="Simple, transparent pricing for AI automation — Starter, Growth, and Scale packages. Book a free audit for an exact quote based on your business."
        keywords="AI automation pricing, AI agency pricing, automation packages"
        canonicalUrl="https://webimotagency.com/pricing"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">
          <div className="pt-8" />
          <PricingPackagesSection headingLevel="h1" />
        </main>
        <Footer />
      </div>
    </>
  );
}
