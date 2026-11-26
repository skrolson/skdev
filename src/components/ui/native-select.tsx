import * as React from "react";
import { ChevronDown } from "lucide-react";
import { fieldStyles } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function NativeSelect({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <span className="relative block">
      <select className={cn(fieldStyles, "h-12 appearance-none pr-10", className)} {...props}>
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2"
      />
    </span>
  );
}

export { NativeSelect };
