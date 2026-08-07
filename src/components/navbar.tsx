"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/data/site";
import { useTheme } from "@/components/theme-provider";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const visibleSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently crossing the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        }
        const current = sectionIds.find((id) => visibleSections.current.has(id));
        setActiveSection(current ?? "");
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    const observed = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    observed.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Keep the page from scrolling behind the open mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-navy-100/80 bg-white/80 backdrop-blur-md dark:border-slate-700/60 dark:bg-[#0f172a]/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-6 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${profile.shortName} — back to top`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-sm font-semibold tracking-tight text-white dark:bg-slate-200 dark:text-navy-800">
            {profile.navInitials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-navy-800 sm:block dark:text-slate-100">
            {profile.shortName}
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-navy-800 dark:text-white"
                        : "text-[#56637a] hover:text-navy-800 dark:text-slate-400 dark:hover:text-slate-100"
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-navy-50 dark:bg-slate-800"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-navy-100 text-navy-600 transition-colors hover:bg-navy-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-100 text-navy-600 transition-colors hover:bg-navy-50 md:hidden dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-b border-navy-100 bg-white px-6 pb-6 md:hidden dark:border-slate-700 dark:bg-[#0f172a]"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "bg-navy-50 text-navy-800 dark:bg-slate-800 dark:text-white"
                        : "text-[#56637a] hover:bg-navy-50 dark:text-slate-400 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
