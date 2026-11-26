import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Technologies } from "@/components/sections/technologies";
import { Testimonials } from "@/components/sections/testimonials";
import { siteConfig } from "@/config/site";
import { faqItems } from "@/data/faq";
import { allTechnologies } from "@/data/technologies";
import { getSiteUrl } from "@/lib/site-url";

function StructuredData() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        description: siteConfig.description,
        url,
        image: `${url}/og/home.jpg`,
        knowsAbout: allTechnologies.map((technology) => technology.name),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <About />
      <Technologies />
      <Portfolio />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
