import { Compass, PenTool, CodeXml, Rocket, LifeBuoy, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
  outcome: string;
  duration: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Rozmowa o celu",
    description:
      "Poznaję Twoją firmę, klientów i to, co strona ma załatwiać. Ustalamy zakres i priorytety.",
    outcome: "Otrzymujesz: zakres, harmonogram i wycenę",
    duration: "1–3 dni",
    icon: Compass,
  },
  {
    title: "Projekt interfejsu",
    description:
      "Przygotowuję strukturę i wygląd kluczowych ekranów. Poprawiamy je, zanim powstanie kod.",
    outcome: "Otrzymujesz: klikalny projekt",
    duration: "około tygodnia",
    icon: PenTool,
  },
  {
    title: "Programowanie",
    description:
      "Buduję stronę etapami i udostępniam podgląd online, więc na bieżąco widzisz postępy.",
    outcome: "Otrzymujesz: działającą wersję testową",
    duration: "1–4 tygodnie",
    icon: CodeXml,
  },
  {
    title: "Testy i publikacja",
    description:
      "Sprawdzam urządzenia mobilne, szybkość, SEO i formularze, po czym uruchamiam stronę.",
    outcome: "Otrzymujesz: stronę pod własną domeną",
    duration: "2–4 dni",
    icon: Rocket,
  },
  {
    title: "Opieka po starcie",
    description:
      "Pomagam wprowadzać zmiany, aktualizuję zależności i podpowiadam kolejne usprawnienia.",
    outcome: "Otrzymujesz: wsparcie i instrukcję obsługi",
    duration: "według ustaleń",
    icon: LifeBuoy,
  },
];
