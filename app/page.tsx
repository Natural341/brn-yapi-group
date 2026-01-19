import React from 'react';
import { prisma } from '@/lib/prisma';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Force dynamic rendering since we are fetching data
export const dynamic = 'force-dynamic';

export default async function Home() {
  // Fetch up to 6 latest projects for the homepage
  const projects = await prisma.portfolioItem.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' }
  });

  const services = await prisma.service.findMany({
    orderBy: { id: 'asc' }
  });

  // Swap "Altın Varak" and "Kırım" positions as requested
  const varakIndex = services.findIndex(s => s.slug === 'altin-varak');
  const kirimIndex = services.findIndex(s => s.slug === 'kirim-yikim-isleri');
  if (varakIndex !== -1 && kirimIndex !== -1) {
    const temp = services[varakIndex];
    services[varakIndex] = services[kirimIndex];
    services[kirimIndex] = temp;
  }

  const siteSettings = (await prisma.siteSettings.findFirst()) || undefined;

  /* New: Fetch Active Sponsors */
  const sponsors = await prisma.sponsor.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' }
  });

  /* Retrieve images directly from storage for maximum variety */
  const fs = require('fs');
  const path = require('path');

  const getImagesFromDir = (dirName: string, slug: string) => {
    try {
      const publicDir = path.join(process.cwd(), 'public', dirName);
      if (fs.existsSync(publicDir)) {
        const files = fs.readdirSync(publicDir);
        return files
          .filter((file: string) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
          .map((file: string) => ({ src: `/${dirName}/${file}`, slug }));
      }
      return [];
    } catch (e) {
      console.error(`Error reading ${dirName}:`, e);
      return [];
    }
  };

  const altinImages = getImagesFromDir('varak', 'altin-varak');
  const kirimImages = getImagesFromDir('kırım', 'kirim-yikim-isleri');

  let heroImages: { src: string, slug: string }[] = [];

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

  if (heroImages.length < 10 && heroImages.length > 0) {
    heroImages = [...heroImages, ...heroImages];
  }

  // Fallback if no images found
  if (heroImages.length === 0) {
    heroImages.push({ src: '/hero-bg.png', slug: 'altin-varak' });
  }

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <Header />

      <main>
        <Hero siteSettings={siteSettings} sponsors={sponsors} heroImages={heroImages} />
        <About siteSettings={siteSettings} />
        <Services services={services} />
        {/* <Projects projects={projects} siteSettings={siteSettings} /> */}
        <Contact siteSettings={siteSettings} />
      </main>

      <Footer siteSettings={siteSettings} services={services} />
    </div>
  );
}
