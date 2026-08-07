"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1100px] px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  muted = false,
  className = "",
}: {
  id: string;
  children: ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        muted ? "bg-navy-50 dark:bg-[#131c2e]" : ""
      } ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Subtle fade + slide-up as the element scrolls into view. */
export function Reveal({
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 dark:text-slate-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl dark:text-slate-100">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-[#56637a] dark:text-slate-400 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
      <div
        className={`mt-6 h-px w-16 bg-navy-200 dark:bg-slate-700 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-shadow duration-300 dark:border-slate-700/70 dark:bg-[#1e293b] ${
        hover ? "hover:shadow-card-hover" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
