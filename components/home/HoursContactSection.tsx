"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Clock, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { HOURS, LOCATIONS } from "@/lib/siteData";

export default function HoursContactSection() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-28">
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-brand/10 bg-white p-8 shadow-soft md:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Clock size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-dark">
                    Office Hours
                  </p>
                  <h3 className="font-display text-2xl font-bold text-brand">
                    When we&rsquo;re open
                  </h3>
                </div>
              </div>

              <ul className="mt-8 divide-y divide-brand/10">
                {HOURS.map((h, i) => (
                  <motion.li
                    key={h.day}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center justify-between py-3.5"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                      {h.day}
                    </span>
                    <span
                      className={
                        h.open
                          ? "text-sm font-medium text-stone"
                          : "text-[11px] font-bold uppercase tracking-[0.22em] text-accent-dark"
                      }
                    >
                      {h.hours}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-mist p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-dark">
                  Need urgent care?
                </p>
                <p className="mt-1 text-sm text-stone">
                  Call your nearest location to schedule a same-day visit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Locations stack */}
          <div className="space-y-6 lg:col-span-7">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-brand/10 bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-card-hover md:p-10"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mist opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-dark">
                      {i === 0 ? "New Jersey" : "Pennsylvania"}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold text-brand md:text-4xl">
                      {loc.name}
                    </h3>
                    <div className="mt-5 space-y-3">
                      <p className="flex items-start gap-3 text-sm text-stone">
                        <MapPin
                          size={16}
                          className="mt-0.5 shrink-0 text-accent"
                          strokeWidth={1.75}
                        />
                        {loc.address}
                      </p>
                      <a
                        href={loc.tel}
                        className="flex items-center gap-3 text-sm font-semibold text-brand hover:text-accent-dark"
                      >
                        <Phone
                          size={16}
                          className="shrink-0 text-accent"
                          strokeWidth={1.75}
                        />
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href={loc.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-3 rounded-full bg-brand px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-light"
                    >
                      Book Online
                      <ArrowUpRight
                        size={12}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </Link>
                    <Link
                      href={loc.social.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-brand transition-colors hover:border-accent hover:text-accent-dark"
                    >
                      Get Directions
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
