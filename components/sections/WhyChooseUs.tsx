"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    icon: ShieldCheck,
    title: "Safety-conscious",
    copy: "A careful approach keeps safety, your space, and the people around the work in focus.",
  },
  {
    icon: BadgeCheck,
    title: "Professional execution",
    copy: "From planning through completion, we pay attention to the details that matter.",
  },
  {
    icon: MessageSquareText,
    title: "Clear communication",
    copy: "Know what to expect, what comes next, and what your project needs.",
  },
  {
    icon: Sparkles,
    title: "Quality-minded",
    copy: "Every project deserves a considered solution—not a one-size-fits-all approach.",
  },
];

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="why-rap"
      aria-labelledby="why-rap-heading"
      className="section relative isolate overflow-hidden bg-navy text-white"
    >
      {/* Orange glow from the top-right corner */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_100%_0%,rgba(249,115,22,0.18),transparent_70%)]"
      />

      {/* Blueprint grid, faded away from the content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_100%_0%,black,transparent_65%)]"
      />

      {/* Hairline top edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
      >
        {/* Heading column */}
        <div>
          <motion.div variants={item} className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-orange-500" />
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-400">
              Why RAPID Electric
            </p>
          </motion.div>

          <motion.h2
            variants={item}
            id="why-rap-heading"
            className="m-0 mt-6 text-balance break-words font-heading text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.035em] text-white"
          >
            The right approach makes a difference.
          </motion.h2>

          <motion.p
            variants={item}
            className="m-0 mt-6 max-w-md text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
          >
            Electrical projects call for more than technical know-how. They call
            for care, communication, and a commitment to doing the work well.
          </motion.p>
        </div>

        {/* Benefits: ruled columns instead of boxed cards */}
        <ul className="m-0 grid list-none gap-x-12 gap-y-12 p-0 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, copy }) => (
            <motion.li
              key={title}
              variants={item}
              className="relative border-t border-white/15 pt-8 before:absolute before:left-0 before:top-[-1px] before:h-px before:w-10 before:bg-orange-500 before:content-['']"
            >
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-orange-400"
              >
                <Icon size={22} strokeWidth={1.6} />
              </span>

              <h3 className="m-0 mt-6 font-heading text-lg font-extrabold uppercase leading-snug tracking-wide text-white sm:text-xl">
                {title}
              </h3>

              <p className="m-0 mt-3 max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
                {copy}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
