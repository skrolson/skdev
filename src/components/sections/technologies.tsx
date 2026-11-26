import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { allTechnologies, technologyGroups } from "@/data/technologies";

export function Technologies() {
  return (
    <section id="technologie" aria-labelledby="tech-title" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="tech-title"
          align="center"
          title="Technologie dobrane do zadania"
          description="Sprawdzone narzędzia, które łatwo rozwijać i przekazać dalej."
        />
      </div>

      {/* Dekoracyjny pasek, treść jest powtórzona w kartach poniżej. */}
      <div
        aria-hidden
        className="group mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex gap-3 pr-3">
              {allTechnologies.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="glass font-display flex items-center gap-3 rounded-full px-6 py-3 text-lg font-semibold whitespace-nowrap"
                >
                  <Icon className="text-primary size-5" />
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="container-page mt-16 space-y-14">
        {technologyGroups.map((group) => (
          <div key={group.title} className="grid gap-6 lg:grid-cols-[15rem_1fr]">
            <Reveal>
              <h3 className="text-2xl font-semibold">{group.title}</h3>
              <p className="text-muted-foreground mt-2">{group.summary}</p>
            </Reveal>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
              {group.items.map(({ name, use, icon: Icon }, index) => (
                <li key={name}>
                  <Reveal delay={index * 0.05} className="h-full">
                    <SpotlightCard className="group/card hover:border-ring/50 h-full p-5 transition-all duration-300 hover:-translate-y-1">
                      <Icon
                        aria-hidden
                        className="text-primary size-6 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:-rotate-6"
                      />
                      <h4 className="mt-5 font-semibold">{name}</h4>
                      <p className="text-muted-foreground mt-1 text-sm leading-snug">{use}</p>
                    </SpotlightCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
