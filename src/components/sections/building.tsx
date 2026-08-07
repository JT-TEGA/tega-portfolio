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
            <div className="flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card dark:border-slate-700/70 dark:bg-[#1e293b]">
              <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="text-sm leading-relaxed text-[#56637a] dark:text-slate-400">
                {item}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
