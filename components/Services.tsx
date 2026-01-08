'use client';
import React from 'react';
import Image from 'next/image';
import { TRANSLATIONS } from '../constants';
import { useLanguage } from '@/context/LanguageContext';

const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'Hammer':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M3 21h18M5 21v-7l8-4 8 4v7M6 10l7-3.5L20 10" strokeLinecap="square" />
          <path d="M10 3a2 2 0 1 0 4 0H10z" fill="currentColor" className="opacity-20" />
          <rect x="9" y="12" width="6" height="9" stroke="currentColor" />
          <path d="M12 12v9" stroke="currentColor" />
          <path d="M10 15h4M10 18h4" stroke="currentColor" className="opacity-60" />
        </svg>
      );
    case 'Compass':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" className="opacity-30" />
          <path d="M12 3l4 4-4 4-4-4 4-4z" fill="currentColor" className="opacity-20" />
          <rect x="9" y="9" width="6" height="6" stroke="currentColor" />
          <path d="M15 9l4-4M9 9L5 5M15 15l4 4M9 15l-4 4" stroke="currentColor" />
        </svg>
      );
    case 'Palette':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          <path d="M12 2a4 4 0 0 1 4 4v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a4 4 0 0 1 6-4z" fill="currentColor" className="opacity-20" />
          <path d="M7.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor" />
          <path d="M16.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor" />
          <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" />
          <path d="M12 12v5" stroke="currentColor" />
        </svg>
      );
    case 'Sparkle':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" className="opacity-30" stroke="currentColor" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M19 3L20 6L23 7L20 8L19 11L18 8L15 7L18 6L19 3Z" fill="currentColor" className="opacity-60" />
          <path d="M5 17L6 19L8 20L6 21L5 23L4 21L2 20L4 19L5 17Z" fill="currentColor" className="opacity-40" />
        </svg>
      );
    // New Icons for Construction Group
    case 'Building':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      );
    case 'DraftingCompass':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="19" r="2" />
          <path d="M10.12 17.5 L6 4" />
          <path d="M13.88 17.5 L18 4" />
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6 L12 17" className="opacity-30" />
        </svg>
      );
    case 'HardHat':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M2 12h20" />
          <path d="M6 12v-2a6 6 0 0 1 12 0v2" />
          <rect x="11" y="6" width="2" height="6" fill="currentColor" className="opacity-30" />
          <path d="M10 12v6" />
          <path d="M14 12v6" />
          <path d="M3 18h18" />
        </svg>
      );
    case 'Layers':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Hammer':
      return (
        <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default: return null;
  }
};

interface Service {
  id: number;
  slug: string;
  icon: string;
  imageUrl: string | null;
  titleEn: string;
  titleTr: string;
  descriptionEn: string;
  descriptionTr: string;
}

const Services: React.FC<{ services: Service[] }> = ({ services }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS.servicesSection;

  return (
    <section id="services" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-4">{t.title[lang]}</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-[#1A1A1A]">{t.subtitle[lang]}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Section - Floating on top */}
              <div className="relative h-64 w-full overflow-hidden">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    alt={lang === 'tr' ? service.titleTr : service.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <ServiceIcon type={service.icon} />
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="pt-12 pb-10 px-8">
                <h4 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {lang === 'tr' ? service.titleTr : service.titleEn}
                </h4>
                <p className="text-[#333333] leading-loose text-sm font-medium mb-8 line-clamp-3">
                  {lang === 'tr' ? service.descriptionTr : service.descriptionEn}
                </p>

                <a href={`/services/${service.slug}`} className="inline-flex items-center space-x-2 text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                  <span>{t.learnMore[lang]}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;