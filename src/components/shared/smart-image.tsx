"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type SmartImageProps = Omit<ImageProps, "onLoad" | "fill"> & {
  /** Klasy kontenera. Ustaw w nich proporcje, np. `aspect-[4/3]`. */
  wrapperClassName?: string;
};

/** Obraz wypełniający kontener, ze szkieletem widocznym do czasu załadowania. */
export function SmartImage({ wrapperClassName, className, alt, ...props }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!loaded && <div aria-hidden className="skeleton absolute inset-0" />}
      <Image
        {...props}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
