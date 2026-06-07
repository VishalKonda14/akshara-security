import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Akshara Security Facilities Management",
    template: "%s | Akshara Security"
  },
  description: "Premium security services, manpower outsourcing, and facility management in Karimnagar and Telangana. We deploy elite, highly-trained security personnel.",
  keywords: ["Security Services", "Facility Management", "Security Guards", "Corporate Security", "Karimnagar Security", "Armed Guards", "Unarmed Security", "Event Security", "Telangana Security"],
  authors: [{ name: "Akshara Security" }],
  creator: "Akshara Security Facilities Management",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aksharasecurity.com", // Replace with actual domain when live
    siteName: "Akshara Security Facilities Management",
    title: "Akshara Security Facilities Management | Premium Security",
    description: "Elite security personnel and comprehensive facility management solutions tailored to your precise operational environment.",
    images: [
      {
        url: "/images/hero/guard.png",
        width: 1200,
        height: 630,
        alt: "Akshara Security Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshara Security Facilities Management",
    description: "Premium security services, manpower outsourcing, and facility management.",
    images: ["/images/hero/guard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
