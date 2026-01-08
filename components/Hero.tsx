'use client';
import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants';
import { useLanguage } from '@/context/LanguageContext';

interface SiteSettings {
  heroTitleEn: string;
  heroTitleTr: string;
  heroSubtitleEn: string;
  heroSubtitleTr: string;
  heroImageUrl: string | null;
}

const Hero: React.FC<{ siteSettings?: SiteSettings }> = ({ siteSettings }) => {
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

  const defaultTitle = lang === 'tr'
    ? <>Yaşamı <span className="italic font-light text-[#D4AF37]">Sanata</span><br /> Dönüştürüyoruz.</>
    : <>Turning Life into <span className="italic font-light text-[#D4AF37]">Art.</span></>;

  const title = siteSettings ? (
    lang === 'tr'
      ? <span dangerouslySetInnerHTML={{ __html: siteSettings.heroTitleTr.replace(/(İnşa)/g, '<span class="text-[#D4AF37]">$1</span>') }} />
      : <span dangerouslySetInnerHTML={{ __html: siteSettings.heroTitleEn.replace(/(Future|Excellence)/i, '<span class="text-[#D4AF37]">$1</span>') }} />
  ) : defaultTitle;

  const subtitle = siteSettings ? (lang === 'tr' ? siteSettings.heroSubtitleTr : siteSettings.heroSubtitleEn) : "Mükemmelliğin Mimarisi";
  const imageUrl = siteSettings?.heroImageUrl || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#0F0F0F]">
      {/* Background with Parallax & Deep Overlay */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>
        <img
          src={imageUrl}
          alt="Premium Architecture"
          className="w-full h-full object-cover transition-transform duration-[2s]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-20 text-white flex flex-col py-20 md:py-28 lg:py-32">
        <div className={`max-w-4xl lg:max-w-6xl relative pl-6 sm:pl-8 md:pl-12 border-l-4 md:border-l-8 border-[#D4AF37] transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

          {/* Top Detail */}
          <div className="overflow-hidden mb-6 md:mb-8">
            <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] md:tracking-[0.6em] font-black text-xs sm:text-sm md:text-base flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#D4AF37]"></span>
              {subtitle}
            </h2>
          </div>

          {/* Main Title - Balanced Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.08] mb-8 sm:mb-10 md:mb-14 tracking-tight text-white drop-shadow-2xl">
            {title}
          </h1>

          {/* Call to Actions */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 delay-500 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#services" className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-[#D4AF37] text-black font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-[10px] sm:text-[11px] md:text-sm hover:bg-white hover:scale-105 transition-all duration-300 text-center shadow-lg shadow-[#D4AF37]/20">
              {t.cta[lang]}
            </a>
            <a href="#contact" className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-[10px] sm:text-[11px] md:text-sm transition-all duration-300 flex items-center justify-center gap-3 group hover:bg-white hover:text-black hover:border-white">
              {lang === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Hint */}
      <div className={`absolute bottom-12 left-12 z-20 flex items-center space-x-6 opacity-60 transition-all duration-1000 delay-1000 ${isMounted ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white hidden md:block">Scroll Down</span>
        <div className="w-16 h-[2px] bg-[#D4AF37] animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;