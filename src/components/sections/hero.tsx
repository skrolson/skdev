import Link from "next/link";
import { Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/sections/aurora-background";
import { HeroShowcase } from "@/components/sections/hero-showcase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * Wejście hero korzysta z animacji CSS, aby nagłówek był widoczny
 * od razu, bez czekania na JavaScript (lepsze LCP).
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate pt-32 pb-20 sm:pt-44">
      <AuroraBackground />
      <div className="container-page text-center">
        <Badge variant="glass" className="animate-rise px-4 py-2 text-sm">
          <Sparkles aria-hidden className="text-primary size-4" />
          Przyjmuję nowe projekty
        </Badge>
        <h1
          id="hero-title"
          className="animate-rise mx-auto mt-7 max-w-5xl text-[clamp(2.75rem,8.4vw,6.75rem)] leading-[0.96] font-bold tracking-[-0.045em] [animation-delay:80ms]"
        >
          Strony i aplikacje, które pracują na Twoją firmę
        </h1>
        <p className="text-muted-foreground animate-rise mx-auto mt-7 max-w-2xl text-lg leading-relaxed [animation-delay:180ms] sm:text-xl">
          Projektuję i programuję od pierwszego szkicu po wdrożenie. Dostajesz szybki,
          dopracowany produkt i jeden kontakt przez cały projekt.
        </p>
        <div className="animate-rise mt-10 flex flex-col justify-center gap-3 [animation-delay:280ms] sm:flex-row">
          <Button asChild size="lg">
            <Link href="#kontakt">Porozmawiajmy o projekcie</Link>
          </Button>
          <Button asChild size="lg" variant="glass">
            <Link href="#portfolio">Zobacz realizacje</Link>
          </Button>
        </div>
      </div>
      <div className="animate-rise mx-auto mt-16 max-w-6xl px-4 [animation-delay:420ms] sm:mt-24 sm:px-8">
        <HeroShowcase />
      </div>
    </section>
  );
}
