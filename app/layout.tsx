import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Webstack | Web Development, SEO & Digital Solutions",
    template: "%s | Webstack",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Webstack | Web Development, SEO & Digital Solutions",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Webstack | Web Development, SEO & Digital Solutions",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
