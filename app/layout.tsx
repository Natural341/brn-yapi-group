import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "BRN YAPI GRUP | İnşaat ve Mimarlık Mükemmelliği",
  description: "BRN Yapı Grup, anahtar teslim inşaat, mimari tasarım, statik proje ve altın varak uygulamaları konusunda uzmanlaşmış profesyonel bir yapı grubudur. Türkiye genelinde kaliteli ve güvenilir inşaat hizmetleri sunuyoruz.",
  keywords: ["inşaat", "mimarlık", "anahtar teslim", "yapı", "BRN Yapı", "altın varak", "statik proje", "İstanbul inşaat", "konut projeleri", "ticari inşaat"],
  authors: [{ name: "BRN YAPI GRUP" }],
  creator: "BRN YAPI GRUP",
  publisher: "BRN YAPI GRUP",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://brnyapigroup.com",
    siteName: "BRN YAPI GRUP",
    title: "BRN YAPI GRUP | İnşaat ve Mimarlık Mükemmelliği",
    description: "Anahtar teslim inşaat, mimari tasarım ve altın varak uygulamalarında uzman ekibimizle hayallerinizdeki mekanları inşa ediyoruz.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "BRN YAPI GRUP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRN YAPI GRUP | İnşaat ve Mimarlık",
    description: "Anahtar teslim inşaat, mimari tasarım ve profesyonel yapı çözümleri.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${montserrat.className} ${playfair.variable} ${cinzel.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
