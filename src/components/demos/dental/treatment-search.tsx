"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { treatments } from "@/data/dental";
import { formatPrice } from "@/lib/utils";

/** Usuwa polskie znaki, aby „wypelnienie” znalazło „Wypełnienie”. */
function normalize(value: string) {
  return value.toLocaleLowerCase("pl").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l");
}

export function TreatmentSearch() {
  const [query, setQuery] = useState("");
  const results = treatments.filter((item) =>
    normalize(`${item.name} ${item.group}`).includes(normalize(query.trim())),
  );

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Szukaj zabiegu</span>
        <Search
          aria-hidden
          className="text-muted-foreground absolute top-1/2 left-5 size-5 -translate-y-1/2"
        />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Szukaj zabiegu, np. higienizacja"
          className="h-14 rounded-full pl-13"
        />
      </label>
      <p aria-live="polite" className="sr-only">
        Liczba wyników: {results.length}
      </p>
      {results.length === 0 ? (
        <p className="text-muted-foreground mt-8 text-center">
          Nie ma takiego zabiegu na liście. Zmień wyszukiwane słowo albo zapytaj nas w
          formularzu.
        </p>
      ) : (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {results.map((item) => (
            <li
              key={item.name}
              className="bg-card hover:border-ring animate-fade flex items-center justify-between gap-4 rounded-xl border p-5 transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.group}</p>
              </div>
              <p className="text-primary font-semibold whitespace-nowrap">
                od {formatPrice(item.from)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
