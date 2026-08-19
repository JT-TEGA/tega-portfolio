"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

const PARTICLE_COUNT = 45;

/**
 * Base colours for the drifting motes. The alpha baked into each one is the
 * *average* opacity a particle renders at — `Particle.opacity` varies each mote
 * around that midpoint rather than multiplying it down, which would leave every
 * particle at ~0.03 alpha and invisible against the page background.
 */
const DARK_COLORS = [
  { rgb: "56, 189, 248", alpha: 0.15 },
  { rgb: "129, 140, 248", alpha: 0.12 },
] as const;

/**
 * Carries more alpha than the dark-mode motes because it sits on a near-white
 * page — a light-on-dark dot reads more strongly than a dark-on-light one at
 * matching alpha, so the two themes need different numbers to feel equally
 * present.
 */
const LIGHT_COLOR = { rgb: "26, 35, 50", alpha: 0.16 } as const;

/** Midpoint of the 0.1–0.25 opacity range, used to normalise the variance. */
const OPACITY_MIDPOINT = 0.175;

type Particle = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  /** Upward drift in px per frame. */
  speed: number;
  /** Keeps the horizontal sway out of phase between particles. */
  phase: number;
  /** Which of the two dark-mode colours this mote uses. */
  colorIndex: number;
};

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 1.5 + Math.random() * 1.5,
    opacity: 0.1 + Math.random() * 0.15,
    speed: 0.15 + Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
    colorIndex: Math.floor(Math.random() * DARK_COLORS.length),
  };
}

/**
 * Ambient motes drifting up the page, behind everything else. Fixed to the
 * viewport at `z-0`; the navbar sits at `z-50` and every content section at
 * `z-10`, so nothing here can ever intercept a click.
 */
export function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  // Read inside the animation loop so a theme toggle recolours the motes
  // without tearing down and restarting the loop.
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height),
      );
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.y -= particle.speed;
        particle.x += Math.sin(time / 1000 + particle.phase) * 0.3;

        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }

        const base =
          themeRef.current === "dark"
            ? DARK_COLORS[particle.colorIndex]
            : LIGHT_COLOR;
        const alpha = base.alpha * (particle.opacity / OPACITY_MIDPOINT);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${base.rgb}, ${alpha})`;
        ctx.fill();
      }
    };

    let frame = 0;
    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    // Honour the OS "reduce motion" setting the same way the rest of the site
    // does — the motes still render, they just stop moving.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const start = () => {
      cancelAnimationFrame(frame);
      if (reduceMotion.matches) {
        draw(0);
      } else {
        frame = requestAnimationFrame(loop);
      }
    };

    const onResize = () => {
      resize();
      start();
    };

    resize();
    start();
    window.addEventListener("resize", onResize);
    reduceMotion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      reduceMotion.removeEventListener("change", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 h-screen w-screen"
    />
  );
}
