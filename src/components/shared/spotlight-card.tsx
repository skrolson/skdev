"use client";

import { cn } from "@/lib/utils";

/** Karta z delikatnym światłem podążającym za kursorem. */
export function SpotlightCard({ className, ...props }: React.ComponentProps<"div">) {
  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      className={cn("spotlight bg-card rounded-xl border", className)}
      {...props}
    />
  );
}
