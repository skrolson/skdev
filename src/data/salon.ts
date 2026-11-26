import { Eye, Flower2, Hand, Sparkles, Sun, Waves, type LucideIcon } from "lucide-react";
import type { FaqItem } from "@/data/faq";
import type { NavItem } from "@/data/navigation";

export const salonBrand = {
  name: "Velora",
  tagline: "Atelier urody",
  address: "ul. Przykładowa 12, Warszawa",
  phone: "+48 000 000 000",
  email: "recepcja@example.com",
  coordinates: { latitude: 52.2319, longitude: 21.0067 },
  hours: [
    { days: "Poniedziałek–piątek", time: "9:00–20:00" },
    { days: "Sobota", time: "9:00–16:00" },
    { days: "Niedziela", time: "zamknięte" },
  ],
};

export const salonNavigation: NavItem[] = [
  { label: "O nas", href: "#o-nas" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Galeria", href: "#galeria" },
  { label: "Zespół", href: "#zespol" },
  { label: "Kontakt", href: "#kontakt" },
];

export type ServiceCategory = "Twarz" | "Dłonie i stopy" | "Brwi i rzęsy" | "Ciało";

export const serviceCategories: ServiceCategory[] = [
  "Twarz",
  "Dłonie i stopy",
  "Brwi i rzęsy",
  "Ciało",
];

export interface SalonService {
  id: string;
  name: string;
  category: ServiceCategory;
  duration: number;
  price: number;
  note: string;
}

export const salonServices: SalonService[] = [
  {
    id: "rytual-nawilzajacy",
    name: "Rytuał nawilżający",
    category: "Twarz",
    duration: 60,
    price: 260,
    note: "Oczyszczanie, serum, maska i masaż",
  },
  {
    id: "oczyszczanie-wodorowe",
    name: "Oczyszczanie wodorowe",
    category: "Twarz",
    duration: 75,
    price: 290,
    note: "Delikatne oczyszczenie i odświeżenie cery",
  },
  {
    id: "masaz-kobido",
    name: "Masaż Kobido",
    category: "Twarz",
    duration: 60,
    price: 240,
    note: "Japoński masaż twarzy, szyi i dekoltu",
  },
  {
    id: "manicure-hybrydowy",
    name: "Manicure hybrydowy",
    category: "Dłonie i stopy",
    duration: 60,
    price: 150,
    note: "Opracowanie skórek i trwały kolor",
  },
  {
    id: "pedicure-spa",
    name: "Pedicure spa",
    category: "Dłonie i stopy",
    duration: 75,
    price: 210,
    note: "Kąpiel, peeling, pielęgnacja i kolor",
  },
  {
    id: "stylizacja-brwi",
    name: "Stylizacja brwi",
    category: "Brwi i rzęsy",
    duration: 45,
    price: 120,
    note: "Regulacja i koloryzacja dopasowana do urody",
  },
  {
    id: "lifting-rzes",
    name: "Lifting rzęs",
    category: "Brwi i rzęsy",
    duration: 60,
    price: 190,
    note: "Uniesienie, przyciemnienie i odżywienie",
  },
  {
    id: "masaz-relaksacyjny",
    name: "Masaż relaksacyjny",
    category: "Ciało",
    duration: 60,
    price: 220,
    note: "Spokojny masaż ciepłymi olejami",
  },
  {
    id: "peeling-ciala",
    name: "Peeling i otulenie ciała",
    category: "Ciało",
    duration: 90,
    price: 310,
    note: "Peeling cukrowy, maska i balsam",
  },
];

export interface SalonOffer {
  title: string;
  description: string;
  serviceId: string;
  icon: LucideIcon;
}

export const salonOffers: SalonOffer[] = [
  {
    title: "Pielęgnacja twarzy",
    description: "Zabiegi dobierane po rozmowie i ocenie potrzeb skóry.",
    serviceId: "rytual-nawilzajacy",
    icon: Sparkles,
  },
  {
    title: "Masaże twarzy",
    description: "Chwila wyciszenia i przyjemne uczucie rozluźnienia.",
    serviceId: "masaz-kobido",
    icon: Flower2,
  },
  {
    title: "Dłonie i stopy",
    description: "Staranny manicure i pedicure w spokojnym tempie.",
    serviceId: "manicure-hybrydowy",
    icon: Hand,
  },
  {
    title: "Brwi i rzęsy",
    description: "Naturalny efekt, który podkreśla spojrzenie.",
    serviceId: "lifting-rzes",
    icon: Eye,
  },
  {
    title: "Rytuały dla ciała",
    description: "Masaże i peelingi na czas tylko dla siebie.",
    serviceId: "masaz-relaksacyjny",
    icon: Waves,
  },
  {
    title: "Przed ważnym dniem",
    description: "Plan pielęgnacji rozpisany przed ślubem lub uroczystością.",
    serviceId: "oczyszczanie-wodorowe",
    icon: Sun,
  },
];

export interface Specialist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  categories: ServiceCategory[];
}

