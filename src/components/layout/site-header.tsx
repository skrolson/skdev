"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = mainNavigation.map((item) => item.href.split("#")[1] ?? "");
const contactLink = { label: "Napisz do mnie", href: "/#kontakt" };

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-transparent px-3 pl-4 transition-all duration-500",
          scrolled && "glass shadow-soft",
        )}
      >
        <Logo />
        <nav aria-label="Główna nawigacja" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => {
            const isActive = item.href.endsWith(`#${active}`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "text-muted-foreground hover:text-foreground rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive && "bg-secondary text-secondary-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={contactLink.href}>{contactLink.label}</Link>
          </Button>
          <MobileNav
            className="lg:hidden"
            items={mainNavigation}
            cta={contactLink}
            title={siteConfig.name}
          />
        </div>
      </div>
    </header>
  );
}
