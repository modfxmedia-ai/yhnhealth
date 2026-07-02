"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Calendar, Phone, X } from "lucide-react";
import { LOCATIONS } from "@/lib/siteData";
import { useBookingPopup } from "@/components/BookingPopup";
import { cn } from "@/lib/utils";

/** Routes that render as standalone landing pages without the site chrome. */
const BARE_ROUTES = ["/functional-medicine-special-offer"];

/**
 * Persistent bottom banner shown site-wide (except on landing pages).
 * Shows "Book Now" + both office phone numbers once the user scrolls past the hero.
 * Visible on both desktop and mobile, dismissible for the session.
 */
export default function BottomBookBanner() {
  const pathname = usePathname();
  const { openBooking } = useBookingPopup();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("yhn.bottomBanner.dismissed") === "1") {
        setDismissed(true);
      }
    } catch {}

    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("yhn.bottomBanner.dismissed", "1");
    } catch {}
  };

  const isBare = BARE_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(`${r}/`)
  );
  if (isBare) return null;

  const primary = LOCATIONS[0];

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-brand/15 bg-brand-dark/95 text-white shadow-[0_-8px_24px_rgba(0,0,0,0.18)] backdrop-blur"
          role="region"
          aria-label="Book an appointment"
        >
          <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-3 md:gap-6 md:px-8 md:py-3.5">
            {/* Heading + phones */}
            <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
              <div className="hidden shrink-0 md:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Ready when you are
                </p>
                <p className="mt-0.5 font-display text-lg font-bold leading-tight">
                  Book your visit today
                </p>
              </div>

              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-1 md:gap-x-6">
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.tel}
                    href={loc.tel}
                    className="group inline-flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-accent"
                  >
                    <Phone size={14} className="text-accent" strokeWidth={2} />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                      {loc.name}
                    </span>
                    <span className="font-semibold">{loc.phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={primary.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openBooking(primary.bookingUrl);
              }}
              className={cn(
                "inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent-dark md:px-6 md:py-3"
              )}
            >
              <Calendar size={12} strokeWidth={2.25} />
              Book Now
            </Link>

            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Dismiss booking banner"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
