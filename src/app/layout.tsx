import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  axes: ["opsz"],
});

// Optional reading support. SIL OFL licensed (see src/fonts/OFL.txt).
// preload is off so the files only download when a reader enables it.
const openDyslexic = localFont({
  src: [
    { path: "../fonts/OpenDyslexic-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/OpenDyslexic-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-opendyslexic",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Reliable AI for Inclusive Schools",
  description:
    "A research hub on moving schools from casual generative AI use to reliable, inclusive, quality-assured AI-supported practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${openDyslexic.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-surface"
        >
          Skip to content
        </a>
        <div className="border-b border-border-subtle bg-foreground/[0.03] py-2 text-center text-xs text-muted">
          Private research workspace: working draft, not yet prepared for
          public distribution
        </div>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
