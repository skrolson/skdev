import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center p-6 text-center">
      <div className="animate-rise flex flex-col items-center">
        <Logo />
        <p className="font-display text-primary mt-10 text-8xl font-bold">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Nie ma takiej strony</h1>
        <p className="text-muted-foreground mt-3 max-w-md">
          Adres mógł się zmienić albo zawiera literówkę. Przejdź na stronę główną i wybierz
          sekcję z menu.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Wróć na stronę główną</Link>
        </Button>
      </div>
    </main>
  );
}
