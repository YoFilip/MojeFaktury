import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getUserLocale } from "@/lib/locale";
import "./globals.css";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: true,
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
    "księgowość online",
    "digitalizacja dokumentów",
  ],
  authors: [
    {
      name: "Filip Świątek",
      url: "https://yofilip.github.io/PortfolioWebsite/",
    },
  ],
  creator: "Filip Świątek",
  publisher: "MojeFaktury",
  metadataBase: new URL("https://mojefaktury.com"),
  alternates: {
    canonical: "https://mojefaktury.com",
    languages: {
      "pl-PL": "https://mojefaktury.com/pl",
      "en-US": "https://mojefaktury.com/en",
    },
  },
  openGraph: {
    title: "MojeFaktury – OCR faktur online",
    description:
      "Skanuj faktury, odczytuj dane i eksportuj do CSV. Prosta automatyzacja dla freelancerów, firm i księgowości.",
    url: "https://mojefaktury.com",
    siteName: "MojeFaktury",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MojeFaktury - Automatyczne OCR faktur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MojeFaktury – OCR faktur online",
    description:
      "Automatyzacja księgowości dzięki OCR faktur. Skanuj, odczytuj, eksportuj.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "Business Software",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getUserLocale();
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${kalam.variable} antialiased min-h-screen bg-white dark:bg-black`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
