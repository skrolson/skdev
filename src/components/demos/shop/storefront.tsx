"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { DemoHeader } from "@/components/demos/demo-header";
import { CartSheet } from "@/components/demos/shop/cart-sheet";
import { Reveal } from "@/components/motion/reveal";
import { SmartImage } from "@/components/shared/smart-image";
import { Button } from "@/components/ui/button";
import { productCategories, products, type ProductCategory } from "@/data/shop";
import { useCart } from "@/hooks/use-cart";
import { cn, formatPrice } from "@/lib/utils";

type Filter = ProductCategory | "Wszystko";
const filters: Filter[] = ["Wszystko", ...productCategories];

export function Storefront({ themeClassName }: { themeClassName: string }) {
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("Wszystko");
  const visible = products.filter((item) => filter === "Wszystko" || item.category === filter);

  return (
    <>
      <DemoHeader
        brand="Glina i Forma"
        homeHref="/projekty/sklep-internetowy"
        items={[
          { label: "Kolekcja", href: "#kolekcja" },
          { label: "Pracownia", href: "#pracownia" },
        ]}
        cta={{ label: "Kup ceramikę", href: "#kolekcja" }}
        themeClassName={themeClassName}
      >
        <CartSheet
          cart={cart}
          open={open}
          onOpenChange={setOpen}
          themeClassName={themeClassName}
        />
      </DemoHeader>

      <main>
        <section className="container-page pt-36 pb-14">
          <h1 className="animate-rise max-w-4xl text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-medium tracking-[-0.04em]">
            Ceramika do codziennych rytuałów
          </h1>
          <p className="text-muted-foreground animate-rise mt-6 max-w-lg text-lg [animation-delay:120ms]">
            Krótkie serie, ręcznie szkliwione. Każda sztuka różni się trochę od pozostałych.
          </p>
        </section>

        <section id="kolekcja" aria-label="Kolekcja" className="container-page pb-24">
          <div
            role="group"
            aria-label="Kategorie"
            className="flex flex-wrap gap-2 border-b pb-5"
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={item === filter}
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full px-5 py-2 transition-colors",
                  item === filter ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <ul className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product, index) => (
              <li key={product.id}>
                <Reveal delay={(index % 3) * 0.08}>
                  <article className="group">
                    <SmartImage
                      src={product.image}
                      alt={`${product.name}, ilustracja produktu`}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 46vw, 92vw"
                      wrapperClassName="aspect-square rounded-lg"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-medium">{product.name}</h2>
                        <p className="text-muted-foreground text-sm">{product.detail}</p>
                        <p className="mt-1 font-semibold">{formatPrice(product.price)}</p>
                      </div>
                      <Button
                        type="button"
                        size="icon"
                        aria-label={`Dodaj do koszyka: ${product.name}`}
                        onClick={() => {
                          cart.change(product.id, 1);
                          setOpen(true);
                        }}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section id="pracownia" className="bg-primary text-primary-foreground py-24">
          <Reveal className="container-page max-w-3xl text-center">
            <h2 className="text-5xl font-medium">Z małej pracowni</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-90">
              Toczymy, suszymy i wypalamy w niewielkich partiach. Naczynia można myć w zmywarce,
              choć ręczne mycie pozwoli szkliwu dłużej zachować połysk.
            </p>
          </Reveal>
        </section>
      </main>
    </>
  );
}
