import type { Metadata } from "next";
import { Bangers, Space_Mono, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { Starfield } from "@/components/starfield";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | VoidForge",
    default: "VoidForge — From Nothing, Everything",
  },
  description:
    "The complete guide to building production apps with 170+ AI agents across 7 fictional universes. Drop in a PRD, run /build, ship to production.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://voidforge.dev"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VoidForge",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <body className="font-sans bg-[var(--vf-void)] text-[var(--vf-text)] min-h-screen flex flex-col antialiased relative">
        <JsonLd />
        <Starfield />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--vf-forge-orange)] focus:text-black focus:font-bold focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
