import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "WIR Ingenieurbüro Hamburg – Abstrakt Architektur",
  description:
    "Innovative und nachhaltige Lösungen für Ihre Bauprojekte. Architektur, Bauplanung, Gutachtertätigkeit – alle HOAI Leistungsphasen 1–8.",
  keywords:
    "Ingenieurbüro, Hamburg, Architektur, Bauplanung, HOAI, Gutachter, Immobilien",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "en" | "fa")) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={geist.variable}>
      <body className="antialiased">{<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>}</body>
    </html>
  );
}
