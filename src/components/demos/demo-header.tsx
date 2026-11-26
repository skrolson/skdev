import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface DemoHeaderProps {
  brand: string;
  homeHref: string;
  items: NavItem[];
  cta: NavItem;
  /** Klasy motywu przekazywane do menu mobilnego. */
  themeClassName: string;
  themeToggle?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function DemoHeader({
  brand,
  homeHref,
  items,
  cta,
  themeClassName,
  themeToggle = true,
  children,
  className,
}: DemoHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3">
      <div
        className={cn(
          "glass shadow-soft mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-xl px-4 sm:px-6",
          className,
        )}
      >
        <Link href={homeHref} className="font-display text-2xl font-semibold tracking-tight">
          {brand}
        </Link>
        <nav aria-label="Nawigacja" className="hidden items-center gap-6 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          {themeToggle && <ThemeToggle />}
          {children}
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={cta.href}>{cta.label}</a>
          </Button>
          <MobileNav
            className="lg:hidden"
            items={items}
            cta={cta}
            title={brand}
            contentClassName={themeClassName}
          />
        </div>
      </div>
    </header>
  );
}
