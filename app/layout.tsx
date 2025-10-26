import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "@/components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muscadine Labs Documentation",
  description: "Documentation for Muscadine Labs - DeFi vaults and yield strategies",
  keywords: ["DeFi", "vaults", "yield", "lending", "borrowing", "Muscadine"],
  authors: [{ name: "Muscadine Labs" }],
  icons: {
    icon: "/muscadinelogo.jpg",
  },
  openGraph: {
    title: "Muscadine Labs Documentation",
    description: "Documentation for Muscadine Labs - DeFi vaults and yield strategies",
    type: "website",
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
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
