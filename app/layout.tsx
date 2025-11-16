import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import AnalyticsWrapper from "./components/AnalyticsWrapper";

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
  title: "Eren Nasıroğlu | FullStack Developer & React Native Mobile Developer",
  description:
    "FullStack Developer and React Native Mobile Developer specializing in React, Next.js, TypeScript, Node.js, and modern web/mobile technologies. Freelance developer based in Turkey offering professional development services.",
  keywords: [
    "Eren Nasıroğlu",
    "Eren Nasiroglu",
    "FullStack Developer",
    "React Native Developer",
    "Mobile Developer",
    "Freelance Developer",
    "React Developer",
    "Next.js Developer",
    "IOS Developer",
    "Android Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Web Developer Turkey",
    "TypeScript Developer",
    "Node.js Developer",
    "FullStack Freelancer",
    "Nasıroğlu",
    "Nasıroglu",
  ],
  openGraph: {
    title: "Eren Nasıroglu | Full-Stack Developer & React Native Mobile Developer",
    description:
      "Professional FullStack Developer and React Native Mobile Developer specializing in React, Next.js, Node.js, and modern web/mobile development. Available for freelance projects.",
    url: "https://erenasiroglu.de",
    type: "website",
    locale: "en_US",
  },
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text y='32' font-size='32'></text></svg>",
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

        <Script id="fouc-prevention" strategy="beforeInteractive">
          {`
            (function() {
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  document.body.classList.add('loaded');
                });
              } else {
                document.body.classList.add('loaded');
              }
            })();
          `}
        </Script>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5MR05QF37C"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5MR05QF37C', {
              'user_properties': {
                'session_id': Date.now().toString(),
                'referrer': document.referrer,
                'screen_resolution': window.screen.width + 'x' + window.screen.height
              },
              'send_page_view': true,
              'page_path': window.location.pathname,
              'cookie_flags': 'max-age=7200;secure;samesite=none'
            });
   
            let startTime = new Date().getTime();
            window.addEventListener('beforeunload', function() {
              let endTime = new Date().getTime();
              let timeSpent = (endTime - startTime) / 1000;
              gtag('event', 'time_spent', {
                'time_seconds': timeSpent,
                'page': window.location.pathname
              });
            });
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TDN595NX');`}
        </Script>

   
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function (c, s, q, u, a, r, e) {
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings = { hjid: 5339816 };
                r = s.getElementsByTagName('head')[0];
                e = s.createElement('script');
                e.async = true;
                e.src = q + c._hjSettings.hjid + u;
                r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5339816);
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-gray-200`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDN595NX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          {children}
          <Analytics />
          <AnalyticsWrapper />
        </Providers>
      </body>
    </html>
  );
}
