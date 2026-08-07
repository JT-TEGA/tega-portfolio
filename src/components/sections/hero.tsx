"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Container } from "@/components/ui";
import { profile } from "@/data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Soft background wash — kept very subtle behind the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-navy-50 to-transparent dark:from-[#16203a] dark:to-transparent"
      />

      <Container>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 dark:text-slate-400"
          >
            Lagos, Nigeria
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-navy-800 sm:text-6xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-lg font-medium text-navy-500 sm:text-xl dark:text-slate-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#56637a] sm:text-lg dark:text-slate-400"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href={profile.cv}
              download="Oghenetega-Ukpe-CV.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-navy-700 dark:bg-slate-100 dark:text-navy-800 dark:hover:bg-white"
            >
              <Download className="h-4 w-4" />
              Download CV
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-navy-600 transition-colors hover:bg-navy-50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-600 shadow-card transition-colors hover:border-navy-200 hover:text-navy-800 dark:border-slate-700 dark:bg-[#1e293b] dark:text-slate-300 dark:hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
