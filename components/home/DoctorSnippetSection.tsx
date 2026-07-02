"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, GraduationCap, Award, Sparkles } from "lucide-react";

const DOCTOR = {
  name: "Dr. Chris Chianese",
  credentials: "MS, DC, CPSC",
  role: "Chiropractic Physician & Functional Medicine Specialist",
  image: "/images/yhn-clone/team-chris.webp",
  bio: "Dr. Chris blends chiropractic care and functional medicine to help patients uncover the root cause of pain, fatigue, and chronic conditions - and get back to the life they deserve.",
  highlights: [
    { icon: GraduationCap, text: "MS Applied Nutrition · Canisius College" },
    { icon: Award, text: "Doctor of Chiropractic, Summa Cum Laude · Sherman College" },
    { icon: Sparkles, text: "Certified Pediatric & Sports Chiropractor (CPSC)" },
  ],
};

export default function DoctorSnippetSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/15 to-transparent"
      />
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-mist shadow-card">
              <Image
                src={DOCTOR.image}
                alt={DOCTOR.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Meet Your Doctor
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                  {DOCTOR.name}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-steel-light">
                  {DOCTOR.credentials}
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-3xl bg-accent/10"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-mist px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-dark">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Your Provider
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-brand md:text-5xl">
              Care led by{" "}
              <span className="font-script font-normal italic text-accent">
                Dr. Chris
              </span>
            </h2>
            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-accent-dark">
              {DOCTOR.role}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              {DOCTOR.bio}
            </p>

            <ul className="mt-8 space-y-3">
              {DOCTOR.highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-stone">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                    <Icon size={14} strokeWidth={1.75} />
                  </span>
                  <span className="pt-1.5 leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/meet-the-doctor#dr-chris"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-light"
              >
                Read Full Bio
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-brand transition-colors hover:border-accent hover:text-accent-dark"
              >
                Ask Dr. Chris a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
