import { Reveal } from "@/components/motion/reveal";
import { SalonHeading } from "@/components/salon/salon-heading";
import { SmartImage } from "@/components/shared/smart-image";
import { specialists } from "@/data/salon";

export function SalonTeam() {
  return (
    <section id="zespol" aria-labelledby="team-heading" className="bg-muted/60 py-24 sm:py-32">
      <div className="container-page">
        <SalonHeading
          id="team-heading"
          title="Zespół"
          description="Poznaj osoby, które zaopiekują się Tobą podczas wizyty."
        />
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {specialists.map((person, index) => (
            <li key={person.id}>
              <Reveal delay={index * 0.08}>
                <article className="group text-center">
                  <SmartImage
                    src={person.image}
                    alt={`Ilustrowany portret: ${person.name}`}
                    sizes="(min-width: 1024px) 270px, 45vw"
                    wrapperClassName="aspect-[3/4] rounded-t-full rounded-b-xl shadow-soft"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <h3 className="mt-5 text-3xl font-semibold">{person.name}</h3>
                  <p className="text-sm font-medium text-(--gold)">{person.role}</p>
                  <p className="text-muted-foreground mt-2 text-sm font-light">{person.bio}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
