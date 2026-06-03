"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ARTICLES } from "@/lib/siteData";

export default function ArticlesSection() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-28">
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-dark">
              <BookOpen size={11} className="text-accent" strokeWidth={2} />
              Wellness Reads
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-brand md:text-5xl lg:text-6xl">
              From the{" "}
              <span className="font-script font-normal italic text-accent">
                journal
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed text-stone lg:col-span-5"
          >
            Insights, tips and care notes from the YHN team — designed to help
            you move better, sleep better, and live well.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-soft transition-shadow duration-500 hover:shadow-card-hover"
            >
              <Link href={a.href} className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-brand backdrop-blur">
                  Newsletter
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-lg font-bold leading-snug text-brand md:text-xl">
                  <Link href={a.href} className="hover:text-accent-dark">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone">
                  {a.excerpt}
                </p>
                <Link
                  href={a.href}
                  className="mt-6 inline-flex items-center gap-2 self-start text-[10px] font-bold uppercase tracking-[0.28em] text-accent-dark transition-colors hover:text-brand"
                >
                  Read article
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/articles"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-brand bg-transparent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-brand transition-all hover:bg-brand hover:text-white"
          >
            View all articles
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
