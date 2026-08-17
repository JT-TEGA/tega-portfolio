"use client";

import { Reveal, Section, SectionHeading } from "@/components/ui";
import { buildingNow } from "@/data/site";

export function Building() {
  return (
    <Section id="building" muted>
      <SectionHeading
        eyebrow="Right Now"
        title="What I'm Building Now"
        description="The things currently taking up my evenings and weekends."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {buildingNow.map((item, index) => (
          <Reveal key={item} delay={index * 0.07}>
            <div className="flex h-full items-start gap-4 rounded-xl border border-gray-200 p-5 dark:border-gray-700">
              <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
