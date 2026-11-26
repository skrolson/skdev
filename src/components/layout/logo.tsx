import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("font-display flex items-center gap-2.5 text-lg font-bold", className)}
    >
      <span
        aria-hidden
        className="from-(--aurora-1) via-(--aurora-2) to-(--aurora-3) grid size-8 place-items-center rounded-[0.6rem] bg-linear-to-br shadow-[inset_0_0_0_1px_rgb(255_255_255/0.35)]"
      >
        <svg viewBox="0 0 64 64" className="size-full" fill="none" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 20l13 12-13 12" />
          <path d="M38 45h8" />
        </svg>
      </span>
      {siteConfig.name}
      <span className="sr-only">, strona główna</span>
    </Link>
  );
}
