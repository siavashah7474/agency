import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BookingModalProvider } from "@/hooks/use-booking-modal";
import { lazy, Suspense, type ComponentType } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { isPrerendering } from "@/lib/prerender";

type PreloadableComponent = ComponentType<any> & { preload: () => Promise<unknown> };

// Like React.lazy, but once preload() has finished the page renders synchronously.
// main.tsx preloads the first page so pre-rendered HTML is swapped for the live app
// in a single render, without flashing the loading placeholder.
function lazyWithPreload(factory: () => Promise<{ default: ComponentType<any> }>): PreloadableComponent {
  let loaded: ComponentType<any> | null = null;
  const LazyComponent = lazy(factory);
  const Component = ((props: Record<string, unknown>) => {
    const Resolved = loaded ?? LazyComponent;
    return <Resolved {...props} />;
  }) as PreloadableComponent;
  Component.preload = () => factory().then((mod) => { loaded = mod.default; return mod; });
  return Component;
}

const importHome = () => import("@/pages/Home");
const Home = lazyWithPreload(importHome);
const importSolutions = () => import("@/pages/Solutions");
const Solutions = lazyWithPreload(importSolutions);
const importWhoWeHelp = () => import("@/pages/WhoWeHelp");
const WhoWeHelp = lazyWithPreload(importWhoWeHelp);
const importPricing = () => import("@/pages/Pricing");
const Pricing = lazyWithPreload(importPricing);
const importServices = () => import("@/pages/Services");
const Services = lazyWithPreload(importServices);
const importServiceDetail = () => import("@/pages/ServiceDetail");
const ServiceDetail = lazyWithPreload(importServiceDetail);
const importAISolutions = () => import("@/pages/AISolutions");
const AISolutions = lazyWithPreload(importAISolutions);
const importAbout = () => import("@/pages/About");
const About = lazyWithPreload(importAbout);
const importContact = () => import("@/pages/Contact");
const Contact = lazyWithPreload(importContact);
const importClients = () => import("@/pages/Clients");
const Clients = lazyWithPreload(importClients);
const importBlog = () => import("@/pages/Blog");
const Blog = lazyWithPreload(importBlog);
const importBlogPost = () => import("@/pages/BlogPost");
const BlogPost = lazyWithPreload(importBlogPost);
const importBookConsultation = () => import("@/pages/BookConsultation");
const BookConsultation = lazyWithPreload(importBookConsultation);
const importCaseStudies = () => import("@/pages/CaseStudies");
const CaseStudies = lazyWithPreload(importCaseStudies);
const importCaseStudyDetail = () => import("@/pages/CaseStudyDetail");
const CaseStudyDetail = lazyWithPreload(importCaseStudyDetail);
const importPrivacyPolicy = () => import("@/pages/PrivacyPolicy");
const PrivacyPolicy = lazyWithPreload(importPrivacyPolicy);
const importTermsOfService = () => import("@/pages/TermsOfService");
const TermsOfService = lazyWithPreload(importTermsOfService);
const importNotFound = () => import("@/pages/not-found");
const NotFound = lazyWithPreload(importNotFound);
const importLeadFirePage = () => import("@/pages/products/LeadFire");
const LeadFirePage = lazyWithPreload(importLeadFirePage);
const importDocuMindPage = () => import("@/pages/products/DocuMind");
const DocuMindPage = lazyWithPreload(importDocuMindPage);
const importNurtureLoopPage = () => import("@/pages/products/NurtureLoop");
const NurtureLoopPage = lazyWithPreload(importNurtureLoopPage);
const importReviveIQPage = () => import("@/pages/products/ReviveIQ");
const ReviveIQPage = lazyWithPreload(importReviveIQPage);
const importClearDeskPage = () => import("@/pages/products/ClearDesk");
const ClearDeskPage = lazyWithPreload(importClearDeskPage);
const importSEOBlogAIPage = () => import("@/pages/products/SEOBlogAI");
const SEOBlogAIPage = lazyWithPreload(importSEOBlogAIPage);
const importWhatsAppAIPage = () => import("@/pages/products/WhatsAppAI");
const WhatsAppAIPage = lazyWithPreload(importWhatsAppAIPage);
const importChatbot = () => import("@/components/Chatbot");
const Chatbot = lazyWithPreload(importChatbot);
const importExitIntentPopup = () => import("@/components/ExitIntentPopup");
const ExitIntentPopup = lazyWithPreload(importExitIntentPopup);
const importHealthcarePage = () => import("@/pages/industries/Healthcare");
const HealthcarePage = lazyWithPreload(importHealthcarePage);
const importEcommercePage = () => import("@/pages/industries/Ecommerce");
const EcommercePage = lazyWithPreload(importEcommercePage);
const importFinanceLegalPage = () => import("@/pages/industries/FinanceLegal");
const FinanceLegalPage = lazyWithPreload(importFinanceLegalPage);
const importSmallBusinessPage = () => import("@/pages/industries/SmallBusiness");
const SmallBusinessPage = lazyWithPreload(importSmallBusinessPage);
const importRealEstatePage = () => import("@/pages/industries/RealEstate");
const RealEstatePage = lazyWithPreload(importRealEstatePage);

