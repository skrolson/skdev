import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SalonHeadingProps {
  id: string;
  title: string;
  description?: string;
  className?: string;
}

export function SalonHeading({ id, title, description, className }: SalonHeadingProps) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      <span aria-hidden className="mx-auto mb-6 block h-12 w-px bg-(--gold)" />
      <h2 id={id} className="text-5xl leading-none font-medium sm:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-5 text-lg font-light leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
