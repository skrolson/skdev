import type { Metadata } from "next";
import { Calculator, Phone } from "lucide-react";
import { CostCalculator } from "@/components/demos/construction/cost-calculator";
import { DemoBar } from "@/components/demos/demo-bar";
import { DemoFooter } from "@/components/demos/demo-footer";
import { DemoHeader } from "@/components/demos/demo-header";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { SmartImage } from "@/components/shared/smart-image";
import { Button } from "@/components/ui/button";
import { buildStages, constructionServices } from "@/data/construction";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Firma budowlana Solidny Kąt (demo)",
  description:
    "Demonstracyjna strona firmy budowlanej z usługami, etapami prac i kalkulatorem kosztów.",
  path: "/projekty/firma-budowlana",
  image: "/og/budowa.jpg",
});

const theme = "theme-construction";

const navigation = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Etapy", href: "#etapy" },
  { label: "Kalkulator", href: "#kalkulator" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function ConstructionPage() {
  return (
    <div className={theme}>
      <DemoHeader
        brand="Solidny Kąt"
        homeHref="/projekty/firma-budowlana"
        items={navigation}
        cta={{ label: "Zapytaj o wycenę", href: "#kontakt" }}
        themeClassName={theme}
      />
      <main>
        <section className="container-page grid items-center gap-12 pt-36 pb-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="animate-rise text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.92] font-extrabold tracking-[-0.04em]">
              Budujemy równo i na czas
            </h1>
            <p className="text-muted-foreground animate-rise mt-7 max-w-lg text-lg [animation-delay:120ms]">
              Domy, hale i remonty generalne. Jeden kierownik projektu, raport z budowy co
              tydzień i płatności za zakończone etapy.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3 [animation-delay:220ms]">
              <Button asChild size="lg">
                <a href="#kalkulator">
                  <Calculator />
                  Policz koszt
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#kontakt">
                  <Phone />
                  Skontaktuj się
                </a>
              </Button>
            </div>
          </div>
          <SmartImage
            src="/images/demos/construction-hero.svg"
            alt="Ilustracja domu w budowie z żurawiem"
            priority
            sizes="(min-width: 1024px) 540px, 92vw"
            wrapperClassName="animate-rise aspect-[5/4] rounded-lg shadow-lift [animation-delay:200ms]"
          />
        </section>

        <section id="uslugi" className="bg-secondary text-secondary-foreground py-24">
          <div className="container-page">
            <h2 className="text-5xl font-bold">Co robimy</h2>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {constructionServices.map(({ title, text, icon: Icon }, index) => (
                <li key={title} className="bg-secondary group p-7 hover:bg-white/5">
                  <Reveal delay={index * 0.08}>
                    <Icon
                      aria-hidden
                      className="text-primary size-9 transition-transform group-hover:-translate-y-1"
                    />
                    <h3 className="mt-8 text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-80">{text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="etapy" className="py-24">
          <div className="container-page max-w-4xl">
            <h2 className="text-5xl font-bold">Etapy prac</h2>
            <ol className="mt-12">
              {buildStages.map((stage, index) => (
                <li key={stage.title}>
                  <Reveal
                    from="left"
                    className="grid grid-cols-[3.5rem_1fr] gap-4 border-t py-6 sm:grid-cols-[4rem_1fr_auto]"
                  >
                    <span className="bg-primary text-primary-foreground font-display grid size-11 place-items-center rounded-md text-lg font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{stage.title}</h3>
                      <p className="text-muted-foreground mt-1">{stage.text}</p>
                    </div>
                    <p className="col-start-2 text-sm font-semibold sm:col-start-3">
                      {stage.time}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="kalkulator" className="bg-muted py-24">
          <div className="container-page max-w-2xl">
            <CostCalculator />
          </div>
        </section>

        <section id="kontakt" className="py-24">
          <div className="container-page max-w-2xl">
            <h2 className="mb-8 text-5xl font-bold">Zapytaj o wycenę</h2>
            <ContactForm
              demo
              idPrefix="budowa"
              topics={["Budowa domu", "Hala", "Remont", "Nadzór"]}
            />
          </div>
        </section>
      </main>
      <DemoFooter
        brand="Solidny Kąt"
        lines={["ul. Przykładowa 21, Poznań", "+48 000 000 000"]}
      />
      <DemoBar />
    </div>
  );
}
