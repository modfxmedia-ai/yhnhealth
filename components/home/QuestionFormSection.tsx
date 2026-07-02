"use client";

import Script from "next/script";
import { motion } from "motion/react";
import { MessageCircle, Clock, ShieldCheck } from "lucide-react";

export default function QuestionFormSection() {
  return (
    <section
      id="ask"
      className="relative overflow-hidden bg-mist py-20 md:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-dark">
              <MessageCircle size={11} className="text-accent" strokeWidth={2} />
              Ask Us Anything
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-brand md:text-5xl">
              Have a question?{" "}
              <span className="font-script font-normal italic text-accent">
                Send it here
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Not sure whether chiropractic, functional medicine, or telehealth
              is right for you? Send us a quick note and our team will get back
              to you within one business day. No commitment - just a real,
              human answer.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-stone">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                  <Clock size={14} strokeWidth={1.75} />
                </span>
                <span className="pt-1.5">
                  <strong className="font-semibold text-brand">Reply within one business day.</strong>{" "}
                  Urgent? Call your nearest office directly.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                  <ShieldCheck size={14} strokeWidth={1.75} />
                </span>
                <span className="pt-1.5">
                  <strong className="font-semibold text-brand">Private and secure.</strong>{" "}
                  We don&rsquo;t share your info. Ever.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                  <MessageCircle size={14} strokeWidth={1.75} />
                </span>
                <span className="pt-1.5">
                  <strong className="font-semibold text-brand">Prefer to talk?</strong>{" "}
                  Mention your best time - we&rsquo;ll call you back.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-brand/10 bg-white p-4 shadow-card md:p-6">
              <div className="h-[3px] w-full rounded-t-md bg-gradient-to-r from-brand via-steel to-brand" />
              <div className="mt-4">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/75fLlP8l9bjou8xrpwwT"
                  style={{ width: "100%", height: "540px", border: "none", borderRadius: 12 }}
                  id="inline-home-75fLlP8l9bjou8xrpwwT"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website home page question form"
                  data-height="540"
                  data-layout-iframe-id="inline-home-75fLlP8l9bjou8xrpwwT"
                  data-form-id="75fLlP8l9bjou8xrpwwT"
                  title="Ask us a question"
                />
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
