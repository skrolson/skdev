"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 4800;

/** Okno przeglądarki z realizacjami — prostuje się podczas przewijania. */
export function HeroShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(
      () => setIndex((current) => (current + 1) % projects.length),
      INTERVAL_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index, paused, reducedMotion]);

  const project = projects[index] ?? projects[0]!;

  return (
    <div
      ref={ref}
      className="[perspective:1600px]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <m.div
        style={{ rotateX, scale }}
        className="glass shadow-lift origin-bottom rounded-2xl p-2 motion-reduce:transform-none! sm:p-3"
      >
        <div className="flex items-center gap-3 px-2 pt-1 pb-3">
          <div aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-(--aurora-2)" />
            <span className="size-2.5 rounded-full bg-(--aurora-1)" />
            <span className="size-2.5 rounded-full bg-(--aurora-3)" />
          </div>
          <div className="bg-card/70 text-muted-foreground mx-auto flex min-w-0 items-center gap-2 rounded-full px-4 py-1.5 text-xs">
            <Lock aria-hidden className="size-3 shrink-0" />
            <span className="truncate">{project.demoUrl}</span>
          </div>
          <Link
            href={project.demoUrl}
            className="hover:bg-card grid size-7 place-items-center rounded-full transition-colors"
            aria-label={`Otwórz demo: ${project.title}`}
          >
            <ExternalLink className="size-3.5" />
          </Link>
        </div>

        <div
          id="showcase-panel"
          role="tabpanel"
          className="bg-muted relative aspect-[16/10] overflow-hidden rounded-xl"
        >
          <AnimatePresence initial={false}>
            <m.div
              key={project.slug}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.75, 0.2, 1] }}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority={index === 0}
                sizes="(min-width: 1152px) 1100px, 94vw"
                className="object-cover object-top"
              />
            </m.div>
          </AnimatePresence>
        </div>

        <div
          role="tablist"
          aria-label="Wybierz realizację"
          className="mt-2 grid grid-cols-5 gap-1 sm:mt-3 sm:gap-2"
        >
          {projects.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="showcase-panel"
                aria-label={item.title}
                onClick={() => setIndex(itemIndex)}
                className={cn(
                  "group flex min-h-8 flex-col justify-end gap-2 rounded-lg px-1 pb-1 text-left transition-colors sm:px-2",
                  selected ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="hidden truncate text-xs font-medium md:block">
                  {item.title}
                </span>
                <span className="bg-foreground/10 block h-1 overflow-hidden rounded-full">
                  {selected && (
                    <m.span
                      key={`${item.slug}-${paused}`}
                      className="bg-primary block h-full origin-left rounded-full"
                      initial={{ scaleX: paused ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </m.div>
    </div>
  );
}
