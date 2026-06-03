"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";
import { Breadcrumbs, BookingStrip } from "@/components/page/Primitives";

const ARTICLES = [
  { title: "Top Benefits of Combining Chiropractic Care and Physical Therapy", excerpt: "Struggling with pain and stiffness? The chiropractic/physical therapy combination approach may offer the ideal solution.", date: "January", category: "Therapies & Techniques" },
  { title: "How Your Morning Routine Affects Your Spine", excerpt: "Could your morning routine be causing your back pain?", date: "May", category: "Health & Wellness" },
  { title: "Why You Wake Up Stiff and How to Fix It", excerpt: "Feeling stiff in the morning? Find out what you can do about it.", date: "May", category: "Common Conditions Treated" },
  { title: "Chiropractic Care Can Help Get Your Back Ready for Summer", excerpt: "Want to avoid back issues this summer? Chiropractic care could help you protect your back.", date: "April", category: "About Chiropractic Care" },
  { title: "How Your Chiropractor Addresses Microtrauma Before Injury", excerpt: "Could a microtrauma be the reason for your pain? Find out how your chiropractor can help.", date: "April", category: "Common Conditions Treated" },
  { title: "How Chiropractic Care May Improve Your Stress Levels", excerpt: "Has stress taken control of your life? Chiropractic care could help you relax.", date: "March", category: "Health & Wellness" },
  { title: "What Disc Conditions Can a Chiropractor Help With?", excerpt: "Wondering if chiropractic treatment is right for your disc condition?", date: "March", category: "Common Conditions Treated" },
  { title: "The Benefits of Regular Chiropractic Adjustments", excerpt: "Could regular chiropractic adjustments improve your health and comfort?", date: "February", category: "About Chiropractic Care" },
  { title: "The Benefits of Chiropractic Care Across All Ages", excerpt: "Wondering if chiropractic treatments are a good idea for everyone?", date: "February", category: "Wellness4Kids" },
];

const CATEGORIES = [
  "All",
  "About Chiropractic Care",
  "Common Conditions Treated",
  "Health & Wellness",
  "Therapies & Techniques",
  "Newsletter Library",
  "Wellness4Kids",
];

export default function ArticlesClient() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);

  return (
    <main className="bg-cream-light">
      <section className="relative border-b border-brand/10 bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pt-12 pb-16 lg:px-10 lg:pt-16 lg:pb-20">
          <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Articles" }]} />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-mist px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-brand">
                <BookOpen size={11} />
                Newsletter Archive
              </span>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] text-brand md:text-6xl lg:text-7xl">
                Read &amp; <span className="font-script font-normal italic text-accent">recover.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
                Practical chiropractic, nutrition and wellness guidance from our team. Browse our newsletter library by topic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 rounded-full border border-brand/15 bg-mist px-5 py-3.5">
                <Search size={16} className="text-stone" />
                <input
                  placeholder="Search articles…"
                  className="w-full bg-transparent text-sm text-brand placeholder:text-stone focus:outline-none"
                />
              </div>
              <p className="mt-4 text-xs text-stone">122 issues · Updated monthly</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="border-b border-brand/10 bg-mist">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-2 px-6 py-5 lg:px-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                active === c
                  ? "bg-brand text-white"
                  : "border border-brand/15 bg-white text-stone hover:border-brand/30 hover:text-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Articles list — magazine layout, alternating tile sizes */}
      <section className="relative">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <motion.article
                key={a.title + i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border border-brand/10 bg-white transition-all hover:-translate-y-1 hover:shadow-md ${i % 5 === 0 ? "md:col-span-2 md:row-span-1 lg:col-span-1" : ""}`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-light/15 via-mist to-cream-light">
                  <div className="flex h-full items-end justify-end p-6">
                    <p className="font-display text-5xl font-bold text-brand/15">{a.date}</p>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent-dark">
                    {a.date} Newsletter · {a.category}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold leading-tight text-brand transition-colors group-hover:text-accent-dark">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{a.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand transition-all group-hover:gap-2.5 group-hover:text-accent-dark">
                    Read More
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-stone">
            <span className="rounded-full border border-brand/15 bg-white px-4 py-2">Page 1 of 122</span>
          </div>
        </div>
      </section>

      <BookingStrip
        variant="cream"
        eyebrow="Get Care"
        title="Reading is great. Treatment is better."
        copy="Apply what you learn. Book a visit at Merchantville, NJ or Chalfont, PA."
      />
    </main>
  );
}
