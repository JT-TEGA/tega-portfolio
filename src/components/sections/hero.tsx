"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { CircleDecor } from "@/components/decor";
import { Typewriter, useTypewriter } from "@/components/typewriter";
import { Container } from "@/components/ui";
import { profile } from "@/data/site";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

/** Same words as the tagline — the lead role gets the display line, the rest
 *  sits under it as mono metadata. */
const [leadRole, ...otherRoles] = profile.tagline
  .split("|")
  .map((part) => part.trim());
const monoLine = otherRoles.join(" / ");

const NAME_SPEED = 80;
const ROLE_SPEED = 45;

/** Ordered so a phase can be compared with `>=` — anything already stepped
 *  past stays rendered. */
const PHASES = [
  "idle",
  "eyebrow",
  "name",
  "lead",
  "mono",
  "actions",
  "socials",
  "done",
] as const;

type Phase = (typeof PHASES)[number];

const fadeUp = (shown: boolean, duration: string) =>
  `transition-all ${duration} ease-out ${
    shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  }`;

export function Hero({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [instant, setInstant] = useState(false);

  // Runs once on mount, so anchor navigation between sections never replays it.
  // The kick-off is deferred a frame so the hidden state paints first and the
  // opening fade actually transitions instead of being skipped.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = requestAnimationFrame(() => {
      setInstant(reduce);
      setPhase(reduce ? "done" : "eyebrow");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const reached = (target: Phase) =>
    PHASES.indexOf(phase) >= PHASES.indexOf(target);

  const name = useTypewriter(
    profile.name,
    NAME_SPEED,
    reached("name"),
    instant,
  );
  const lead = useTypewriter(leadRole, ROLE_SPEED, reached("lead"), instant);
  const mono = useTypewriter(monoLine, ROLE_SPEED, reached("mono"), instant);

  // Each phase schedules the next: type, pause, type, pause, then fade.
  useEffect(() => {
    let id: ReturnType<typeof setTimeout> | undefined;
    if (phase === "eyebrow") id = setTimeout(() => setPhase("name"), 600);
    else if (phase === "name" && name.done)
      id = setTimeout(() => setPhase("lead"), 300);
    else if (phase === "lead" && lead.done)
      id = setTimeout(() => setPhase("mono"), 150);
    else if (phase === "mono" && mono.done)
      id = setTimeout(() => setPhase("actions"), 200);
    else if (phase === "actions") id = setTimeout(() => setPhase("socials"), 250);
    else if (phase === "socials") id = setTimeout(() => setPhase("done"), 400);
    return () => clearTimeout(id);
  }, [phase, name.done, lead.done, mono.done]);

  useEffect(() => {
    if (phase === "done") onComplete?.();
  }, [phase, onComplete]);

  return (
    <section
      id="top"
      className="relative z-10 overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      <CircleDecor className="-top-40 -right-40 h-[420px] w-[420px] sm:h-[620px] sm:w-[620px]" />

      <Container>
        <p
          className={`font-mono text-sm tracking-wider text-gray-400 dark:text-gray-500 ${fadeUp(
            reached("eyebrow"),
            "duration-300",
          )}`}
        >
          Lagos, Nigeria
        </p>

        <h1 className="mt-6 text-5xl leading-[0.95] tracking-tight text-navy-800 md:text-8xl dark:text-white">
          <Typewriter
            text={profile.name}
            typed={name.typed}
            cursor={phase === "name"}
            className="font-black"
          />
          <Typewriter
            text={leadRole}
            typed={lead.typed}
            cursor={phase === "lead"}
            className="mt-2 font-extralight"
          />
        </h1>

        {monoLine ? (
          <div className="mt-6 font-mono text-sm tracking-wider text-gray-500 dark:text-gray-400">
            <Typewriter
              text={monoLine}
              typed={mono.typed}
              cursor={phase === "mono"}
            />
          </div>
        ) : null}

        <p
          className={`mt-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400 ${fadeUp(
            reached("actions"),
            "duration-500",
          )}`}
        >
          {profile.intro}
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center gap-3 ${fadeUp(
            reached("actions"),
            "duration-500",
          )}`}
        >
          <a
            href={profile.cv}
            download="Oghenetega-Ukpe-CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-navy-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700 dark:bg-slate-100 dark:text-navy-800 dark:hover:bg-white"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-slate-100 dark:hover:bg-gray-800"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:text-navy-800 dark:text-gray-400 dark:hover:text-white"
          >
            Contact Me
          </a>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-2 ${fadeUp(
            reached("socials"),
            "duration-500",
          )}`}
        >
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-navy-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
