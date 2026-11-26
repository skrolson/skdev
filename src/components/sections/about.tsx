import { Accessibility, Gauge, MessagesSquare } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const principles = [
  {
    icon: Gauge,
    title: "Szybkość od początku",
    text: "Renderowanie po stronie serwera, lekkie obrazy i tylko ten JavaScript, który coś robi.",
  },
  {
    icon: Accessibility,
    title: "Wygodne dla każdego",
    text: "Czytelne kontrasty, obsługa klawiaturą i układ, który działa na każdym ekranie.",
  },
  {
    icon: MessagesSquare,
    title: "Prosta komunikacja",
    text: "Piszę po ludzku, pokazuję postępy i mówię wprost, co warto zrobić, a co można pominąć.",
  },
];

const codeLines: { indent: number; parts: [string, "key" | "text" | "value"][] }[] = [
  {
    indent: 0,
    parts: [
      ["const ", "key"],
      ["projekt", "text"],
      [" = {", "text"],
    ],
  },
  {
    indent: 1,
    parts: [
      ["cel: ", "key"],
      ['"więcej zapytań"', "value"],
      [",", "text"],
    ],
  },
  {
    indent: 1,
    parts: [
      ["stack: ", "key"],
      ['["Next.js", "TypeScript"]', "value"],
      [",", "text"],
    ],
  },
  {
    indent: 1,
    parts: [
      ["dostępność: ", "key"],
      ["true", "value"],
      [",", "text"],
    ],
  },
  {
    indent: 1,
    parts: [
      ["podgląd: ", "key"],
      ['"po każdym etapie"', "value"],
      [",", "text"],
    ],
  },
  { indent: 0, parts: [["};", "text"]] },
  {
    indent: 0,
    parts: [
      ["await ", "key"],
      ["wdrożenie", "text"],
      ["(projekt);", "text"],
    ],
  },
];

const tones = { key: "text-(--code-key)", text: "text-white/85", value: "text-(--code-value)" };

export function About() {
  return (
    <section id="o-mnie" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="about-title"
            title="Jeden programista, standard studia"
            description="Łączę projektowanie interfejsów z programowaniem frontendu i backendu. Dzięki temu pomysł nie gubi się po drodze między kilkoma osobami."
          />
          <ul className="mt-12 space-y-8">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <li key={title}>
                <Reveal delay={index * 0.1} className="flex gap-5">
                  <span className="glass shadow-soft text-primary grid size-12 shrink-0 place-items-center rounded-lg">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-muted-foreground mt-1.5 leading-relaxed">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal from="right" className="relative">
          <div
            aria-hidden
            className="from-(--aurora-1) via-(--aurora-2) to-(--aurora-3) absolute inset-6 -z-10 rounded-full bg-linear-to-tr opacity-40 blur-3xl"
          />
          <figure className="shadow-lift overflow-hidden rounded-2xl border border-white/10 bg-[#11163b] [--code-key:#a7b0ff] [--code-value:#6fe6d6]">
            <figcaption className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-sm text-white/60">
              projekt.ts
              <span className="flex items-center gap-2">
                <span className="size-2 animate-pulse rounded-full bg-(--code-value)" />
                zapisano
              </span>
            </figcaption>
            <pre className="overflow-x-auto p-6 font-mono text-[0.8125rem] leading-8 sm:p-8 sm:text-sm">
              <code>
                {codeLines.map((line, index) => (
                  <span key={index} className="block" style={{ paddingLeft: line.indent * 20 }}>
                    {line.parts.map(([value, tone]) => (
                      <span key={value} className={tones[tone]}>
                        {value}
                      </span>
                    ))}
                  </span>
                ))}
              </code>
            </pre>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
