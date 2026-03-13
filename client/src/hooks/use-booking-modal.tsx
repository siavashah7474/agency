import { createContext, useContext, useState, ReactNode } from "react";
import BookingModal from "@/components/BookingModal";

interface BookingModalContextType {
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined
);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>();

  const openModal = (service?: string) => {
    setDefaultService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDefaultService(undefined);
  };

  return (
    <BookingModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <BookingModal
        open={isOpen}
        onOpenChange={setIsOpen}
        defaultService={defaultService}
      />
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

