import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import { MotionPreferences } from "@/components/motion-preferences";
import { profile } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Fullstack Developer`,
  description: profile.intro,
  keywords: [
    "Oghenetega Ukpe",
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "AI Automation",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — Fullstack Developer`,
    description: profile.intro,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Fullstack Developer`,
    description: profile.intro,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <MotionPreferences>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </MotionPreferences>
        </ThemeProvider>
      </body>
    </html>
  );
}
