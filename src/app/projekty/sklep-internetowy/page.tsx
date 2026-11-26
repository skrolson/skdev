import type { Metadata } from "next";
import { DemoBar } from "@/components/demos/demo-bar";
import { DemoFooter } from "@/components/demos/demo-footer";
import { Storefront } from "@/components/demos/shop/storefront";
import { fontGeometric } from "@/lib/fonts-elegant";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Sklep Glina i Forma (demo)",
  description: "Demonstracyjny sklep internetowy z ceramiką, filtrami produktów i koszykiem.",
  path: "/projekty/sklep-internetowy",
  image: "/og/sklep.jpg",
});

const theme = cn("theme-shop", fontGeometric.variable);

export default function ShopPage() {
  return (
    <div className={theme}>
      <Storefront themeClassName={theme} />
      <DemoFooter brand="Glina i Forma" lines={["kontakt@example.com", "Wrocław"]} />
      <DemoBar />
    </div>
  );
}
