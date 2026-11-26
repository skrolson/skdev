"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

function DialogContent({
  className,
  overlayClassName,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & { overlayClassName?: string }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(
          "animate-fade fixed inset-0 z-50 bg-black/65 backdrop-blur-sm",
          overlayClassName,
        )}
      />
      <DialogPrimitive.Content
        className={cn(
          "bg-popover text-popover-foreground shadow-lift animate-fade fixed top-1/2 left-1/2 z-50 max-h-[92dvh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border p-4 sm:p-6",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="bg-popover/80 hover:bg-muted absolute top-3 right-3 grid size-9 place-items-center rounded-full border backdrop-blur transition-colors"
          aria-label="Zamknij"
        >
          <X className="size-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export { Dialog, DialogTrigger, DialogClose, DialogTitle, DialogDescription, DialogContent };
