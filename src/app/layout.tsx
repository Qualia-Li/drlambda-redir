import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        url: 'https://cdn.prod.website-files.com/67803b88fec21161e40c99cc/67803ec6ea34687115ea53cf_OG%20image.png',
        width: 1200,
        height: 630,
        alt: 'ChatSlide - DrLambda Inc Flagship Product',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ChatSlideAI',
    title: "DrLambda.ai - AI-Powered Platform",
    description: "AI-powered platform for intelligent automation and insights",
    images: ['https://cdn.prod.website-files.com/67803b88fec21161e40c99cc/67803ec6ea34687115ea53cf_OG%20image.png'],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FW9YH27P0H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FW9YH27P0H');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
