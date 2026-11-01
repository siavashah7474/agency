import { Link } from "wouter";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Shared link styles: one look for every footer link, with a visible keyboard focus ring
const focusRing = "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817]";
const linkClass = `inline-block py-0.5 text-sm text-white/70 transition-colors hover:text-white ${focusRing}`;
const linkStrongClass = `inline-block py-0.5 text-sm font-medium text-white transition-colors hover:text-secondary ${focusRing}`;
const headingClass = "mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/60";

export default function Footer() {
  const { t } = useTranslation();
  const whatsappLink = "https://wa.me/31628753175";
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020817]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="absolute inset-0 neural-grid pointer-events-none opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 py-14 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 lg:pr-8">
            <Link href="/" className={`mb-4 inline-flex items-center gap-2 ${focusRing}`} aria-label="Webimot home">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Webimot</span>
            </Link>
            <p className="mb-3 text-sm font-medium text-white/80">{t("footer.tagline")}</p>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">{t("footer.description")}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5">
              <Zap className="h-3 w-3 text-secondary" aria-hidden="true" />
              <span className="font-mono text-[11px] font-semibold tracking-wide text-secondary">Powered by AI Automation</span>
            </div>
            <div className="mt-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-white/50">Certified Partners</p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 leading-none tracking-wider uppercase">Google</p>
                    <p className="text-[11px] font-bold text-gray-800 leading-tight">Partner</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#1877F2"/>
                  </svg>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 leading-none tracking-wider uppercase">Meta</p>
                    <p className="text-[11px] font-bold text-gray-800 leading-tight">Business Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className={headingClass}>Products</h3>
            <ul className="space-y-1.5">
              <li><Link href="/solutions" className={linkStrongClass}>All Solutions →</Link></li>
              <li><Link href="/products/leadfire" className={linkClass}>⚡ LeadFire</Link></li>
              <li><Link href="/products/documind" className={linkClass}>📄 DocuMind</Link></li>
              <li><Link href="/products/nurtureloop" className={linkClass}>🔁 NurtureLoop</Link></li>
              <li><Link href="/products/reviveiq" className={linkClass}>💎 ReviveIQ</Link></li>
              <li><Link href="/products/cleardesk" className={linkClass}>📊 ClearDesk</Link></li>
              <li><Link href="/products/seo-blog-ai" className={linkClass}>✍️ SEO Blog AI</Link></li>
              <li><Link href="/products/whatsapp-ai" className={linkClass}>💬 WhatsApp AI</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className={headingClass}>Industries</h3>
            <ul className="space-y-1.5">
              <li><Link href="/who-we-help" className={linkStrongClass}>Who We Help →</Link></li>
              <li><Link href="/industries/healthcare" className={linkClass}>Healthcare</Link></li>
              <li><Link href="/industries/ecommerce" className={linkClass}>eCommerce</Link></li>
              <li><Link href="/industries/finance-legal" className={linkClass}>Finance & Legal</Link></li>
              <li><Link href="/industries/small-business" className={linkClass}>Small Business</Link></li>
              <li><Link href="/industries/real-estate" className={linkClass}>Real Estate</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={headingClass}>{t("footer.company")}</h3>
            <ul className="space-y-1.5">
              <li><Link href="/services" className={linkClass}>Services</Link></li>
              <li><Link href="/pricing" data-testid="link-footer-pricing" className={linkClass}>Pricing</Link></li>
              <li><Link href="/about" data-testid="link-footer-about" className={linkClass}>{t("footer.aboutUs")}</Link></li>
              <li><Link href="/case-studies" data-testid="link-footer-case-studies" className={linkClass}>{t("footer.caseStudies")}</Link></li>
              <li><Link href="/clients" data-testid="link-footer-clients" className={linkClass}>{t("footer.ourClients")}</Link></li>
              <li><Link href="/blog" data-testid="link-footer-blog" className={linkClass}>{t("nav.blog")}</Link></li>
              <li><Link href="/contact" data-testid="link-footer-contact" className={linkClass}>{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={headingClass}>{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <span>Istanbul, Turkey<br />Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href="mailto:info@webimot.com" className={linkClass}>info@webimot.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t("footer.whatsappUs")}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <SiInstagram className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href="https://www.instagram.com/webimotagency/" target="_blank" rel="noopener noreferrer me" className={linkClass} aria-label="Webimot on Instagram (opens in a new tab)">
                  @webimotagency
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <FaLinkedin className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href="https://www.linkedin.com/company/webimot-agency/" target="_blank" rel="noopener noreferrer me" className={linkClass} aria-label="Webimot on LinkedIn (opens in a new tab)">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Webimot. {t("footer.rights")}</p>
          <nav aria-label="Legal" className="flex items-center gap-6">
            <Link href="/privacy-policy" data-testid="link-footer-privacy" className={`py-1 transition-colors hover:text-white ${focusRing}`}>{t("footer.privacyPolicy")}</Link>
            <Link href="/terms-of-service" data-testid="link-footer-terms" className={`py-1 transition-colors hover:text-white ${focusRing}`}>{t("footer.termsOfService")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
