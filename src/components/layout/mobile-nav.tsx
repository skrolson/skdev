"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavItem } from "@/data/navigation";

interface MobileNavProps {
  items: NavItem[];
  cta: NavItem;
  title: string;
  className?: string;
  contentClassName?: string;
}

export function MobileNav({ items, cta, title, className, contentClassName }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button type="button" variant="ghost" size="icon" aria-label="Otwórz menu">
            <Menu className="size-5!" />
          </Button>
        </SheetTrigger>
        <SheetContent className={contentClassName}>
          <SheetTitle className="font-display text-xl font-semibold">{title}</SheetTitle>
          <SheetDescription className="sr-only">Nawigacja po stronie</SheetDescription>
          <nav aria-label="Menu mobilne" className="flex flex-col">
            {items.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display animate-rise border-b py-4 text-2xl font-medium"
                style={{ animationDelay: `${80 + index * 45}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="lg" className="mt-auto">
            <Link href={cta.href} onClick={() => setOpen(false)}>
              {cta.label}
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
