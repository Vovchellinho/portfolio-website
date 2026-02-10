import type { Metadata } from "next";
import { Open_Sans, Source_Code_Pro, Source_Sans_3, Inter } from "next/font/google";
import { ThemeProvider } from "@shared/provider/ThemeProvider";

import "./colors.css";
import "./themes.css";
import "./transitions.css";
import "./typo.css";
import "./padding.css"
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-base",
  weight: ['400'],
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  variable: "--font-source-code-pro-base",
  weight: ['700'],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  variable: "--font-source-sans-3-base",
  weight: ['400'],
});

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open-sans-base",
  weight: ['700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Сайт портфолио",
  description: "Сайт портфолио для разработчика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = [
    sourceCodePro.variable,
    sourceSans3.variable,
    openSans.variable,
    inter.variable
  ].join(' ');

  return (
    <html lang="en" className={classNames}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
