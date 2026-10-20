"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, Zap } from "lucide-react";

const PHONE = "903-421-8100";
const PHONE_HREF = "tel:+19034218100";

const EASE = [0.22, 1, 0.36, 1] as const;

// Shared button base: no global classes, colours set explicitly per button.
const BTN =
  "group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

export default function FinalCTA() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-orange-600 py-20 text-white sm:py-28"
    >
      {/* Depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_12%_0%,rgba(255,255,255,0.14),transparent_60%),linear-gradient(115deg,transparent_40%,rgba(15,23,42,0.32)_100%)]"
      />

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_85%_50%,black,transparent_70%)]"
      />

      {/* Bolt watermark */}
      <Zap
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -right-10 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-y-1/2 rotate-12 text-navy/10 sm:-right-4 sm:h-[34rem] sm:w-[34rem]"
      />

      {/* Hairline edges */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-white/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-navy/25"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-12 px-5 sm:px-8 lg:flex-row lg:items-end lg:gap-16 lg:px-10"
      >
        <div className="max-w-3xl">
          <motion.div variants={item} className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-navy" />
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-navy">
              Let’s get started
            </p>
          </motion.div>

          <motion.h2
            variants={item}
            id="final-cta-heading"
            className="m-0 mt-6 text-balance font-heading text-4xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Have an electrical project in mind?
          </motion.h2>

          <motion.p
            variants={item}
            className="m-0 mt-6 max-w-xl text-base font-medium leading-7 text-navy sm:text-lg sm:leading-8"
          >
            Tell us what you need, and take the next step toward getting your
            electrical project handled professionally.
          </motion.p>
        </div>

        {/* Action panel */}
        <motion.div
          variants={item}
          className="w-full shrink-0 rounded-2xl border border-white/25 bg-navy/20 p-3 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.65),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-sm sm:max-w-md lg:w-[22rem]"
        >
          <a
            href="#contact"
            className={`${BTN} bg-navy text-white hover:bg-[#1e293b] hover:text-white`}
          >
            Request a quote
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </a>

          <div className="flex items-center gap-3 px-2 py-3" aria-hidden="true">
            <span className="h-px flex-1 bg-white/25" />
            <span className="text-xs font-semibold tracking-wide text-white">
              or call directly
            </span>
            <span className="h-px flex-1 bg-white/25" />
          </div>

          <a
            href={PHONE_HREF}
            className={`${BTN} bg-white text-navy hover:bg-white/90 hover:text-navy`}
          >
            <Phone size={18} aria-hidden="true" />
            Call {PHONE}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
