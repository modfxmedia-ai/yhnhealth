"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Activity,
  Clock,
  HelpCircle,
} from "lucide-react";
import {
  CLINICS,
  type City,
  type ServiceData,
  nearbyCities,
  relatedServices,
} from "@/lib/pseoData";
import { Breadcrumbs, FadeUp } from "@/components/page/Primitives";

function localize(input: string, city: string): string {
  return input.replace(/\{city\}/g, city);
}

export default function AreaServicePage({
  city,
  service,
}: {
  city: City;
  service: ServiceData;
}) {
  const clinic = CLINICS[city.clinic];
  const cityFull = `${city.name}, ${city.state}`;
  const nearby = nearbyCities(city.slug);
  const related = relatedServices(service.slug);
  const summary = localize(service.summary, cityFull);
  const faq = service.faq.map((f) => ({ q: localize(f.q, cityFull), a: localize(f.a, cityFull) }));

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-light">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(31,53,99,0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1320px] px-6 pt-10 pb-16 lg:px-10 lg:pt-14 lg:pb-20">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Areas We Serve", href: "/areas-we-serve" },
              { label: cityFull, href: `/areas-we-serve/${city.slug}` },
              { label: service.name },
            ]}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <FadeUp className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">
                <MapPin className="h-3.5 w-3.5" />
                {service.category} · {city.county} County
              </span>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-brand md:text-5xl lg:text-6xl">
                {service.name} in <span className="text-accent">{city.name}</span>, {city.state}
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{ transformOrigin: "left" }}
                className="mt-6 h-[3px] w-24 bg-accent"
              />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone md:text-lg">
                {summary} Patients across {city.vibe} drive to our {clinic.name} office — about{" "}
                {city.driveMin === 0 ? "a few minutes away" : `${city.driveMin} minutes from ${city.name}`}.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="lg:col-span-4">
              <div className="rounded-3xl border border-brand/10 bg-white p-6 shadow-card">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">
                  Nearest YHN Clinic
                </p>
                <p className="mt-3 font-display text-xl font-bold text-brand">{clinic.name}</p>
                <p className="mt-2 flex items-start gap-2 text-sm text-stone">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-accent-dark" />
                  {clinic.address}
                </p>
                <a
                  href={clinic.tel}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-accent-dark"
                >
                  <Phone size={14} className="text-accent-dark" />
                  {clinic.phone}
                </a>
                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href="/locations"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-accent"
                  >
                    Book Appointment
                    <ArrowUpRight size={13} />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/15 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-brand transition-colors hover:bg-cream-light"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Quick local facts strip */}
          <FadeUp delay={0.2} className="mt-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-brand/10 md:grid-cols-4">
              {[
                { label: "City", value: city.name },
                { label: "County", value: `${city.county}, ${city.state}` },
                { label: "Drive Time", value: city.driveMin === 0 ? "Local" : `~${city.driveMin} min` },
                { label: "ZIP Codes", value: city.zips.join(" · ") },
              ].map((s) => (
                <div key={s.label} className="bg-cream-light px-5 py-5 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone">{s.label}</div>
                  <div className="mt-2 font-display text-base font-bold text-brand md:text-lg">{s.value}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <FadeUp className="lg:col-span-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Why patients in {city.name} choose YHN</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              {service.shortName.replace(/^./, (c) => c.toUpperCase())} done the patient-specific way.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-stone md:text-base">
              Whether you live near {city.neighborhoods.slice(0, 2).join(" or ")}, work close to{" "}
              {city.landmarks[0]}, or only ever pass through {city.name} on the way to {clinic.name},
              you deserve {service.shortName} that addresses <em>your</em> body — not a one-size-fits-all routine.
              Every plan starts with a real exam, a clear diagnosis, and a written timeline so you know what
              the path looks like before you commit.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-stone md:text-base">
              Our doctors are post-graduate-credentialed in patient-specific chiropractic, ART, IASTM, and
              functional medicine. That depth lets us combine techniques inside a single visit — so {city.name}{" "}
              patients spend less time chasing relief across four different offices.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Doctor-led exam at every visit",
                "Patient-specific, not protocol-driven",
                "Multiple techniques under one roof",
                "Written plan with realistic timelines",
                "Insurance verified up front",
                "Same-week appointments common",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-stone">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-dark" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className="bg-cream-light py-20 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Conditions we treat</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              {service.name} for {city.name} patients dealing with —
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {service.conditions.map((c) => (
              <motion.li
                key={c}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-2xl border border-brand/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                  <Stethoscope size={16} className="text-accent-dark" />
                </div>
                <p className="mt-3 text-sm font-semibold text-brand">{c}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">What to expect</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              Your first visit, step by step.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>

          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-brand/10 bg-cream-light p-7"
              >
                <div className="absolute -top-3 left-7 inline-flex h-7 items-center justify-center rounded-full bg-brand px-3 font-display text-xs font-bold text-white">
                  Step {i + 1}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-brand">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{localize(step.body, cityFull)}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-brand py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Patient benefits</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              What {city.name} patients gain from {service.shortName}.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.benefits.map((b, i) => {
              const Icons = [Sparkles, ShieldCheck, Activity, Clock, CheckCircle2, Stethoscope];
              const Icon = Icons[i % Icons.length];
              return (
                <motion.li
                  key={b}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <p className="mt-4 font-display text-base font-semibold">{b}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <FadeUp className="lg:col-span-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Serving {city.name}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              Local roots, regional reach.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
            <p className="mt-6 text-[15px] leading-relaxed text-stone">
              {city.name} is home to roughly {city.population} residents in {city.county} County.
              We see patients who live and work near {city.landmarks.slice(0, 2).join(" and ")},
              come from neighborhoods like {city.neighborhoods.slice(0, 3).join(", ")}, and need
              chiropractic and functional care that respects busy {city.state === "NJ" ? "South Jersey" : "Bucks/Montco"} schedules.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand/10 bg-cream-light p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">Neighborhoods</p>
                <ul className="mt-3 space-y-2">
                  {city.neighborhoods.map((n) => (
                    <li key={n} className="flex items-center gap-2 text-sm text-stone">
                      <MapPin size={13} className="text-accent-dark" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand/10 bg-cream-light p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">Landmarks</p>
                <ul className="mt-3 space-y-2">
                  {city.landmarks.map((l) => (
                    <li key={l} className="flex items-center gap-2 text-sm text-stone">
                      <Sparkles size={13} className="text-accent-dark" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand/10 bg-cream-light p-6 sm:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">From {city.name} to YHN</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {city.driveMin === 0
                    ? `Our ${clinic.name} location is right in town — minutes from anywhere in ${city.name}.`
                    : `${clinic.name} sits about ${city.driveMin} minutes from ${city.name}. Most ${city.name} patients pair an early-morning or late-afternoon visit with their commute.`}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  Hours: Mon–Fri 7:30 am – 8:00 pm. Same-week appointments are common; same-day is often available.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* RELATED SERVICES IN THIS CITY */}
      <section className="bg-cream-light py-20 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Other services for {city.name}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              Related care our {city.name} patients book.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/areas-we-serve/${city.slug}/${r.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-brand/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">{r.category}</p>
                    <p className="mt-2 font-display text-base font-bold text-brand">{r.name}</p>
                    <p className="mt-2 text-xs text-stone">in {city.name}, {city.state}</p>
                  </div>
                  <ArrowRight size={14} className="mt-4 text-brand transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NEARBY CITIES FOR THIS SERVICE */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Nearby areas</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              {service.name} in cities near {city.name}.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/areas-we-serve/${n.slug}/${service.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-brand/10 bg-cream-light p-5 transition-all hover:bg-white hover:shadow-card"
                >
                  <div>
                    <p className="font-display text-base font-bold text-brand">
                      {n.name}, {n.state}
                    </p>
                    <p className="mt-1 text-xs text-stone">{n.county} County · ~{n.driveMin} min</p>
                  </div>
                  <ArrowUpRight size={14} className="text-accent-dark transition-transform group-hover:-translate-y-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-light py-20 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <FadeUp className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              Questions {city.name} patients ask.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
            <p className="mt-6 text-sm leading-relaxed text-stone">
              Don&rsquo;t see your question? Call {clinic.phone} or send us a message — we typically reply within one business day.
            </p>
          </FadeUp>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-brand/10 bg-white p-5 shadow-card open:shadow-card-hover"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                    <span className="flex items-start gap-3 font-display text-base font-bold text-brand">
                      <HelpCircle size={16} className="mt-1 shrink-0 text-accent-dark" />
                      {f.q}
                    </span>
                    <span className="text-accent-dark transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-stone">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">
              Schedule {service.name} · {cityFull}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Ready to feel like yourself again?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Book {service.shortName} at our {clinic.name} office — the closest YHN clinic to {city.name}.
              Same-week appointments are common.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-dark transition-colors hover:bg-white"
              >
                Book Appointment
                <ArrowUpRight size={14} />
              </Link>
              <a
                href={clinic.tel}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10"
              >
                <Phone size={13} />
                {clinic.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
