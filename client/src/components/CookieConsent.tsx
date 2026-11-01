import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

type Choice = "granted" | "denied";
const STORAGE_KEY = "cookie-consent";

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

// Tells Google Analytics (Consent Mode v2, defaults set in index.html) whether it may store
// cookies. Analytics still receives cookieless pings when denied.
function applyChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked — the banner will simply show again next visit.
  }
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
      analytics_storage: choice,
    });
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readChoice() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (choice: Choice) => {
    applyChoice(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[90] rounded-xl border bg-background p-5 shadow-2xl"
      data-testid="cookie-consent"
    >
      <p className="text-sm text-muted-foreground mb-4">
        We use Google Analytics cookies to understand how visitors use this site and improve it.
        No marketing cookies are set. See our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground">
          privacy policy
        </Link>
        .
      </p>
      <div className="flex flex-col-reverse sm:flex-row gap-2 sm:justify-end">
        <Button variant="outline" size="sm" onClick={() => decide("denied")} data-testid="button-cookies-decline">
          Decline
        </Button>
        <Button size="sm" onClick={() => decide("granted")} data-testid="button-cookies-accept">
          Accept analytics
        </Button>
      </div>
    </div>
  );
}
