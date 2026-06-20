"use client";

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import Script from "next/script";
import { AnimatePresence, motion } from "motion/react";
import { CalendarHeart, CheckCircle2, Clock, ShieldCheck, Sparkles, X } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Config                                                                     */
/* -------------------------------------------------------------------------- */

const FORM_ID = "w2dfORcc3JDfB4caB4Bf";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const FORM_NAME = "🔵 Website lead capture popup form before booking 19-06-26";
const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

/* -------------------------------------------------------------------------- */
/*  Context                                                                    */
/* -------------------------------------------------------------------------- */

type BookingContextValue = {
  /** Open the lead-capture popup. Pass the external booking URL the user
   *  should be sent to once the form has been submitted. */
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
/*  BookingLink — drop-in anchor that opens the popup instead of navigating    */
/* -------------------------------------------------------------------------- */

type BookingLinkProps = ComponentPropsWithoutRef<"a"> & { href: string };

export const BookingLink = forwardRef<HTMLAnchorElement, BookingLinkProps>(
  function BookingLink({ href, onClick, ...rest }, ref) {
    const { openBooking } = useBookingPopup();
    return (
      <a
        ref={ref}
        href={href}
        onClick={(e) => {
          // Respect new-tab / middle-click intent — let those go straight through.
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
            return;
          }
          e.preventDefault();
          openBooking(href);
          onClick?.(e);
        }}
        {...rest}
      />
    );
  }
);

/* -------------------------------------------------------------------------- */
/*  Submission detection                                                       */
/* -------------------------------------------------------------------------- */

/** LeadConnector (GoHighLevel) forms broadcast a `set-sticky-contacts` message
 *  to the parent window once a lead is captured. We treat that — plus a couple
 *  of defensive fallbacks — as a successful submission. */
function isSubmitMessage(data: unknown): boolean {
  if (Array.isArray(data) && typeof data[0] === "string") {
    return data[0] === "set-sticky-contacts";
  }
  if (typeof data === "string") {
    const d = data.toLowerCase();
    return d.includes("form") && d.includes("submit");
  }
  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const t = `${o.type ?? o.event ?? ""}`.toLowerCase();
    return t.includes("submit");
  }
  return false;
}

/* -------------------------------------------------------------------------- */
/*  Motion-graphics header backdrop                                            */
/* -------------------------------------------------------------------------- */

function MotionGraphics() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft pulsing colour blobs */}
      <motion.span
        className="absolute -left-16 -top-20 h-52 w-52 rounded-full bg-accent/30 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-steel/40 blur-3xl"
        animate={{ scale: [1.1, 0.85, 1.1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* Rotating dashed rings */}
      <motion.span
        className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-dashed border-white/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full border border-dashed border-white/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated "progress" line graph — pinned to the very bottom edge,
          kept subtle so it never overlaps the heading text */}
      <svg
        className="absolute inset-x-0 bottom-0 h-10 w-full opacity-25"
        viewBox="0 0 320 40"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bookingGraphFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 30 C 40 30, 60 16, 96 18 S 168 6, 208 12 S 280 2, 320 8"
          stroke="#EAD9B6"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M0 30 C 40 30, 60 16, 96 18 S 168 6, 208 12 S 280 2, 320 8 L 320 40 L 0 40 Z"
          fill="url(#bookingGraphFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Provider + Modal                                                           */
/* -------------------------------------------------------------------------- */

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shouldLoadScript, setShouldLoadScript] = useState(false);

  const isOpenRef = useRef(isOpen);
  const targetUrlRef = useRef<string | null>(null);
  const redirectedRef = useRef(false);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const openBooking = useCallback((url?: string | null) => {
    targetUrlRef.current = url ?? null;
    redirectedRef.current = false;
    setSubmitted(false);
    setShouldLoadScript(true);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  const handleSubmitted = useCallback(() => {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    setSubmitted(true);
    const url = targetUrlRef.current;
    window.setTimeout(() => {
      if (url) {
        window.location.href = url;
      } else {
        setIsOpen(false);
      }
    }, 1600);
  }, []);

  // Listen for the form's submission message (registered once).
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!isOpenRef.current) return;
      if (!isSubmitMessage(e.data)) return;
      handleSubmitted();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [handleSubmitted]);

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}

      {shouldLoadScript && <Script src={EMBED_SCRIPT} strategy="afterInteractive" />}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Book your visit"
            onClick={closeBooking}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-brand-dark/65 backdrop-blur-sm" />

            {/* Card */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="relative flex max-h-[92vh] w-full max-w-[480px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-brand/10"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeBooking}
                aria-label="Close"
                className="absolute right-3.5 top-3.5 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30"
              >
                <X size={18} strokeWidth={2.25} />
              </button>

              {/* Header with motion graphics */}
              <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-brand via-brand-light to-brand-dark px-6 pb-5 pt-6 text-white">
                <MotionGraphics />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-steel-light backdrop-blur">
                    <Sparkles size={11} className="text-accent" strokeWidth={2.25} />
                    One quick step
                  </span>
                  <div className="mt-3.5 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-brand-dark shadow-card">
                      <CalendarHeart size={20} strokeWidth={2} />
                    </span>
                    <h2 className="font-display text-2xl font-bold leading-[1.1]">
                      Let&rsquo;s get you{" "}
                      <span className="font-script font-normal italic text-accent">booked</span>
                    </h2>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                    Share a few quick details and you&rsquo;ll be taken straight to scheduling.
                  </p>

                  {/* Trust row */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-accent" strokeWidth={2.25} />
                      Private &amp; secure
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} className="text-accent" strokeWidth={2.25} />
                      Takes ~30 seconds
                    </span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="relative flex-1 overflow-y-auto bg-white">
                <iframe
                  src={FORM_SRC}
                  title={FORM_NAME}
                  id={`inline-${FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={FORM_NAME}
                  data-height="546"
                  data-layout-iframe-id={`inline-${FORM_ID}`}
                  data-form-id={FORM_ID}
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "546px",
                    border: "none",
                    borderRadius: 0,
                    display: "block",
                  }}
                />
              </div>

              {/* Success overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-gradient-to-br from-brand via-brand-light to-brand-dark px-8 text-center text-white"
                  >
                    <MotionGraphics />
                    <motion.span
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 240, damping: 16 }}
                      className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent text-brand-dark shadow-card"
                    >
                      <CheckCircle2 size={40} strokeWidth={2} />
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="relative mt-6 font-display text-2xl font-bold"
                    >
                      You&rsquo;re all set!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="relative mt-2 max-w-xs text-sm text-white/80"
                    >
                      Taking you to booking&hellip;
                    </motion.p>
                    <motion.span
                      aria-hidden="true"
                      className="relative mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/20"
                    >
                      <motion.span
                        className="block h-full rounded-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
