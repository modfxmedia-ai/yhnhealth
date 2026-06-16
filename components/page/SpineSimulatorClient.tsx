"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Activity, Phone } from "lucide-react";
import { Breadcrumbs, FadeUp } from "@/components/page/Primitives";

export default function SpineSimulatorClient() {
  return (
    <main>
        <section className="relative overflow-hidden bg-cream-light pt-12 pb-20 md:pt-16 md:pb-28">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(#1F3563 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -right-32 top-12 h-96 w-96 rounded-full bg-accent/15 blur-3xl" aria-hidden />
          <div className="container relative">
            <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "3D Spine Simulator" }]} />
            <div className="mt-6 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-accent-dark">
                  <Activity className="h-3.5 w-3.5" />
                  Patient Resource
                </span>
                <h1 className="mt-5 font-display text-4xl leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
                  3D Spine Simulator
                </h1>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                style={{ transformOrigin: "left" }}
                className="mt-8 h-[3px] w-24 bg-accent"
              />
              <FadeUp delay={0.2}>
                <p className="mt-6 text-base leading-relaxed text-stone md:text-lg">
                  All of the functions related to the amazing human body are controlled and
                  coordinated by the extensive neural network. Interference or stresses in
                  any part of the nerve system may result in health problems in a variety
                  of areas throughout our bodies. Take a moment and explore which areas of
                  the body are influenced by the different areas of your spine. You will be
                  amazed at how the spine and nerve system are interrelated and connected
                  to every aspect of our expression of health and wellness.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="container">
            <FadeUp>
              <div className="overflow-hidden rounded-3xl border border-brand/10 shadow-card">
                <iframe
                  src="https://yhnhealth.com/content/chiromatrix/3d_spine/nerve_chart/index.htm"
                  title="3D Spine Simulator — Nerve Chart"
                  className="h-[720px] w-full bg-white"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-center text-xs text-stone">
                Simulator content provided by ChiroMatrix. If the embed does not load, you
                can{" "}
                <a
                  href="https://yhnhealth.com/content/chiromatrix/3d_spine/nerve_chart/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark underline"
                >
                  launch it in a new tab
                </a>
                .
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand py-20 text-white md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="container relative grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
                  Ready to Get Started?
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">
                  Schedule your visit and meet the team.
                </h2>
                <p className="mt-4 max-w-xl text-white/75">
                  Curious about what your own spine analysis might reveal? Our doctors
                  perform comprehensive functional postural evaluations at every initial
                  visit.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-brand-dark transition hover:bg-accent-dark hover:text-white"
                  >
                    Book Your Appointment
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5 grid gap-3">
              <FadeUp delay={0.1}>
                <a href="tel:8565322063" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <Phone className="h-4 w-4 text-accent" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Merchantville</div>
                    <div className="font-display text-xl">(856) 532-2063</div>
                  </div>
                </a>
              </FadeUp>
              <FadeUp delay={0.15}>
                <a href="tel:6096517436" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <Phone className="h-4 w-4 text-accent" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Chalfont</div>
                    <div className="font-display text-xl">(609) 651-7436</div>
                  </div>
                </a>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
  );
}
