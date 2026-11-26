import { Reveal } from "@/components/motion/reveal";
import { FaqList } from "@/components/shared/faq-list";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          id="faq-title"
          title="Częste pytania"
          description="Nie ma tu Twojego? Zadaj je w formularzu poniżej."
        />
        <Reveal delay={0.1}>
          <FaqList items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
