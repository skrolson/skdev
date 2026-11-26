"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface BookingContextValue {
  serviceId: string | null;
  setServiceId: (id: string | null) => void;
  /** Wybiera usługę i przewija do formularza rezerwacji. */
  bookService: (id: string) => void;
  /** Rośnie przy każdym skrócie „Umów”, aby kreator wrócił do pierwszego kroku. */
  requestId: number;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [requestId, setRequestId] = useState(0);

  const bookService = useCallback((id: string) => {
    setServiceId(id);
    setRequestId((current) => current + 1);
    document.getElementById("rezerwacja")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const value = useMemo(
    () => ({ serviceId, setServiceId, bookService, requestId }),
    [serviceId, bookService, requestId],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking wymaga komponentu BookingProvider.");
  return context;
}
