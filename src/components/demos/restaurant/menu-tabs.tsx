"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { menuSections, restaurantMenu, type MenuSection } from "@/data/restaurant";
import { cn, formatPrice } from "@/lib/utils";

export function MenuTabs() {
  const [section, setSection] = useState<MenuSection>("Na początek");

  return (
    <div>
      <div
        role="group"
        aria-label="Części menu"
        className="flex flex-wrap justify-center gap-8"
      >
        {menuSections.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={item === section}
            onClick={() => setSection(item)}
            className={cn(
              "font-display border-b-2 pb-2 text-2xl transition-colors",
              item === section
                ? "border-primary text-primary"
                : "text-muted-foreground hover:text-foreground border-transparent",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <m.ul
          key={section}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12 space-y-8"
        >
          {restaurantMenu[section].map((dish) => (
            <li key={dish.name}>
              <div className="flex items-baseline gap-4">
                <h3 className="text-3xl">{dish.name}</h3>
                <span aria-hidden className="border-border flex-1 border-b border-dotted" />
                <span className="text-primary text-lg whitespace-nowrap">
                  {formatPrice(dish.price)}
                </span>
              </div>
              <p className="text-muted-foreground mt-1 font-light">{dish.description}</p>
            </li>
          ))}
        </m.ul>
      </AnimatePresence>
    </div>
  );
}
