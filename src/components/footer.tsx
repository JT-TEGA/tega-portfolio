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
    <footer className="border-t border-navy-100 py-10 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-4 px-6 sm:px-8">
        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy-400 transition-colors hover:bg-navy-50 hover:text-navy-800 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-[#56637a] dark:text-slate-500">
          © 2026 Oghenetega Ukpe. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
