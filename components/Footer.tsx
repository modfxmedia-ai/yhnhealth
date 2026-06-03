"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Phone, MapPin, Mail, Clock } from "lucide-react";

type IconProps = { size?: number; strokeWidth?: number };

function FacebookIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Meet The Team", href: "/meet-the-doctor" },
  { label: "Articles", href: "/articles" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact-us" },
];

const SERVICE_LINKS = [
  { label: "Chiropractic Medicine", href: "/family-chiropractic-care" },
  { label: "Functional Medicine", href: "/functional-medicine" },
  { label: "Pediatric Care", href: "/pediatric-care" },
  { label: "Pregnancy Care", href: "/pregnancy-care" },
  { label: "Athletic Care", href: "/athletic-care" },
  { label: "Decompression Therapy", href: "/decompression-therapy" },
];

const FOOTER_LOCATIONS = [
  {
    name: "Merchantville",
    state: "NJ",
    address: "5 W Chestnut Ave, Merchantville, NJ 08109",
    phone: "(856) 532-2063",
    tel: "tel:8565322063",
  },
  {
    name: "Chalfont",
    state: "PA",
    address: "350 N Main St #201, Chalfont, PA 18914",
    phone: "(609) 651-7436",
    tel: "tel:6096517436",
  },
];

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/yhnhealth/" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/p/DQrd5dHE7_b/" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/your-health-now-llc" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-brand to-brand-dark"
      >
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-dashed border-white/10"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -left-40 -bottom-40 h-[28rem] w-[28rem] rounded-full border border-dashed border-white/8"
        />

        <div className="relative mx-auto flex max-w-[1320px] flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-steel-light backdrop-blur">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Begin Today
          </span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
            <span className="font-script font-normal italic text-accent">be well,</span> be you
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/75">
            Your path to better health begins with a single visit. We&rsquo;re ready when you are.
          </p>
          <Link
            href="/locations"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-9 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand"
          >
            Schedule a Visit
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-[1320px] px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" aria-label="Your Health Now — home" className="inline-flex items-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2">
                <Image
                  src="/images/logo.webp"
                  alt="Your Health Now"
                  width={48}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </span>
              <span className="ml-3 font-display text-xl font-bold leading-tight">
                Your Health Now
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-steel-light">
                  Health for every body
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Contemporary chiropractic and functional medicine care built on advanced technology and root-cause science. Two locations serving New Jersey and Pennsylvania.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <Icon size={15} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Explore</p>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Visit Us</p>
            <div className="mt-5 space-y-5">
              {FOOTER_LOCATIONS.map((loc) => (
                <div key={loc.name}>
                  <p className="font-display text-base font-semibold">
                    {loc.name}, <span className="text-steel-light">{loc.state}</span>
                  </p>
                  <p className="mt-1.5 flex items-start gap-2 text-xs leading-relaxed text-white/70">
                    <MapPin size={12} className="mt-0.5 shrink-0 text-accent" strokeWidth={2} />
                    {loc.address}
                  </p>
                  <a
                    href={loc.tel}
                    className="mt-1.5 inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-accent"
                  >
                    <Phone size={12} className="text-accent" strokeWidth={2} />
                    {loc.phone}
                  </a>
                </div>
              ))}

              <div className="border-t border-white/10 pt-4">
                <p className="flex items-center gap-2 text-xs text-white/70">
                  <Clock size={12} className="text-accent" strokeWidth={2} />
                  Mon–Fri · 7:30 am – 8:00 pm
                </p>
                <a
                  href="mailto:info@yhnhealth.com"
                  className="mt-2 inline-flex items-center gap-2 text-xs text-white/70 hover:text-accent"
                >
                  <Mail size={12} className="text-accent" strokeWidth={2} />
                  info@yhnhealth.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-white/50 md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Your Health Now. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-accent">Privacy</Link>
            <span className="h-3 w-px bg-white/20" />
            <Link href="/sitemap" className="hover:text-accent">Sitemap</Link>
            <span className="h-3 w-px bg-white/20" />
            <Link href="/contact-us" className="hover:text-accent">Contact</Link>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="h-[3px] w-full bg-gradient-to-r from-brand via-accent to-brand" />
    </footer>
  );
}
