"use client";

import { Fragment, type ReactNode } from "react";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { aboutParagraphs, profile } from "@/data/site";

/** Phrases lifted out of the bio for inline emphasis. Wording is untouched —
 *  these only control which runs of the existing text get weighted up. */
const emphasis = [
  "Pan-Atlantic University",
  "Cyberspace Limited",
  "MTN Nigeria",
  "Retro Locker",
  "fullstack development",
  "AI automation",
];

const emphasisPattern = new RegExp(
  `(${emphasis.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

function withEmphasis(text: string): ReactNode[] {
  return text.split(emphasisPattern).map((part, index) =>
    emphasis.includes(part) ? (
      <strong
        key={index}
        className="font-semibold text-navy dark:text-white"
      >
        {part}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="mt-12 grid items-start gap-10 md:grid-cols-[13rem_1fr] md:gap-14">
        <Reveal className="flex justify-center md:justify-start">
          {/* Placeholder for a real photo — swap for next/image later. */}
          <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-gray-200 font-mono text-3xl tracking-widest text-navy-800 dark:border-gray-700 dark:text-slate-100">
            {profile.initials}
          </div>
        </Reveal>

        <div className="space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400">
                {withEmphasis(paragraph)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
