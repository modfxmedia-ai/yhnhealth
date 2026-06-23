"use client";

import {
  createContext,
  forwardRef,
  useContext,
  useMemo,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/*  Context                                                                    */
/* -------------------------------------------------------------------------- */

type BookingContextValue = {
  /** Send the user straight to the external booking URL (no popup form). */
  openBooking: (url?: string | null) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBookingPopup(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBookingPopup must be used within <BookingProvider>");
  }
  return ctx;
}

/* -------------------------------------------------------------------------- */
/*  BookingLink — drop-in anchor that opens the external booking URL           */
/* -------------------------------------------------------------------------- */

type BookingLinkProps = ComponentPropsWithoutRef<"a"> & { href: string };

export const BookingLink = forwardRef<HTMLAnchorElement, BookingLinkProps>(
  function BookingLink({ href, target, rel, ...rest }, ref) {
    return (
      <a
        ref={ref}
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...rest}
      />
    );
  }
);

/* -------------------------------------------------------------------------- */
/*  Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function BookingProvider({ children }: { children: ReactNode }) {
  const value = useMemo<BookingContextValue>(
    () => ({
      openBooking: (url?: string | null) => {
        if (!url) return;
        window.open(url, "_blank", "noopener,noreferrer");
      },
      closeBooking: () => {},
    }),
    []
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}
