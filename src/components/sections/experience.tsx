"use client";

import { Reveal, Section, SectionHeading, Tag } from "@/components/ui";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience" muted>
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Internships across network engineering, plus the businesses I've built and marketed along the way."
      />

      <div className="relative mt-12 pl-10 sm:pl-14">
        {/* Timeline rail */}
        <div
          aria-hidden
          className="absolute left-[15px] top-2 bottom-2 w-px bg-navy-200 sm:left-[23px] dark:bg-slate-700"
        />

        <div className="space-y-10">
          {experience.map((role, index) => {
            const Icon = role.icon;
            return (
              <Reveal key={`${role.company}-${role.role}`} delay={index * 0.08}>
                <div className="relative">
                  {/* Node */}
                  <span className="absolute -left-10 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-600 shadow-card sm:-left-14 dark:border-slate-700 dark:bg-[#1e293b] dark:text-slate-300">
                    <Icon className="h-4 w-4" />
                  </span>

                  <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card dark:border-slate-700/70 dark:bg-[#1e293b]">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold text-navy-800 dark:text-slate-100">
                        {role.role}
                        <span className="text-navy-400 dark:text-slate-500">
                          {" "}
                          —{" "}
                        </span>
                        <span className="font-medium text-navy-500 dark:text-slate-300">
                          {role.company}
                        </span>
                      </h3>
                      <span className="text-sm font-medium text-[#56637a] dark:text-slate-400">
                        {role.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-relaxed text-[#56637a] dark:text-slate-400"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-300 dark:bg-slate-600"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {role.technologies ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {role.technologies.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
