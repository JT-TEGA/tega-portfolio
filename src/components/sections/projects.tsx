"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { Reveal, Section, SectionHeading, Tag } from "@/components/ui";
import { featuredProject, projects, type Project } from "@/data/site";

/** Placeholder for a screenshot the user will drop in later. */
function ProjectThumb({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const Icon = project.icon;
  const business = project.kind === "business";
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed ${
        business
          ? "border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300"
          : "border-navy-200 bg-navy-50 text-navy-400 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-400"
      } ${className}`}
      aria-hidden
    >
      <Icon className="h-10 w-10" strokeWidth={1.5} />
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  if (!project.href) return null;
  const isGithub = project.linkLabel === "GitHub";
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {isGithub ? (
        <GithubIcon className="h-4 w-4" />
      ) : (
        <ArrowUpRight className="h-4 w-4" />
      )}
      {project.linkLabel}
      <span className="sr-only"> — {project.title}</span>
    </a>
  );
}

function FeaturedCard() {
  const project = featuredProject;
  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover dark:border-slate-700/70 dark:bg-[#1e293b]"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <ProjectThumb project={project} className="min-h-52 lg:min-h-full" />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-800 px-3 py-1 text-xs font-semibold text-white dark:bg-slate-100 dark:text-navy-800">
                <Star className="h-3 w-3 fill-current" />
                Featured Project
              </span>
              {project.status ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {project.status}
                </span>
              ) : null}
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl dark:text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-[#56637a] dark:text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech?.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="mt-7">
              <ProjectLink project={project} />
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function CodeProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover dark:border-slate-700/70 dark:bg-[#1e293b]"
    >
      <ProjectThumb project={project} className="h-36" />

      <h3 className="mt-5 text-lg font-semibold text-navy-800 dark:text-slate-100">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#56637a] dark:text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech?.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-6">
        <ProjectLink project={project} />
      </div>
    </motion.article>
  );
}

/** Non-code work gets its own amber treatment so it reads differently. */
function BusinessProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover dark:border-amber-500/30 dark:from-amber-500/10 dark:to-[#1e293b]"
    >
      <ProjectThumb project={project} className="h-36" />

      <span className="mt-5 inline-flex w-fit items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
        {project.badge}
      </span>

      <h3 className="mt-3 text-lg font-semibold text-navy-800 dark:text-slate-100">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#56637a] dark:text-slate-400">
        {project.description}
      </p>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        description="A mix of shipped client work, full-stack university projects, and the business side of things."
      />

      <div className="mt-12 space-y-6">
        <FeaturedCard />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className="h-full">
              {project.kind === "business" ? (
                <BusinessProjectCard project={project} />
              ) : (
                <CodeProjectCard project={project} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
