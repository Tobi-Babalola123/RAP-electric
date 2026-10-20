"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES = [
  { title: "Ready", copy: "Prepared to understand the work." },
  { title: "Attentive", copy: "Focused on your project details." },
  { title: "Professional", copy: "Clear, respectful project execution." },
];

export default function Principles() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  return (
    <section
      aria-labelledby="principles-heading"
      className="relative isolate overflow-hidden border-y border-slate-200 bg-white py-16 sm:py-24"
    >
      {/* Soft warm wash behind the letters */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_70%_at_95%_100%,rgba(249,115,22,0.07),transparent_70%),linear-gradient(180deg,#ffffff,#f8fafc)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16"
      >
        <div>
          <motion.div variants={item} className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-orange-600" />
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">
              The RAP approach
            </p>
          </motion.div>

          <motion.h2
            variants={item}
            id="principles-heading"
            className="m-0 mt-6 text-balance font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-navy sm:text-5xl"
          >
            Ready. Attentive. Professional.
          </motion.h2>
        </div>

        {/* The three words spell the acronym, so the initials carry the design */}
        <ul className="m-0 grid list-none gap-10 p-0 sm:grid-cols-3 sm:gap-0">
          {PRINCIPLES.map(({ title, copy }) => (
            <motion.li
              key={title}
              variants={item}
              className="sm:border-l sm:border-slate-200 sm:pl-7 sm:first:border-l-0 sm:first:pl-0"
            >
              <span
                aria-hidden="true"
                className="block font-heading text-7xl font-extrabold leading-none text-orange-600 sm:text-8xl"
              >
                {title[0]}
              </span>
              <h3 className="m-0 mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="m-0 mt-2 max-w-[16rem] text-sm leading-6 text-slate-600">
                {copy}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
