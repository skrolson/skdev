"use client";

import { m, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <m.div
      aria-hidden
      className="from-(--aurora-1) via-(--aurora-2) to-(--aurora-3) fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r"
      style={{ scaleX }}
    />
  );
}
