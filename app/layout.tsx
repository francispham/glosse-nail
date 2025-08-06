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
  appleWebApp: {
    title: "Glossé Nails",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: "/apple-icon.png",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
