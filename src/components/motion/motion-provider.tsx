"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/** Ładuje tylko potrzebne funkcje Framer Motion i respektuje „ogranicz ruch”. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
