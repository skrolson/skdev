import { cn } from "@/lib/utils";

/** Przycisk wyboru w kreatorze rezerwacji. */
export function OptionButton({
  selected,
  className,
  ...props
}: React.ComponentProps<"button"> & { selected: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "bg-card hover:border-primary rounded-lg border p-4 text-left transition-all duration-300",
        "disabled:text-muted-foreground disabled:hover:border-border disabled:cursor-not-allowed disabled:line-through disabled:opacity-50",
        selected && "border-primary ring-primary bg-secondary ring-1",
        className,
      )}
      {...props}
    />
  );
}
