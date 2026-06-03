"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/siteData";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(id);
  }, [paused]);

  const t = TESTIMONIALS[active];

  return (
    <section
      className="relative overflow-hidden bg-brand-dark py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Animated background pattern */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/5"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,143,181,0.18),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-steel-light backdrop-blur"
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            Patient Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl"
          >
            What our{" "}
            <span className="font-script font-normal italic text-accent">
              patients
            </span>{" "}
            say
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote
            size={80}
            className="absolute -left-4 -top-6 text-accent/20"
            strokeWidth={1}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur md:p-14"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <blockquote className="mt-6 text-center font-display text-2xl font-medium leading-relaxed text-white md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-steel-light">
                  {t.author}
                </p>
                <span className="h-px w-10 bg-accent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setActive(
                  (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                )
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    i === active ? "w-10 bg-accent" : "w-2 bg-white/30"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                setActive((i) => (i + 1) % TESTIMONIALS.length)
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-accent hover:text-accent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
