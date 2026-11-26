"use client";

import { useEffect, useState } from "react";

/** Zwraca identyfikator sekcji znajdującej się w środkowej części ekranu. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? null : current));
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    key
      .split("|")
      .map((id) => document.getElementById(id))
      .forEach((element) => element && observer.observe(element));

    return () => observer.disconnect();
  }, [key]);

  return active;
}
