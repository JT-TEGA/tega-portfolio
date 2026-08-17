"use client";

import { CircleDecor } from "@/components/decor";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { skillCategories } from "@/data/site";

/**
 * Widths and vertical offsets per card, in source order, so the mosaic reads as
 * deliberately staggered rather than as a uniform grid. Spans sum to 12 per
 * visual row: 7+5, 4+3+5, 7+5.
 */
const cardLayout = [
  "md:col-span-7",
  "md:col-span-5 md:mt-10",
  "md:col-span-4",
  "md:col-span-3 md:mt-8",
  "md:col-span-5 md:mt-3",
  "md:col-span-7",
  "md:col-span-5 md:mt-8",
];

export function Skills() {
  return (
    <Section
      id="skills"
      muted
      decor={
        <CircleDecor className="-bottom-56 -left-40 h-[400px] w-[400px] sm:h-[520px] sm:w-[520px]" />
      }
    >
      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        description="The languages, frameworks, and tools I reach for across the stack — plus the network and infrastructure side I picked up on the job."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:items-start">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.title}
            delay={index * 0.06}
            className={cardLayout[index] ?? "md:col-span-6"}
          >
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
              <p className="text-sm font-bold tracking-tight text-navy-800 dark:text-slate-100">
                {category.title}
              </p>
              <p className="mt-3 font-mono text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {category.skills.join(" / ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
