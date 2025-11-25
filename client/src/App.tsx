import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import AISolutions from "@/pages/AISolutions";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Clients from "@/pages/Clients";
import Blog from "@/pages/Blog";
import BookConsultation from "@/pages/BookConsultation";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/ai-solutions" component={AISolutions} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/clients" component={Clients} />
      <Route path="/blog" component={Blog} />
      <Route path="/book-consultation" component={BookConsultation} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
