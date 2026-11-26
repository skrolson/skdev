import type { FaqItem } from "@/data/faq";

export const treatments = [
  { name: "Przegląd z planem leczenia", group: "Profilaktyka", from: 180 },
  { name: "Higienizacja", group: "Profilaktyka", from: 320 },
  { name: "Lakierowanie zębów", group: "Profilaktyka", from: 150 },
  { name: "Wypełnienie", group: "Leczenie", from: 280 },
  { name: "Leczenie kanałowe", group: "Leczenie", from: 750 },
  { name: "Korona porcelanowa", group: "Protetyka", from: 1900 },
  { name: "Wybielanie nakładkowe", group: "Estetyka", from: 900 },
  { name: "Nakładki ortodontyczne", group: "Ortodoncja", from: 7500 },
  { name: "Wizyta adaptacyjna dziecka", group: "Dzieci", from: 150 },
];

export const visitSteps = [
  { title: "Rozmowa", text: "Opowiadasz o dolegliwościach, obawach i historii zdrowia." },
  { title: "Badanie", text: "Lekarz ogląda zęby i w razie potrzeby zleca zdjęcie." },
  { title: "Plan i koszty", text: "Dostajesz możliwe opcje wraz z cenami, zanim zdecydujesz." },
];

export const dentalFaq: FaqItem[] = [
  {
    question: "Boję się dentysty. Co mogę zrobić?",
    answer:
      "Powiedz o tym przy rezerwacji. Zaplanujemy więcej czasu, omówimy każdy krok i ustalimy znak, którym przerwiesz zabieg.",
  },
  {
    question: "Jak często robić przegląd?",
    answer: "Zwykle co 6–12 miesięcy. Lekarz dopasuje częstotliwość do stanu jamy ustnej.",
  },
  {
    question: "Co zabrać na pierwszą wizytę?",
    answer: "Listę przyjmowanych leków i wcześniejsze zdjęcia zębów, jeśli je masz.",
  },
];
