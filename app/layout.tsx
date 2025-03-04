import type { Metadata } from "next";
import { Nunito, Nunito_Sans, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laskar",
  description: "lLaskar & Co Auto bridges the gap for small to mid-sized businesses, offering tailored, reliable, and affordable transportation solutions to drive growth and efficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/log.png" />
      </head>
      <body
        className={`${syne.variable} ${nunito.variable} ${nunitoSans.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
