"use client";

import { Building2, Home, MessageSquareText, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: Home,
    title: "Residential",
    copy: "Reliable solutions for your home",
  },
  {
    icon: Building2,
    title: "Commercial",
    copy: "Professional electrical services",
  },
  {
    icon: ShieldCheck,
    title: "Safety Focused",
    copy: "Careful work at every step",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    copy: "Straightforward from start to finish",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our service principles"
      className="relative border-b border-slate-200/80 bg-white"
    >
      <div className="shell">
        <div className="grid grid-cols-1 divide-y divide-slate-200/80 sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, copy }, index) => (
            <div
              key={title}
              className={[
                "group relative flex min-w-0 items-center gap-4 px-1 py-5",
                "transition-colors duration-300 sm:px-5 sm:py-6 lg:py-7",
                index % 2 === 1 ? "sm:border-l sm:border-slate-200/80" : "",
                index >= 2
                  ? "sm:border-t sm:border-slate-200/80 xl:border-t-0"
                  : "",
                index > 0 ? "xl:border-l xl:border-slate-200/80" : "",
                index === 2 ? "xl:border-l" : "",
              ].join(" ")}
            >
              {/* Icon */}
              <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-orange-500/15 bg-orange-50 text-orange-600 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_6px_18px_rgba(249,115,22,0.18)]">
                <Icon
                  size={21}
                  strokeWidth={1.9}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </span>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-display text-base font-extrabold uppercase leading-tight tracking-wide text-ink sm:text-[15px] lg:text-base">
                  {title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-[11px] lg:text-xs">
                  {copy}
                </p>
              </div>

              {/* Subtle accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full sm:hidden xl:block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
