"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface LazyMapProps {
  latitude: number;
  longitude: number;
  label: string;
  className?: string;
}

/**
 * Mapa OpenStreetMap ładowana dopiero po kliknięciu: szybszy start strony
 * i brak połączeń z zewnętrznym serwisem bez zgody użytkownika.
 */
export function LazyMap({ latitude, longitude, label, className }: LazyMapProps) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const bbox = [longitude - 0.012, latitude - 0.006, longitude + 0.012, latitude + 0.006].join(
    ",",
  );
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div
      className={cn("bg-muted relative min-h-80 overflow-hidden rounded-xl border", className)}
    >
      {active ? (
        <>
          {!loaded && <Skeleton className="absolute inset-0" />}
          <iframe
            title={`Mapa: ${label}`}
            src={src}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 size-full border-0 dark:brightness-90"
          />
        </>
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div aria-hidden className="bg-grid absolute inset-0 [mask-image:none]" />
          <div className="relative flex flex-col items-center gap-4">
            <span className="bg-primary text-primary-foreground shadow-lift grid size-14 place-items-center rounded-full">
              <MapPin className="size-6" />
            </span>
            <p className="font-medium">{label}</p>
            <Button type="button" variant="glass" onClick={() => setActive(true)}>
              Pokaż mapę
            </Button>
            <p className="text-muted-foreground text-xs">Mapa pochodzi z OpenStreetMap.</p>
          </div>
        </div>
      )}
    </div>
  );
}
