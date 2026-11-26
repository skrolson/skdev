"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-dvh place-items-center p-6 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Nie udało się wyświetlić strony</h1>
        <p className="text-muted-foreground mt-3 max-w-md">
          Spróbuj załadować ją ponownie. Jeśli problem wróci, odśwież kartę przeglądarki.
        </p>
        <Button type="button" size="lg" className="mt-8" onClick={reset}>
          <RotateCcw />
          Spróbuj ponownie
        </Button>
      </div>
    </main>
  );
}
