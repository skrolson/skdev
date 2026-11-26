import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Flame } from "lucide-react";
import { DemoBar } from "@/components/demos/demo-bar";
import { DemoFooter } from "@/components/demos/demo-footer";
import { DemoHeader } from "@/components/demos/demo-header";
import { MenuTabs } from "@/components/demos/restaurant/menu-tabs";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { Button } from "@/components/ui/button";
import { fontGeometric, fontSerif } from "@/lib/fonts-elegant";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Restauracja Żar i Zioło (demo)",
  description: "Demonstracyjna strona restauracji z sezonowym menu i zapytaniem o stolik.",
  path: "/projekty/restauracja",
  image: "/og/restauracja.jpg",
});

const theme = cn("theme-restaurant", fontSerif.variable, fontGeometric.variable);

const navigation = [
  { label: "Kuchnia", href: "#kuchnia" },
  { label: "Menu", href: "#menu" },
  { label: "Stolik", href: "#stolik" },
];

export default function RestaurantPage() {
  return (
    <div className={theme}>
      <DemoHeader
        brand="Żar i Zioło"
        homeHref="/projekty/restauracja"
        items={navigation}
        cta={{ label: "Zapytaj o stolik", href: "#stolik" }}
        themeClassName={theme}
        themeToggle={false}
      />
      <main>
        <section className="relative isolate grid min-h-dvh place-items-center overflow-hidden px-5 pt-28 pb-20 text-center">
          <Image
            src="/images/demos/restaurant-hero.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div>
            <h1 className="animate-rise text-[clamp(4rem,12vw,10rem)] leading-[0.85] font-medium">
              Sezon prosto z ognia
            </h1>
            <p className="animate-rise mx-auto mt-8 max-w-xl text-lg font-light [animation-delay:150ms]">
              Krótka karta, lokalne warzywa i otwarte palenisko w samym środku sali.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap justify-center gap-3 [animation-delay:280ms]">
              <Button asChild size="lg">
                <a href="#stolik">
                  <CalendarDays />
                  Zapytaj o stolik
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#menu">Zobacz menu</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="kuchnia" className="py-28">
          <Reveal className="container-page max-w-3xl text-center">
            <Flame aria-hidden className="text-primary mx-auto size-8" strokeWidth={1.2} />
            <h2 className="mt-6 text-5xl leading-tight">Gotujemy to, co właśnie dojrzało</h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed font-light">
              Menu zmienia się razem z porami roku. Warzywa pieczemy w żarze, kiszonki
              przygotowujemy sami, a chleb wychodzi z pieca każdego popołudnia.
            </p>
          </Reveal>
        </section>

        <section id="menu" className="bg-card border-y py-28">
          <div className="container-page max-w-3xl">
            <h2 className="mb-10 text-center text-6xl">Menu</h2>
            <MenuTabs />
          </div>
        </section>

        <section id="stolik" className="py-28">
          <div className="container-page grid gap-14 lg:grid-cols-2">
            <Reveal from="left">
              <h2 className="text-5xl">Zapytaj o stolik</h2>
              <p className="text-muted-foreground mt-5 font-light">
                Podaj w wiadomości dzień, godzinę i liczbę osób.
              </p>
              <dl className="mt-10 max-w-sm space-y-3">
                {[
                  ["Wtorek–czwartek", "16:00–22:00"],
                  ["Piątek–sobota", "13:00–23:30"],
                  ["Niedziela", "13:00–21:00"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between border-b pb-3">
                    <dt>{day}</dt>
                    <dd className="text-primary">{hours}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal from="right" className="bg-card rounded-lg border p-7">
              <ContactForm
                demo
                idPrefix="stolik"
                topics={["Rezerwacja stolika", "Kolacja okolicznościowa"]}
              />
            </Reveal>
          </div>
        </section>
      </main>
      <DemoFooter
        brand="Żar i Zioło"
        lines={["ul. Przykładowa 8, Kraków", "+48 000 000 000"]}
      />
      <DemoBar />
    </div>
  );
}
