"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SalonHeading } from "@/components/salon/salon-heading";
import { SmartImage } from "@/components/shared/smart-image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { galleryItems } from "@/data/salon";
import { cn } from "@/lib/utils";

export function SalonGallery({ themeClassName }: { themeClassName: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : galleryItems[index];

  function move(direction: 1 | -1) {
    setIndex((value) =>
      value === null ? value : (value + direction + galleryItems.length) % galleryItems.length,
    );
  }

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="bg-muted/60 py-24 sm:py-32"
    >
      <div className="container-page">
        <SalonHeading
          id="gallery-heading"
          title="Galeria"
          description="Ilustracje wnętrz. W prawdziwym projekcie zastąpią je zdjęcia salonu."
        />
        <ul className="mt-14 grid auto-rows-[13rem] grid-cols-2 gap-3 sm:auto-rows-[17rem] sm:gap-5 lg:grid-cols-3">
          {galleryItems.map((item, itemIndex) => (
            <li
              key={item.src}
              className={cn(
                (itemIndex === 0 || itemIndex === 4) && "row-span-2",
                itemIndex === 3 && "lg:row-span-2",
              )}
            >
              <Reveal from="scale" delay={(itemIndex % 3) * 0.08} className="h-full">
                <button
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className="group shadow-soft relative block h-full w-full overflow-hidden rounded-xl"
                  aria-label={`Powiększ: ${item.title}`}
                >
                  <SmartImage
                    src={item.src}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 380px, 46vw"
                    wrapperClassName="h-full"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="glass absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between rounded-lg px-4 py-2.5 text-sm opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {item.title}
                    <Expand aria-hidden className="size-4" />
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={current !== null} onOpenChange={(open) => !open && setIndex(null)}>
        {current && (
          <DialogContent
            className={cn(themeClassName, "max-w-2xl")}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") move(1);
              if (event.key === "ArrowLeft") move(-1);
            }}
          >
            <DialogTitle className="font-display pr-10 text-3xl">{current.title}</DialogTitle>
            <DialogDescription className="sr-only">{current.alt}</DialogDescription>
            <div className="relative mt-4 aspect-square max-h-[65dvh] w-full overflow-hidden rounded-lg">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 768px) 640px, 92vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Button type="button" variant="outline" onClick={() => move(-1)}>
                <ChevronLeft />
                Poprzednie
              </Button>
              <Button type="button" variant="outline" onClick={() => move(1)}>
                Następne
                <ChevronRight />
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
