"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, GraduationCap, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumbs, FadeUp } from "@/components/page/Primitives";
import type { ModuleConfig } from "@/lib/moduleContent";
import { MODULES } from "@/lib/moduleContent";

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ModulePage({ config }: { config: ModuleConfig }) {
  const idx = Object.keys(MODULES).indexOf(config.slug);
  const prev = Object.values(MODULES)[idx - 1];
  const next = Object.values(MODULES)[idx + 1];

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
            <Breadcrumbs
              trail={[
                { label: "Home", href: "/" },
                { label: "CPSC", href: "/cpsc" },
                { label: `Module ${config.number}` },
              ]}
            />
            <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="lg:w-7/12">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Module {config.number}
                  </span>
                  <h1 className="mt-5 font-display text-4xl leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
                    {config.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base text-stone md:text-lg">
                    {config.subtitle}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  style={{ transformOrigin: "left" }}
                  className="mt-8 h-[3px] w-24 bg-accent"
                />
                <FadeUp delay={0.2} className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:CPSCseminars@gmail.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
                  >
                    Register Now
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    href="/cpsc"
                    className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-6 py-3 text-sm font-medium text-brand-dark transition hover:border-brand/40 hover:bg-white"
                  >
                    All Modules
                  </Link>
                </FadeUp>
              </div>
              <div className="lg:w-5/12">
                <FadeUp delay={0.1}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                    <Image
                      src={config.imageSrc}
                      alt={`${config.title} — CPSC Module ${config.number}`}
                      fill
                      sizes="(min-width:1024px) 40vw, 100vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/40 to-transparent p-5">
                      <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-brand-dark">
                        Post Graduate · CPSC
                      </span>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <FadeUp>
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                Course Overview
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-dark md:text-4xl">
                What this module is about
              </h2>
              <div className="mt-4 h-[3px] w-20 bg-accent" />
              <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-stone md:text-lg">
                {config.overview}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="bg-cream-light py-20 md:py-28">
          <div className="container">
            <FadeUp className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                What You Can Expect to Learn
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-dark md:text-4xl">
                Outcomes &amp; takeaways
              </h2>
              <div className="mt-4 h-[3px] w-20 bg-accent" />
            </FadeUp>
            <motion.ol
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-5 md:grid-cols-2"
            >
              {config.outcomes.map((o, i) => (
                <motion.li
                  key={i}
                  variants={cardItem}
                  className="group flex gap-4 rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand/5 font-display text-brand-dark transition group-hover:bg-accent group-hover:text-white">
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-stone md:text-[15px]">{o}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* COURSE NAV */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="grid gap-4 md:grid-cols-2">
              {prev ? (
                <Link
                  href={`/${prev.slug}`}
                  className="group flex items-center gap-4 rounded-3xl border border-brand/10 p-6 transition hover:border-brand/30 hover:bg-cream-light"
                >
                  <ArrowLeft className="h-5 w-5 text-accent-dark transition group-hover:-translate-x-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-stone">
                      Previous · Module {prev.number}
                    </div>
                    <div className="font-display text-lg text-brand-dark">{prev.title}</div>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/cpsc"
                  className="group flex items-center gap-4 rounded-3xl border border-brand/10 p-6 transition hover:border-brand/30 hover:bg-cream-light"
                >
                  <ArrowLeft className="h-5 w-5 text-accent-dark transition group-hover:-translate-x-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-stone">Back</div>
                    <div className="font-display text-lg text-brand-dark">CPSC Overview</div>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/${next.slug}`}
                  className="group flex items-center justify-end gap-4 rounded-3xl border border-brand/10 p-6 text-right transition hover:border-brand/30 hover:bg-cream-light"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-stone">
                      Next · Module {next.number}
                    </div>
                    <div className="font-display text-lg text-brand-dark">{next.title}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent-dark transition group-hover:translate-x-0.5" />
                </Link>
              )}
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
                  Reserve your seat for Module {config.number}.
                </h2>
                <p className="mt-4 max-w-xl text-white/75">
                  Email us at CPSCseminars@gmail.com with your preferred location (NJ or
                  SC) and date. Discounts available for early bird, group, and bundle
                  registrations.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:CPSCseminars@gmail.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-brand-dark transition hover:bg-accent-dark hover:text-white"
                  >
                    Email Registration
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    href="/cpsc"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    View All 6 Modules
                  </Link>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    Course Details
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-white/85">
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />6 Modules · 9 Hours each · 54-Hour Course</li>
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />8 CE Credits per Module (Modules 1-5)</li>
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />$155 / Module Students · $350 / Module Doctors</li>
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Locations: Ewing, NJ &amp; Sherman College, SC</li>
                  </ul>
                  <a
                    href="tel:8565322063"
                    className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">(856) 532-2063</span>
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
  );
}
