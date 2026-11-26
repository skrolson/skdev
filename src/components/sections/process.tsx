"use client";

import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { processSteps } from "@/data/process";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="proces" aria-labelledby="process-title" className="py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="process-title"
            title="Jak wygląda współpraca"
            description="Pięć etapów z jasnym rezultatem każdego z nich. Wiesz, co dzieje się teraz i co będzie dalej."
          />
        </div>
        <ol ref={ref} className="relative space-y-6">
          <span aria-hidden className="bg-border absolute top-4 bottom-4 left-6 w-px" />
          <m.span
            aria-hidden
            className="from-(--aurora-1) via-(--aurora-2) to-(--aurora-3) absolute top-4 bottom-4 left-6 w-px origin-top bg-linear-to-b"
            style={{ scaleY }}
          />
          {processSteps.map(({ title, description, outcome, duration, icon: Icon }, index) => (
            <li key={title} className="relative flex gap-5 sm:gap-7">
              <span className="bg-card shadow-soft font-display relative z-10 grid size-12 shrink-0 place-items-center rounded-full border font-bold">
                {index + 1}
              </span>
              <Reveal from="right" className="flex-1">
                <div className="glass shadow-soft hover:shadow-lift rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <Icon aria-hidden className="text-primary size-6 shrink-0" />
                  </div>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-sm">
                    <span className="font-medium">{outcome}</span>
                    <span className="text-muted-foreground">{duration}</span>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
