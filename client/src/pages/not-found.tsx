import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        description="The page you're looking for doesn't exist. Return to Webimot homepage or browse our medical tourism marketing services, AI automation solutions, and lead generation services."
        canonicalUrl="https://webimotagency.com/404"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center bg-[#020817] p-4 relative overflow-hidden">
          <div className="absolute inset-0 neural-grid pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-float-orb pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
          <Card className="w-full max-w-md mx-4 relative z-10 bg-white/4 border border-white/8">
            <CardContent className="pt-6">
              <div className="flex mb-4 gap-2">
                <AlertCircle className="h-8 w-8 text-red-400" />
                <h1 className="text-2xl font-bold text-white">
                  404 Page Not Found
                </h1>
              </div>

              <p className="mt-4 text-sm text-white/70 mb-6">
                The page you're looking for doesn't exist or has been moved.
                Please check the URL or return to our homepage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/">
                  <Button>
                    <Home className="mr-2 h-4 w-4" />
                    Go to Homepage
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
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
