import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Polityka prywatności",
    description: "Informacje o przetwarzaniu danych przesyłanych przez formularz kontaktowy.",
    path: "/polityka-prywatnosci",
  }),
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Administrator danych",
    text: `Administratorem danych jest ${siteConfig.author} (uzupełnij pełne dane firmy lub osoby). Kontakt: ${siteConfig.email}.`,
  },
  {
    title: "Jakie dane i w jakim celu",
    text: "Formularz kontaktowy zbiera imię, adres e-mail, temat i treść wiadomości. Dane służą wyłącznie do udzielenia odpowiedzi i prowadzenia rozmów o współpracy.",
  },
  {
    title: "Podstawa i czas przetwarzania",
    text: "Podstawą jest zgoda oraz działania podejmowane na Twoją prośbę przed zawarciem umowy. Uzupełnij okres przechowywania korespondencji.",
  },
  {
    title: "Odbiorcy danych",
    text: "Dane mogą być przetwarzane przez dostawców hostingu i poczty. Wymień usługi, z których faktycznie korzystasz (np. Vercel, Resend).",
  },
  {
    title: "Twoje prawa",
    text: "Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia, wycofania zgody oraz złożenia skargi do Prezesa UODO.",
  },
  {
    title: "Pamięć przeglądarki i mapy",
    text: "Strona zapamiętuje w przeglądarce wybrany motyw, a demo sklepu także zawartość koszyka. Mapy OpenStreetMap ładują się dopiero po kliknięciu.",
  },
];

export default function PrivacyPage() {
  return (
    <article className="container-page max-w-3xl pt-36 pb-24">
      <h1 className="text-5xl font-bold tracking-tight">Polityka prywatności</h1>
      <p className="bg-accent text-accent-foreground mt-8 rounded-md p-4 text-sm">
        To szablon. Przed publikacją uzupełnij go o własne dane i sprawdź z osobą znającą
        przepisy.
      </p>
      {sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">{section.text}</p>
        </section>
      ))}
    </article>
  );
}
