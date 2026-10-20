"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Brand from "@/components/Brand";

const PHONE = "903-421-8100";
const PHONE_LINK = "tel:+19034218100";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-white/10 bg-ink/85 py-3 backdrop-blur-lg"
      }`}
    >
      <div className="shell">
        <div className="flex min-h-12 items-center justify-between gap-3 sm:gap-5 lg:min-h-[60px]">
          {/* Brand */}
          <a
            href="#home"
            aria-label="RAP Electric home"
            onClick={() => setOpen(false)}
            className="relative z-10 flex min-w-0 shrink-0 items-center"
          >
            <Brand inverse={!scrolled} />
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-5 xl:gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`group relative whitespace-nowrap py-2 text-[13px] font-bold transition-colors duration-200 xl:text-sm ${
                  scrolled
                    ? "text-slate-700 hover:text-amber-600"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100 ${
                    scrolled ? "bg-amber-500" : "bg-amber-400"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-5">
            <a
              href={PHONE_LINK}
              className={`group flex items-center gap-2 whitespace-nowrap text-sm font-extrabold transition-colors ${
                scrolled
                  ? "text-slate-800 hover:text-amber-600"
                  : "text-white hover:text-amber-300"
              }`}
            >
              <span
                className={`grid size-9 place-items-center rounded-full transition-colors ${
                  scrolled
                    ? "bg-slate-100 group-hover:bg-amber-50"
                    : "bg-white/10 group-hover:bg-white/20"
                }`}
              >
                <Phone size={16} aria-hidden="true" />
              </span>
              <span>{PHONE}</span>
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-500 px-3 py-2.5 mr-3 text-sm font-extrabold text-slate-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 xl:px-4"
            >
              Request a Quote
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile and tablet actions */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={PHONE_LINK}
              aria-label={`Call RAP Electric at ${PHONE}`}
              className={`grid size-10 place-items-center rounded-xl border transition-colors sm:size-11 ${
                scrolled
                  ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              <Phone size={18} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              className={`relative z-[60] grid size-10 place-items-center rounded-xl border transition-all duration-200 sm:size-11 ${
                open
                  ? "border-slate-200 bg-slate-100 text-slate-900"
                  : scrolled
                    ? "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                    : "border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center"
                >
                  {open ? (
                    <X size={21} aria-hidden="true" />
                  ) : (
                    <Menu size={21} aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-0 z-40 bg-slate-950/55 backdrop-blur-[3px] lg:hidden"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-slate-100 bg-white shadow-2xl lg:hidden"
            >
              <div className="mx-auto w-full max-w-xl px-5 py-6 sm:px-7 sm:py-8">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    Navigation
                  </p>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700">
                    RAP ELECTRIC
                  </span>
                </div>

                <nav className="flex flex-col" aria-label="Mobile navigation">
                  {links.map(([label, href], index) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="group flex min-h-[58px] items-center justify-between border-b border-slate-100 py-3 transition-colors hover:text-amber-600 sm:min-h-[64px]"
                    >
                      <span className="font-display text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-amber-600 sm:text-2xl">
                        {label}
                      </span>
                      <span className="flex size-8 items-center justify-center rounded-full bg-slate-50 text-xs font-bold text-slate-400 transition-colors group-hover:bg-amber-50 group-hover:text-amber-700">
                        0{index + 1}
                      </span>
                    </a>
                  ))}
                </nav>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-extrabold text-slate-950 transition-colors hover:bg-amber-400"
                >
                  Request a Quote
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>

                <a
                  href={PHONE_LINK}
                  className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  <Phone size={17} aria-hidden="true" />
                  {PHONE}
                </a>

                <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">
                  Electrical solutions you can count on.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
