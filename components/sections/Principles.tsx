"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// The initials spell RAPID. "Informed" and "Dependable" (and their copy) are
// placeholders: replace them with the words you actually use.
const PRINCIPLES = [
  { title: "Ready", copy: "Prepared to understand the work." },
  { title: "Attentive", copy: "Focused on your project details." },
  { title: "Professional", copy: "Clear, respectful project execution." },
  { title: "Informed", copy: "Clear on scope, options, and next steps." },
  { title: "Dependable", copy: "Work you can count on, start to finish." },
];

export default function Principles() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  return (
    <section
      aria-labelledby="principles-heading"
      className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="shell"
      >
        {/* Heading */}
        <div className="max-w-3xl">
          <motion.div variants={item} className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-orange-600" />
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">
              The RAPID approach
            </p>
          </motion.div>

          <motion.h2
            variants={item}
            id="principles-heading"
            className="m-0 mt-6 text-balance font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            Five commitments behind every project.
          </motion.h2>
        </div>

        {/* RAPID set large on one continuous baseline */}
        <ul className="m-0 mt-14 grid list-none p-0 lg:mt-20 lg:grid-cols-5">
          {PRINCIPLES.map(({ title, copy }) => (
            <motion.li
              key={title}
              variants={item}
              className="flex items-center gap-6 border-t border-slate-300 py-6 last:border-b lg:block lg:border-0 lg:py-0"
            >
              <span
                aria-hidden="true"
                className="relative block w-14 shrink-0 font-heading text-6xl font-extrabold leading-none text-navy sm:w-16 lg:w-auto lg:border-b lg:border-slate-300 lg:pb-5 lg:text-[clamp(5rem,9vw,9rem)] lg:leading-[0.85] lg:after:absolute lg:after:-bottom-px lg:after:left-0 lg:after:h-[3px] lg:after:w-10 lg:after:bg-orange-500 lg:after:content-['']"
              >
                {title[0]}
              </span>

              <div className="min-w-0 lg:pr-6 lg:pt-6">
                <h3 className="m-0 text-lg font-bold text-navy">{title}</h3>
                <p className="m-0 mt-1.5 max-w-[16rem] text-sm leading-6 text-slate-600 lg:mt-2">
                  {copy}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
