"use client";

import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time once `active` flips true, and keeps
 * the finished string once it has run. `instant` (reduced motion) skips
 * straight to the full string without ever scheduling a timer.
 */
export function useTypewriter(
  text: string,
  speed: number,
  active: boolean,
  instant = false,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || instant || count >= text.length) return;
    const id = setTimeout(() => setCount((current) => current + 1), speed);
    return () => clearTimeout(id);
  }, [active, instant, count, text.length, speed]);

  return {
    typed: instant ? text : text.slice(0, count),
    done: instant || (active && count >= text.length),
  };
}

/**
 * Stacks the partially-typed string on top of an invisible copy of the full
 * string in a single grid cell. The invisible copy reserves the exact final
 * line box — including however many lines the text wraps to at the current
 * breakpoint — so nothing below shifts as characters land.
 *
 * The full string is also exposed to screen readers up front; the animating
 * copy is hidden from them so the reveal isn't announced character by
 * character.
 */
export function Typewriter({
  text,
  typed,
  cursor = false,
  className = "",
}: {
  text: string;
  typed: string;
  cursor?: boolean;
  className?: string;
}) {
  return (
    <span className={`grid ${className}`}>
      <span
        aria-hidden
        className="col-start-1 row-start-1 invisible select-none"
      >
        {text}
      </span>
      <span className="col-start-1 row-start-1">
        <span className="sr-only">{text}</span>
        <span aria-hidden>{typed}</span>
        {cursor ? <span aria-hidden className="type-cursor" /> : null}
      </span>
    </span>
  );
}
