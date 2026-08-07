"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { useEffect, useRef, useState, type FormEvent } from "react";
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
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/oghenetega-ukpe",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  { label: "Location", value: profile.location, href: null, Icon: MapPin },
];

const fieldClass =
  "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 transition-colors focus:border-navy-400 dark:border-slate-700 dark:bg-[#0f172a] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-navy-400 dark:text-slate-500";

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
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="I'm open to fullstack developer roles, AI/automation-focused positions, freelance projects, and interesting collaborations."
        align="center"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
        <Reveal>
          <ul className="space-y-3">
            {details.map(({ label, value, href, Icon }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600 dark:bg-slate-800 dark:text-slate-300">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy-400 dark:text-slate-500">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-navy-800 dark:text-slate-200">
                      {value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-card transition-colors hover:border-navy-200 hover:bg-navy-50/60 dark:border-slate-700/70 dark:bg-[#1e293b] dark:hover:border-slate-600 dark:hover:bg-slate-800"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-card dark:border-slate-700/70 dark:bg-[#1e293b]">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8 dark:border-slate-700/70 dark:bg-[#1e293b]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
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

            <div className="mt-5">
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

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-navy-700 dark:bg-slate-100 dark:text-navy-800 dark:hover:bg-white"
            >
              <Send className="h-4 w-4" />
              Send Message
            </motion.button>

            <p className="mt-4 text-xs text-[#56637a] dark:text-slate-500">
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
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-navy-800 px-5 py-3 text-sm font-medium text-white shadow-lg dark:bg-slate-100 dark:text-navy-800"
          >
            Opening your email client...
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
