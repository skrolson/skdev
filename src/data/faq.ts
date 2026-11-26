export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Ile kosztuje strona internetowa?",
    answer:
      "Cena zależy od liczby podstron, funkcji i tego, czy potrzebny jest indywidualny projekt. Po krótkiej rozmowie przygotowuję wycenę z rozpisanym zakresem, więc wiesz, za co płacisz.",
  },
  {
    question: "Jak długo trwa realizacja?",
    answer:
      "Prosta strona firmowa zajmuje zwykle około 3 dni, a sklep lub aplikacja od kilku tygodni wzwyż. Dokładny harmonogram ustalamy przed rozpoczęciem prac.",
  },
  {
    question: "Czy będę mógł samodzielnie edytować treści?",
    answer:
      "Tak. Jeśli treści mają się często zmieniać, podłączam panel CMS i pokazuję, jak z niego korzystać.",
  },
  {
    question: "Czy strona będzie widoczna w Google?",
    answer:
      "Dbam o techniczne podstawy SEO: szybkość, poprawną strukturę, metadane i mapę strony. Pozycja zależy też od treści i konkurencji, więc nie obiecuję konkretnego miejsca w wynikach.",
  },
  {
    question: "Czy pomagasz po wdrożeniu?",
    answer:
      "Tak. Możemy umówić się na stałą opiekę albo rozliczać pojedyncze zmiany wtedy, gdy ich potrzebujesz.",
  },
];
