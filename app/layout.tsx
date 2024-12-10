import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eren Nasıroglu | Developer",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Freelance web developer based in Turkey offering professional web development services.",
  keywords: [
    "Eren Nasıroğlu",
    "Eren Nasiroglu",
    "Frontend Developer",
    "Freelance Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "Web Developer Turkey",
    "TypeScript Developer",
    "Frontend Freelancer",
    "Nasıroğlu",
    "Nasıroglu",
  ],
  openGraph: {
    title: "Eren Nasıroglu | Frontend Developer & UI/UX Designer",
    description:
      "Professional Frontend Developer specializing in React, Next.js, and modern web development. Available for freelance projects.",
    url: "https://erenasiroglu.tech",
    type: "website",
    locale: "en_US",
  },
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text y='32' font-size='32'>🎄</text></svg>",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5MR05QF37C"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5MR05QF37C');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-gray-200`}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
