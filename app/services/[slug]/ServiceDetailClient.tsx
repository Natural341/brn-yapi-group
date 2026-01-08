'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import VarakGallery from '@/components/VarakGallery';

interface ServiceDetailProps {
  service: {
    id: number;
    slug: string;
    titleEn: string;
    titleTr: string;
    contentEn: string;
    contentTr: string;
    imageUrl: string | null;
    servicePortfolioTitleEn: string | null;
    servicePortfolioTitleTr: string | null;
    servicePortfolioDescEn: string | null;
    servicePortfolioDescTr: string | null;
    portfolioItems: {
      id: number;
      titleEn: string;
      titleTr: string;
      category: string | null;
      imageUrl: string | null;
    }[];
  };
}

export default function ServiceDetailClient({ service }: ServiceDetailProps) {
  const { lang } = useLanguage();

  const title = lang === 'tr' ? service.titleTr : service.titleEn;
  const content = lang === 'tr' ? service.contentTr : service.contentEn;

  const portfolioTitle = lang === 'tr' ? service.servicePortfolioTitleTr : service.servicePortfolioTitleEn;
  const portfolioDesc = lang === 'tr' ? service.servicePortfolioDescTr : service.servicePortfolioDescEn;

  const isVarakService = service.slug === 'altin-varak';

  // Modern layout for Altın Varak - no hero, gallery first
  if (isVarakService) {
    return (
      <div className="bg-white min-h-screen pt-24 md:pt-28">
        {/* Modern Header - Elegant & Centered */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6 md:py-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-3">
            <a href="/" className="text-[#D4AF37] hover:text-black transition-colors text-xs uppercase tracking-[0.2em] font-semibold">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </a>
            <span className="text-gray-300 text-xs">•</span>
            <a href="/#services" className="text-[#D4AF37] hover:text-black transition-colors text-xs uppercase tracking-[0.2em] font-semibold">
              {lang === 'tr' ? 'Hizmetler' : 'Services'}
            </a>
          </div>
        </div>

        {/* Spacing before gallery */}
        <div className="h-8 md:h-12"></div>

        {/* Full Width Gallery */}
        <div className="w-full">
          <VarakGallery lang={lang} />
        </div>

        {/* Content Section Below Gallery */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Section Title - Much Bigger and Bolder */}
            <div className="text-center mb-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#1A1A1A] uppercase tracking-wide" style={{ fontWeight: 900 }}>
                {lang === 'tr' ? 'Detaylar' : 'Details'}
              </h2>
              <div className="w-full max-w-md mx-auto h-[2px] bg-[#D4AF37]/30 mt-6"></div>
            </div>
            {/* Content with Professional Typography */}
            <div className="prose prose-lg md:prose-xl max-w-none
              prose-headings:font-serif prose-headings:font-black prose-headings:text-[#1A1A1A] prose-headings:tracking-tight prose-headings:mb-6
              prose-h3:text-3xl prose-h3:md:text-4xl
              prose-h4:text-xl prose-h4:md:text-2xl prose-h4:mt-10 prose-h4:text-[#D4AF37]
              prose-p:text-gray-700 prose-p:leading-[1.9] prose-p:font-medium prose-p:text-base prose-p:md:text-lg
              prose-li:text-gray-700 prose-li:font-medium prose-li:leading-relaxed
              prose-ul:space-y-3 prose-ul:mt-6
              prose-a:text-[#D4AF37] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1A1A1A] prose-strong:font-black">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>

          {/* CTA - Light background */}
          <div className="max-w-4xl mx-auto mt-16 p-10 md:p-14 bg-[#F5F5F5] border-2 border-[#D4AF37]/20 text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-black mb-6 text-[#1A1A1A] leading-tight">
              {lang === 'tr' ? 'Projeniz için teklif alın.' : 'Get a quote for your project.'}
            </h3>
            <a href="/#contact" className="inline-block px-10 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-[0.15em] text-sm hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
              {lang === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Modern text-focused layout for all services (replaces old hero layout)
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-40">
      {/* Modern Header - Elegant & Centered */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-12 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <a href="/" className="text-[#D4AF37] hover:text-black transition-colors text-xs uppercase tracking-[0.2em] font-bold">
            {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
          </a>
          <span className="text-gray-300 text-xs">•</span>
          <a href="/#services" className="text-[#D4AF37] hover:text-black transition-colors text-xs uppercase tracking-[0.2em] font-bold">
            {lang === 'tr' ? 'Hizmetler' : 'Services'}
          </a>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-[#1A1A1A] mb-8 tracking-tight capitalize">
          {title}
        </h1>

        {/* Gold Line */}
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      <main className="container mx-auto px-6 md:px-12 pb-24">
        {/* Content Section - Centered and Rich */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="prose prose-lg md:prose-xl max-w-none
            prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#1A1A1A]
            prose-p:text-gray-700 prose-p:leading-loose prose-p:font-light
            prose-a:text-[#D4AF37] hover:prose-a:text-black prose-a:transition-colors
            prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-10 prose-img:w-full
            prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-4
            prose-li:text-gray-700
            prose-strong:text-[#1A1A1A] prose-strong:font-black">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        {/* Service Portfolio Section (if any items exist) */}
        {service.portfolioItems && service.portfolioItems.length > 0 && (
          <div className="mb-24 pt-16 border-t border-black/5">
            <div className="text-center mb-16">
              <h2 className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-4">
                {portfolioTitle || (lang === 'tr' ? 'İlgili Projeler' : 'Related Projects')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-[#1A1A1A] mb-6">
                {lang === 'tr' ? 'Özel Çözümlerimiz' : 'Our Bespoke Solutions'}
              </h3>
              <p className="max-w-2xl mx-auto text-gray-500 font-light text-lg">
                {portfolioDesc || (lang === 'tr' ? 'Bu hizmet alanında tamamladığımız seçkin projeleri inceleyin.' : 'Explore our curated selection of projects in this domain.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.portfolioItems.map((item) => {
                const itemTitle = lang === 'tr' ? item.titleTr : item.titleEn;
                return (
                  <a href={`/portfolio/${item.id}`} key={item.id} className="group cursor-pointer block">
                    <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100 shadow-xl rounded-sm">
                      <img
                        src={item.imageUrl || '/logo.jpeg'}
                        alt={itemTitle}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-2">{item.category}</span>
                      <h4 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">{itemTitle}</h4>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="max-w-4xl mx-auto p-12 bg-[#FAFAFA] border-2 border-[#D4AF37]/10 text-center rounded-xl">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#1A1A1A]">
            {lang === 'tr' ? 'Bu Hizmet İçin Teklif Alın' : 'Get a Quote for this Service'}
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {lang === 'tr'
              ? 'Profesyonel ekibimizle projenizi hayata geçirmek için ilk adımı atın.'
              : 'Take the first step to bring your project to life with our professional team.'}
          </p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-[#D4AF37] text-white font-bold uppercase tracking-widest hover:bg-[#1A1A1A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {lang === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
          </a>
        </div>
      </main>
    </div>
  );
}
