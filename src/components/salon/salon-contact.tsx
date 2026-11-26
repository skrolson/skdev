import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SalonHeading } from "@/components/salon/salon-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { LazyMap } from "@/components/shared/lazy-map";
import { salonBrand } from "@/data/salon";

const contactItems = [
  { icon: MapPin, label: "Adres", value: salonBrand.address },
  { icon: Phone, label: "Telefon", value: salonBrand.phone },
  { icon: Mail, label: "E-mail", value: salonBrand.email },
];

export function SalonContact() {
  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="py-24 sm:py-32">
      <div className="container-page">
        <SalonHeading
          id="contact-heading"
          title="Kontakt"
          description="Masz pytanie przed wizytą? Napisz do nas."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal from="left" className="flex flex-col gap-6">
            <div className="bg-card shadow-soft rounded-2xl border p-7">
              <ul className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="bg-secondary grid size-11 place-items-center rounded-full">
                      <Icon aria-hidden className="size-4" />
                    </span>
                    <span>
                      <span className="text-muted-foreground block text-xs">{label}</span>
                      <span className="font-medium">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t pt-6">
                <h3 className="flex items-center gap-2 text-2xl font-semibold">
                  <Clock aria-hidden className="size-5" />
                  Godziny otwarcia
                </h3>
                <dl className="mt-4 space-y-2 text-sm">
                  {salonBrand.hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{row.days}</dt>
                      <dd className="font-medium">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <section aria-label="Mapa dojazdu" className="flex-1">
              <LazyMap
                {...salonBrand.coordinates}
                label={salonBrand.address}
                className="h-full"
              />
            </section>
          </Reveal>
          <Reveal from="right">
            <div className="bg-card shadow-soft h-full rounded-2xl border p-7">
              <h3 className="mb-6 text-3xl font-semibold">Formularz kontaktowy</h3>
              <ContactForm
                demo
                idPrefix="salon"
                topics={["Pytanie o zabieg", "Voucher", "Zmiana terminu"]}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
