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
  const heroImages = [{ src: '/hero-bg.png', slug: 'anahtar-teslim-insaat' }];

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
