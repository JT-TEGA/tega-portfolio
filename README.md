# Tega Ukpe — Portfolio

Personal developer portfolio for **Oghenetega Stephen Ukpe** — a single-page,
fully responsive site built with the Next.js App Router.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (subtle fade / slide-up / stagger only)
- Lucide React icons
- Deployed on Vercel — no database, fully static

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx      root layout, Inter font, metadata, theme bootstrap
    page.tsx        composes every section in order
    globals.css     Tailwind theme tokens, dark variant, scroll behaviour
    icon.svg        favicon
  components/
    navbar.tsx      sticky nav, blur on scroll, IntersectionObserver active link
    footer.tsx
    ui.tsx          Container / Section / Reveal / SectionHeading / Tag / Card
    theme-provider.tsx   dark mode, class on <html>, persisted to localStorage
    brand-icons.tsx      GitHub + LinkedIn marks (lucide v1 dropped brand icons)
    sections/       hero, about, skills, projects, experience, education,
                    building, contact
  data/
    site.ts         all copy and content — edit here, not in the components
```

## Things to replace

| What | Where |
| --- | --- |
| Real CV | `public/cv.pdf` (currently a placeholder) |
| Profile photo | `src/components/sections/about.tsx` — swap the `OU` initials circle for `next/image` |
| Project screenshots | `src/components/sections/projects.tsx` — the `ProjectThumb` placeholder |

## Notes

- Dark mode is class-based (`.dark` on `<html>`). An inline script in the root
  layout applies the stored or system preference before first paint, so there is
  no flash of the wrong theme.
- The contact form has no backend — it builds a `mailto:` link and opens the
  visitor's email client.
- All animations respect the OS "reduce motion" setting via `MotionConfig`.
