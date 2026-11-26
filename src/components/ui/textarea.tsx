import * as React from "react";
import { fieldStyles } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea className={cn(fieldStyles, "min-h-32 resize-y py-3", className)} {...props} />
  );
}

export { Textarea };
