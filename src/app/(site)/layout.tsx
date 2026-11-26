import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollProgress } from "@/components/motion/scroll-progress";

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#tresc"
        className="bg-primary text-primary-foreground sr-only z-[70] rounded-full px-5 py-3 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Przejdź do treści
      </a>
      <ScrollProgress />
      <SiteHeader />
      <main id="tresc">{children}</main>
      <SiteFooter />
    </>
  );
}
