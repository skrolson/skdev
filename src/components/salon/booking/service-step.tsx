"use client";

import { useState } from "react";
import { OptionButton } from "@/components/salon/booking/option-button";
import { salonServices, serviceCategories, type ServiceCategory } from "@/data/salon";
import { cn, formatPrice } from "@/lib/utils";

interface ServiceStepProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ServiceStep({ selectedId, onSelect }: ServiceStepProps) {
  const initial = salonServices.find((service) => service.id === selectedId)?.category;
  const [category, setCategory] = useState<ServiceCategory>(initial ?? "Twarz");

  return (
    <div>
      <div role="group" aria-label="Kategoria usług" className="flex flex-wrap gap-2">
        {serviceCategories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              item === category ? "bg-primary text-primary-foreground" : "hover:bg-muted",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {salonServices
          .filter((service) => service.category === category)
          .map((service) => (
            <li key={service.id}>
              <OptionButton
                selected={service.id === selectedId}
                onClick={() => onSelect(service.id)}
                className="h-full w-full"
              >
                <span className="font-display block text-2xl font-semibold">
                  {service.name}
                </span>
                <span className="text-muted-foreground mt-1 block text-sm">{service.note}</span>
                <span className="mt-4 flex justify-between text-sm font-medium">
                  <span>{service.duration} min</span>
                  <span>{formatPrice(service.price)}</span>
                </span>
              </OptionButton>
            </li>
          ))}
      </ul>
    </div>
  );
}
