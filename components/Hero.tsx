'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TRANSLATIONS } from '../constants';
import { useLanguage } from '@/context/LanguageContext';

interface SiteSettings {
  heroTitleEn: string;
  heroTitleTr: string;
  heroSubtitleEn: string;
  heroSubtitleTr: string;
  heroImageUrl: string | null;
}

interface HeroImage {
  src: string;
  slug: string;
}

const Hero: React.FC<{ siteSettings?: SiteSettings; sponsors?: any[]; heroImages?: HeroImage[] }> = ({ siteSettings, heroImages = [] }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS.hero;
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Images = heroImages.filter((_, i) => i % 2 === 0);
  const row2Images = heroImages.filter((_, i) => i % 2 !== 0);

  /* Refined Marquee Row: Seamless Loop */
  const MarqueeRow = ({ items, reverse = false }: { items: HeroImage[], reverse?: boolean }) => {

    // Create TWO large identical sets to form the seamless loop.
    // The animation moves from 0% -> -50%.
    // So visual Set A (0-50%) is replaced by Set B (50-100%).

    const baseSet = [...items, ...items, ...items, ...items, ...items, ...items]; // Enough reps to cover screen
    const masterList = [...baseSet, ...baseSet]; // Two big sets for the 50% loop

    return (
      <div className="flex overflow-hidden w-full relative">
        <div
          className={`flex items-center gap-8 ${reverse ? 'animate-marquee-seamless-reverse' : 'animate-marquee-seamless'}`}
          style={{
            animationDuration: '1000s' // Long duration for ultra-slow move
          }}
        >
          {masterList.map((item, index) => (
            <Link
              key={`hero-img-${index}`}
              href={`/services/${item.slug}`}
              className="relative w-52 h-32 flex-shrink-0 bg-transparent shadow-xl transition-transform duration-700 hover:scale-110 rounded-2xl overflow-hidden border border-white/5 group cursor-pointer z-10"
            >
              <img src={item.src} alt="Hero Gallery" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const defaultTitle = lang === 'tr'
    ? <>Yaşamı <span className="italic font-light text-[#D4AF37]">Sanata</span><br /> Dönüştürüyoruz.</>
    : <>Turning Life into <span className="italic font-light text-[#D4AF37]">Art.</span></>;

  const title = siteSettings ? (
    lang === 'tr'
      ? <span dangerouslySetInnerHTML={{ __html: siteSettings.heroTitleTr.replace(/(İnşa)/g, '<span class="text-[#D4AF37]">$1</span>') }} />
      : <span dangerouslySetInnerHTML={{ __html: siteSettings.heroTitleEn.replace(/(Future|Excellence)/i, '<span class="text-[#D4AF37]">$1</span>') }} />
  ) : defaultTitle;

  const subtitle = siteSettings ? (lang === 'tr' ? siteSettings.heroSubtitleTr : siteSettings.heroSubtitleEn) : "Mükemmelliğin Mimarisi";

  return (
    // Background: Smooth dark gradient
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#111] to-black pt-20">

      {/* Global Top "Light Play" Overlay */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

      {/* Diagonal Film Roll Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 transform -rotate-[3deg] scale-125 opacity-40 blur-[1px] translate-y-64 pointer-events-none will-change-transform">

        <div className="w-full flex overflow-hidden mb-4 pl-12 pointer-events-auto">
          <MarqueeRow items={row1Images} />
        </div>
        <div className="w-full flex overflow-hidden mb-4 pointer-events-auto">
          <MarqueeRow items={row2Images} reverse={true} />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 z-20 relative text-center flex flex-col items-center justify-center -mt-60 pointer-events-none">

        {/* Subtitle */}
        <h2 className={`text-[#D4AF37] uppercase tracking-[0.4em] font-bold text-xs sm:text-sm mb-6 transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {subtitle}
        </h2>

        {/* Main Title */}
        <h1 className={`text-5xl sm:text-6xl md:text-8xl font-serif font-black leading-tight mb-12 text-white drop-shadow-2xl transition-all duration-700 delay-100 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {title}
        </h1>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-200 transform pointer-events-auto ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#services" className="px-10 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-[0.25em] text-xs hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#D4AF37]/20">
            {t.cta[lang]}
          </a>
          <a href="#contact" className="px-10 py-4 border border-white/30 bg-black/40 backdrop-blur-md text-white font-black uppercase tracking-[0.25em] text-xs transition-all duration-300 hover:bg-white hover:text-black">
            {lang === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
          </a>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className={`absolute bottom-12 left-12 z-20 flex items-center space-x-6 opacity-60 transition-all duration-400 delay-400 ${isMounted ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white hidden md:block">Scroll Down</span>
        <div className="w-16 h-[2px] bg-[#D4AF37] animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;