export const specialists: Specialist[] = [
  {
    id: "maja",
    name: "Maja",
    role: "Kosmetolożka",
    bio: "Prowadzi konsultacje i układa plany pielęgnacji twarzy.",
    image: "/images/salon/team-1.svg",
    categories: ["Twarz", "Ciało"],
  },
  {
    id: "oliwia",
    name: "Oliwia",
    role: "Stylistka paznokci",
    bio: "Lubi czyste formy, mleczne odcienie i precyzyjne wykończenie.",
    image: "/images/salon/team-2.svg",
    categories: ["Dłonie i stopy"],
  },
  {
    id: "nadia",
    name: "Nadia",
    role: "Stylistka brwi i rzęs",
    bio: "Dobiera kształt i kolor tak, by efekt wyglądał naturalnie.",
    image: "/images/salon/team-3.svg",
    categories: ["Brwi i rzęsy", "Twarz"],
  },
  {
    id: "lena",
    name: "Lena",
    role: "Masażystka",
    bio: "Dba o spokojny rytm zabiegów i komfort na każdym etapie.",
    image: "/images/salon/team-4.svg",
    categories: ["Ciało", "Twarz"],
  },
];

export const galleryItems = [
  { src: "/images/salon/gallery-1.svg", title: "Recepcja", alt: "Ilustracja recepcji salonu" },
  { src: "/images/salon/gallery-2.svg", title: "Gabinet twarzy", alt: "Ilustracja gabinetu" },
  {
    src: "/images/salon/gallery-3.svg",
    title: "Strefa dłoni",
    alt: "Ilustracja stanowiska manicure",
  },
  {
    src: "/images/salon/gallery-4.svg",
    title: "Kosmetyki",
    alt: "Ilustracja flakonów z kosmetykami",
  },
  {
    src: "/images/salon/gallery-5.svg",
    title: "Pokój masażu",
    alt: "Ilustracja pokoju masażu",
  },
  { src: "/images/salon/gallery-6.svg", title: "Detale", alt: "Ilustracja kwiatów i świec" },
];

export const salonReviews = [
  {
    quote: "Spokojna atmosfera, punktualność i dokładne omówienie zabiegu przed rozpoczęciem.",
    author: "Przykładowa klientka 1",
    service: "Rytuał nawilżający",
  },
  {
    quote: "Rezerwacja zajęła chwilę, a kolor paznokci udało się dobrać dokładnie do sukienki.",
    author: "Przykładowa klientka 2",
    service: "Manicure hybrydowy",
  },
  {
    quote: "Brwi wyglądają naturalnie. Dostałam też proste wskazówki dotyczące pielęgnacji.",
    author: "Przykładowa klientka 3",
    service: "Stylizacja brwi",
  },
];

export const salonFaq: FaqItem[] = [
  {
    question: "Czy muszę wiedzieć, który zabieg wybrać?",
    answer:
      "Nie. Wybierz konsultację przy rezerwacji w uwagach lub zadzwoń, a pomożemy dopasować zabieg do Twoich potrzeb.",
  },
  {
    question: "Jak odwołać albo przełożyć wizytę?",
    answer: "Zadzwoń lub napisz co najmniej 24 godziny przed terminem.",
  },
  {
    question: "Jak przygotować się do zabiegu na twarz?",
    answer:
      "Przyjdź kilka minut wcześniej i poinformuj o alergiach, przyjmowanych lekach oraz niedawnych zabiegach. W razie wątpliwości skonsultuj się z lekarzem.",
  },
  {
    question: "Czy można kupić voucher?",
    answer: "Tak, voucher można zamówić w salonie na wybraną kwotę lub konkretny zabieg.",
  },
  {
    question: "Jakie formy płatności są dostępne?",
    answer: "Karta, płatność telefonem i gotówka.",
  },
];
