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
  metadataBase: new URL("https://brnyapigroup.com"),
  title: "BRN YAPI GRUP | Insaat ve Mimarlik Mukemmelligi",
  description: "BRN Yapi Grup, anahtar teslim insaat, mimari tasarim, statik proje ve altin varak uygulamalari konusunda uzmanlasmis profesyonel bir yapi grubudur. Turkiye genelinde kaliteli ve guvenilir insaat hizmetleri sunuyoruz.",
  keywords: ["insaat", "mimarlik", "anahtar teslim", "yapi", "BRN Yapi", "altin varak", "statik proje", "Istanbul insaat", "konut projeleri", "ticari insaat"],
  authors: [{ name: "BRN YAPI GRUP" }],
  creator: "BRN YAPI GRUP",
  publisher: "BRN YAPI GRUP",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://brnyapigroup.com",
    siteName: "BRN YAPI GRUP",
    title: "BRN YAPI GRUP | Insaat ve Mimarlik Mukemmelligi",
    description: "Anahtar teslim insaat, mimari tasarim ve altin varak uygulamalarinda uzman ekibimizle hayallerinizdeki mekanlari insa ediyoruz.",
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
    title: "BRN YAPI GRUP | Insaat ve Mimarlik",
    description: "Anahtar teslim insaat, mimari tasarim ve profesyonel yapi cozumleri.",
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
