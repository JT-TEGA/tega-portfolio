"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honours the OS "reduce motion" setting across every animation on the page. */
export function MotionPreferences({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
