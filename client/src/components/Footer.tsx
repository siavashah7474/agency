import { Link } from "wouter";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const whatsappLink = "https://wa.me/31628753175";
  return (
    <footer className="border-t border-white/8 bg-[#020817] relative overflow-hidden">
      {/* Subtle neural grid */}
      <div className="absolute inset-0 neural-grid pointer-events-none opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl text-white">Webimot</span>
            </div>
            <p className="text-sm text-white/50 mb-4">{t("footer.tagline")}</p>
            <p className="text-sm text-white/35">{t("footer.description")}</p>
            <div className="mt-5 inline-flex items-center gap-2 bg-secondary/8 border border-secondary/15 rounded-full px-3 py-1.5">
              <Zap className="h-3 w-3 text-secondary" />
              <span className="text-[11px] font-mono font-semibold text-secondary tracking-wide">Powered by AI Automation</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li><Link href="/services/whatsapp-ai-agent" data-testid="link-footer-whatsapp" className="text-sm text-white/40 hover:text-secondary transition-colors">WhatsApp AI Agent</Link></li>
              <li><Link href="/services/seo-blog-generator" data-testid="link-footer-seo" className="text-sm text-white/40 hover:text-secondary transition-colors">SEO Blog Generator</Link></li>
              <li><Link href="/services/ai-marketing-analyst" data-testid="link-footer-analyst" className="text-sm text-white/40 hover:text-secondary transition-colors">AI Marketing Analyst</Link></li>
              <li><Link href="/services" data-testid="link-footer-all-services" className="text-sm text-white/40 hover:text-secondary transition-colors">{t("footer.allServices")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" data-testid="link-footer-about" className="text-sm text-white/40 hover:text-secondary transition-colors">{t("footer.aboutUs")}</Link></li>
              <li><Link href="/case-studies" data-testid="link-footer-case-studies" className="text-sm text-white/40 hover:text-secondary transition-colors">{t("footer.caseStudies")}</Link></li>
              <li><Link href="/clients" data-testid="link-footer-clients" className="text-sm text-white/40 hover:text-secondary transition-colors">{t("footer.ourClients")}</Link></li>
              <li><Link href="/blog" data-testid="link-footer-blog" className="text-sm text-white/40 hover:text-secondary transition-colors">{t("nav.blog")}</Link></li>
              <li><Link href="/contact" data-testid="link-footer-contact" className="text-sm text-white/40 hover:text-secondary transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/40">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-white/25" />
                <span>Istanbul, Turkey<br />Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Mail className="h-4 w-4 flex-shrink-0 text-white/25" />
                <a href="mailto:info@webimot.com" className="hover:text-secondary transition-colors">info@webimot.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Phone className="h-4 w-4 flex-shrink-0 text-white/25" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  {t("footer.whatsappUs")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Webimot. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" data-testid="link-footer-privacy" className="hover:text-white/60 transition-colors">{t("footer.privacyPolicy")}</Link>
            <Link href="/terms-of-service" data-testid="link-footer-terms" className="hover:text-white/60 transition-colors">{t("footer.termsOfService")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
