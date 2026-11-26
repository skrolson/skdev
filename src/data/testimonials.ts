export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  /**
   * `true` oznacza treść przykładową — strona wyraźnie ją tak opisuje.
   * Ustaw `false` dopiero po wstawieniu prawdziwej opinii za zgodą autora.
   */
  isSample: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tu pojawi się opinia o przebiegu współpracy: kontakcie, terminach i tym, jak wyglądało zgłaszanie poprawek.",
    author: "Klient A",
    role: "Branża usługowa",
    isSample: true,
  },
  {
    quote:
      "Tu pojawi się opinia o efekcie: co zmieniło się po uruchomieniu strony i co klienci firmy mówią o nowym wyglądzie.",
    author: "Klient B",
    role: "Gastronomia",
    isSample: true,
  },
  {
    quote:
      "Tu pojawi się opinia o wsparciu po starcie: jak szybko wprowadzane są zmiany i jak łatwo obsługiwać stronę.",
    author: "Klient C",
    role: "Handel internetowy",
    isSample: true,
  },
];
