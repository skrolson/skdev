import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SmartImage } from "@/components/shared/smart-image";

const values = [
  "Konsultacja przed każdym nowym zabiegiem",
  "Czas wizyty zaplanowany bez pośpiechu",
  "Jasne ceny podane przed rezerwacją",
];

export function SalonAbout() {
  return (
    <section id="o-nas" aria-labelledby="about-heading" className="py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal from="left">
          <SmartImage
            src="/images/salon/about.svg"
            alt="Ilustracja wnętrza salonu z lustrem i roślinami"
            sizes="(min-width: 1024px) 560px, 92vw"
            wrapperClassName="aspect-[5/4] rounded-2xl shadow-soft"
          />
        </Reveal>
        <Reveal from="right">
          <h2 id="about-heading" className="text-5xl leading-none font-medium sm:text-6xl">
            Pielęgnacja zaczyna się od rozmowy
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed font-light">
            Najpierw słuchamy, potem proponujemy. Wspólnie ustalamy, czego potrzebujesz, i
            wyjaśniamy przebieg zabiegu, zanim się położysz w fotelu.
          </p>
          <ul className="mt-8 space-y-4">
            {values.map((value) => (
              <li key={value} className="flex items-center gap-4">
                <span className="bg-accent text-accent-foreground grid size-8 place-items-center rounded-full">
                  <Check aria-hidden className="size-4" />
                </span>
                {value}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
