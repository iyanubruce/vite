import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
