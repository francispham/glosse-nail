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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
