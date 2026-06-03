"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { LOCATIONS } from "@/lib/siteData";

const MAPS = [
  {
    name: "Merchantville, NJ",
    embed:
      "https://www.google.com/maps?q=5+W+Chestnut+Ave,+Merchantville,+NJ+08109&output=embed",
    href: LOCATIONS[0].social.maps,
    address: LOCATIONS[0].address,
  },
  {
    name: "Chalfont, PA",
    embed:
      "https://www.google.com/maps?q=350+N+Main+St,+Chalfont,+PA+18914&output=embed",
    href: LOCATIONS[1].social.maps,
    address: LOCATIONS[1].address,
  },
];

export default function LocationMapSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-mist px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-dark">
            <MapPin size={11} className="text-accent" strokeWidth={2} />
            Find Us
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-brand md:text-5xl">
            Two locations,{" "}
            <span className="font-script font-normal italic text-accent">
              one mission
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {MAPS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
                <iframe
                  src={m.embed}
                  title={`Map of ${m.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-dark">
                    Location · 0{i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-brand md:text-2xl">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone">{m.address}</p>
                </div>
                <Link
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${m.name} in Google Maps`}
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-accent"
                >
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
