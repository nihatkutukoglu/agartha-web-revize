import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { dictionaries } from "@/data/dictionary";
import "../globals.css";

const geist = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agartha Teknoloji",
  description:
    "Kamu, sivil havacılık ve kurumsal operasyonlar için güvenli teknoloji çözümleri.",
  icons: {
    icon: "/agartha-chatbot-logo.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  // Unknown segments (e.g. /favicon.ico) would otherwise render with an invalid lang and crash.
  if (!(lang in dictionaries)) notFound();
  return (
    <html lang={lang}>
      <body className={`${geist.variable} ${inter.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
