import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Webimot"
        description="The page you're looking for doesn't exist. Return to the Webimot homepage or browse our AI automation and digital transformation services."
        noindex
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#020817] px-4 py-20 md:py-28">
          <div className="absolute inset-0 neural-grid pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-float-orb pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
          <Card className="relative z-10 w-full max-w-md border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary" aria-hidden="true">Error 404</p>
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-1 h-7 w-7 flex-shrink-0 text-red-400" aria-hidden="true" />
                <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  404 Page Not Found
                </h1>
              </div>

              <p className="mb-6 text-base leading-relaxed text-white/75">
                The page you're looking for doesn't exist or has been moved.
                Please check the URL or return to our homepage.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/" className={buttonVariants({ size: "lg", className: "rounded-full bg-white text-slate-900 border-white hover:bg-white/90" })}>
                  <Home className="h-4 w-4" aria-hidden="true" />
                  Go to Homepage
                </Link>
                <Button variant="outline" size="lg" className="rounded-full border-white/25 text-white hover:bg-white/10 hover:text-white focus-visible:ring-offset-[#020817]" onClick={() => window.history.back()}>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
}
