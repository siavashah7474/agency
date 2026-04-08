import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-FV6M9N8FQ3";

// Initialize Google Analytics
export function initializeGA() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  // Load gtag script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });

  // Make gtag available globally
  (window as any).gtag = gtag;
}

// Track page views
export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !(window as any).gtag) {
    return;
  }

  (window as any).gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
}

// Track events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !(window as any).gtag) {
    return;
  }

  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Component to track page views on route change.
// GA is already initialized by the inline script in index.html — this component
// only fires trackPageView for subsequent SPA navigations (skips the first render
// to avoid double-counting the initial pageview already fired by index.html).
export default function GoogleAnalytics() {
  const [location] = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if ((window as any).gtag) {
      trackPageView(location);
    }
  }, [location]);

  return null;
}

// Declare gtag types for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

