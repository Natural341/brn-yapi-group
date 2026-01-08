'use client';
import React from 'react';
import Image from 'next/image';
import { TRANSLATIONS } from '../constants';
import { useLanguage } from '@/context/LanguageContext';

interface SiteSettings {
  aboutTitleEn: string;
  aboutTitleTr: string;
  aboutDescEn: string;
  aboutDescTr: string;
  aboutSectionTitleEn: string | null;
  aboutSectionTitleTr: string | null;
}

const About: React.FC<{ siteSettings?: SiteSettings }> = ({ siteSettings }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS.about;

  const title = siteSettings ? (lang === 'tr' ? siteSettings.aboutTitleTr : siteSettings.aboutTitleEn) : t.title[lang];
  const description = siteSettings ? (lang === 'tr' ? siteSettings.aboutDescTr : siteSettings.aboutDescEn) : t.text1[lang] + ' ' + t.text2[lang];
  const sectionTitle = siteSettings ? (lang === 'tr' ? siteSettings.aboutSectionTitleTr : siteSettings.aboutSectionTitleEn) : "Our Philosophy";

  return (
    <section id="about" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Image Side - Now smaller (5 columns instead of 6) */}
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="max-w-md mx-auto lg:ml-0">
              <div className="aspect-[4/5] relative overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                  alt="Architecture Philosophy"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#F9F9F9] -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-black/5 -z-10"></div>
          </div>

          {/* Text Side - Now wider (7 columns) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">{sectionTitle}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] mb-8 leading-[1.1]">
              {title}
            </h2>

            <p className="text-[#333333] leading-loose text-lg font-normal mb-12">
              {description}
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-serif italic">
                B
              </div>
              <div>
                <span className="block text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">BRN YAPI</span>
                <span className="block text-xs text-[#D4AF37] uppercase tracking-widest">Est. 2010</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;