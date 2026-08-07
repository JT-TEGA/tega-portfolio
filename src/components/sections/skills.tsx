"use client";

import { Card, Reveal, Section, SectionHeading, Tag } from "@/components/ui";
import { skillCategories } from "@/data/site";

export function Skills() {
  return (
    <Section id="skills" muted>
      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        description="The languages, frameworks, and tools I reach for across the stack — plus the network and infrastructure side I picked up on the job."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={index * 0.06}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-600 dark:bg-slate-800 dark:text-slate-300">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="text-base font-semibold text-navy-800 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
