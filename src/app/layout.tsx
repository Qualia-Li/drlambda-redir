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
  metadataBase: new URL("https://drlambda.ai"),
  openGraph: {
    title: "DrLambda.ai - AI-Powered Platform",
    description: "AI-powered platform for intelligent automation and insights",
    url: "https://drlambda.ai",
    siteName: "DrLambda.ai",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
