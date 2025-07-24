import type { Metadata } from "next";
import { Kalam, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getUserLocale } from "@/lib/locale";
import "./globals.css";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "MojeFaktury – Automatyczne OCR faktur online",
  description:
    "MojeFaktury to proste narzędzie do skanowania, odczytu i eksportu danych z faktur PDF i zdjęć. Zautomatyzuj swoją księgowość w kilka sekund.",
  keywords: [
    "OCR faktur",
    "skanowanie faktur",
    "faktury online",
    "automatyzacja księgowości",
    "eksport do CSV",
    "fakturowanie",
    "odczyt PDF faktura",
  ],
  authors: [
    {
      name: "Filip Świątek",
      url: "https://yofilip.github.io/PortfolioWebsite/",
    },
  ],
  metadataBase: new URL("https://mojefaktury.com"),
  alternates: {
    canonical: "https://mojefaktury.com",
  },
  openGraph: {
    title: "MojeFaktury – OCR faktur online",
    description:
      "Skanuj faktury, odczytuj dane i eksportuj do CSV. Prosta automatyzacja dla freelancerów, firm i księgowości.",
    url: "https://mojefaktury.com",
    siteName: "MojeFaktury",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${kalam.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
