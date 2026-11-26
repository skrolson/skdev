"use client";

import { m } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Opóźnienie w sekundach, np. do kaskady kafelków. */
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
}

const offsets = {
  bottom: { y: 28 },
  left: { x: -32 },
  right: { x: 32 },
  scale: { scale: 0.95 },
} as const;

/** Płynne odsłonięcie elementu, gdy pojawi się w oknie przeglądarki. */
export function Reveal({ children, className, delay = 0, from = "bottom" }: RevealProps) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.75, 0.2, 1] }}
    >
      {children}
    </m.div>
  );
}
