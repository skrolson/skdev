import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const hasSamples = testimonials.some((item) => item.isSample);

  return (
    <section id="opinie" aria-labelledby="testimonials-title" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="testimonials-title"
          align="center"
          title="Opinie klientów"
          description={
            hasSamples
              ? "To miejsce na rekomendacje. Poniższe karty zawierają treść przykładową."
              : "Tak o współpracy mówią osoby, dla których pracowałem."
          }
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={item.author}>
              <Reveal delay={index * 0.1} className="h-full">
                <SpotlightCard className="shadow-soft h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                  <figure className="flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <Quote aria-hidden className="text-primary size-8" />
                      {item.isSample && <Badge variant="accent">Treść przykładowa</Badge>}
                    </div>
                    <blockquote className="mt-6 flex-1 text-lg leading-relaxed">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3 border-t pt-5">
                      <span
                        aria-hidden
                        className="from-(--aurora-1) to-(--aurora-2) size-10 rounded-full bg-linear-to-br"
                      />
                      <span>
                        <span className="block font-semibold">{item.author}</span>
                        <span className="text-muted-foreground block text-sm">{item.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
