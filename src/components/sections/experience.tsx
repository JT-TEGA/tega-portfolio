"use client";

import { Fragment } from "react";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience" muted>
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Internships across network engineering, plus the businesses I've built and marketed along the way."
      />

      <div className="mt-12 border-t border-gray-100 dark:border-gray-800">
        {experience.map((role, index) => (
          <Reveal key={`${role.company}-${role.role}`} delay={index * 0.08}>
            {/* Transparent left edge is always reserved so the hover
                highlight doesn't nudge the row sideways. */}
            <div className="grid gap-x-8 gap-y-2 border-b border-l-2 border-gray-100 border-l-transparent py-6 pl-4 transition-colors hover:border-l-navy md:grid-cols-[7rem_13rem_1fr] dark:border-gray-800 dark:border-l-transparent dark:hover:border-l-sky-500">
              <p className="font-mono text-sm text-gray-400 dark:text-gray-500">
                {role.period}
              </p>

              <p className="font-medium text-navy-800 dark:text-slate-100">
                {role.company}
              </p>

              <div>
                <p className="text-sm text-navy-800 dark:text-slate-200">
                  <span className="font-medium">{role.role}</span>
                  {role.technologies?.map((tech) => (
                    <Fragment key={tech}>
                      <span
                        aria-hidden
                        className="text-gray-300 dark:text-gray-600"
                      >
                        {" | "}
                      </span>
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                        {tech}
                      </span>
                    </Fragment>
                  ))}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                    >
                      <span
                        aria-hidden
                        className="font-mono text-gray-300 dark:text-gray-600"
                      >
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
