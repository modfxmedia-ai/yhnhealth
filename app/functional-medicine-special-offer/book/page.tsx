"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { motion } from "motion/react";
import {
  CalendarHeart,
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
  Video,
} from "lucide-react";
import {
  LpHeader,
  LpFooter,
  ReviewsSection,
  PHONE_NJ,
  PHONE_NJ_TEL,
} from "../_shared";

/* -------------------------------------------------------------------------- */
/*  Booking embed — GoHighLevel calendar widget                                */
/* -------------------------------------------------------------------------- */
const BOOKING_EMBED_SRC =
  "https://api.leadconnectorhq.com/widget/booking/TruvPY8ARyRsAbyT0abm";
const BOOKING_EMBED_ID = "msgsndr-calendar";
const THANK_YOU_PATH = "/functional-medicine-special-offer/thank-you";

/** Detect a completed-booking message broadcast by the GoHighLevel calendar
 *  widget. The embed posts a `message` to the parent window once an
 *  appointment is scheduled; we match the documented event plus a few
 *  defensive fallbacks. */
function isBookingComplete(data: unknown): boolean {
  if (typeof data === "string") {
    const d = data.toLowerCase();
    return d.includes("appointment") && (d.includes("book") || d.includes("schedul"));
  }
  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const t = `${o.type ?? o.event ?? o.page ?? ""}`.toLowerCase();
    return (
      t.includes("appointment") ||
      t.includes("booked") ||
      t.includes("booking_complete") ||
      t === "thank_you"
    );
  }
  return false;
}

const PROMISES = [
  { icon: Clock, title: "30 minutes", copy: "A focused, no-pressure call to map out your next step." },
  { icon: Video, title: "Telehealth or in-office", copy: "Meet by video across NJ & PA, or visit us in person." },
  { icon: ShieldCheck, title: "No obligation", copy: "Completely complimentary. No commitment required." },
];

export default function BookingPage() {
  const router = useRouter();

  // Redirect to the thank-you page once the calendar booking completes.
  useEffect(() => {
    let redirected = false;
    const handleMessage = (event: MessageEvent) => {
      if (redirected) return;
      if (!event.origin.includes("leadconnectorhq.com") && !event.origin.includes("msgsndr")) {
        return;
      }
      if (isBookingComplete(event.data)) {
        redirected = true;
        router.push(THANK_YOU_PATH);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  // Hide the global Knock Knock chat widget on this standalone funnel page.
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-fm-lp", "hide-chat-widget");
    style.textContent = `
      #knock-knock-widget-container,
      [id*="knock-knock"],
      [class*="knock-knock"],
      iframe[src*="knock-knockapp"],
      #chat-widget,
      .chat-widget,
      [class*="chat-widget"] {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans text-ink">
      <LpHeader ctaHref={PHONE_NJ_TEL} ctaLabel={`Call ${PHONE_NJ}`} />

      <main>
        {/* ----------------------------------------------------------------- */}
        {/*  Booking hero — intro only                                        */}
        {/* ----------------------------------------------------------------- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark py-16 text-white lg:py-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
          />
          <div className="relative mx-auto max-w-2xl px-5 text-center lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                <CalendarHeart size={14} /> Book Your Free Consult
              </span>
              <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                Pick a time that{" "}
                <span className="font-script text-4xl font-normal text-accent sm:text-5xl">
                  works for you
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg text-white/70">
                Choose your slot below and we&apos;ll reach out to confirm your
                complimentary 30-minute functional medicine consultation.
              </p>

              <ul className="mt-8 grid gap-4 text-left sm:grid-cols-3">
                {PROMISES.map((p) => (
                  <li
                    key={p.title}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <p.icon size={18} />
                    </span>
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-white/65">{p.copy}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <CheckCircle2 size={20} className="shrink-0 text-accent" />
                <p className="text-sm text-white/70">
                  Prefer to talk now? Call{" "}
                  <a href={PHONE_NJ_TEL} className="font-bold text-accent hover:text-white">
                    {PHONE_NJ}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/*  Calendar                                                         */}
        {/* ----------------------------------------------------------------- */}
        <section id="calendar" className="relative bg-white py-16 scroll-mt-24 lg:py-20">
          <div className="mx-auto max-w-3xl px-5 lg:px-10">
            <div className="mb-8 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent-dark">
                Choose Your Time
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
                Schedule your consultation
              </h2>
            </div>

            {/* Calendar embed — replace BOOKING_EMBED_SRC with your GHL calendar. */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-3xl bg-white p-2 shadow-card-hover ring-1 ring-brand/10"
            >
              <iframe
                src={BOOKING_EMBED_SRC}
                id={BOOKING_EMBED_ID}
                title="Book your free functional medicine consultation"
                scrolling="no"
                className="h-[700px] w-full overflow-hidden rounded-2xl border-0"
              />
            </motion.div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/*  Patient stories                                                  */}
        {/* ----------------------------------------------------------------- */}
        <ReviewsSection />
      </main>

      <LpFooter />

      {/* Mobile sticky call bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-brand/10 bg-white/95 p-3 backdrop-blur sm:hidden"
      >
        <a
          href={PHONE_NJ_TEL}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-bold text-brand-dark shadow-card"
          aria-label={`Call ${PHONE_NJ}`}
        >
          <Phone size={16} /> Call {PHONE_NJ}
        </a>
      </motion.div>

      <Script src="https://link.msgsndr.com/js/embed.js" strategy="afterInteractive" />
    </div>
  );
}
