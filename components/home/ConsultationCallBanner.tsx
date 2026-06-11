"use client";

import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Phone, PhoneCall } from "lucide-react";

const BENEFITS = [
  "No-pressure conversation",
  "Discuss your case directly",
  "Decide if we're the right fit",
];

export default function ConsultationCallBanner() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-16 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-brand/10 bg-white p-8 shadow-card md:p-12"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-dashed border-brand/10"
          />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-dark">
                <PhoneCall size={12} strokeWidth={2.25} />
                Free 15-Minute Consultation Call
              </span>

              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] text-brand md:text-4xl lg:text-5xl">
                Talk to us{" "}
                <span className="font-script font-normal italic text-accent">
                  before
                </span>{" "}
                you book.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone md:text-lg">
                Not sure if we&rsquo;re the right fit? Start with a complimentary phone consultation — no waiting room, no in-person visit required. We&rsquo;ll discuss your case and whether our care can help.
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {BENEFITS.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-[13px] font-semibold text-brand"
                  >
                    <CheckCircle2 size={14} className="shrink-0 text-accent" strokeWidth={2.25} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-brand/10 bg-cream-light p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">
                  Call Either Location
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href="tel:8565322063"
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-brand/10 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-card"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent-dark">
                        Merchantville, NJ
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-brand">
                        (856) 532-2063
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-accent">
                      <Phone size={14} strokeWidth={2.25} />
                    </span>
                  </a>

                  <a
                    href="tel:6096517436"
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-brand/10 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-card"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent-dark">
                        Chalfont, PA
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-brand">
                        (609) 651-7436
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-accent">
                      <Phone size={14} strokeWidth={2.25} />
                    </span>
                  </a>
                </div>

                <a
                  href="/contact-us"
                  className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-stone hover:text-accent-dark"
                >
                  Prefer email? Send a message
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
