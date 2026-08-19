import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { profile } from "@/data/site";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-100 py-6 dark:border-gray-800">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-gray-400 sm:flex-row sm:px-8 dark:text-gray-500">
        <a
          href="#top"
          className="tracking-wider transition-colors hover:text-navy-800 dark:hover:text-white"
          aria-label={`${profile.shortName} — back to top`}
        >
          {profile.navInitials}
        </a>

        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-navy-800 dark:hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p>© 2026 Oghenetega Ukpe. Built with Next.js.</p>
      </div>
    </footer>
  );
}
