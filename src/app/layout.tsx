import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DrLambda.ai - AI-Powered Platform",
  description: "AI-powered platform for intelligent automation and insights",
  manifest: "/manifest.json",
  metadataBase: new URL("https://www.drlambda.ai"),
  alternates: {
    canonical: "https://www.drlambda.ai",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "DrLambda.ai - AI-Powered Platform",
    description: "AI-powered platform for intelligent automation and insights",
    url: "https://www.drlambda.ai",
    siteName: "DrLambda.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'DrLambda.ai - ChatSlide',
      },
    ],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
