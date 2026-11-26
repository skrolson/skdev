"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { CalendarHeart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salonBrand } from "@/data/salon";

export function SalonHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      ref={ref}
      aria-labelledby="salon-title"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="animate-drift absolute -top-32 -left-32 -z-10 size-[36rem] rounded-full bg-[#e9a9c9] opacity-30 blur-3xl dark:bg-[#7a2d66]"
      />
      <div
        aria-hidden
        className="animate-drift absolute top-40 right-0 -z-10 size-[30rem] rounded-full bg-[#ecd3a0] opacity-35 blur-3xl [animation-delay:-8s] dark:bg-[#6b4e1d]"
      />
      <div className="container-page grid items-center gap-14 pt-32 pb-24 lg:min-h-dvh lg:grid-cols-[1.15fr_1fr]">
        <div>
          <h1
            id="salon-title"
            className="animate-rise text-[clamp(3.5rem,8vw,7.25rem)] leading-[0.9] font-medium tracking-tight"
          >
            Czas, który należy tylko do Ciebie
          </h1>
          <p className="text-muted-foreground animate-rise mt-8 max-w-lg text-lg leading-relaxed font-light [animation-delay:120ms]">
            {salonBrand.name} to kameralne atelier urody. Uważna pielęgnacja, spokojne wnętrze i
            zabiegi dopasowane do Ciebie.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3 [animation-delay:220ms]">
            <Button asChild size="lg">
              <a href="#rezerwacja">
                <CalendarHeart />
                Umów wizytę
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#cennik">Zobacz cennik</a>
            </Button>
          </div>
        </div>

        <div className="animate-rise relative mx-auto w-full max-w-md [animation-delay:200ms]">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-t-full rounded-b-2xl border border-(--gold) opacity-60"
          />
          <div className="bg-muted shadow-lift relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-xl">
            <m.div className="absolute -inset-y-10 inset-x-0" style={{ y: imageY }}>
              <Image
                src="/images/salon/hero.svg"
                alt="Ilustracja: łuk, wazon z gałązką i kosmetyki w odcieniach różu"
                fill
                priority
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
              />
            </m.div>
          </div>
          <m.div
            style={{ y: cardY }}
            className="glass shadow-lift absolute bottom-10 -left-2 flex items-center gap-4 rounded-xl p-4 sm:-left-12"
          >
            <span className="bg-primary text-primary-foreground grid size-11 place-items-center rounded-full">
              <Clock aria-hidden className="size-5" />
            </span>
            <span className="text-sm">
              <span className="block font-semibold">Dziś zadbaj o siebie</span>
              <span className="text-muted-foreground block">Pon.–pt. do 20:00</span>
            </span>
          </m.div>
        </div>
      </div>
    </section>
  );
}
