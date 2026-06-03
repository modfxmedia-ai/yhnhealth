"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { HERO_SLIDES } from "@/lib/siteData";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () =>
    setActive((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setActive((i) => (i + 1) % HERO_SLIDES.length);

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slideshow background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[active].src}
              alt={HERO_SLIDES[active].alt}
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Brand color overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 via-brand/65 to-brand-dark/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(123,143,181,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(20,35,72,0.6),transparent_50%)]"
      />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-steel/30 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
        className="relative z-10 mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-steel-light backdrop-blur"
            >
              <Sparkles size={12} className="text-accent" strokeWidth={2} />
              Chalfont, PA · Merchantville, NJ
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-7 font-display text-[44px] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              Health{" "}
              <span className="relative inline-block">
                <span className="relative z-10">For Every</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 right-0 h-3 origin-left bg-accent/40"
                  aria-hidden="true"
                />
              </span>{" "}
              <span className="font-script font-normal italic text-accent">
                Body
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] md:text-xl"
            >
              Function well so you feel well. Contemporary chiropractic care
              built on advanced technology and root-cause science — so health
              problems don&rsquo;t just go away, they go away and stay away.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/locations"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-[12px] font-bold uppercase tracking-[0.24em] text-brand shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-card-hover"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent transition-colors group-hover:bg-white" />
                Book Appointment
                <ChevronRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                Discover Our Care
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-7"
            >
              {[
                { value: "15+", label: "Years of Care" },
                { value: "20", label: "Specialty Services" },
                { value: "5.0", label: "Patient Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide preview card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="hidden lg:col-span-4 lg:block"
          >
            <div className="relative ml-auto max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/30 to-steel/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <AnimatePresence mode="sync">
                    <motion.div
                      key={`card-${active}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={HERO_SLIDES[active].src}
                        alt=""
                        fill
                        sizes="400px"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/55 to-brand-dark/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                      Now Featuring
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                      {HERO_SLIDES[active].alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-6 lg:px-10">
        <div className="flex items-center gap-3 text-white/70">
          <span className="font-display text-3xl font-bold text-white">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-white/30" />
          <span className="text-[11px] uppercase tracking-[0.28em]">
            of {String(HERO_SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        <div className="hidden flex-1 items-center gap-1 md:flex">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-[2px] flex-1 transition-all duration-500",
                i === active ? "bg-accent" : "bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all hover:border-accent hover:text-accent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all hover:border-accent hover:text-accent"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to next section"
        className="absolute bottom-2 left-1/2 z-10 hidden -translate-x-1/2 text-white/40 hover:text-accent md:block"
      >
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
