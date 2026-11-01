import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { X, Gift, ArrowRight } from "lucide-react";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useTranslation } from "react-i18next";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { isOpen: bookingOpen, openModal } = useBookingModal();
  const { t } = useTranslation();

  const showPopup = useCallback(() => {
    // Never stack on top of the booking form the visitor is already filling in.
    if (hasShown || bookingOpen) return;
    let dismissed: string | null = null;
    try {
      dismissed = sessionStorage.getItem("exitPopupDismissed");
    } catch {
      // Storage blocked (private mode, strict settings) — fall back to hasShown only.
    }
    if (!dismissed) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [hasShown, bookingOpen]);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0) showPopup();
  }, [showPopup]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  // On touch devices the mouseleave event never fires — trigger instead when
  // the user rapidly scrolls back toward the top (common "about to leave" signal).
  useEffect(() => {
    if (!("ontouchstart" in window)) return;
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (lastScrollY > 300 && currentScrollY < 50) showPopup();
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    try {
      sessionStorage.setItem("exitPopupDismissed", "true");
    } catch {
      // Storage blocked — hasShown still stops it reopening on this page view.
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="exit-popup-title">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-close-exit-popup"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
            <Gift className="h-8 w-8 text-white" />
          </div>
          
          <h2 id="exit-popup-title" className="text-2xl font-bold mb-3">
            {t("exitPopup.title")}
          </h2>

          <p className="text-muted-foreground mb-6">
            Get a <strong>free marketing audit</strong> and discover how we can help you generate more leads. No commitment required.
          </p>

          <div className="space-y-3">
            <Button
              data-testid="button-exit-popup-cta"
              size="lg"
              className="w-full"
              onClick={() => {
                handleClose();
                openModal();
              }}
            >
              {t("exitPopup.cta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <button
              onClick={handleClose}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-exit-popup-dismiss"
            >
              {t("exitPopup.dismiss")}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-xs text-muted-foreground">
              {t("exitPopup.trust")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
