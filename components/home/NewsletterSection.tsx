"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand via-brand to-brand-dark p-7 sm:rounded-[40px] sm:p-10 md:p-16"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full border border-dashed border-white/8"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-steel-light backdrop-blur">
                <Mail size={11} className="text-accent" strokeWidth={2} />
                Newsletter
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-white md:text-4xl lg:text-5xl">
                Wellness tips,{" "}
                <span className="font-script font-normal italic text-accent">
                  delivered
                </span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                Monthly health insights, practical tips, and care updates from
                our team - straight to your inbox.
              </p>
            </div>

            <div className="md:col-span-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4 rounded-2xl border border-accent/30 bg-white/10 p-6 backdrop-blur"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <CheckCircle size={20} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      You&rsquo;re subscribed!
                    </p>
                    <p className="text-sm text-white/70">
                      Watch your inbox for our next note.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative flex flex-col gap-2 overflow-visible sm:flex-row sm:items-center sm:gap-0 sm:overflow-hidden sm:rounded-full sm:border sm:border-white/20 sm:bg-white/5 sm:backdrop-blur sm:transition-colors sm:focus-within:border-accent">
                    <div className="relative flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur sm:flex-1 sm:rounded-none sm:border-0 sm:bg-transparent">
                      <Mail
                        size={16}
                        className="absolute left-5 text-steel-light"
                        strokeWidth={2}
                      />
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-transparent py-3.5 pl-12 pr-5 text-sm text-white placeholder:text-white/40 focus:outline-none sm:py-4 sm:pr-32"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-brand sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 sm:py-3"
                    >
                      Sign up
                      <Send
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                    No spam · unsubscribe anytime
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
