import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl">Webimot</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Smart Marketing. Smart Automation.
            </p>
            <p className="text-sm text-muted-foreground">
              Marketing solutions for medical tourism, real estate, and service businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/whatsapp-ai-agent" data-testid="link-footer-whatsapp" className="text-sm text-muted-foreground hover:text-primary">WhatsApp AI Agent</Link></li>
              <li><Link href="/services/seo-blog-generator" data-testid="link-footer-seo" className="text-sm text-muted-foreground hover:text-primary">SEO Blog Generator</Link></li>
              <li><Link href="/services/ai-marketing-analyst" data-testid="link-footer-analyst" className="text-sm text-muted-foreground hover:text-primary">AI Marketing Analyst</Link></li>
              <li><Link href="/services" data-testid="link-footer-all-services" className="text-sm text-muted-foreground hover:text-primary">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" data-testid="link-footer-about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/case-studies" data-testid="link-footer-case-studies" className="text-sm text-muted-foreground hover:text-primary">Case Studies</Link></li>
              <li><Link href="/clients" data-testid="link-footer-clients" className="text-sm text-muted-foreground hover:text-primary">Our Clients</Link></li>
              <li><Link href="/blog" data-testid="link-footer-blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" data-testid="link-footer-contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Istanbul, Turkey<br />Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@webimot.com" className="hover:text-primary">info@webimot.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="https://wa.me/1234567890" className="hover:text-primary">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Webimot. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" data-testid="link-footer-privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-of-service" data-testid="link-footer-terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
