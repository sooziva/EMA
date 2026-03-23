import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, Bebas_Neue } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "E.M.A — Expert Makeup Academy | Master the Art",
  description:
    "E.M.A Expert Makeup Academy — Where artistry meets precision. Transform your passion into a professional career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
