"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2, Home, Lightbulb, Wrench } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    copy: "Practical electrical solutions for your home, tailored to your needs and completed with care.",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    copy: "Dependable electrical services for commercial properties, installations, and business environments.",
  },
  {
    icon: Lightbulb,
    title: "Installations & Upgrades",
    copy: "Professional installations and electrical improvements with attention to detail and long-term reliability.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting & Repairs",
    copy: "A methodical approach to electrical issues, helping identify the problem and determine the right next step.",
  },
];

export default function Services() {
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
      id="services"
      aria-labelledby="services-heading"
      className="section relative isolate scroll-mt-24 overflow-hidden border-t border-slate-200 bg-slate-50"
    >
      {/* Warm wash in the top-right corner */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_100%_0%,rgba(249,115,22,0.07),transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="shell"
      >
        {/* Intro */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <motion.div variants={item} className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-orange-600" />
              <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">
                What we do
              </p>
            </div>

            <h2
              id="services-heading"
              className="m-0 mt-6 text-balance break-words font-heading text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.035em] text-navy"
            >
              Electrical service without the guesswork.
            </h2>
          </motion.div>

          <motion.p
            variants={item}
            className="m-0 max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mb-1"
          >
            From home electrical work to commercial projects, RAPID Electric
            brings a professional, detail-minded approach to every job.
          </motion.p>
        </div>

        {/* Service rows */}
        <ul className="m-0 mt-12 list-none divide-y divide-slate-200 border-y border-slate-200 p-0 md:mt-16">
          {services.map(({ icon: Icon, title, copy }) => (
            <motion.li
              key={title}
              variants={item}
              className="group relative grid gap-4 px-4 py-8 transition-colors duration-300 hover:bg-white sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_auto] lg:items-center lg:gap-12 lg:py-10"
            >
              {/* Title block */}
              <div className="flex items-center justify-between gap-5 lg:justify-start">
                <div className="flex min-w-0 items-center gap-5">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-orange-600"
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </span>

                  <h3 className="m-0 font-heading text-xl font-extrabold uppercase leading-tight tracking-wide text-navy sm:text-2xl">
                    {/* Stretched link makes the whole row a real target */}
                    <a
                      href="#contact"
                      className="text-navy no-underline after:absolute after:inset-0 after:content-[''] hover:text-navy focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-orange-600"
                    >
                      {title}
                      <span className="sr-only">: discuss your project</span>
                    </a>
                  </h3>
                </div>

                {/* Arrow, mobile position */}
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-slate-300 text-navy transition-colors duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white motion-reduce:transition-none lg:hidden"
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <p className="m-0 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                {copy}
              </p>

              {/* Arrow, desktop position */}
              <span
                aria-hidden="true"
                className="hidden size-12 place-items-center rounded-full border border-slate-300 text-navy transition-colors duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white motion-reduce:transition-none lg:grid"
              >
                <ArrowUpRight size={20} />
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
