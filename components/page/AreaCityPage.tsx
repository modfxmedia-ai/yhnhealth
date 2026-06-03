"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import {
  CLINICS,
  SERVICES,
  type City,
  nearbyCities,
} from "@/lib/pseoData";
import { Breadcrumbs, FadeUp } from "@/components/page/Primitives";

export default function AreaCityPage({ city }: { city: City }) {
  const clinic = CLINICS[city.clinic];
  const cityFull = `${city.name}, ${city.state}`;
  const nearby = nearbyCities(city.slug);

  const grouped = SERVICES.reduce<Record<string, typeof SERVICES>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

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
              { label: cityFull },
            ]}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <FadeUp className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">
                <MapPin className="h-3.5 w-3.5" />
                {city.county} County, {city.state}
              </span>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-brand md:text-5xl lg:text-6xl">
                Chiropractic & Functional Care in <span className="text-accent">{city.name}</span>, {city.state}
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
                {city.name} is {city.vibe}. Our nearest clinic — {clinic.name} — sits{" "}
                {city.driveMin === 0 ? "right in town" : `about ${city.driveMin} minutes away`} and serves{" "}
                {city.name} families with patient-specific chiropractic, functional medicine, sports rehab, and prenatal care.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="lg:col-span-4">
              <div className="rounded-3xl border border-brand/10 bg-white p-6 shadow-card">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Nearest Clinic</p>
                <p className="mt-3 font-display text-xl font-bold text-brand">{clinic.name}</p>
                <p className="mt-2 flex items-start gap-2 text-sm text-stone">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-accent-dark" />
                  {clinic.address}
                </p>
                <a href={clinic.tel} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-accent-dark">
                  <Phone size={14} className="text-accent-dark" />
                  {clinic.phone}
                </a>
                <p className="mt-3 flex items-center gap-2 text-xs text-stone">
                  <Clock size={12} className="text-accent-dark" />
                  Mon–Fri · 7:30 am – 8:00 pm
                </p>
                <Link
                  href="/locations"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-accent"
                >
                  Book Appointment
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="mt-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-brand/10 md:grid-cols-4">
              {[
                { label: "Population", value: city.population },
                { label: "County", value: city.county },
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

      {/* LOCAL CONTEXT */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <FadeUp className="lg:col-span-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">About {city.name}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              A clinic that understands your zip code.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
            <p className="mt-6 text-[15px] leading-relaxed text-stone">
              {city.name} is home to about {city.population} residents in {city.county} County. Patients come
              to us from neighborhoods like {city.neighborhoods.slice(0, 3).join(", ")}, and from work near{" "}
              {city.landmarks.slice(0, 2).join(" and ")}. Care is scheduled around busy commutes — early morning,
              lunchtime and post-work appointments are standard.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand/10 bg-cream-light p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">Neighborhoods Served</p>
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
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark">Local Landmarks</p>
                <ul className="mt-3 space-y-2">
                  {city.landmarks.map((l) => (
                    <li key={l} className="flex items-center gap-2 text-sm text-stone">
                      <CheckCircle2 size={13} className="text-accent-dark" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICES BY CATEGORY */}
      <section className="bg-cream-light py-20 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Services in {city.name}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              Everything we offer, locally.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>

          <div className="mt-12 space-y-12">
            {Object.entries(grouped).map(([cat, list]) => (
              <div key={cat}>
                <h3 className="font-display text-xl font-bold text-brand md:text-2xl">{cat}</h3>
                <div className="mt-2 h-px w-full bg-brand/10" />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/areas-we-serve/${city.slug}/${s.slug}`}
                        className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-brand/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                      >
                        <div>
                          <p className="font-display text-base font-bold text-brand">{s.name}</p>
                          <p className="mt-1 text-xs text-stone">in {city.name}, {city.state}</p>
                        </div>
                        <ArrowRight size={14} className="mt-1 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Nearby Areas</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              Cities near {city.name} we serve.
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-accent" />
          </FadeUp>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/areas-we-serve/${n.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-brand/10 bg-cream-light p-5 transition-all hover:bg-white hover:shadow-card"
                >
                  <div>
                    <p className="font-display text-base font-bold text-brand">{n.name}, {n.state}</p>
                    <p className="mt-1 text-xs text-stone">{n.county} County · ~{n.driveMin} min</p>
                  </div>
                  <ArrowUpRight size={14} className="text-accent-dark transition-transform group-hover:-translate-y-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Visit YHN · {cityFull}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Ready when you are, {city.name}.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Book at our {clinic.name} office — the closest YHN clinic to {city.name}.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/locations" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-dark transition-colors hover:bg-white">
                Book Appointment
                <ArrowUpRight size={14} />
              </Link>
              <a href={clinic.tel} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10">
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
