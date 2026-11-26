import { Cormorant_Garamond, Jost } from "next/font/google";

/** Czcionki ładowane tylko na trasach, które ich używają. */
export const fontSerif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const fontGeometric = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});
