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

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <Header />

      <main>
        <Hero siteSettings={siteSettings} />
        <About siteSettings={siteSettings} />
        <Services services={services} />
        {/* <Projects projects={projects} siteSettings={siteSettings} /> */}
        <Contact siteSettings={siteSettings} />
      </main>

      <Footer siteSettings={siteSettings} services={services} />
    </div>
  );
}
