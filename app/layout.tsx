import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Glossé Nails",
  description:
    "Discover the art of nail design with Glossé Nails, where creativity meets elegance in David Village District.",
  keywords: [
    "Vancouver Nail Salon",
    "Nail Art Vancouver",
    "Manicure and Pedicure Vancouver",
    "Glosse Nails Vancouver",
    "Nail Salon Davie Street Vancouver",
    "Glossé Nails",
    "Glosse Nails",
    "glossenails",
    "glossénails",
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="apple-mobile-web-app-title" content="Glossé Nails" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P7PHDHXL');
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7PHDHXL"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      </body>
    </html>
  );
}
