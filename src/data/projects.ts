export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  demoUrl: string;
  /** Podmień na adres repozytorium konkretnego projektu. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "salon-kosmetyczny",
    title: "Salon kosmetyczny",
    category: "Strona z rezerwacją wizyt",
    description:
      "Kompletna strona salonu premium: oferta, cennik, galeria, zespół i wieloetapowa rezerwacja wizyty.",
    highlights: ["Rezerwacja w 4 krokach", "Cennik z kategoriami", "Galeria z podglądem"],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/images/projects/salon-kosmetyczny.webp",
    imageAlt: "Strona główna demonstracyjnego salonu kosmetycznego",
    demoUrl: "/projekty/salon-kosmetyczny",
    featured: true,
  },
  {
    slug: "restauracja",
    title: "Restauracja",
    category: "Strona gastronomiczna",
    description:
      "Nastrojowa strona restauracji z sezonowym menu, opowieścią o kuchni i godzinami otwarcia.",
    highlights: ["Menu z zakładkami", "Ciemna, ciepła oprawa"],
    technologies: ["Next.js", "React", "Tailwind"],
    image: "/images/projects/restauracja.webp",
    imageAlt: "Strona główna demonstracyjnej restauracji",
    demoUrl: "/projekty/restauracja",
  },
  {
    slug: "firma-budowlana",
    title: "Firma budowlana",
    category: "Strona firmowa",
    description:
      "Konkretna prezentacja usług i etapów budowy z kalkulatorem orientacyjnego kosztu.",
    highlights: ["Kalkulator wyceny", "Oś etapów prac"],
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/projects/firma-budowlana.webp",
    imageAlt: "Strona główna demonstracyjnej firmy budowlanej",
    demoUrl: "/projekty/firma-budowlana",
  },
  {
    slug: "gabinet-stomatologiczny",
    title: "Gabinet stomatologiczny",
    category: "Strona medyczna",
    description:
      "Spokojna, czytelna strona gabinetu z zakresem leczenia, przebiegiem wizyty i odpowiedziami na pytania.",
    highlights: ["Wyszukiwarka zabiegów", "Wysoka czytelność"],
    technologies: ["Next.js", "React", "Tailwind"],
    image: "/images/projects/gabinet-stomatologiczny.webp",
    imageAlt: "Strona główna demonstracyjnego gabinetu stomatologicznego",
    demoUrl: "/projekty/gabinet-stomatologiczny",
  },
  {
    slug: "sklep-internetowy",
    title: "Sklep internetowy",
    category: "E-commerce",
    description:
      "Butikowy sklep z ceramiką: filtrowanie produktów i działający koszyk zapamiętywany w przeglądarce.",
    highlights: ["Koszyk z sumowaniem", "Filtry kategorii"],
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/projects/sklep-internetowy.webp",
    imageAlt: "Strona główna demonstracyjnego sklepu internetowego",
    demoUrl: "/projekty/sklep-internetowy",
  },
];
