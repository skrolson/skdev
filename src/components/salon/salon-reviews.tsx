import { Reveal } from "@/components/motion/reveal";
import { SalonHeading } from "@/components/salon/salon-heading";
import { Badge } from "@/components/ui/badge";
import { salonReviews } from "@/data/salon";

export function SalonReviews() {
  return (
    <section id="opinie" aria-labelledby="reviews-heading" className="py-24 sm:py-32">
      <div className="container-page">
        <SalonHeading
          id="reviews-heading"
          title="Opinie"
          description="Przykładowe treści pokazujące układ sekcji. To nie są prawdziwe recenzje."
        />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {salonReviews.map((review, index) => (
            <li key={review.author}>
              <Reveal delay={index * 0.1} className="h-full">
                <figure className="bg-card shadow-soft flex h-full flex-col items-center rounded-2xl border p-8 text-center">
                  <Badge variant="accent">Opinia przykładowa</Badge>
                  <blockquote className="font-display mt-6 flex-1 text-3xl leading-tight italic">
                    „{review.quote}”
                  </blockquote>
                  <figcaption className="mt-7 text-sm">
                    <span className="block font-medium">{review.author}</span>
                    <span className="text-muted-foreground block">{review.service}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
