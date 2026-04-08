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
            <p className="text-sm text-white/70 mb-4">{t("footer.tagline")}</p>
            <p className="text-sm text-white/60">{t("footer.description")}</p>
            <div className="mt-5 inline-flex items-center gap-2 bg-secondary/8 border border-secondary/15 rounded-full px-3 py-1.5">
              <Zap className="h-3 w-3 text-secondary" />
              <span className="text-[11px] font-mono font-semibold text-secondary tracking-wide">Powered by AI Automation</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {/* Google Partner Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:border-white/20 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[10px] font-semibold text-white/70 tracking-wide">Google Partner</span>
              </div>
              {/* Meta Business Partner Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:border-white/20 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#1877F2"/>
                </svg>
                <span className="text-[10px] font-semibold text-white/70 tracking-wide">Meta Business Partner</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li><Link href="/services/whatsapp-ai-agent" data-testid="link-footer-whatsapp" className="text-sm text-white/65 hover:text-secondary transition-colors">WhatsApp AI Agent</Link></li>
              <li><Link href="/services/seo-blog-generator" data-testid="link-footer-seo" className="text-sm text-white/65 hover:text-secondary transition-colors">SEO Blog Generator</Link></li>
              <li><Link href="/services/ai-marketing-analyst" data-testid="link-footer-analyst" className="text-sm text-white/65 hover:text-secondary transition-colors">AI Marketing Analyst</Link></li>
              <li><Link href="/services" data-testid="link-footer-all-services" className="text-sm text-white/65 hover:text-secondary transition-colors">{t("footer.allServices")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" data-testid="link-footer-about" className="text-sm text-white/65 hover:text-secondary transition-colors">{t("footer.aboutUs")}</Link></li>
              <li><Link href="/case-studies" data-testid="link-footer-case-studies" className="text-sm text-white/65 hover:text-secondary transition-colors">{t("footer.caseStudies")}</Link></li>
              <li><Link href="/clients" data-testid="link-footer-clients" className="text-sm text-white/65 hover:text-secondary transition-colors">{t("footer.ourClients")}</Link></li>
              <li><Link href="/blog" data-testid="link-footer-blog" className="text-sm text-white/65 hover:text-secondary transition-colors">{t("nav.blog")}</Link></li>
              <li><Link href="/contact" data-testid="link-footer-contact" className="text-sm text-white/65 hover:text-secondary transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-white/50" />
                <span>Istanbul, Turkey<br />Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/65">
                <Mail className="h-4 w-4 flex-shrink-0 text-white/50" />
                <a href="mailto:info@webimot.com" className="hover:text-secondary transition-colors">info@webimot.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/65">
                <Phone className="h-4 w-4 flex-shrink-0 text-white/50" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  {t("footer.whatsappUs")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/55">
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
