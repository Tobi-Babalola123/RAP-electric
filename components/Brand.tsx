"use client";

import { Zap } from "lucide-react";

type BrandProps = {
  inverse?: boolean;
};

export default function Brand({ inverse = false }: BrandProps) {
  return (
    <div className="group inline-flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-orange-500 text-white shadow-[3px_3px_0_var(--color-orange)] transition-transform duration-200 group-hover:-translate-y-0.5 sm:size-10 sm:rounded-md sm:shadow-[4px_4px_0_var(--color-orange)]">
        <Zap
          aria-hidden="true"
          size={21}
          fill="currentColor"
          strokeWidth={2.8}
          className="sm:size-[22px]"
        />
      </span>

      <span className="min-w-0 leading-none">
        <span
          className={`block font-display text-[1.4rem] font-extrabold uppercase tracking-[0.055em] transition-colors sm:text-[1.65rem] ${
            inverse ? "text-amber-500" : "text-ink"
          }`}
        >
          RAP
        </span>

        <span
          className={`mt-0.5 block text-[0.54rem] font-extrabold uppercase tracking-[0.3em] sm:text-[0.58rem] sm:tracking-[0.34em] ${
            inverse ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Electric
        </span>
      </span>
    </div>
  );
}
