import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <h2
        id={id}
        className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">{description}</p>
      ) : null}
    </Reveal>
  );
}
