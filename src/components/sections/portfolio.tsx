import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="portfolio-title"
          title="Realizacje, które możesz przeklikać"
          description="Pięć projektów demonstracyjnych dla różnych branż. Każdy ma działającą wersję online."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug} className={cn(project.featured && "md:col-span-2")}>
              <Reveal
                delay={project.featured ? 0 : ((index - 1) % 2) * 0.12}
                className="h-full"
              >
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
