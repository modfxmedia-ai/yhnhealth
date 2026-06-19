"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function MissionBanner() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 md:py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/yhn-clone/health-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand/85 to-brand-dark/70"
      />

      {/* Animated decorative elements */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-dashed border-white/10"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute -left-40 -bottom-40 h-[28rem] w-[28rem] rounded-full border border-dashed border-white/8"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-steel-light backdrop-blur"
        >
          <span className="h-1 w-1 rounded-full bg-accent" />
          Our Promise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl"
        >
          Health for{" "}
          <span className="font-script font-normal italic text-accent">
            every body
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Functional medicine and chiropractic care, working together - we
          start with root-cause investigation, then support movement and
          recovery with precise hands-on care, so you can return to the
          activities you love and keep moving forward, stronger than before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-brand transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-colors group-hover:bg-white" />
            Begin Your Care
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-white/80 hover:text-accent"
          >
            Our story
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
