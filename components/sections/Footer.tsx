"use client";

import { ArrowUp, ArrowUpRight, Phone } from "lucide-react";
import Brand from "../Brand";

const PHONE = "903-421-8100";
const PHONE_LINK = "tel:+19034218100";

const NAV_LINKS = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

const LINK_FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white">
      {/* Orange glow in the lower left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_0%_100%,rgba(249,115,22,0.12),transparent_70%)]"
      />

      {/* Top edge: hairline with a short orange segment */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-white/15"
      />
      <div
        aria-hidden="true"
        className="shell pointer-events-none absolute inset-x-0 top-0"
      >
        <div className="h-[3px] w-24 bg-orange-500" />
      </div>

      <div className="shell grid gap-14 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
        {/* Brand */}
        <div>
          <Brand inverse />
          <p className="m-0 mt-7 max-w-sm text-sm leading-7 text-slate-300">
            Residential and commercial electrical work with a focus on safety,
            workmanship, and clear communication.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-400">
            Navigate
          </h2>
          <nav
            className="mt-6 grid gap-1 text-sm"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`w-fit py-1.5 font-medium text-slate-200 no-underline transition-colors duration-200 hover:text-orange-400 ${LINK_FOCUS}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="m-0 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-400">
            Start a project
          </h2>

          <a
            href={PHONE_LINK}
            className={`group mt-6 inline-flex items-center gap-4 text-white no-underline hover:text-white ${LINK_FOCUS}`}
          >
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 text-orange-400 transition-colors duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-navy motion-reduce:transition-none"
            >
              <Phone size={20} />
            </span>
            <span className="font-heading text-2xl font-extrabold tracking-wide sm:text-3xl">
              {PHONE}
            </span>
          </a>

          <a
            href="#contact"
            className={`group mt-6 flex w-fit items-center gap-2 border-b border-white/25 pb-1 text-sm font-bold text-white no-underline transition-colors duration-200 hover:border-orange-400 hover:text-orange-400 ${LINK_FOCUS}`}
          >
            Request a quote online
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {year} RAP Electric. All rights reserved.</p>
          <p className="m-0">Your hometown electrical contractor.</p>
          <a
            href="#home"
            className={`group inline-flex w-fit items-center gap-2 font-semibold text-slate-200 no-underline transition-colors duration-200 hover:text-orange-400 ${LINK_FOCUS}`}
          >
            Back to top
            <ArrowUp
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
