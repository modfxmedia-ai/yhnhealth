"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";

const LOCATIONS = [
  {
    city: "Merchantville",
    state: "NJ",
    phone: "(856) 532-2063",
    address: "5 W Chestnut Ave",
  },
  {
    city: "Chalfont",
    state: "PA",
    phone: "(609) 651-7436",
    address: "350 N Main St #201",
  },
];

export default function LocationCTABanner() {
  return (
    <section className="relative grid grid-cols-1 overflow-hidden md:grid-cols-2">
      {LOCATIONS.map((loc, i) => (
        <motion.div
          key={loc.city}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
          className="relative"
        >
          <Link
            href="/locations"
            className={
              i === 0
                ? "group relative flex h-full items-center overflow-hidden bg-brand px-8 py-16 transition-colors duration-500 hover:bg-brand-dark md:px-14 md:py-20"
                : "group relative flex h-full items-center overflow-hidden bg-brand-light px-8 py-16 transition-colors duration-500 hover:bg-brand md:px-14 md:py-20"
            }
          >
            {/* Animated diagonal line */}
            <motion.div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-64 w-64 rounded-full border-2 border-white/10"
            />
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full border border-dashed border-white/15"
            />

            <div className="relative z-10 flex w-full flex-col gap-4">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-steel-light">
                <MapPin size={12} className="text-accent" strokeWidth={2} />
                Visit Us · {loc.state}
              </div>

              <h3 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                <span className="block">Appointments</span>
                <span className="font-script font-normal italic text-accent">
                  {loc.city}, {loc.state}
                </span>
              </h3>

              <div className="mt-2 flex flex-col gap-1 text-sm text-white/70">
                <span>{loc.address}</span>
                <span className="font-medium text-white/90">{loc.phone}</span>
              </div>

              <div className="mt-4 inline-flex items-center gap-3 self-start rounded-full border border-white/25 bg-white/5 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                Book at this location
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {/* Center divider gem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/10 bg-white text-[10px] font-bold uppercase tracking-[0.24em] text-brand md:flex"
      >
        YHN
      </div>
    </section>
  );
}
