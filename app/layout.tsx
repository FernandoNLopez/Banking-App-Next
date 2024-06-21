// fix "dynamic server usage" errors in dev mode by turning off static generation and forcing dynamic rendering

export const dynamic =  process.env.NODE_ENV === "production" ? 'auto' : 'force-dynamic';

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlaxSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
});

export const metadata: Metadata = {
  title: "Horizon Bank",
description: "Modern banking platform for everyone.",
icons: {
  icon: '/icons/logo.svg'
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlaxSerif.variable}`}>{children}</body>
    </html>
  );
}
