"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { GitHubIcon } from "@/components/brand-icons";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { featuredProject, projects, type Project } from "@/data/site";

const cardClass =
  "flex h-full flex-col rounded-xl border border-gray-200 p-6 transition-colors hover:border-navy dark:border-gray-700 dark:hover:border-sky-500";

function ProjectLink({ project }: { project: Project }) {
  if (!project.href) return null;
  const isGithub = project.linkLabel === "GitHub";
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-slate-100 dark:hover:bg-gray-800"
    >
      {isGithub ? <GitHubIcon className="h-4 w-4" /> : null}
      {project.linkLabel}
      <span className="sr-only"> — {project.title}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

/** Slash-separated stack line that closes out each card. */
function TechLine({ tech }: { tech: string[] }) {
  return (
    <p className="mt-6 border-t border-gray-100 pt-4 font-mono text-xs leading-relaxed text-gray-500 dark:border-gray-800 dark:text-gray-500">
      {tech.join(" / ")}
    </p>
  );
}

function FeaturedCard() {
  const project = featuredProject;
  const Icon = project.icon;
  return (
    <Reveal>
      <article className={`${cardClass} sm:p-8`}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-navy-800 dark:text-slate-100">
            <Star className="h-3 w-3 fill-current" />
            Featured Project
          </span>
          {project.status ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-gray-500 dark:text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-start gap-3">
          <Icon
            className="mt-1 h-6 w-6 shrink-0 text-gray-400 dark:text-gray-500"
            strokeWidth={1.5}
            aria-hidden
          />
          <h3 className="text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl dark:text-white">
            {project.title}
          </h3>
        </div>

        <p className="mt-4 max-w-3xl flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mt-6">
          <ProjectLink project={project} />
        </div>

        {project.tech ? <TechLine tech={project.tech} /> : null}
      </article>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <article className={cardClass}>
      {project.badge ? (
        <p className="mb-4 font-mono text-xs tracking-wider text-gray-400 dark:text-gray-500">
          {project.badge}
        </p>
      ) : null}

      <div className="flex items-start gap-3">
        <Icon
          className="mt-0.5 h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
          strokeWidth={1.5}
          aria-hidden
        />
        <h3 className="text-lg font-bold tracking-tight text-navy-800 dark:text-slate-100">
          {project.title}
        </h3>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      {project.href ? (
        <div className="mt-5">
          <ProjectLink project={project} />
        </div>
      ) : null}

      {project.tech ? <TechLine tech={project.tech} /> : null}
    </article>
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

      <div className="mt-12 space-y-5">
        <FeaturedCard />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
