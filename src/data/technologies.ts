import {
  Atom,
  Braces,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Leaf,
  Palette,
  Server,
  SquareTerminal,
  Triangle,
  Type,
  Wind,
  type LucideIcon,
} from "lucide-react";

export interface Technology {
  name: string;
  use: string;
  icon: LucideIcon;
}

export interface TechnologyGroup {
  title: string;
  summary: string;
  items: Technology[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    summary: "To, co widzi i klika użytkownik.",
    items: [
      { name: "HTML", use: "Semantyka i dostępność", icon: FileCode2 },
      { name: "CSS", use: "Układy, animacje, responsywność", icon: Palette },
      { name: "JavaScript", use: "Interakcje w przeglądarce", icon: Braces },
      { name: "TypeScript", use: "Bezpieczne typy w całym projekcie", icon: Type },
      { name: "React", use: "Komponentowe interfejsy", icon: Atom },
      { name: "Next.js", use: "SSR, SEO i szybkie ładowanie", icon: Triangle },
      { name: "Tailwind", use: "Spójny system stylów", icon: Wind },
    ],
  },
  {
    title: "Backend i dane",
    summary: "Logika, API i przechowywanie informacji.",
    items: [
      { name: "Node.js", use: "API i integracje", icon: Server },
      { name: "Python", use: "Automatyzacje i usługi", icon: SquareTerminal },
      { name: "PostgreSQL", use: "Dane relacyjne", icon: Database },
      { name: "MongoDB", use: "Dane dokumentowe", icon: Leaf },
    ],
  },
  {
    title: "Narzędzia",
    summary: "Powtarzalne środowisko i historia zmian.",
    items: [
      { name: "Docker", use: "Kontenery i wdrożenia", icon: Container },
      { name: "Git", use: "Wersjonowanie i przegląd kodu", icon: GitBranch },
    ],
  },
];

export const allTechnologies = technologyGroups.flatMap((group) => group.items);
