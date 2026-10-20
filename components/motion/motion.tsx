"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export { motion, useInView };

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionPill({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-4xl leading-[1.1] md:text-5xl ${
        light ? "text-white" : "text-primary"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function GoldRule({ center = false }: { center?: boolean }) {
  return (
    <div
      className={`mt-5 mb-7 h-px w-12 bg-accent ${center ? "mx-auto" : ""}`}
    />
  );
}

export function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true });

  useEffect(() => {
    if (!inView) return;

    let raf: number;
    const start = performance.now();
    const duration = 2200;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={spanRef}>
      {count}
      {suffix}
    </span>
  );
}
