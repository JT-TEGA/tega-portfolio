"use client";

import { useCallback, useEffect, useState } from "react";
import { About } from "@/components/sections/about";
import { Building } from "@/components/sections/building";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  const [heroComplete, setHeroComplete] = useState(false);
  const revealRest = useCallback(() => setHeroComplete(true), []);

  // Failsafe: never leave the page blank if the hero sequence can't finish.
  useEffect(() => {
    const id = setTimeout(revealRest, 9000);
    return () => clearTimeout(id);
  }, [revealRest]);

  return (
    <>
      <Hero onComplete={revealRest} />

      <div
        className={`transition-opacity duration-700 ease-out ${
          heroComplete ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Building />
        <Contact />
      </div>
    </>
  );
}
