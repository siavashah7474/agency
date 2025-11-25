import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Webimot terms of service. Read our terms and conditions for using our website and services."
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Breadcrumbs items={[{ label: "Terms of Service" }]} />
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: November 2025
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using Webimot's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  Webimot provides digital marketing, automation, and consulting services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>WhatsApp automation and AI agent services</li>
                  <li>SEO and content marketing services</li>
                  <li>Paid advertising management (Meta, Google)</li>
                  <li>Website development and design</li>
                  <li>Marketing analytics and reporting</li>
                  <li>Consultation and strategy services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Grant necessary access to accounts and platforms as required for services</li>
                  <li>Respond to communications in a timely manner</li>
                  <li>Pay for services according to agreed terms</li>
                  <li>Comply with all applicable laws and platform policies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be specified in individual service agreements. Unless otherwise stated:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Payments are due within 14 days of invoice date</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content on this website, including text, graphics, logos, and software, is the property of Webimot or its content suppliers and is protected by intellectual property laws. Deliverables created specifically for clients become client property upon full payment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground mb-4">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the business relationship. This includes but is not limited to business strategies, customer data, and financial information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Webimot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability shall not exceed the amount paid for services in the 12 months preceding the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. No Guarantees</h2>
                <p className="text-muted-foreground mb-4">
                  While we strive to deliver excellent results, we cannot guarantee specific outcomes such as search rankings, lead volumes, or conversion rates. Marketing results depend on many factors outside our control including market conditions, competition, and client responsiveness.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">9. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate services with 30 days written notice unless otherwise specified in the service agreement. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>All outstanding payments become immediately due</li>
                  <li>Access to our systems and tools will be revoked</li>
                  <li>Client data will be provided in a reasonable format</li>
                  <li>Confidentiality obligations survive termination</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">10. Third-Party Platforms</h2>
                <p className="text-muted-foreground mb-4">
                  Our services often integrate with third-party platforms (Meta, Google, WhatsApp, etc.). We are not responsible for changes to these platforms' policies, pricing, or availability. Clients must maintain their own accounts and comply with all platform terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">11. Dispute Resolution</h2>
                <p className="text-muted-foreground mb-4">
                  Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation. If resolution cannot be reached, disputes shall be subject to the laws and courts of Turkey.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will make reasonable efforts to notify clients of significant changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">13. Contact</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these terms, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: legal@webimot.com<br />
                  Address: Istanbul, Turkey
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
