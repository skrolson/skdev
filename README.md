# skdev — portfolio programisty

Portfolio w stylu software house'u z pięcioma demonstracyjnymi realizacjami.
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, Lucide.

## Uruchomienie

Wymagany Node.js 20.9 lub nowszy oraz dostęp do internetu (paczki npm i czcionki Google
pobierane przez `next/font` podczas uruchamiania i budowania).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Polecenie           | Działanie                      |
| ------------------- | ------------------------------ |
| `npm run build`     | build produkcyjny              |
| `npm run start`     | uruchomienie zbudowanej strony |
| `npm run lint`      | ESLint                         |
| `npm run typecheck` | kontrola typów TypeScript      |
| `npm run format`    | Prettier                       |

Po pierwszym `npm install` dodaj do repozytorium plik `package-lock.json`.

## Strony

| Adres                               | Zawartość                       |
| ----------------------------------- | ------------------------------- |
| `/`                                 | portfolio                       |
| `/projekty/salon-kosmetyczny`       | salon z rezerwacją wizyty       |
| `/projekty/restauracja`             | restauracja z menu              |
| `/projekty/firma-budowlana`         | firma budowlana z kalkulatorem  |
| `/projekty/gabinet-stomatologiczny` | gabinet z wyszukiwarką zabiegów |
| `/projekty/sklep-internetowy`       | sklep z koszykiem               |
| `/polityka-prywatnosci`             | szablon polityki prywatności    |

## Struktura

```
src/
├── app/            trasy, metadane, API, ikony
│   ├── (site)/     portfolio (wspólny nagłówek i stopka)
│   ├── projekty/   strony demonstracyjne
│   └── api/contact wysyłka formularza
├── components/
│   ├── ui/         komponenty shadcn/ui
│   ├── layout/     nagłówek, stopka, menu mobilne
│   ├── motion/     animacje wielokrotnego użytku
│   ├── shared/     formularz, mapa, obraz ze szkieletem, motyw
│   ├── sections/   sekcje strony głównej
│   ├── salon/      salon kosmetyczny i kreator rezerwacji
│   └── demos/      pozostałe realizacje
├── config/site.ts  nazwa, opis i kontakt
├── data/           teksty, projekty, cenniki, FAQ
├── hooks/          logika React
├── lib/            narzędzia, walidacja, SEO, czcionki
└── styles/         motywy realizacji demo
public/             ilustracje, okładki projektów, obrazy Open Graph
```

## Przed publikacją

- [ ] `src/config/site.ts`: nazwa, autor, e-mail, lokalizacja, linki GitHub i LinkedIn.
- [ ] `src/data/projects.ts`: `githubUrl` każdego projektu (teraz prowadzi na github.com).
- [ ] `src/data/testimonials.ts`: prawdziwe opinie za zgodą autorów i `isSample: false`
      (albo usuń sekcję `<Testimonials />` ze strony głównej).
- [ ] Sprawdź, czy teksty (O mnie, Proces, FAQ, „Przyjmuję nowe projekty”) odpowiadają
      temu, co faktycznie oferujesz.
- [ ] Uzupełnij politykę prywatności.
- [ ] Podmień `public/og/home.jpg`, jeśli zmieniasz nazwę lub nagłówek.
- [ ] Skonfiguruj wysyłkę formularza (poniżej).

## Formularz kontaktowy

Bez konfiguracji formularz sprawdza dane i uczciwie informuje, że wiadomość nie dotarła,
pokazując adres e-mail. Aby włączyć wysyłkę przez [Resend](https://resend.com), ustaw
zmienne z `.env.example` (lokalnie w `.env.local`, na Vercel w ustawieniach projektu):

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=ty@twojadomena.pl
CONTACT_FROM_EMAIL=Formularz <formularz@twojadomena.pl>
```

Formularze i rezerwacja na stronach demo niczego nie wysyłają.

## Wdrożenie na Vercel

1. Wrzuć projekt do repozytorium Git.
2. W Vercel wybierz **Add New → Project** i wskaż repozytorium.
3. Zostaw domyślne ustawienia i kliknij **Deploy**.

Adres do SEO i Open Graph jest wykrywany automatycznie. Przy własnej domenie możesz
wymusić go zmienną `NEXT_PUBLIC_SITE_URL`. Przed użyciem komercyjnym sprawdź warunki
wybranego planu Vercel.

## Wersja Next.js

Projekt używa `next@15.5.29` (wydanie z poprawkami bezpieczeństwa z listopada 2026).
Poprawki dla linii 15 mają być publikowane do 31 stycznia 2027, więc zaplanuj
przejście na Next.js 16.

## Grafiki

Ilustracje SVG w `public/images` to materiały zastępcze. Okładki projektów w
`public/images/projects` to zrzuty podglądu stron demo wykonane z czcionkami zastępczymi.
Po uruchomieniu możesz je zastąpić własnymi zrzutami (1600×1000, WebP).
