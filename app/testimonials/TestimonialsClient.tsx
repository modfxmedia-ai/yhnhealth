"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Phone, Quote, Star } from "lucide-react";
import { Breadcrumbs, FadeUp } from "@/components/page/Primitives";

type Review = {
  text: string;
  author: string;
  source?: "Google" | "Yelp" | "Facebook";
  location?: string;
  service?: string;
  stars?: number;
};

const REVIEWS: Review[] = [
  {
    text: "There should at least be 10 stars here for Dr. Marc!! He has been working with our 4 year old son for a couple of months now. You know when a 4 year old is waiting by the door for Dr. Marc, he's doing something right :-) His 'table side' manner is amazing. He is able to engage all ages, is a great listener, is very gifted and knowledgeable, and yet is able to explain what he's doing on a down-to-earth, understandable way. We are so thankful for Dr. Marc's care, and that he is helping our son best function to reach his maximum potential! We highly recommend Your Health Now!",
    author: "Murari and Ashley S.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Pediatric Care",
    stars: 5,
  },
  {
    text: "Chris is very adamant and knowledgeable in addressing not just pain, but the root causes of pain. In the months he has been treating me, he has provided me with personal care you typically don't find in other doctors. My condition has slowly improved and I'm now hopeful that I'll be able to do more of the activities I used to engage in when I was younger, without having to take pain killers before and after! Thank you Chris for using your gift to improve my quality of life and others I know as well.",
    author: "Mark B.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Chiropractic Medicine",
    stars: 5,
  },
  {
    text: "I've been to many chiropractors over the past 15+ years, but this is the first time I've ever had long-lasting relief and back health. It's truly been a game changer.",
    author: "Jaime B.",
    source: "Yelp",
    location: "Merchantville, NJ",
    service: "Decompression Therapy",
    stars: 5,
  },
  {
    text: "Dr. Lillee has provided Chiropractic care for myself and my family several times and each time we have been extremely happy with the results!",
    author: "Tammy T-Y.",
    source: "Facebook",
    location: "Chalfont, PA",
    service: "Family Chiropractic",
    stars: 5,
  },
  {
    text: "After my first call I felt heard. The complimentary 15-minute consultation alone was more thorough than any visit I had with my previous doctor — and that was before I even stepped into the office. The team genuinely cares about the why behind your symptoms.",
    author: "Jessica R.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Functional Medicine",
    stars: 5,
  },
  {
    text: "I came in barely able to walk after a herniated disc. Six weeks of decompression and adjustments later, I'm back on the trail and lifting again. The team is exceptional — they explained the plan, set realistic expectations, and delivered every step of the way.",
    author: "Daniel K.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Decompression Therapy",
    stars: 5,
  },
  {
    text: "Dr. Lillee took care of me through both pregnancies. The Webster Technique made such a difference — I felt aligned, comfortable, and confident going into each delivery. Would recommend to any expecting mom in the area.",
    author: "Hannah P.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Pregnancy Care",
    stars: 5,
  },
  {
    text: "I had been told for years that my fatigue was 'just stress.' Functional medicine here finally found the underlying issue through proper testing and a personalized plan. I have my energy and life back. I cannot say enough about Dr. Chris.",
    author: "Renee M.",
    source: "Yelp",
    location: "Chalfont, PA",
    service: "Functional Medicine",
    stars: 5,
  },
  {
    text: "Best chiropractic experience I've ever had. They explained the plan clearly, never pushed unnecessary visits, and the results speak for themselves. Highly recommend if you're looking for evidence-based care that actually works.",
    author: "Anthony D.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Athletic Care",
    stars: 5,
  },
  {
    text: "My son has been getting adjustments since he was a baby and is the calmest, healthiest little kid. Dr. Marc is gentle, patient, and so good with children. Worth every minute of the drive.",
    author: "Lauren H.",
    source: "Facebook",
    location: "Merchantville, NJ",
    service: "Pediatric Care",
    stars: 5,
  },
  {
    text: "I had chronic Lyme symptoms for over a decade. The protocol Dr. Chris built for me is the first thing that has actually moved the needle. The lab work was comprehensive, the follow-ups have been consistent, and I am so grateful for this team.",
    author: "Kevin S.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Lyme Disease Solutions",
    stars: 5,
  },
  {
    text: "Friendly, professional, and on time every visit. The Arthrostim adjustments are gentle but effective — perfect for someone like me who is nervous about manual cracking. I drive 40 minutes for my appointments and it's worth it.",
    author: "Patricia W.",
    source: "Yelp",
    location: "Merchantville, NJ",
    service: "Arthrostimulation Therapy",
    stars: 5,
  },
  {
    text: "Sciatica had me sleeping on the floor for months. After three weeks of care here I was sleeping through the night. Their approach is methodical and it works. They take the time to actually look at the imaging and tailor your plan.",
    author: "Robert C.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Decompression Therapy",
    stars: 5,
  },
  {
    text: "What sold me was the free consultation call before booking. No pressure, just a real conversation about whether they could help. They could — and they did. I have referred three friends since.",
    author: "Maria G.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Functional Medicine",
    stars: 5,
  },
  {
    text: "I've been a competitive runner for 20 years and finally found a chiropractor who understands sports biomechanics. The functional movement work has improved my times and kept me injury-free for an entire season.",
    author: "Brendan M.",
    source: "Google",
    location: "Chalfont, PA",
    service: "Athletic Care",
    stars: 5,
  },
  {
    text: "After my car accident I was told I would need to live with the pain. Dr. Chianese disagreed and built a plan that genuinely worked. Six months in, I have full mobility and I'm sleeping again.",
    author: "Cynthia L.",
    source: "Yelp",
    location: "Merchantville, NJ",
    service: "Chiropractic Medicine",
    stars: 5,
  },
  {
    text: "I cannot recommend Your Health Now enough. From the front desk to the doctors, every interaction is professional and warm. They actually listen — and that's rare these days.",
    author: "Stephanie A.",
    source: "Facebook",
    location: "Chalfont, PA",
    service: "Family Chiropractic",
    stars: 5,
  },
  {
    text: "The integrative nutrition guidance combined with adjustments has changed how my whole family eats and feels. My migraines are gone for the first time in years. Truly whole-body care.",
    author: "Mike T.",
    source: "Google",
    location: "Merchantville, NJ",
    service: "Integrative Nutrition",
    stars: 5,
  },
];

