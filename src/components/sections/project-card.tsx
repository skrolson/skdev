import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { SmartImage } from "@/components/shared/smart-image";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const { featured } = project;

  return (
    <SpotlightCard
      className={cn(
        "group shadow-soft hover:shadow-lift flex h-full flex-col overflow-hidden rounded-2xl p-2 transition-all duration-500 hover:-translate-y-1",
        featured && "lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center",
      )}
    >
      <Link href={project.demoUrl} tabIndex={-1} aria-hidden>
        <SmartImage
          src={project.image}
          alt=""
          sizes={
            featured ? "(min-width: 1024px) 660px, 94vw" : "(min-width: 768px) 560px, 94vw"
          }
          wrapperClassName="aspect-[16/10] rounded-xl"
          className="object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </Link>
      <div className={cn("flex flex-1 flex-col p-4 sm:p-5", featured && "lg:p-10")}>
        <p className="text-primary text-sm font-semibold">{project.category}</p>
        <h3
          className={cn(
            "mt-2 text-2xl font-semibold tracking-tight",
            featured && "lg:text-4xl",
          )}
        >
          {project.title}
        </h3>
        <p className="text-muted-foreground mt-3 leading-relaxed">{project.description}</p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2">
              <Check aria-hidden className="text-primary size-4" />
              {highlight}
            </li>
          ))}
        </ul>
        <ul aria-label="Technologie" className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge variant="outline">{technology}</Badge>
            </li>
          ))}
        </ul>
        <div className={cn("mt-auto flex flex-wrap gap-3 pt-7", featured && "lg:mt-3")}>
          <Button asChild>
            <Link href={project.demoUrl} aria-label={`Live Demo: ${project.title}`}>
              <ExternalLink />
              Live Demo
            </Link>
          </Button>
        </div>
      </div>
    </SpotlightCard>
  );
}
