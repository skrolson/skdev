"use client";

import { useState } from "react";
import { buildStandards } from "@/data/construction";
import { cn, formatPrice } from "@/lib/utils";

export function CostCalculator() {
  const [area, setArea] = useState(120);
  const [standardId, setStandardId] = useState("deweloperski");
  const standard = buildStandards.find((item) => item.id === standardId) ?? buildStandards[0]!;
  const estimate = area * standard.rate;

  return (
    <div className="bg-card shadow-lift rounded-lg border p-6 sm:p-8">
      <h2 className="text-3xl font-bold">Kalkulator kosztu budowy</h2>
      <label htmlFor="powierzchnia" className="mt-8 flex justify-between font-medium">
        Powierzchnia
        <output htmlFor="powierzchnia" className="font-display text-2xl font-bold">
          {area} m²
        </output>
      </label>
      <input
        id="powierzchnia"
        type="range"
        min={50}
        max={300}
        step={5}
        value={area}
        onChange={(event) => setArea(Number(event.target.value))}
        className="mt-3 w-full accent-[#d39e00]"
      />
      <fieldset className="mt-7">
        <legend className="mb-3 font-medium">Standard</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {buildStandards.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.id === standardId}
              onClick={() => setStandardId(item.id)}
              className={cn(
                "rounded-md border px-3 py-3 text-sm font-semibold transition-colors",
                item.id === standardId
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-muted",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div
        aria-live="polite"
        className="bg-secondary text-secondary-foreground mt-7 rounded-md p-6"
      >
        <p className="text-sm opacity-80">Orientacyjny przedział</p>
        <p className="font-display mt-1 text-3xl font-bold tabular-nums sm:text-4xl">
          {formatPrice(estimate * 0.9)} – {formatPrice(estimate * 1.1)}
        </p>
        <p className="mt-3 text-xs opacity-75">
          Stawki demonstracyjne. Wynik nie jest ofertą w rozumieniu przepisów.
        </p>
      </div>
    </div>
  );
}
