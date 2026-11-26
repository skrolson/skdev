import { Hammer, House, Ruler, Warehouse, type LucideIcon } from "lucide-react";

export const constructionServices: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Domy jednorodzinne",
    text: "Od fundamentów po stan deweloperski lub pod klucz.",
    icon: House,
  },
  {
    title: "Hale i magazyny",
    text: "Konstrukcje stalowe i żelbetowe dla małych firm.",
    icon: Warehouse,
  },
  {
    title: "Remonty generalne",
    text: "Instalacje, ściany, dachy i wykończenia.",
    icon: Hammer,
  },
  {
    title: "Nadzór i kosztorys",
    text: "Sprawdzenie projektu, budżetu i jakości prac.",
    icon: Ruler,
  },
];

export const buildStages = [
  { title: "Wizja lokalna", text: "Oglądamy działkę, dokumenty i dojazd.", time: "1 tydzień" },
  {
    title: "Kosztorys i umowa",
    text: "Zakres, etapy płatności i terminy.",
    time: "2 tygodnie",
  },
  { title: "Stan surowy", text: "Fundamenty, ściany, stropy i dach.", time: "4–6 miesięcy" },
  {
    title: "Instalacje i wykończenie",
    text: "Okna, media, tynki, posadzki.",
    time: "3–5 miesięcy",
  },
  {
    title: "Odbiór",
    text: "Przegląd, lista poprawek i przekazanie kluczy.",
    time: "1 tydzień",
  },
];

/** Stawki demonstracyjne za metr kwadratowy (zł). */
export const buildStandards = [
  { id: "surowy", label: "Stan surowy", rate: 3200 },
  { id: "deweloperski", label: "Deweloperski", rate: 5200 },
  { id: "klucz", label: "Pod klucz", rate: 7100 },
];
