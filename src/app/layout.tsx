import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { siteConfig } from "@/config/site";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { createMetadata } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(getSiteUrl()),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#070a1b" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={cn(fontDisplay.variable, fontSans.variable)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-dvh overflow-x-clip">
        {/* Bez JavaScriptu treści animowane przy przewijaniu pozostają widoczne. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
