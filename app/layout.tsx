import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReduxProvider } from "@/redux/provider";

const dmSansHeading = DM_Sans({subsets:['latin'],variable:'--font-heading'});

const oxanium = Oxanium({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "https://masion-store.vercel.app",
  ),
  title: {
    default: "MAISON — Refined Living",
    template: "%s | MAISON",
  },
  description:
    "Curated essentials for the modern connoisseur. Discover timeless craft blended with contemporary vision.",
  applicationName: "MAISON",
  keywords: [
    "MAISON",
    "refined living",
    "curated essentials",
    "fashion",
    "luxury lifestyle",
    "craftsmanship",
  ],
  authors: [{ name: "MAISON" }],
  creator: "MAISON",
  publisher: "MAISON",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MAISON",
    title: "MAISON — Refined Living",
    description:
      "Curated essentials for the modern connoisseur. Discover timeless craft blended with contemporary vision.",
    images: [
      {
        url: "/images/hero1.jpg",
        width: 1920,
        height: 1080,
        alt: "MAISON refined living collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAISON — Refined Living",
    description: "Curated essentials for the modern connoisseur.",
    images: ["/images/hero1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification=aZhwlHTtiVAGXIEF9CrgTGvhmGon01fxbGdVR-tA_ww",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", oxanium.variable, dmSansHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
