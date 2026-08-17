"use client";

import { GraduationCap } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { education } from "@/data/site";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Education" />

      <Reveal className="mt-12 block">
        <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <GraduationCap
              className="mt-0.5 h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
              strokeWidth={1.5}
              aria-hidden
            />

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-bold tracking-tight text-navy-800 dark:text-slate-100">
                  {education.school}
                </h3>
                <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
                  {education.year}
                </span>
              </div>

              <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                {education.degree}
              </p>

              <p className="mt-6 font-mono text-xs tracking-wider text-gray-400 dark:text-gray-500">
                Relevant Coursework
              </p>
              <p className="mt-2 font-mono text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {education.coursework.join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
