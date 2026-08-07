"use client";

import { Reveal, Section, SectionHeading } from "@/components/ui";
import { aboutParagraphs, profile } from "@/data/site";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="mt-12 grid items-start gap-10 md:grid-cols-[13rem_1fr] md:gap-14">
        <Reveal className="flex justify-center md:justify-start">
          {/* Placeholder for a real photo — swap for next/image later. */}
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-navy-800 text-4xl font-semibold tracking-wide text-white shadow-card dark:bg-slate-700">
            {profile.initials}
          </div>
        </Reveal>

        <div className="space-y-5">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <p className="text-base leading-relaxed text-[#56637a] sm:text-lg dark:text-slate-400">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
