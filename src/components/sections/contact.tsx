import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

const topics = ["Strona firmowa", "Sklep internetowy", "Aplikacja webowa", "Inny temat"];

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="contact-title" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="from-(--aurora-1) via-(--aurora-2) to-(--aurora-3) absolute inset-x-[10%] top-1/4 bottom-1/4 -z-10 rounded-full bg-linear-to-r opacity-25 blur-3xl"
      />
      <div className="container-page">
        <div className="glass shadow-lift grid grid-cols-1 gap-12 rounded-2xl p-6 sm:p-10 lg:grid-cols-[1fr_1.25fr] lg:p-14">
          <div className="flex flex-col">
            <SectionHeading
              id="contact-title"
              title="Opowiedz mi o swoim projekcie"
              description="Napisz, czym się zajmujesz i czego potrzebujesz. Odpowiem z pytaniami lub propozycją kolejnego kroku."
            />
            <Reveal delay={0.15} className="mt-10 space-y-4 lg:mt-auto">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-primary flex items-center gap-4 font-medium transition-colors"
              >
                <span className="bg-card grid size-11 place-items-center rounded-full border">
                  <Mail aria-hidden className="size-4" />
                </span>
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-4 font-medium">
                <span className="bg-card grid size-11 place-items-center rounded-full border">
                  <MapPin aria-hidden className="size-4" />
                </span>
                {siteConfig.location}
              </p>
            </Reveal>
          </div>
          <Reveal from="right" delay={0.1}>
            <ContactForm topics={topics} fallbackEmail={siteConfig.email} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
