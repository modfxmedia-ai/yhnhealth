"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { SERVICE_GROUPS, type ServiceGroup } from "@/lib/siteData";

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-steel-soft/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-dark">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Our Specialties
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-brand md:text-5xl lg:text-6xl">
              Comprehensive{" "}
              <span className="font-script font-normal italic text-accent">
                services
              </span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-stone lg:col-span-5">
            Twenty specialties, organized into three focused tracks so you can
            find exactly the kind of care you need.
          </p>
        </motion.div>

        {/* Three thematic sections */}
        <div className="mt-16 space-y-20">
          {SERVICE_GROUPS.map((group, gi) => (
            <ServiceTrack key={group.id} group={group} index={gi} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/locations"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-brand bg-transparent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-brand transition-all hover:bg-brand hover:text-white"
          >
            Schedule your visit
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

function ServiceTrack({ group, index }: { group: ServiceGroup; index: number }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, amount: 0.3 });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-svc-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Header row with metric graph */}
      <div
        ref={headerRef}
        className="mb-7 grid grid-cols-1 items-end gap-5 lg:grid-cols-12 lg:gap-8"
      >
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent-dark">
              {String(index + 1).padStart(2, "0")} / 03
            </span>
            <span className="h-px flex-1 max-w-[80px] bg-brand/20" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone">
              {group.eyebrow}
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold leading-[1.1] text-brand md:text-4xl">
            {group.title}
            <span className="font-script font-normal italic text-accent">
              {group.scriptWord}
            </span>
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-4 h-[3px] w-24 origin-left bg-accent"
          />
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-stone">
            {group.description}
          </p>
        </div>

        {/* Mini "motion graph" + count */}
        <div className="lg:col-span-5">
          <div className="flex items-end justify-between gap-6 rounded-2xl border border-brand/10 bg-white/60 p-5 backdrop-blur">
            <div>
              <p className="font-display text-4xl font-bold leading-none text-brand md:text-5xl">
                {group.metric.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone">
                {group.metric.label}
              </p>
            </div>
            <MotionBars active={inView} count={group.items.length} />
          </div>
        </div>
      </div>

      {/* Scroll controls */}
      <div className="pointer-events-none absolute -top-2 right-0 flex gap-2 lg:flex">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Scroll left"
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white text-brand transition-all hover:border-accent hover:text-accent-dark disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Scroll right"
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white text-brand transition-all hover:border-accent hover:text-accent-dark disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Scrolling cards */}
      <div className="relative -mx-6 lg:-mx-10">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {group.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 4) * 0.06 }}
              className="snap-start shrink-0 basis-[260px] sm:basis-[290px] lg:basis-[300px]"
              data-svc-card
            >
              <Link
                href={item.href}
                className="group relative block overflow-hidden rounded-2xl bg-brand shadow-soft transition-all duration-500 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/50 to-transparent transition-opacity duration-500 group-hover:from-brand-dark group-hover:via-brand/75" />

                  <span className="absolute left-3.5 top-3.5 rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute right-3.5 top-3.5 inline-flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h4 className="font-display text-lg font-semibold leading-tight text-white">
                      {item.name}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-[12px] leading-snug text-white/75">
                      {item.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                      Learn more
                      <ArrowUpRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Edge fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-16 bg-gradient-to-l from-cream-light to-transparent lg:block"
        />
      </div>
    </div>
  );
}

function MotionBars({ active, count }: { active: boolean; count: number }) {
  // Deterministic bar heights from count seed (no SSR/CSR mismatch)
  const heights = Array.from({ length: 10 }, (_, i) => {
    const seed = (i * 17 + count * 31) % 60;
    return 28 + seed; // 28..88 px
  });

  return (
    <div className="flex h-16 items-end gap-1">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 4, opacity: 0.3 }}
          animate={active ? { height: h * 0.7, opacity: 1 } : { height: 4, opacity: 0.3 }}
          transition={{
            duration: 0.7,
            delay: i * 0.05,
            ease: "easeOut",
          }}
          className="w-1.5 rounded-full bg-gradient-to-t from-brand to-accent"
        />
      ))}
    </div>
  );
}
