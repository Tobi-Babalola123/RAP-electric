"use client";

import { FormEvent, ReactNode, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";

const PHONE = "903-421-8100";
const PHONE_LINK = "tel:+19034218100";

const EASE = [0.22, 1, 0.36, 1] as const;

// Field styles live here, so the form never depends on global classes.
const FIELD =
  "block w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-slate-400 transition-colors duration-200 hover:border-white/30 focus:border-orange-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500/40 autofill:shadow-[inset_0_0_0_1000px_#1e293b] autofill:[-webkit-text-fill-color:#fff]";

function Field({
  label,
  required = false,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label
      className={`block text-sm font-semibold text-slate-200 ${className}`}
    >
      <span>
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-orange-400">
            *
          </span>
        )}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("ready");
  }

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section relative isolate scroll-mt-24 overflow-hidden border-t border-slate-200 bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_0%_100%,rgba(249,115,22,0.07),transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20"
      >
        {/* Intro and direct contact */}
        <motion.div variants={item}>
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-orange-600" />
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">
              Contact RAP Electric
            </p>
          </div>

          <h2
            id="contact-heading"
            className="m-0 mt-6 text-balance font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.035em] text-navy sm:text-5xl lg:text-6xl"
          >
            Tell us about your project.
          </h2>

          <p className="m-0 mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            For any inquiries, questions or concerns, please call{" "}
            <a
              href={PHONE_LINK}
              className="font-bold text-navy underline decoration-orange-500 underline-offset-4 transition-colors hover:text-orange-600"
            >
              {PHONE}
            </a>{" "}
            or fill out the following form.
          </p>

          <a
            href={PHONE_LINK}
            className="group mt-10 flex items-center gap-5 border-t border-slate-200 pt-8 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-4"
          >
            <span
              aria-hidden="true"
              className="grid size-14 shrink-0 place-items-center rounded-full bg-navy text-orange-400 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white motion-reduce:transition-none"
            >
              <Phone size={22} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Call RAP Electric
              </span>
              <span className="mt-1 block font-heading text-2xl font-extrabold tracking-wide text-navy sm:text-3xl">
                {PHONE}
              </span>
            </span>
          </a>

          <div className="mt-8 border-t border-slate-200 pt-7">
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
              Main Address
            </p>

            <address className="mt-3 not-italic text-base leading-7 text-slate-700">
              <span className="block font-semibold text-navy">PO Box 1417</span>
              <span className="block">Howe, Texas 75459</span>
            </address>

            <div className="mt-6 grid gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="m-0 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:Brent@RapidElectricCo.com"
                  className="mt-2 inline-block break-all text-sm font-semibold text-navy underline decoration-orange-500 underline-offset-4 transition-colors hover:text-orange-600 sm:text-base"
                >
                  Brent@RapidElectricCo.com
                </a>
              </div>

              <div>
                <p className="m-0 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Office
                </p>
                <a
                  href={PHONE_LINK}
                  className="mt-2 inline-block text-base font-bold text-navy transition-colors hover:text-orange-600"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form panel */}
        <motion.div
          variants={item}
          className="relative isolate overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.7)] ring-1 ring-white/10 sm:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_100%_0%,rgba(249,115,22,0.16),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-24 bg-orange-500"
          />

          <div className="border-b border-white/10 pb-6">
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-400">
              Quote request
            </p>
            <h3 className="m-0 mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-white">
              Project details
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <Field label="Full name" required>
              <input
                className={FIELD}
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </Field>

            <Field label="Phone number" required>
              <input
                className={FIELD}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
              />
            </Field>

            <Field label="Email address">
              <input
                className={FIELD}
                name="email"
                type="email"
                autoComplete="email"
              />
            </Field>

            <Field label="Project type" required>
              <span className="relative block">
                <select
                  className={`${FIELD} appearance-none pr-11 invalid:text-slate-400 [&_option]:bg-white [&_option]:text-navy`}
                  name="projectType"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Residential electrical</option>
                  <option>Commercial electrical</option>
                  <option>Installation or upgrade</option>
                  <option>Troubleshooting or repair</option>
                  <option>Other electrical project</option>
                </select>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                />
              </span>
            </Field>

            <Field
              label="Project description"
              required
              className="sm:col-span-2"
            >
              <textarea
                className={`${FIELD} min-h-36 resize-y`}
                name="description"
                placeholder="What would you like RAP Electric to help with?"
                required
              />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-navy shadow-[0_18px_40px_-16px_rgba(249,115,22,0.7)] transition-colors duration-300 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
              >
                Prepare quote request
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </button>

              <p className="m-0 mt-5 text-xs leading-5 text-slate-400">
                This preview form does not transmit data. Submission integration
                can be connected before launch.
              </p>

              {status === "ready" && (
                <div
                  role="status"
                  className="mt-5 rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-sm leading-6 text-white"
                >
                  Your details are complete, but have not been sent. Please call{" "}
                  <a
                    className="font-extrabold text-orange-400 underline underline-offset-2 hover:text-orange-300"
                    href={PHONE_LINK}
                  >
                    {PHONE}
                  </a>{" "}
                  to continue your request.
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
