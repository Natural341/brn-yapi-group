import React from 'react';
import Header from '@/components/Header';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from '@/components/Footer';
import { MOCK_SERVICES, MOCK_SITE_SETTINGS } from "@/lib/mock-data";

export const dynamic = 'force-dynamic';

export default function Home() {
  const services = MOCK_SERVICES;
  const siteSettings = MOCK_SITE_SETTINGS;
  const sponsors: any[] = [];

  // Static image lists to restore the "film roll" effect without using fs (which fails on serverless/weak VPS)
  const altinImages = [
    { src: '/varak/indownloader.app_picture_0070898001767781672.jpg', slug: 'altin-varak' },
    { src: '/varak/indownloader.app_picture_0091367001767781508.jpg', slug: 'altin-varak' },
    { src: '/varak/indownloader.app_picture_0184409001767781463.jpg', slug: 'altin-varak' },
    { src: '/varak/indownloader.app_picture_0314695001767781435.jpg', slug: 'altin-varak' },
    { src: '/varak/indownloader.app_picture_0420387001767781523.jpg', slug: 'altin-varak' },
    { src: '/varak/indownloader.app_picture_0420831001767781708.jpg', slug: 'altin-varak' },
    { src: '/varak/indownloader.app_picture_0422265001767781541.jpg', slug: 'altin-varak' },
    { src: '/varak/indownloader.app_picture_0463513001767781615.jpg', slug: 'altin-varak' },
  ];

  const kirimImages = [
    { src: '/kırım/524-342-projelendirme-ve-uygulamasi.webp', slug: 'kirim-yikim-isleri' },
    { src: '/kırım/kaba-ince-insaat.avif', slug: 'kirim-yikim-isleri' },
    { src: '/kırım/krıım1.avif', slug: 'kirim-yikim-isleri' },
    { src: '/kırım/krıım2.jpeg', slug: 'kirim-yikim-isleri' },
  ];

  let heroImages: { src: string, slug: string }[] = [];

  // Interleave logic (Original logic restored)
  if (kirimImages.length > 0) {
    let kIndex = 0;
    // Repeat Altin list to ensure length if short
    const fullList = altinImages.length < 10 ? [...altinImages, ...altinImages] : altinImages;

    fullList.forEach((imgObj: { src: string, slug: string }, i: number) => {
      heroImages.push(imgObj);
      // Inject a Kirim image every 4th spot
      if ((i + 1) % 4 === 0) {
        heroImages.push(kirimImages[kIndex % kirimImages.length]);
        kIndex++;
      }
    });
  } else {
    heroImages = altinImages;
  }

  // Fallback
  if (heroImages.length === 0) {
    heroImages = [{ src: '/hero-bg.png', slug: 'anahtar-teslim-insaat' }];
  }

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <Header />

      <main>
        <Hero siteSettings={siteSettings} sponsors={sponsors} heroImages={heroImages} />
        <About siteSettings={siteSettings} />
        <Services services={services} />
        <Contact siteSettings={siteSettings} />
      </main>

      <Footer siteSettings={siteSettings} services={services} />
    </div>
  );
}
