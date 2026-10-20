"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MoveUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85",
    alt: "Electrical installation and equipment in a work environment",
    title: "Control Systems",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=85",
    alt: "Electrician carrying out electrical work",
    title: "Testing & Diagnostics",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85",
    alt: "Electrical components and installation details",
    title: "Electrical Installations",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    alt: "Close-up of electronic components and circuit details",
    title: "Panel Upgrades",
    className: "md:col-span-2",
  },
];

export default function Projects() {
  const reduce = useReducedMotion();

  // One orchestrated reveal: intro first, then the tiles follow in sequence.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section relative isolate overflow-hidden border-t border-slate-200 bg-slate-50"
    >
      {/* Warm wash in the corner opposite the CTA */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_0%,rgba(249,115,22,0.07),transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="shell"
      >
        {/* Intro */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <motion.div variants={item} className="min-w-0 max-w-3xl flex-1">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-orange-600" />
              <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">
                Capabilities in focus
              </p>
            </div>

            <h2
              id="projects-heading"
              className="m-0 mt-6 text-balance break-words font-heading text-[clamp(2.35rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-navy"
            >
              Electrical work. Thought through.
            </h2>

            <p className="m-0 mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From electrical installations to system upgrades, explore the
              types of work RAP Electric can help you plan and discuss.
            </p>
          </motion.div>

          <motion.div variants={item} className="shrink-0">
            <a
              href="#contact"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white no-underline shadow-[0_18px_40px_-18px_rgba(15,23,42,0.7)] transition-colors duration-300 hover:bg-orange-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 sm:w-auto"
            >
              Discuss your project
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </a>
          </motion.div>
        </div>

        {/* Image mosaic */}
        <ul className="m-0 mt-12 grid list-none auto-rows-[16rem] grid-cols-1 gap-4 p-0 sm:auto-rows-[20rem] sm:grid-cols-2 md:mt-16 md:auto-rows-[23rem] md:grid-cols-3 md:gap-5">
          {projectImages.map((project) => (
            <motion.li
              key={project.title}
              variants={item}
              className={`min-w-0 ${project.className}`}
            >
              <figure className="group relative isolate m-0 h-full overflow-hidden rounded-2xl bg-navy shadow-[0_24px_50px_-30px_rgba(15,23,42,0.6)] sm:rounded-3xl">
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />

                {/* Navy-tinted contrast overlay keeps the set cohesive */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/20 to-navy/5"
                />

                {/* Hairline inner frame */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15"
                />

                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
                  <div className="min-w-0">
                    <span
                      aria-hidden="true"
                      className="mb-4 block h-px w-10 bg-orange-500 transition-all duration-500 group-hover:w-16 motion-reduce:transition-none"
                    />
                    <h3 className="m-0 font-heading text-xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-2xl">
                      {/* Stretched link makes the whole tile a real target */}
                      <a
                        href="#contact"
                        aria-label={`Discuss ${project.title}`}
                        className="text-white no-underline after:absolute after:inset-0 after:content-[''] hover:text-white focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-orange-500"
                      >
                        {project.title}
                      </a>
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 motion-reduce:transition-none"
                  >
                    <MoveUpRight size={18} />
                  </span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>

        {/* Image disclaimer */}
        <motion.p
          variants={item}
          className="m-0 mt-8 max-w-2xl border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500"
        >
          Images are illustrative and represent types of electrical work, not
          verified completed projects by RAP Electric.
        </motion.p>
      </motion.div>
    </section>
  );
}
