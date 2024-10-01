import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--lato-variable",
});

const trebuche = localFont({
  src: "./font/trebuc.ttf",
  variable: "--treb-font",
});
export const metadata: Metadata = {
  title: "Access Fulcrum Limited",
  description: "Access Fulcrum Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${trebuche.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
