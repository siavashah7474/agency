import { createContext, lazy, Suspense, useContext, useEffect, useState, ReactNode } from "react";

// The booking form (form library, validation, select and dialog) is only needed once a
// visitor opens it, so it is kept out of the first download. It is fetched in the background
// a few seconds after the page loads, so opening it still feels instant.
const importBookingModal = () => import("@/components/BookingModal");
const BookingModal = lazy(importBookingModal);

interface BookingModalContextType {
  isOpen: boolean;
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined
);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>();
  const [everOpened, setEverOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => void importBookingModal(), 4000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (service?: string) => {
    setDefaultService(service);
    setEverOpened(true);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDefaultService(undefined);
  };

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {everOpened && (
        <Suspense fallback={null}>
          <BookingModal open={isOpen} onOpenChange={setIsOpen} defaultService={defaultService} />
        </Suspense>
      )}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (context === undefined) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return context;
}

