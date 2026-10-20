"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";

const PHONE = "903-421-8100";
const PHONE_LINK = "tel:+19034218100";

const EASE = [0.22, 1, 0.36, 1] as const;

const trustPoints = [
  "Residential Service",
  "Commercial Electrical",
  "Quality Workmanship",
];

export default function Hero() {
  const reduce = useReducedMotion();

  // One page-load sequence: eyebrow, headline, copy, actions, trust list.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy text-white"
    >
      {/* Photo */}
      <img
        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2400&q=85"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[65%_center] lg:object-center"
      />

      {/* Navy overlay, strongest behind the text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#0f172a_0%,rgba(15,23,42,0.97)_28%,rgba(15,23,42,0.84)_50%,rgba(15,23,42,0.45)_76%,rgba(15,23,42,0.3)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-linear-to-t from-navy/85 via-transparent to-navy/30"
      />

      {/* Orange glow in the lower right, over the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_92%_100%,rgba(249,115,22,0.2),transparent_70%)]"
      />

      {/* Blueprint grid, faded in from the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_90%_40%,black,transparent_65%)]"
      />

      <div className="shell">
        <div className="grid min-h-[680px] items-center py-28 sm:min-h-[720px] sm:py-32 lg:min-h-[800px] lg:py-36">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-orange-500" />
              <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-400">
                Residential &amp; Commercial Electrical
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="m-0 mt-7 font-heading text-[clamp(3rem,7vw,6.25rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-white"
            >
              <span className="block">Reliable</span>
              <span className="block">Electrical</span>
              <span className="block">Work. Done Right.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="m-0 mt-8 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
            >
              From residential repairs to commercial installations, we deliver
              dependable electrical solutions with a focus on safety,
              workmanship, and lasting results.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={item}
              className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-navy no-underline shadow-[0_18px_40px_-16px_rgba(249,115,22,0.7)] transition-colors duration-300 hover:bg-orange-400 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
              >
                Request a quote
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>

              <a
                href={PHONE_LINK}
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold text-white no-underline backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
              >
                <Phone size={17} aria-hidden="true" />
                {PHONE}
              </a>
            </motion.div>

            {/* Trust list */}
            <motion.ul
              variants={item}
              className="m-0 mt-12 flex max-w-2xl list-none flex-wrap gap-x-8 gap-y-3 border-t border-white/15 p-0 pt-6"
            >
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-200"
                >
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                    className="shrink-0 text-orange-500"
                  />
                  {point}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge: hairline with a short orange segment */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-white/15"
      />
      <div
        aria-hidden="true"
        className="shell pointer-events-none absolute inset-x-0 bottom-0"
      >
        <div className="h-[3px] w-24 bg-orange-500" />
      </div>
    </section>
  );
}
