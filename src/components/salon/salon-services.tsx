import { Reveal } from "@/components/motion/reveal";
import { BookButton } from "@/components/salon/booking/book-button";
import { SalonHeading } from "@/components/salon/salon-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { salonOffers } from "@/data/salon";

export function SalonServices() {
  return (
    <section
      id="uslugi"
      aria-labelledby="services-heading"
      className="bg-muted/60 py-24 sm:py-32"
    >
      <div className="container-page">
        <SalonHeading
          id="services-heading"
          title="Usługi"
          description="Wybierz obszar, o który chcesz zadbać."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {salonOffers.map(({ title, description, serviceId, icon: Icon }, index) => (
            <li key={title}>
              <Reveal delay={(index % 3) * 0.1} className="h-full">
                <SpotlightCard className="group shadow-soft hover:shadow-lift flex h-full flex-col items-center rounded-t-[10rem] px-7 pt-12 pb-8 text-center transition-all duration-500 hover:-translate-y-2">
                  <span className="grid size-16 place-items-center rounded-full border border-(--gold) text-(--gold) transition-transform duration-500 group-hover:rotate-12">
                    <Icon aria-hidden className="size-7" strokeWidth={1.3} />
                  </span>
                  <h3 className="mt-7 text-3xl font-semibold">{title}</h3>
                  <p className="text-muted-foreground mt-3 mb-7 font-light leading-relaxed">
                    {description}
                  </p>
                  <BookButton
                    serviceId={serviceId}
                    variant="outline"
                    size="sm"
                    className="mt-auto"
                    aria-label={`Umów wizytę: ${title}`}
                  >
                    Umów wizytę
                  </BookButton>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
