import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "es", label: "ES", name: "Español" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBookingModal();
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  // Close the mobile menu whenever the route changes
  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  // Subtle border + shadow once the page has scrolled under the header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open; close it on Escape or when the viewport grows to desktop
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileMenuOpen(false); };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => { if (e.matches) setMobileMenuOpen(false); };

    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangMenuOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLangMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => { document.removeEventListener("mousedown", handleClick); document.removeEventListener("keydown", handleKeyDown); };
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/solutions", label: t("nav.solutions") },
    { href: "/case-studies", label: t("nav.work") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  // "/" only matches exactly; other links also match their child routes (e.g. /case-studies/xyz)
  const isActive = (href: string) => (href === "/" ? location === "/" : location === href || location.startsWith(`${href}/`));

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg">
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 transition-[border-color,box-shadow] duration-300 ${
          scrolled || mobileMenuOpen ? "border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.06)]" : "border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className={`flex items-center gap-2 rounded-md ${focusRing}`} aria-label="Webimot home">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary" aria-hidden="true">
                <span className="text-lg font-bold text-white">W</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Webimot</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1" aria-label="Main">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex min-h-10 items-center rounded-md px-3 text-sm font-medium transition-colors ${focusRing} ${
                      active ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                    } after:absolute after:inset-x-3 after:-bottom-[1px] after:h-0.5 after:rounded-full after:bg-secondary after:transition-opacity ${
                      active ? "after:opacity-100" : "after:opacity-0"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <div ref={langRef} className="relative">
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className={`inline-flex min-h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 ${focusRing}`}
                  aria-label="Change language" aria-haspopup="listbox" aria-expanded={langMenuOpen}
                >
                  <Globe className="h-4 w-4" aria-hidden="true" /><span>{currentLang.label}</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${langMenuOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {langMenuOpen && (
                  <div role="listbox" aria-label="Select language" className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                    {LANGUAGES.map((lang) => {
                      const selected = i18n.language === lang.code;
                      return (
                        <button
                          key={lang.code} type="button" role="option" aria-selected={selected}
                          onClick={() => { i18n.changeLanguage(lang.code); setLangMenuOpen(false); }}
                          className={`flex w-full min-h-10 items-center gap-2 rounded-lg px-3 text-sm transition-colors hover:bg-slate-100 ${focusRing} ${selected ? "font-semibold text-primary" : "text-slate-700"}`}
                        >
                          <span className="w-7 text-xs font-bold">{lang.label}</span>
                          <span className="flex-1 text-left">{lang.name}</span>
                          {selected && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <Button data-testid="button-book-consultation" variant="default" className="rounded-full px-5" onClick={() => openModal()}>
                {t("nav.bookCall")}
              </Button>
            </div>

            <button
              type="button"
              data-testid="button-mobile-menu"
              className={`md:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-slate-900 transition-colors hover:bg-slate-100 ${focusRing}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

      </header>

      {/* Rendered outside <header>: backdrop-filter on the header would otherwise become the containing block for this fixed panel */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-slate-200 bg-background">
            <nav className="container mx-auto flex flex-col px-4 py-4 sm:px-6" aria-label="Main">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-medium transition-colors ${focusRing} ${
                      active ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />}
                  </Link>
                );
              })}

              <div className="mt-4 border-t border-slate-200 pt-4">
                <div className="mb-2 flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Globe className="h-4 w-4" aria-hidden="true" /> Language
                </div>
                <div className="grid grid-cols-4 gap-2" role="listbox" aria-label="Select language">
                  {LANGUAGES.map((lang) => {
                    const selected = i18n.language === lang.code;
                    return (
                      <button
                        key={lang.code} type="button" role="option" aria-selected={selected}
                        onClick={() => { i18n.changeLanguage(lang.code); setMobileMenuOpen(false); }}
                        className={`min-h-11 rounded-lg border text-sm font-semibold transition-colors ${focusRing} ${
                          selected ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        {lang.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button data-testid="button-mobile-book" variant="default" size="lg" className="mt-5 w-full rounded-full"
                onClick={() => { setMobileMenuOpen(false); openModal(); }}>
                {t("nav.bookCall")}
              </Button>
            </nav>
          </div>
        )}
    </>
  );
}
