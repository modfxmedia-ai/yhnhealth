"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/siteData";

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-28">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-steel-soft/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-dark">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Our Specialties
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-brand md:text-5xl lg:text-6xl">
              Comprehensive{" "}
              <span className="font-script font-normal italic text-accent">
                services
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed text-stone lg:col-span-5"
          >
            Twenty specialized programs designed to address every aspect of
            your health — from acute relief to lifelong wellness.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (i % 5) * 0.05,
              }}
            >
              <Link
                href={s.href}
                className="group relative block overflow-hidden rounded-2xl bg-brand shadow-soft transition-all duration-500 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent transition-opacity duration-500 group-hover:from-brand-dark group-hover:via-brand/70" />

                  {/* Number badge */}
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Hover arrow */}
                  <span className="absolute right-3.5 top-3.5 inline-flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="font-display text-base font-semibold leading-tight text-white md:text-lg">
                      {s.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                      Learn more
                      <ArrowUpRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/locations"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-brand bg-transparent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-brand transition-all hover:bg-brand hover:text-white"
          >
            Schedule your visit
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
