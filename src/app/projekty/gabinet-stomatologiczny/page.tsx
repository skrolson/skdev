import type { Metadata } from "next";
import { CalendarCheck } from "lucide-react";
import { DemoBar } from "@/components/demos/demo-bar";
import { DemoFooter } from "@/components/demos/demo-footer";
import { DemoHeader } from "@/components/demos/demo-header";
import { TreatmentSearch } from "@/components/demos/dental/treatment-search";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { FaqList } from "@/components/shared/faq-list";
import { SmartImage } from "@/components/shared/smart-image";
import { Button } from "@/components/ui/button";
import { dentalFaq, visitSteps } from "@/data/dental";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Gabinet stomatologiczny Miętowa Klinika (demo)",
  description:
    "Demonstracyjna strona gabinetu stomatologicznego z wyszukiwarką zabiegów i przebiegiem wizyty.",
  path: "/projekty/gabinet-stomatologiczny",
  image: "/og/dentysta.jpg",
});

const theme = "theme-dental";

const navigation = [
  { label: "Zabiegi", href: "#zabiegi" },
  { label: "Wizyta", href: "#wizyta" },
  { label: "Pytania", href: "#pytania" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function DentalPage() {
  return (
    <div className={theme}>
      <DemoHeader
        brand="Miętowa Klinika"
        homeHref="/projekty/gabinet-stomatologiczny"
        items={navigation}
        cta={{ label: "Umów wizytę", href: "#kontakt" }}
        themeClassName={theme}
      />
      <main>
        <section className="container-page pt-32 pb-20">
          <div className="bg-secondary grid items-center gap-8 overflow-hidden rounded-[2.5rem] p-7 sm:p-12 lg:grid-cols-2">
            <div>
              <h1 className="animate-rise text-[clamp(2.75rem,6vw,5rem)] leading-none font-bold tracking-[-0.04em]">
                Dentysta, który najpierw słucha
              </h1>
              <p className="animate-rise mt-6 max-w-md text-lg [animation-delay:120ms]">
                Spokojne wizyty, jasny plan leczenia i ceny omówione przed rozpoczęciem zabiegu.
              </p>
              <Button asChild size="lg" className="animate-rise mt-9 [animation-delay:220ms]">
                <a href="#kontakt">
                  <CalendarCheck />
                  Umów wizytę
                </a>
              </Button>
            </div>
            <SmartImage
              src="/images/demos/dental-hero.svg"
              alt="Ilustracja jasnego gabinetu stomatologicznego"
              priority
              sizes="(min-width: 1024px) 500px, 85vw"
              wrapperClassName="animate-rise aspect-square rounded-[2rem] [animation-delay:200ms]"
            />
          </div>
        </section>

        <section id="zabiegi" className="py-20">
          <div className="container-page max-w-4xl">
            <h2 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Zabiegi i ceny
            </h2>
            <TreatmentSearch />
          </div>
        </section>

        <section id="wizyta" className="py-20">
          <div className="container-page">
            <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Przebieg pierwszej wizyty
            </h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {visitSteps.map((step, index) => (
                <li key={step.title}>
                  <Reveal
                    delay={index * 0.12}
                    className="bg-card shadow-soft h-full rounded-2xl border p-8"
                  >
                    <span className="bg-accent text-accent-foreground grid size-12 place-items-center rounded-full text-lg font-bold">
                      {index + 1}
                    </span>
                    <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground mt-2">{step.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pytania" className="py-20">
          <div className="container-page max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold tracking-tight">Pytania pacjentów</h2>
            <FaqList items={dentalFaq} />
          </div>
        </section>

        <section id="kontakt" className="py-20">
          <div className="container-page max-w-3xl">
            <div className="bg-card shadow-soft rounded-3xl border p-7 sm:p-10">
              <h2 className="mb-7 text-4xl font-bold tracking-tight">Poproś o termin</h2>
              <ContactForm
                demo
                idPrefix="gabinet"
                topics={["Przegląd", "Ból zęba", "Higienizacja", "Konsultacja"]}
              />
            </div>
          </div>
        </section>
      </main>
      <DemoFooter
        brand="Miętowa Klinika"
        lines={["ul. Przykładowa 3, Gdańsk", "+48 000 000 000"]}
      />
      <DemoBar />
    </div>
  );
}
