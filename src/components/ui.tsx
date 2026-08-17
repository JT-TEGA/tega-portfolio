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
  divider = true,
  decor,
  className = "",
}: {
  id: string;
  children: ReactNode;
  muted?: boolean;
  /** Thin rule along the top edge, separating this section from the previous. */
  divider?: boolean;
  /** Background line-art, rendered outside the container and behind the copy. */
  decor?: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 md:py-32 ${
        decor ? "relative overflow-hidden" : ""
      } ${divider ? "border-t border-gray-100 dark:border-gray-800" : ""} ${
        muted ? "bg-navy-50 dark:bg-[#131c2e]" : ""
      } ${className}`}
    >
      {decor}
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
      <p className="font-mono text-sm tracking-wider text-gray-400 dark:text-gray-500">
        <span aria-hidden>... </span>/{eyebrow}
        <span aria-hidden> ...</span>
      </p>
      <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-navy-800 md:text-5xl dark:text-slate-100">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
