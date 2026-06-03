"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Star, Quote } from "lucide-react";
import { Breadcrumbs, FadeUp } from "@/components/page/Primitives";

type Review = { text: string; author: string; source?: string };

const REVIEWS: Review[] = [
  {
    text: "There should at least be 10 stars here for Dr. Marc!! He has been working with our 4 year old son for a couple of months now. You know when a 4 year old is waiting by the door for Dr. Marc, he's doing something right :-) His 'table side' manner is amazing. He is able to engage all ages, is a great listener, is very gifted and knowledgeable, and yet is able to explain what he's doing on a down-to-earth, understandable way. We are so thankful for Dr. Marc's care, and that he is helping our son best function to reach his maximum potential! We highly recommend Your Health Now!",
    author: "Murari and Ashley S.",
    source: "Google",
  },
  {
    text: "Chris is very adamant and knowledgeable in addressing not just pain, but the root causes of pain. In the months he has been treating me, he has provided me with personal care you typically don't find in other doctors. My condition has slowly improved and I'm now hopeful that I'll be able to do more of the activities I used to engage in when I was younger, without having to take pain killers before and after! Thank you Chris for using your gift to improve my quality of life and others I know as well.",
    author: "Mark B.",
    source: "Google",
  },
  {
    text: "I've been to many chiropractors over the past 15+ years, but this is the first time I've ever had long-lasting relief and back health. It's truly been a game changer.",
    author: "Jaime B.",
    source: "Yelp",
  },
  {
    text: "Dr. Lillee has provided Chiropractic care for myself and my family several times and each time we have been extremely happy with the results!",
    author: "Tammy T-Y.",
    source: "Facebook",
  },
];

function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-accent text-accent" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsClient() {
  return (
    <main className="bg-white">
      {/* HERO — centered on white, accent underline */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pt-12 pb-16 lg:px-10 lg:pt-16 lg:pb-20">
          <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />

          <FadeUp className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Reviews</p>
            <h1 className="relative mt-5 inline-block font-display text-5xl font-bold leading-[0.95] text-brand md:text-6xl lg:text-7xl">
              What Our Patients
              <span className="relative ml-3 font-script font-normal italic text-accent">
                Say
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-[6px] origin-left rounded-full bg-accent/40"
                />
              </span>
            </h1>
            <p className="mt-8 text-base leading-relaxed text-stone md:text-lg">
              We value our patients&rsquo; experience at Your Health Now. If you are currently a patient, please feel free to submit your review to one of our social media pages or email us on our contact page.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-wide text-brand">— Dr. Chris Chianese</p>
          </FadeUp>
        </div>
      </section>

      {/* STAR SUMMARY BAR — navy, centered, bold */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 h-72 w-72 rounded-full border border-dashed border-white/10"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full border border-dashed border-accent/15"
        />
        <FadeUp className="relative mx-auto max-w-[1320px] px-6 py-14 text-center lg:px-10 lg:py-16">
          <div className="mx-auto inline-flex flex-col items-center gap-3">
            <span className="font-display text-7xl font-bold leading-none tracking-tight md:text-8xl">5.0</span>
            <Stars size={22} />
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.32em] text-accent">
              across 100+ verified reviews
            </p>
            <p className="mt-2 max-w-md text-sm text-white/70">
              From Google, Yelp, Facebook, and our patients&rsquo; own letters.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* MASONRY REVIEW WALL — CSS columns for true masonry */}
      <section className="relative bg-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
          <FadeUp className="mb-12 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Patient Stories</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand md:text-4xl">
              Real words from real patients.
            </h2>
          </FadeUp>

          <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {REVIEWS.map((r, i) => (
              <motion.article
                key={r.author}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                className="group rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <Stars />
                  <Quote size={28} className="text-accent/30" strokeWidth={1.5} />
                </div>
                <blockquote className="mt-5 text-[15px] italic leading-relaxed text-stone">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center justify-between border-t border-brand/10 pt-5">
                  <p className="text-sm font-bold text-accent-dark">{r.author}</p>
                  {r.source && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-stone">
                      via {r.source}
                    </span>
                  )}
                </footer>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — navy banner */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 30%, white 1px, transparent 1.2px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-10 lg:py-20">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Join Them</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Experience the <span className="font-script font-normal italic text-accent">difference</span>.
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/70">
              Schedule your visit at our Merchantville, NJ or Chalfont, PA location and find out why our patients keep coming back.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-all hover:bg-accent-dark"
            >
              Book Your Appointment
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="tel:8565322063"
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 hover:text-accent"
            >
              (856) 532-2063
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
