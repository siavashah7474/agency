import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PricingPackagesSection from "@/components/PricingPackagesSection";

export default function Pricing() {
  return (
    <>
      <SEO
        title="Packages — Starter, Growth, Scale | Webimot"
        description="Three AI automation packages mapped to our four systems — Starter, Growth and Scale. No fixed prices: request a quote after a free AI audit and pay only for the systems you'll use."
        keywords="AI automation pricing, AI agency packages, request a quote, clinic automation pricing, small business AI pricing"
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
