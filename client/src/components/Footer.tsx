import { Link } from "wouter";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDir } from "@/i18n/useDir";
import { SYSTEMS, ADD_ONS, useLocalizedSystemsData } from "@/data/systemsData";

// Pages a visitor can open from the footer: the two products and the ads/SEO services.
const productLinks = [...SYSTEMS.flatMap((s) => s.products), ...ADD_ONS].filter(
  (p): p is typeof p & { href: string } => !!p.href && (p.href.startsWith("/products/") || ADD_ONS.includes(p)),
);

// Shared link styles: one look for every footer link, with a visible keyboard focus ring
const focusRing = "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817]";
const linkClass = `inline-block py-0.5 text-sm text-white/70 transition-colors hover:text-white ${focusRing}`;
const linkStrongClass = `inline-block py-0.5 text-sm font-medium text-white transition-colors hover:text-secondary ${focusRing}`;
const headingClass = "mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/60";

export default function Footer() {
  const { t } = useTranslation();
  const dir = useDir();
  const { systems, audiences } = useLocalizedSystemsData();
  const whatsappLink = "https://wa.me/31628753175";
  return (
    <footer dir={dir} className="relative overflow-hidden border-t border-white/10 bg-[#020817]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">{t("shell.footer.heading", "Footer")}</h2>
      <div className="absolute inset-0 neural-grid pointer-events-none opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 py-14 sm:px-6 md:py-16">
        {/* Brand + five link columns: at lg the brand takes its own row, at xl it sits beside the columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 xl:grid-cols-7">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5 xl:col-span-2 xl:pe-8">
            <Link href="/" className={`mb-4 inline-flex items-center gap-2 ${focusRing}`} aria-label={t("shell.nav.homeAria", "Webimot home")}>
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Webimot</span>
            </Link>
            <p className="mb-3 text-sm font-medium text-white/80">{t("footer.tagline")}</p>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">{t("footer.description")}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5">
              <Zap className="h-3 w-3 text-secondary" aria-hidden="true" />
              <span className="font-mono text-[11px] font-semibold tracking-wide text-secondary">{t("shell.footer.poweredBy", "Powered by AI Automation")}</span>
            </div>
          </div>

          {/* Systems */}
          <div>
            <h3 className={headingClass}>{t("footer.systems", "Systems")}</h3>
            <ul className="space-y-1.5">
              {systems.map((system) => (
                <li key={system.id}>
                  <Link href={`/systems#${system.id}`} data-testid={`link-footer-system-${system.id}`} className={linkClass}>
                    {system.emoji} {system.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/systems" data-testid="link-footer-systems" className={linkStrongClass}>{t("footer.allSystems", "All systems")} <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span></Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className={headingClass}>{t("footer.products", "Products")}</h3>
            <ul className="space-y-1.5">
              {productLinks.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className={linkClass}>{product.emoji} {product.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who we help */}
          <div>
            <h3 className={headingClass}>{t("footer.whoWeHelp", "Who we help")}</h3>
            <ul className="space-y-1.5">
              {audiences.map((audience) => (
                <li key={audience.id}>
                  <Link href={audience.href} data-testid={`link-footer-${audience.id}`} className={linkClass}>{audience.name}</Link>
                </li>
              ))}
              <li><Link href="/case-studies" data-testid="link-footer-case-studies" className={linkClass}>{t("footer.caseStudies")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={headingClass}>{t("footer.company")}</h3>
            <ul className="space-y-1.5">
              <li><Link href="/about" data-testid="link-footer-about" className={linkClass}>{t("footer.aboutUs")}</Link></li>
              <li><Link href="/sia-ahmadi" data-testid="link-footer-founder" className={linkClass}>{t("about.founder.badge")}: {t("about.founder.name")}</Link></li>
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
                <span>{t("shell.footer.locationAmsterdam", "Amsterdam, Netherlands")}<br />{t("shell.footer.locationIstanbul", "Istanbul, Turkey")}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href="mailto:webimot.info@gmail.com" className={linkClass}>webimot.info@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t("footer.whatsappUs")}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <SiInstagram className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href="https://www.instagram.com/webimotagency/" target="_blank" rel="noopener noreferrer me" className={linkClass} aria-label={t("shell.footer.instagramAria", "Webimot on Instagram (opens in a new tab)")}>
                  @webimotagency
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <FaLinkedin className="h-4 w-4 flex-shrink-0 text-white/50" aria-hidden="true" />
                <a href="https://www.linkedin.com/company/webimot-agency/" target="_blank" rel="noopener noreferrer me" className={linkClass} aria-label={t("shell.footer.linkedinAria", "Webimot on LinkedIn (opens in a new tab)")}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <p className="text-center sm:text-start">&copy; {new Date().getFullYear()} Webimot. {t("footer.rights")}</p>
          <nav aria-label={t("shell.footer.legalAria", "Legal")} className="flex items-center gap-6">
            <Link href="/privacy-policy" data-testid="link-footer-privacy" className={`py-1 transition-colors hover:text-white ${focusRing}`}>{t("footer.privacyPolicy")}</Link>
            <Link href="/terms-of-service" data-testid="link-footer-terms" className={`py-1 transition-colors hover:text-white ${focusRing}`}>{t("footer.termsOfService")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
