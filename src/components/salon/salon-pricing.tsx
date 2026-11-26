"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { BookButton } from "@/components/salon/booking/book-button";
import { SalonHeading } from "@/components/salon/salon-heading";
import { salonServices, serviceCategories, type ServiceCategory } from "@/data/salon";
import { cn, formatPrice } from "@/lib/utils";

export function SalonPricing() {
  const [category, setCategory] = useState<ServiceCategory>("Twarz");

  return (
    <section id="cennik" aria-labelledby="pricing-heading" className="py-24 sm:py-32">
      <div className="container-page max-w-4xl">
        <SalonHeading
          id="pricing-heading"
          title="Cennik"
          description="Ceny przykładowe, w złotych."
        />
        <div
          role="group"
          aria-label="Kategorie cennika"
          className="glass shadow-soft mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-3xl p-1.5"
        >
          {serviceCategories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={item === category}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm transition-all duration-300",
                item === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "hover:bg-muted",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <m.ul
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-10 divide-y"
          >
            {salonServices
              .filter((service) => service.category === category)
              .map((service) => (
                <li
                  key={service.id}
                  className="grid gap-x-6 gap-y-3 py-6 sm:grid-cols-[1fr_auto_auto] sm:items-center"
                >
                  <div>
                    <h3 className="text-3xl font-medium">{service.name}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {service.note}, {service.duration} min
                    </p>
                  </div>
                  <p className="font-display text-3xl font-semibold tabular-nums">
                    {formatPrice(service.price)}
                  </p>
                  <BookButton
                    serviceId={service.id}
                    variant="secondary"
                    size="sm"
                    className="w-fit"
                    aria-label={`Rezerwuj: ${service.name}`}
                  >
                    Rezerwuj
                  </BookButton>
                </li>
              ))}
          </m.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
