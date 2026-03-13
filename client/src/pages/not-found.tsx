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
        canonicalUrl="https://webimot.com/404"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center bg-gray-50 p-4">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="pt-6">
              <div className="flex mb-4 gap-2">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <h1 className="text-2xl font-bold text-gray-900">
                  404 Page Not Found
                </h1>
              </div>

              <p className="mt-4 text-sm text-gray-600 mb-6">
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
