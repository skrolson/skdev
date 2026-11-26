import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/data/navigation";
import { projects } from "@/data/projects";

export function SiteFooter() {
  return (
    <footer className="bg-card/60 relative border-t">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="text-muted-foreground mt-5 leading-relaxed">{siteConfig.description}</p>
        </div>
        <nav aria-label="Stopka">
          <h2 className="font-semibold">Na tej stronie</h2>
          <ul className="mt-4 space-y-3">
            {[...mainNavigation, { label: "Kontakt", href: "/#kontakt" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Realizacje demonstracyjne">
          <h2 className="font-semibold">Realizacje demo</h2>
          <ul className="mt-4 space-y-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={project.demoUrl}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-page text-muted-foreground flex flex-col gap-3 border-t py-6 text-sm sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.author}
        </p>
        <Link href="/polityka-prywatnosci" className="hover:text-foreground">
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
}
