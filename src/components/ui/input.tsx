import * as React from "react";
import { cn } from "@/lib/utils";

export const fieldStyles =
  "border-input bg-card/70 text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/25 aria-[invalid=true]:border-destructive w-full rounded-md border px-4 text-base transition-colors outline-none focus-visible:ring-4 disabled:opacity-50 sm:text-sm";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldStyles, "h-12", className)} {...props} />;
}

export { Input };