const SOURCES = ["All", "Google", "Yelp", "Facebook"] as const;
type SourceFilter = (typeof SOURCES)[number];

const SOURCE_DOT: Record<string, string> = {
  Google: "bg-[#4285F4]",
  Yelp: "bg-[#D32323]",
  Facebook: "bg-[#1877F2]",
};

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
  const [filter, setFilter] = useState<SourceFilter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.source === filter)),
    [filter]
  );

  const featured = REVIEWS[0];
  const rest = filtered.filter((r) => r !== featured);

  const sourceCounts = useMemo(() => {
    const c: Record<string, number> = { All: REVIEWS.length };
    for (const r of REVIEWS) {
      if (r.source) c[r.source] = (c[r.source] ?? 0) + 1;
    }
    return c;
  }, []);

  return (
    <main className="bg-white">
      {/* HERO */}
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

      {/* STAR SUMMARY BAR */}
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

      {/* FEATURED PULL QUOTE */}
      <section className="relative bg-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 pt-20 lg:px-10 lg:pt-24">
          <FadeUp>
            <article className="relative overflow-hidden rounded-3xl border border-brand/10 bg-white p-8 shadow-card md:p-12">
              <Quote
                size={140}
                className="absolute -right-2 -top-4 text-accent/15"
                strokeWidth={1}
              />
              <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3">
                    <Stars size={16} count={featured.stars ?? 5} />
                    {featured.source && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-stone">
                        <span className={`h-1.5 w-1.5 rounded-full ${SOURCE_DOT[featured.source]}`} />
                        Featured · via {featured.source}
                      </span>
                    )}
                  </div>
                  <blockquote className="mt-5 font-display text-xl font-medium leading-snug text-brand md:text-2xl">
                    &ldquo;{featured.text}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="h-px w-8 bg-accent" />
                    <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent-dark">
                      {featured.author}
                    </p>
                    {featured.location && (
                      <p className="text-[11px] uppercase tracking-[0.22em] text-stone-light">
                        {featured.location}
                      </p>
                    )}
                    {featured.service && (
                      <span className="rounded-full border border-brand/15 bg-cream-light px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                        {featured.service}
                      </span>
                    )}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="rounded-2xl border border-brand/10 bg-mist p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">
                      Ready to Book?
                    </p>
                    <p className="mt-2 text-sm text-stone">
                      Pick a service, location, and time that works for you — booking is open online.
                    </p>
                    <Link
                      href="/locations"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-all hover:-translate-y-0.5 hover:bg-accent"
                    >
                      Book Appointment
                      <ArrowUpRight size={12} strokeWidth={2.25} />
                    </Link>
                    <a
                      href="tel:6096517436"
                      className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand hover:text-accent-dark"
                    >
                      <Phone size={12} strokeWidth={2.25} />
                      (609) 651-7436
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* MASONRY REVIEW WALL with FILTER */}
      <section className="relative bg-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 pt-12 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
          <FadeUp className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Patient Stories</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand md:text-4xl">
                Real words from real patients.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by review source">
              {SOURCES.map((s) => {
                const active = filter === s;
                return (
                  <button
                    key={s}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(s)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all ${
                      active
                        ? "border-brand bg-brand text-white shadow-soft"
                        : "border-brand/15 bg-white text-brand hover:border-accent hover:text-accent-dark"
                    }`}
                  >
                    {s !== "All" && (
                      <span className={`h-1.5 w-1.5 rounded-full ${SOURCE_DOT[s] ?? "bg-brand/30"}`} />
                    )}
                    {s}
                    <span className={`text-[10px] font-semibold ${active ? "text-white/70" : "text-stone-light"}`}>
                      {sourceCounts[s] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeUp>

          <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {rest.map((r, i) => (
              <motion.article
                key={`${r.author}-${r.source ?? "x"}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4), ease: "easeOut" }}
                className="group rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <Stars count={r.stars ?? 5} />
                  {r.source && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-stone">
                      <span className={`h-1.5 w-1.5 rounded-full ${SOURCE_DOT[r.source]}`} />
                      {r.source}
                    </span>
                  )}
                </div>
                <blockquote className="mt-5 text-[15px] italic leading-relaxed text-stone">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <footer className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-brand/10 pt-5">
                  <div>
                    <p className="text-sm font-bold text-accent-dark">{r.author}</p>
                    {r.location && (
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-stone-light">
                        {r.location}
                      </p>
                    )}
                  </div>
                  {r.service && (
                    <span className="rounded-full border border-brand/10 bg-cream-light px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-brand">
                      {r.service}
                    </span>
                  )}
                </footer>
              </motion.article>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="mt-12 text-center text-sm text-stone">
              No reviews yet from {filter}. Try a different source.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
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
              Schedule your visit at our Merchantville, NJ or Chalfont, PA location — or start with a complimentary 15-minute consultation call.
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
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 hover:border-accent hover:text-accent"
            >
              <Phone size={12} strokeWidth={2.25} />
              Free Consult Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
