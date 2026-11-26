"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetTitle = SheetPrimitive.Title;
const SheetDescription = SheetPrimitive.Description;

/** Panel wysuwany z prawej strony (menu mobilne, koszyk). */
function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="animate-fade fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      <SheetPrimitive.Content
        className={cn(
          "bg-popover text-popover-foreground shadow-lift animate-rise fixed inset-y-0 right-0 z-50 flex w-[min(100%,26rem)] flex-col gap-6 overflow-y-auto border-l p-6",
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className="hover:bg-muted absolute top-4 right-4 grid size-10 place-items-center rounded-full transition-colors"
          aria-label="Zamknij"
        >
          <X className="size-5" />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

export { Sheet, SheetTrigger, SheetClose, SheetTitle, SheetDescription, SheetContent };
