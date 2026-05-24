import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "es", label: "ES", name: "Español" },
];

const PRODUCTS = [
  { emoji: "⚡", label: "LeadFire", href: "/products/leadfire" },
  { emoji: "📄", label: "DocuMind", href: "/products/documind" },
  { emoji: "🔁", label: "NurtureLoop", href: "/products/nurtureloop" },
  { emoji: "💎", label: "ReviveIQ", href: "/products/reviveiq" },
  { emoji: "📊", label: "ClearDesk", href: "/products/cleardesk" },
  { emoji: "✍️", label: "SEO Blog AI", href: "/products/seo-blog-ai" },
  { emoji: "💬", label: "WhatsApp AI", href: "/products/whatsapp-ai" },
];

const INDUSTRIES = [
  { emoji: "🏥", label: "Healthcare & Clinics", href: "/industries/healthcare" },
  { emoji: "🛒", label: "eCommerce & Shopify", href: "/industries/ecommerce" },
  { emoji: "⚖️", label: "Finance & Legal", href: "/industries/finance-legal" },
  { emoji: "🏢", label: "Small Business", href: "/industries/small-business" },
  { emoji: "🏠", label: "Real Estate", href: "/industries/real-estate" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const { openModal } = useBookingModal();
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangMenuOpen(false);
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false);
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) setIndustriesOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") { setLangMenuOpen(false); setProductsOpen(false); setIndustriesOpen(false); }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => { document.removeEventListener("mousedown", handleClick); document.removeEventListener("keydown", handleKeyDown); };
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/ai-solutions", label: t("nav.aiSolutions") },
    { href: "/about", label: t("nav.about") },
    { href: "/clients", label: t("nav.clients") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full border-b border-secondary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ boxShadow: '0 1px 0 0 hsl(221 91% 60% / 0.08)' }}>
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl">Webimot</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-muted-foreground"}`}>
                  {link.label}
                </Link>
              ))}

              {/* Products dropdown */}
              <div ref={productsRef} className="relative">
                <button onClick={() => { setProductsOpen(!productsOpen); setIndustriesOpen(false); }}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  aria-haspopup="true" aria-expanded={productsOpen}>
                  Products <ChevronDown className={`h-3 w-3 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-52 rounded-md border bg-background shadow-lg z-50 py-1">
                    {PRODUCTS.map((p) => (
                      <Link key={p.href} href={p.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => setProductsOpen(false)}>
                        <span>{p.emoji}</span><span>{p.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries dropdown */}
              <div ref={industriesRef} className="relative">
                <button onClick={() => { setIndustriesOpen(!industriesOpen); setProductsOpen(false); }}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  aria-haspopup="true" aria-expanded={industriesOpen}>
                  Industries <ChevronDown className={`h-3 w-3 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
                </button>
                {industriesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-52 rounded-md border bg-background shadow-lg z-50 py-1">
                    {INDUSTRIES.map((ind) => (
                      <Link key={ind.href} href={ind.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => setIndustriesOpen(false)}>
                        <span>{ind.emoji}</span><span>{ind.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <div ref={langRef} className="relative">
                <button onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  aria-label="Change language" aria-haspopup="listbox" aria-expanded={langMenuOpen}>
                  <Globe className="h-4 w-4" /><span>{currentLang.label}</span><ChevronDown className="h-3 w-3" />
                </button>
                {langMenuOpen && (
                  <div role="listbox" aria-label="Select language" className="absolute right-0 top-full mt-1 w-36 rounded-md border bg-background shadow-lg z-50">
                    {LANGUAGES.map((lang) => (
                      <button key={lang.code} role="option" aria-selected={i18n.language === lang.code}
                        onClick={() => { i18n.changeLanguage(lang.code); setLangMenuOpen(false); }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors ${i18n.language === lang.code ? "text-primary font-semibold" : "text-foreground"}`}>
                        <span className="text-xs font-bold w-6">{lang.label}</span><span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Button data-testid="button-book-consultation" variant="default" onClick={() => openModal()}>
                {t("nav.bookCall")}
              </Button>
            </div>

            <button data-testid="button-mobile-menu" className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                  className={`block py-3 text-sm font-medium border-b border-muted/30 last:border-0 ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}

              <div className="border-t pt-2">
                <button className="flex items-center justify-between w-full py-2 text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
                  Products <ChevronDown className={`h-3 w-3 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="pl-4 flex flex-col mt-1">
                    {PRODUCTS.map((p) => (
                      <Link key={p.href} href={p.href}
                        className="flex items-center gap-2 py-3 text-sm text-muted-foreground hover:text-primary border-b border-muted/40 last:border-0"
                        onClick={() => setMobileMenuOpen(false)}>
                        <span>{p.emoji}</span><span>{p.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button className="flex items-center justify-between w-full py-2 text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}>
                  Industries <ChevronDown className={`h-3 w-3 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-4 flex flex-col mt-1">
                    {INDUSTRIES.map((ind) => (
                      <Link key={ind.href} href={ind.href}
                        className="flex items-center gap-2 py-3 text-sm text-muted-foreground hover:text-primary border-b border-muted/40 last:border-0"
                        onClick={() => setMobileMenuOpen(false)}>
                        <span>{ind.emoji}</span><span>{ind.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 py-2 border-t mt-1">
                <Globe className="h-4 w-4 text-muted-foreground" />
                {LANGUAGES.map((lang) => (
                  <button key={lang.code} onClick={() => { i18n.changeLanguage(lang.code); setMobileMenuOpen(false); }}
                    className={`px-2 py-1 text-xs font-bold rounded ${i18n.language === lang.code ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"}`}>
                    {lang.label}
                  </button>
                ))}
              </div>

              <Button data-testid="button-mobile-book" variant="default" className="w-full"
                onClick={() => { setMobileMenuOpen(false); openModal(); }}>
                {t("nav.bookCall")}
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
