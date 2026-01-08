'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/types';

const Header: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${isScrolled
        ? 'bg-[#000000] border-white/10 py-0 shadow-xl'
        : 'bg-[#000000] border-transparent py-1'
        }`}
    >
      <div className="container mx-auto pl-4 md:pl-8 lg:pl-12 pr-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        {/* Logo Section */}
        <a href="/" className="group flex items-center space-x-4 lg:space-x-6 cursor-pointer -ml-2 md:-ml-4 lg:-ml-6">
          <div className="relative w-24 h-24 lg:w-44 lg:h-44 transition-all duration-500 transform group-hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="BRN YAPI Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <div className="hidden lg:flex flex-col drop-shadow-lg">
            <span className="text-3xl font-black tracking-[0.2em] text-white group-hover:text-[#D4AF37] transition-colors">BRN YAPI</span>
            <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-black mt-1 group-hover:text-white transition-colors">YAPI GRUP</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="nav-link text-[11px] uppercase tracking-[0.25em] font-bold transition-colors text-white/90 hover:text-[#D4AF37]"
              >
                {item.label[lang]}
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-white/20 mx-2"></div>

          <div className="flex items-center space-x-5">
            <button
              onClick={() => setLang('en' as Language)}
              className={`w-8 h-auto flex items-center justify-center transition-all duration-300 ${lang === 'en' ? 'opacity-100 scale-110 drop-shadow-md' : 'opacity-60 hover:opacity-100'}`}
              title="English"
            >
              {/* Standard UK Flag */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/flag/United-kingdom_flag_icon_round.svg.png"
                  alt="English"
                  fill
                  className="object-cover"
                />
              </div>
            </button>
            <button
              onClick={() => setLang('tr' as Language)}
              className={`w-8 h-auto flex items-center justify-center transition-all duration-300 ${lang === 'tr' ? 'opacity-100 scale-110 drop-shadow-md' : 'opacity-60 hover:opacity-100'}`}
              title="Türkçe"
            >
              {/* Standard Turkey Flag */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/flag/Roundel_flag_of_Turkey.svg.png"
                  alt="Türkçe"
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          </div>

          <a
            href="/#contact"
            className="btn-premium px-8 py-3 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all rounded-sm shadow-lg shadow-[#D4AF37]/20"
          >
            {lang === 'en' ? 'Inquiry' : 'Teklif Al'}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative flex items-center space-x-3 z-[110] bg-white/5 px-3 py-2 rounded-sm border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-[10px] font-black tracking-widest text-white/70">
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
          </span>
          <div className="flex flex-col space-y-1.5 items-end">
            <div className={`h-[2px] bg-[#D4AF37] transition-all duration-500 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></div>
            <div className={`h-[2px] bg-white transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></div>
            <div className={`h-[2px] bg-[#D4AF37] transition-all duration-500 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-2'}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#000000] z-[100] transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="flex flex-col justify-center items-center h-full space-y-10 relative z-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-3xl font-serif text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label[lang]}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-white/10 my-4"></div>
          <a
            href="/#contact"
            className="px-8 py-4 bg-[#D4AF37] text-black text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {lang === 'en' ? 'Inquiry' : 'Teklif Al'}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
