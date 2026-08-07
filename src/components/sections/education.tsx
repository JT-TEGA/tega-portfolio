"use client";

import { GraduationCap } from "lucide-react";
import { Card, Reveal, Section, SectionHeading, Tag } from "@/components/ui";
import { education } from "@/data/site";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Education" />

      <Reveal className="mt-12 block">
        <Card hover={false}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600 dark:bg-slate-800 dark:text-slate-300">
              <GraduationCap className="h-6 w-6" />
            </span>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-navy-800 dark:text-slate-100">
                  {education.school}
                </h3>
                <span className="text-sm font-medium text-[#56637a] dark:text-slate-400">
                  {education.year}
                </span>
              </div>

              <p className="mt-1 text-base text-navy-500 dark:text-slate-300">
                {education.degree}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-navy-400 dark:text-slate-500">
                Relevant Coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <Tag key={course}>{course}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
