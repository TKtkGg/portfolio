import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yukimiyamoto-portfolio.com";

export const metadata: Metadata = {
  title: "Yuki Miyamoto | Portfolio",
  description: "宮本侑季のポートフォリオ",
  openGraph: {
    title: "Yuki Miyamoto | Portfolio",
    description: "宮本侑季のポートフォリオ",
    url: siteUrl,
    siteName: "Yuki Miyamoto's Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Yuki Miyamoto's Portfolio",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuki Miyamoto's Portfolio",
    description: "宮本侑季のポートフォリオ",
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="portfolio-theme">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
