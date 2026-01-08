'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TRANSLATIONS } from '@/constants';
import { useLanguage } from '@/context/LanguageContext';

type PortfolioItem = {
  id: number;
  titleEn: string;
  titleTr: string;
  descriptionEn: string;
  descriptionTr: string;
  imageUrl: string | null;
  category: string | null;
  createdAt: Date;
};

interface SiteSettings {
  footerRightsEn: string;
  footerRightsTr: string;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
}

interface Service {
  id: number;
  slug: string;
  titleEn: string;
  titleTr: string;
}

interface PortfolioClientProps {
  initialItems: PortfolioItem[];
  siteSettings?: SiteSettings;
  services?: Service[];
}

const PortfolioClient: React.FC<PortfolioClientProps> = ({ initialItems, siteSettings, services }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS.portfolio;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-56 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {initialItems.length > 0 ? (
              initialItems.map((project, idx) => {
                const title = lang === 'tr' ? project.titleTr : project.titleEn;
                return (
                  <Link
                    href={`/portfolio/${project.id}`}
                    key={project.id}
                    className={`group cursor-pointer flex flex-col ${idx % 2 === 1 ? 'md:translate-y-12' : ''}`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#F0F0F0] shadow-lg">
                      <Image
                        src={project.imageUrl || '/logo.jpeg'} // Fallback image
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                          <span className="text-white text-2xl font-serif italic">→</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-3">
                        {project.category || 'Portfolio'}
                      </span>
                      <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors leading-tight">
                        {title}
                      </h3>
                      <span className="mt-4 text-xs font-bold uppercase tracking-widest text-black/40 group-hover:text-black/80 transition-colors">
                        {t.viewProject[lang]}
                      </span>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500">
                <p>No projects found in the database.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer siteSettings={siteSettings} services={services} />
    </div>
  );
};

export default PortfolioClient;
