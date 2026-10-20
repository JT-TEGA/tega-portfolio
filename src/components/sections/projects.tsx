"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ImageOff, Lock, Star, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GitHubIcon } from "@/components/brand-icons";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { featuredProject, projects, type Project } from "@/data/site";

const cardClass =
  "flex h-full flex-col rounded-xl border border-gray-200 p-6 transition-colors hover:border-navy dark:border-gray-700 dark:hover:border-sky-500";

function ProjectLink({ project }: { project: Project }) {
  // Empty href = repo link not added yet; render nothing rather than a fallback.
  if (typeof project.href !== "string" || project.href.trim() === "") {
    return null;
  }
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

function CaseStudyBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-gray-300 px-3 py-1.5 font-mono text-xs tracking-wider text-gray-500 dark:border-gray-600 dark:text-gray-400">
      <Lock className="h-3 w-3" aria-hidden />
      Source private — client project
    </span>
  );
}

/** Screenshot that degrades to a placeholder if the file is missing. */
function CaseStudyImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      {failed ? (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-400 dark:text-gray-500">
          <ImageOff className="h-6 w-6" strokeWidth={1.5} aria-hidden />
          <span className="font-mono text-xs">Screenshot coming soon</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function CaseStudyModal({
  project,
  open,
  onClose,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `case-study-${project.title.replace(/\W+/g, "-").toLowerCase()}`;

  // The native dialog handles Escape, focus trapping and focus restore.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      // Clicks on the dialog element itself land on the backdrop area.
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-xl border border-gray-200 bg-white p-0 text-left backdrop:bg-navy-900/60 backdrop:backdrop-blur-sm dark:border-gray-700 dark:bg-dark-card"
    >
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <CaseStudyBadge />
              <h3
                id={titleId}
                className="mt-4 text-2xl font-bold tracking-tight text-navy-800 dark:text-white"
              >
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white dark:focus-visible:outline-sky-500"
            >
              <X className="h-5 w-5" aria-hidden />
              <span className="sr-only">Close</span>
            </button>
          </div>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {project.media?.length ? (
            <div className="mt-6 space-y-4">
              {project.media.map((src, index) => (
                <CaseStudyImage
                  key={src}
                  src={src}
                  alt={`${project.title} — screenshot ${index + 1}`}
                />
              ))}
            </div>
          ) : null}

          {project.tech ? <TechLine tech={project.tech} /> : null}
        </motion.div>
      ) : null}
    </dialog>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <article
      className={`${cardClass} ${
        project.caseStudy
          ? "relative cursor-pointer has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-navy dark:has-[button:focus-visible]:ring-sky-500"
          : ""
      }`}
    >
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
          {project.caseStudy ? (
            // Stretched over the whole card so any click opens the case study.
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-haspopup="dialog"
              className="text-left after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none"
            >
              {project.title}
            </button>
          ) : (
            project.title
          )}
        </h3>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      {project.caseStudy ? (
        <div className="mt-5">
          <CaseStudyBadge />
        </div>
      ) : project.href ? (
        <div className="mt-5">
          <ProjectLink project={project} />
        </div>
      ) : null}

      {project.tech ? <TechLine tech={project.tech} /> : null}

      {project.caseStudy ? (
        <CaseStudyModal
          project={project}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
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
