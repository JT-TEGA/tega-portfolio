"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CircleDecor } from "@/components/decor";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { profile } from "@/data/site";

const details = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/JT-TEGA",
    href: profile.github,
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/oghenetega-ukpe",
    href: profile.linkedin,
    Icon: LinkedInIcon,
  },
  { label: "Location", value: profile.location, href: null, Icon: MapPin },
];

const fieldClass =
  "w-full border-b border-gray-200 bg-transparent py-3 text-sm text-navy-800 transition-colors placeholder:text-gray-400 focus:border-navy dark:border-gray-700 dark:text-slate-100 dark:placeholder:text-gray-600 dark:focus:border-sky-500";

const labelClass =
  "mb-1 block font-mono text-xs tracking-wider text-gray-400 dark:text-gray-500";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`,
    );

    setToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 4000);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      decor={
        <CircleDecor className="-top-40 -right-48 h-[380px] w-[380px] sm:h-[500px] sm:w-[500px]" />
      }
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="I'm open to fullstack developer roles, AI/automation-focused positions, freelance projects, and interesting collaborations."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <Reveal>
          <ul>
            {details.map(({ label, value, href, Icon }) => {
              const content = (
                <>
                  <Icon className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500" />
                  <span className="min-w-0">
                    <span className={labelClass}>{label}</span>
                    <span className="block truncate text-sm">{value}</span>
                  </span>
                </>
              );

              return (
                <li
                  key={label}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-start gap-4 py-4 text-gray-600 transition-colors hover:text-navy dark:text-gray-400 dark:hover:text-white"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 py-4 text-gray-600 dark:text-gray-400">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, message: event.target.value }))
                }
                placeholder="Tell me about the role, project, or idea."
                className={`${fieldClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700 dark:bg-slate-100 dark:text-navy-800 dark:hover:bg-white"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>

            <p className="mt-4 font-mono text-xs leading-relaxed text-gray-400 dark:text-gray-500">
              This opens your email client with the message pre-filled — no data
              is stored anywhere.
            </p>
          </form>
        </Reveal>
      </div>

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-navy-800 px-5 py-3 font-mono text-xs text-white shadow-lg dark:bg-slate-100 dark:text-navy-800"
          >
            Opening your email client...
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
