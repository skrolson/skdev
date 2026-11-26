"use client";

import { m, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/** Animowane tło hero: dryfujące plamy światła i poświata za kursorem. */
export function AuroraBackground() {
  const x = useMotionValue(50);
  const y = useMotionValue(20);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(560px circle at ${springX}% ${springY}%, color-mix(in srgb, var(--aurora-2) 22%, transparent), transparent 70%)`;

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches
    ) {
      return;
    }
    const onMove = (event: PointerEvent) => {
      x.set((event.clientX / window.innerWidth) * 100);
      y.set((event.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  const blob = "animate-drift absolute rounded-full opacity-(--aurora-opacity) blur-3xl";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={`${blob} bg-(--aurora-1) -top-40 left-[4%] size-[34rem]`} />
      <div
        className={`${blob} bg-(--aurora-2) -top-24 right-[2%] size-[30rem] [animation-delay:-6s]`}
      />
      <div
        className={`${blob} bg-(--aurora-3) top-80 left-[36%] size-[28rem] [animation-delay:-11s]`}
      />
      <m.div className="absolute inset-0" style={{ background: glow }} />
      <div className="bg-grid absolute inset-0" />
      <div className="from-background absolute inset-x-0 bottom-0 h-56 bg-linear-to-t to-transparent" />
    </div>
  );
}
