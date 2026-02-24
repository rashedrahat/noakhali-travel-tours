import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noakhali-travel-tours.vercel.app"),
  title: "Noakhali Travel & Tours | Visa, Travel & Documentation Services",
  description:
    "Your trusted partner for Hajj & Umrah, visa processing, air ticketing, student visa, e-passport, and official documentation services in Noakhali, Bangladesh.",
  keywords: [
    "Noakhali Travel",
    "Hajj Umrah",
    "Visa Processing",
    "Student Visa Bangladesh",
    "Air Ticket Noakhali",
    "E-Passport Bangladesh",
    "PCC Bangladesh",
    "Travel Agency Noakhali",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Noakhali Travel & Tours | Visa, Hajj & Documentation Services",
    description: "Licensed travel agency in Noakhali, Bangladesh. Expert in Hajj & Umrah packages, international visa processing, air ticketing, student visas, and official documentation.",
    type: "website",
    locale: "en_US",
    url: "https://noakhali-travel-tours.vercel.app",
    siteName: "Noakhali Travel & Tours",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Noakhali Travel & Tours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noakhali Travel & Tours | Visa, Hajj & Documentation Services",
    description: "Licensed travel agency in Noakhali, Bangladesh. Expert in Hajj & Umrah packages, international visa processing, air ticketing, student visas, and official documentation.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