// Route → page chunk, used to load the first page before React takes over pre-rendered HTML.
const routeImporters: [string, PreloadableComponent][] = [
  ["/", Home],
  ["/solutions", Solutions],
  ["/who-we-help", WhoWeHelp],
  ["/pricing", Pricing],
  ["/services", Services],
  ["/services/:slug", ServiceDetail],
  ["/ai-solutions", AISolutions],
  ["/about", About],
  ["/contact", Contact],
  ["/clients", Clients],
  ["/blog", Blog],
  ["/blog/:slug", BlogPost],
  ["/book-consultation", BookConsultation],
  ["/case-studies", CaseStudies],
  ["/case-studies/:slug", CaseStudyDetail],
  ["/privacy-policy", PrivacyPolicy],
  ["/terms-of-service", TermsOfService],
  ["/products/leadfire", LeadFirePage],
  ["/products/documind", DocuMindPage],
  ["/products/nurtureloop", NurtureLoopPage],
  ["/products/reviveiq", ReviveIQPage],
  ["/products/cleardesk", ClearDeskPage],
  ["/products/seo-blog-ai", SEOBlogAIPage],
  ["/products/whatsapp-ai", WhatsAppAIPage],
  ["/industries/healthcare", HealthcarePage],
  ["/industries/ecommerce", EcommercePage],
  ["/industries/finance-legal", FinanceLegalPage],
  ["/industries/small-business", SmallBusinessPage],
  ["/industries/real-estate", RealEstatePage],
];

export function preloadRoute(pathname: string): Promise<unknown> {
  const match = routeImporters.find(([pattern]) =>
    new RegExp("^" + pattern.replace(/:[^/]+/g, "[^/]+") + "/?$").test(pathname),
  );
  return (match ? match[1] : NotFound).preload();
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-primary/20"></div>
        <div className="h-4 w-24 rounded bg-muted"></div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/who-we-help" component={WhoWeHelp} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/services" component={Services} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/ai-solutions" component={AISolutions} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/clients" component={Clients} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/book-consultation" component={BookConsultation} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/:slug" component={CaseStudyDetail} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/products/leadfire" component={LeadFirePage} />
        <Route path="/products/documind" component={DocuMindPage} />
        <Route path="/products/nurtureloop" component={NurtureLoopPage} />
        <Route path="/products/reviveiq" component={ReviveIQPage} />
        <Route path="/products/cleardesk" component={ClearDeskPage} />
        <Route path="/products/seo-blog-ai" component={SEOBlogAIPage} />
        <Route path="/products/whatsapp-ai" component={WhatsAppAIPage} />
        <Route path="/industries/healthcare" component={HealthcarePage} />
        <Route path="/industries/ecommerce" component={EcommercePage} />
        <Route path="/industries/finance-legal" component={FinanceLegalPage} />
        <Route path="/industries/small-business" component={SmallBusinessPage} />
        <Route path="/industries/real-estate" component={RealEstatePage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31628753175"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 z-50 w-13 h-13 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
      style={{ width: 52, height: 52, backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: "white" }} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BookingModalProvider>
            <GoogleAnalytics />
            <Router />
            {!isPrerendering && (
              <Suspense fallback={null}>
                <Chatbot />
                <ExitIntentPopup />
              </Suspense>
            )}
            <WhatsAppButton />
            <Toaster />
          </BookingModalProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
