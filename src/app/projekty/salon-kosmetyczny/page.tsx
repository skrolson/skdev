import type { Metadata } from "next";
import { DemoBar } from "@/components/demos/demo-bar";
import { DemoFooter } from "@/components/demos/demo-footer";
import { DemoHeader } from "@/components/demos/demo-header";
import { BookingProvider } from "@/components/salon/booking/booking-context";
import { BookingWizard } from "@/components/salon/booking/booking-wizard";
import { SalonAbout } from "@/components/salon/salon-about";
import { SalonContact } from "@/components/salon/salon-contact";
import { SalonGallery } from "@/components/salon/salon-gallery";
import { SalonHeading } from "@/components/salon/salon-heading";
import { SalonHero } from "@/components/salon/salon-hero";
import { SalonPricing } from "@/components/salon/salon-pricing";
import { SalonReviews } from "@/components/salon/salon-reviews";
import { SalonServices } from "@/components/salon/salon-services";
import { SalonTeam } from "@/components/salon/salon-team";
import { FaqList } from "@/components/shared/faq-list";
import { salonBrand, salonFaq, salonNavigation } from "@/data/salon";
import { fontGeometric, fontSerif } from "@/lib/fonts-elegant";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Salon kosmetyczny Velora (demo)",
  description:
    "Demonstracyjna strona salonu kosmetycznego: usługi, cennik, galeria, zespół i rezerwacja wizyty online.",
  path: "/projekty/salon-kosmetyczny",
  image: "/og/salon.jpg",
});

const theme = cn("theme-salon", fontSerif.variable, fontGeometric.variable);

export default function SalonPage() {
  return (
    <div className={theme}>
      <BookingProvider>
        <DemoHeader
          brand={salonBrand.name}
          homeHref="/projekty/salon-kosmetyczny"
          items={salonNavigation}
          cta={{ label: "Rezerwacja", href: "#rezerwacja" }}
          themeClassName={theme}
        />
        <main>
          <SalonHero />
          <SalonAbout />
          <SalonServices />
          <SalonPricing />
          <SalonGallery themeClassName={theme} />
          <SalonReviews />
          <SalonTeam />
          <section id="rezerwacja" aria-labelledby="booking-heading" className="py-24 sm:py-32">
            <div className="container-page">
              <SalonHeading
                id="booking-heading"
                title="Rezerwacja wizyty"
                description="Wybierz zabieg i termin w czterech krokach."
                className="mb-14"
              />
              <BookingWizard />
            </div>
          </section>
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="bg-muted/60 py-24 sm:py-32"
          >
            <div className="container-page max-w-3xl">
              <SalonHeading id="faq-heading" title="Częste pytania" className="mb-10" />
              <FaqList items={salonFaq} />
            </div>
          </section>
          <SalonContact />
        </main>
        <DemoFooter
          brand={salonBrand.name}
          lines={[salonBrand.address, salonBrand.phone, salonBrand.email]}
        />
        <DemoBar />
      </BookingProvider>
    </div>
  );
}
