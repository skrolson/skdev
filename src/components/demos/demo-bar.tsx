import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Stały znacznik informujący, że oglądana firma jest fikcyjna. */
export function DemoBar() {
  return (
    <aside
      aria-label="Informacja o projekcie demonstracyjnym"
      className="fixed bottom-3 left-3 z-40 flex items-center gap-3 rounded-full border border-white/15 bg-[#0b0f26]/90 py-1.5 pr-4 pl-1.5 text-xs text-white shadow-2xl backdrop-blur-md"
    >
      <Link
        href="/#portfolio"
        className="flex items-center gap-1.5 rounded-full bg-white px-3 py-2 font-semibold text-[#0b0f26] transition-transform hover:scale-105"
      >
        <ArrowLeft aria-hidden className="size-3.5" />
        Portfolio
      </Link>
      <span>Demo: firma fikcyjna</span>
    </aside>
  );
}
