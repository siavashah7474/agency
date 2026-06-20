import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BookingModalProvider } from "@/hooks/use-booking-modal";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const AISolutions = lazy(() => import("@/pages/AISolutions"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Clients = lazy(() => import("@/pages/Clients"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const BookConsultation = lazy(() => import("@/pages/BookConsultation"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const NotFound = lazy(() => import("@/pages/not-found"));
const LeadFirePage = lazy(() => import("@/pages/products/LeadFire"));
const DocuMindPage = lazy(() => import("@/pages/products/DocuMind"));
const NurtureLoopPage = lazy(() => import("@/pages/products/NurtureLoop"));
const ReviveIQPage = lazy(() => import("@/pages/products/ReviveIQ"));
const ClearDeskPage = lazy(() => import("@/pages/products/ClearDesk"));
const SEOBlogAIPage = lazy(() => import("@/pages/products/SEOBlogAI"));
const WhatsAppAIPage = lazy(() => import("@/pages/products/WhatsAppAI"));
const Chatbot = lazy(() => import("@/components/Chatbot"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const HealthcarePage = lazy(() => import("@/pages/industries/Healthcare"));
const EcommercePage = lazy(() => import("@/pages/industries/Ecommerce"));
const FinanceLegalPage = lazy(() => import("@/pages/industries/FinanceLegal"));
const SmallBusinessPage = lazy(() => import("@/pages/industries/SmallBusiness"));
const RealEstatePage = lazy(() => import("@/pages/industries/RealEstate"));

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
            <Suspense fallback={null}>
              <Chatbot />
              <ExitIntentPopup />
            </Suspense>
            <WhatsAppButton />
            <Toaster />
          </BookingModalProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
