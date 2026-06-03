"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Mail, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumbs, FadeUp } from "@/components/page/Primitives";
import { MODULES } from "@/lib/moduleContent";

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CpscClient() {
  return (
    <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-light pt-12 pb-20 md:pt-16 md:pb-28">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(#1F3563 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -right-32 top-12 h-96 w-96 rounded-full bg-accent/15 blur-3xl" aria-hidden />
          <div className="container relative">
            <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "CPSC" }]} />
            <div className="mt-6 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Post-Graduate Program
                  </span>
                  <h1 className="mt-5 font-display text-4xl leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
                    Certification in Patient-Specific Chiropractic
                  </h1>
                  <p className="mt-4 font-display text-xl text-brand-light md:text-2xl">
                    &ldquo;Where There Are Processes, But No Protocols&rdquo;
                  </p>
                </motion.div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  style={{ transformOrigin: "left" }}
                  className="mt-8 h-[3px] w-24 bg-accent"
                />
                <FadeUp delay={0.2} className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-stone md:text-lg">
                  <p className="italic">
                    &ldquo;EDUCATION Is Not The Learning Of Facts, But Training The Mind To
                    THINK&rdquo;
                  </p>
                  <p className="text-sm">— Albert Einstein</p>
                  <p>Providing CHIROPRACTORS up to 40 hours of CE credit.</p>
                </FadeUp>
                <FadeUp delay={0.25} className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:CPSCseminars@gmail.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
                  >
                    <Mail className="h-4 w-4" />
                    CPSCseminars@gmail.com
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    href="#modules"
                    className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-6 py-3 text-sm font-medium text-brand-dark transition hover:border-brand/40 hover:bg-white"
                  >
                    Explore the 6 Modules
                  </Link>
                </FadeUp>
              </div>
              <div className="lg:col-span-5 lg:flex lg:items-center lg:justify-center">
                <FadeUp delay={0.1}>
                  <div className="relative aspect-square w-full max-w-sm rounded-3xl bg-white p-10 shadow-card">
                    <Image
                      src="/images/modules/sherman-logo.webp"
                      alt="Sherman College of Chiropractic"
                      fill
                      sizes="(min-width:1024px) 30vw, 80vw"
                      className="object-contain p-10"
                    />
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* IN A NUTSHELL */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <FadeUp>
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                In a Nutshell
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-dark md:text-4xl">
                40 CE credits for superior, contemporary patient care
              </h2>
              <div className="mt-4 h-[3px] w-20 bg-accent" />
              <p className="mt-8 text-base leading-relaxed text-stone md:text-lg">
                The CPSC seminar series helps chiropractors provide superior patient care
                based on contemporary science by utilizing functional assessments to direct
                clinical investigation, while better positioning the value of their
                services, and significantly increasing patient retention. All technique
                backgrounds are welcome and will greatly benefit.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* COURSE OVERVIEW */}
        <section className="bg-cream-light py-20 md:py-28">
          <div className="container max-w-4xl">
            <FadeUp>
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                Course Overview
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-dark md:text-4xl">
                Designed for any technique background
              </h2>
              <div className="mt-4 h-[3px] w-20 bg-accent" />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-stone md:text-lg">
                <p>
                  This course has been designed to help the Doctor of Chiropractic of any
                  technique background to perform concise functional analysis of the entire
                  body as it relates to subluxation and resulting neurological interference.
                  It brings together the most contemporary science in functional movement
                  and neurology, bridging the gap between applied science and subluxation
                  clinically.
                </p>
                <p>
                  This course is NOT a technique; it teaches the doctor/doctor2B the what,
                  when, and how in restoring function specific to each patient that walks
                  into the office, and maximize the effect of the chiropractic adjustment.
                </p>
                <p>
                  This is a seminar series that teaches how the clinical entity of
                  subluxation is directly related to objective functional and neurological
                  findings that both the patient and doctor can SEE. This course embraces a
                  salutogenic perspective promoting and quantifying patient health by
                  utilizing various movement and neurological markers to direct clinical
                  investigation and outcome goals. Patient management, education, and
                  marketing are covered for patient understanding and retention, and for
                  doctor implementation of these processes into their business immediately.
                </p>
                <p>
                  In this course, you must be ready to THINK, and you will take your
                  clinical skills and business acumen to the next level — practicing with
                  superior patient care and solid financial stability.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* MODULES GRID */}
        <section id="modules" className="bg-white py-20 md:py-28">
          <div className="container">
            <FadeUp className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                The Six Modules
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-dark md:text-4xl">
                Six modules · 54 total hours
              </h2>
              <div className="mt-4 h-[3px] w-20 bg-accent" />
            </FadeUp>
            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {Object.values(MODULES).map((m) => (
                <motion.div key={m.slug} variants={cardItem}>
                  <Link
                    href={`/${m.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream-light shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={m.imageSrc}
                        alt={`Module ${m.number}: ${m.title}`}
                        fill
                        sizes="(min-width:1024px) 30vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-brand-dark">
                        Module {m.number}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl text-brand-dark">{m.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-stone">{m.subtitle}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-dark">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CERTIFICATION */}
        <section className="bg-cream-light py-20 md:py-28">
          <div className="container grid gap-10 lg:grid-cols-12">
            <FadeUp className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                Certification
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-dark md:text-4xl">
                Earn the CPSC credential
              </h2>
              <div className="mt-4 h-[3px] w-20 bg-accent" />
            </FadeUp>
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <ul className="space-y-4 text-base leading-relaxed text-stone">
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent-dark" />Students/faculty and doctors are welcome to take any number of the modules, but to be eligible to pass the certification exam they must complete all six.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent-dark" />Individual must complete all 6 modules and pass the certification exam (≥ 90%).</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent-dark" />Exam is administered at the beginning of the next-scheduled Module I.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent-dark" />Includes certification placard, letter of recommendation, name/business placement on YHN website and YHN social media marketing of individual&apos;s achievement.</li>
                </ul>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* COURSE DETAILS */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-5xl">
            <FadeUp className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                Course Details
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-dark md:text-4xl">
                Investment, locations &amp; instructors
              </h2>
              <div className="mt-4 h-[3px] w-20 bg-accent" />
            </FadeUp>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeUp className="rounded-3xl bg-cream-light p-8">
                <h3 className="font-display text-xl text-brand-dark">Format</h3>
                <ul className="mt-4 space-y-3 text-sm text-stone">
                  <li><strong className="text-brand-dark">Hours:</strong> 6 modules × 9 hours = 54-hour course</li>
                  <li><strong className="text-brand-dark">CE Credit:</strong> Modules 1–5 · 8 credits per module</li>
                  <li><strong className="text-brand-dark">Investment:</strong> $155/module Students · $350/module Doctors</li>
                </ul>
              </FadeUp>
              <FadeUp delay={0.05} className="rounded-3xl bg-cream-light p-8">
                <h3 className="font-display text-xl text-brand-dark">Pricing Specials</h3>
                <ul className="mt-4 space-y-3 text-sm text-stone">
                  <li>Sign up for all 6 modules at one time: save 10%</li>
                  <li>Refer/bring a friend per module: save 10% (Bring 10 friends: free)</li>
                  <li>Early Bird: ≥60 days prior to module date: save 10%</li>
                  <li>Further discount options provided at the end of each seminar</li>
                </ul>
              </FadeUp>
              <FadeUp delay={0.1} className="rounded-3xl bg-cream-light p-8">
                <h3 className="font-display text-xl text-brand-dark">Locations</h3>
                <div className="mt-4 space-y-4 text-sm text-stone">
                  <div>
                    <div className="font-medium text-brand-dark">New Jersey</div>
                    Courtyard By Marriott · 360 Scotch Road · Ewing, NJ 08628
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark">South Carolina</div>
                    Sherman College of Chiropractic · 2020 State Rd 771 · Boiling Springs, SC 29316
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.15} className="rounded-3xl bg-cream-light p-8">
                <h3 className="font-display text-xl text-brand-dark">Your Instructors</h3>
                <ul className="mt-4 space-y-2 text-sm text-stone">
                  <li>Dr. Matthew Hudson DC, CPSC</li>
                  <li>Dr. Chris Chianese MS, DC, CPSC</li>
                  <li>Dr. Marc Chianese MS, DC, CPSC</li>
                  <li>Dr. Lillee Mason DC, CPSC</li>
                </ul>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand py-20 text-white md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="container relative grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
                  Register Now
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">
                  Take your clinical skills and business to the next level.
                </h2>
                <p className="mt-4 max-w-xl text-white/75">
                  Email CPSCseminars@gmail.com with your preferred location and date. All
                  applicable discounts are refunded back after full payment is processed.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:CPSCseminars@gmail.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-brand-dark transition hover:bg-accent-dark hover:text-white"
                  >
                    Email CPSC Registration
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <a
                  href="tel:8565322063"
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Call YHN</div>
                    <div className="font-display text-2xl">(856) 532-2063</div>
                  </div>
                </a>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
  );
}
