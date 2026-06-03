"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, ShieldAlert } from "lucide-react";
import { Breadcrumbs } from "@/components/page/Primitives";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-cream-light">
      <section className="relative bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pt-12 pb-8 lg:px-10 lg:pt-16">
          <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 lg:grid-cols-12">
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white px-6 py-16 lg:col-span-7 lg:px-12 lg:py-24"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">Contact Us</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.98] text-brand md:text-6xl">
              Let&rsquo;s <span className="font-script font-normal italic text-accent">talk</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone">
              Send us a message and our team will reply within one business day. For urgent care, call either location directly.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Preferred Location" name="location" placeholder="Merchantville or Chalfont" />
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.24em] text-stone">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-brand/15 bg-mist/40 px-4 py-3 text-sm text-brand placeholder:text-stone/60 focus:border-brand focus:bg-white focus:outline-none"
                />
              </div>

              <p className="md:col-span-2 inline-flex items-start gap-2 text-[11px] text-stone">
                <ShieldAlert size={13} className="mt-0.5 shrink-0 text-accent" />
                Please do not submit any Protected Health Information (PHI).
              </p>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-all hover:bg-accent md:col-span-2 md:w-fit"
              >
                {submitted ? "Thanks — we'll be in touch" : "Submit"}
                <Send size={13} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>

          {/* Right: info dark panel */}
          <motion.aside
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden bg-brand-dark px-6 py-16 text-white lg:col-span-5 lg:px-10 lg:py-24"
          >
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-dashed border-white/10"
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Reach Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              Two locations. <br />
              One phone call away.
            </h2>

            <div className="mt-10 space-y-9">
              <InfoBlock
                title="Merchantville, NJ"
                lines={["5 W Chestnut Ave", "Merchantville, NJ 08109"]}
                phone="(856) 532-2063"
                tel="tel:8565322063"
              />
              <InfoBlock
                title="Chalfont, PA"
                lines={["350 N Main St #201", "Chalfont, PA 18914"]}
                phone="(609) 651-7436"
                tel="tel:6096517436"
              />

              <div className="border-t border-white/10 pt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Hours</p>
                <p className="mt-2 text-sm text-white/80">Monday &ndash; Friday</p>
                <p className="text-base font-semibold">7:30 am &ndash; 8:00 pm</p>
                <p className="mt-2 text-xs text-white/60">Saturday &amp; Sunday Closed</p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-7">
                <Mail size={14} className="text-accent" />
                <a href="mailto:info@yhnhealth.com" className="text-sm text-white/80 hover:text-accent">
                  info@yhnhealth.com
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-[0.24em] text-stone">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-brand/15 bg-mist/40 px-4 py-3 text-sm text-brand placeholder:text-stone/60 focus:border-brand focus:bg-white focus:outline-none"
      />
    </div>
  );
}

function InfoBlock({
  title,
  lines,
  phone,
  tel,
}: {
  title: string;
  lines: string[];
  phone: string;
  tel: string;
}) {
  return (
    <div>
      <p className="font-display text-lg font-bold">{title}</p>
      <p className="mt-3 inline-flex items-start gap-2 text-sm text-white/75">
        <MapPin size={13} className="mt-0.5 shrink-0 text-accent" strokeWidth={2} />
        <span>
          {lines.join(", ")}
        </span>
      </p>
      <a href={tel} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent">
        <Phone size={13} className="text-accent" strokeWidth={2} />
        {phone}
      </a>
    </div>
  );
}
