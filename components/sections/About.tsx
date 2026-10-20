"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: Check,
    title: "A clear process",
    copy: "Straightforward communication and clear next steps.",
  },
  {
    icon: Wrench,
    title: "Attention to detail",
    copy: "Careful work and consideration at every stage.",
  },
  {
    icon: Target,
    title: "Practical solutions",
    copy: "Electrical solutions tailored to your project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality focused",
    copy: "A professional approach from start to finish.",
  },
];

export default function About() {
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
      id="about"
      aria-labelledby="about-heading"
      className="section relative isolate overflow-hidden bg-white"
    >
      {/* Soft warm wash behind the copy */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_45%_at_100%_100%,rgba(249,115,22,0.07),transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20"
      >
        {/* Image */}
        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Offset hairline frame */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-orange-600/50 sm:translate-x-4 sm:translate-y-4"
          />

          <div className="relative isolate overflow-hidden rounded-2xl bg-slate-100 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.55)]">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85"
              alt="Electrician carrying out electrical work"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/10 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15"
            />

            {/* Scope chip */}
            <p className="absolute left-5 top-5 m-0 inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-orange-500"
              />
              Residential &amp; Commercial
            </p>

            {/* Statement */}
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-navy/85 p-5 backdrop-blur-md sm:left-auto sm:max-w-xs sm:p-6">
              <span
                aria-hidden="true"
                className="mb-4 block h-px w-10 bg-orange-500"
              />
              <p className="m-0 font-heading text-lg font-extrabold uppercase leading-tight tracking-wide text-white sm:text-xl">
                Good work starts with getting the details right.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="min-w-0">
          <motion.div variants={item} className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-orange-600" />
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">
              About RAP Electric
            </p>
          </motion.div>

          <motion.h2
            variants={item}
            id="about-heading"
            className="m-0 mt-6 max-w-2xl text-balance font-heading text-[clamp(2.25rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-navy"
          >
            Professional work. Personal attention.
          </motion.h2>

          <motion.p
            variants={item}
            className="m-0 mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Electrical work should feel clear, considered, and well managed. RAP
            Electric serves residential and commercial customers with a focus on
            careful work practices, thoughtful communication, and quality
            project execution.
          </motion.p>

          {/* Values: ruled, not boxed */}
          <ul className="m-0 mt-10 grid list-none gap-x-10 gap-y-8 p-0 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, copy }) => (
              <motion.li
                key={title}
                variants={item}
                className="border-t border-slate-200 pt-5"
              >
                <h3 className="m-0 flex items-center gap-3 font-heading text-base font-extrabold uppercase leading-tight tracking-wide text-navy sm:text-lg">
                  <Icon
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="shrink-0 text-orange-600"
                  />
                  {title}
                </h3>
                <p className="m-0 mt-2.5 text-sm leading-6 text-slate-600 sm:text-[0.95rem]">
                  {copy}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* Actions */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-7"
          >
            <a
              href="#contact"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white no-underline shadow-[0_18px_40px_-18px_rgba(15,23,42,0.7)] transition-colors duration-300 hover:bg-orange-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              Discuss your project
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-11 items-center justify-center gap-2 self-start text-sm font-bold text-navy no-underline transition-colors duration-300 hover:text-orange-600 sm:self-auto"
            >
              Explore our services
              <ArrowDownRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transition-none"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
