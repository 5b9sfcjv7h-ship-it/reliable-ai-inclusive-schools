import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
    <html lang="en">
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
