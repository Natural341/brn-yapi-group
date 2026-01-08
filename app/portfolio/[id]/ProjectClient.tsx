'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  client: string | null;
  location: string | null;
  year: string | null;
  createdAt: Date;
  images: { id: number; url: string }[];
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

interface ProjectClientProps {
  project: PortfolioItem;
  siteSettings?: SiteSettings;
  services?: Service[];
}

const ProjectClient: React.FC<ProjectClientProps> = ({ project, siteSettings, services }) => {
  const { lang } = useLanguage();
  const router = useRouter();
  const t = TRANSLATIONS;

  const title = lang === 'tr' ? project.titleTr : project.titleEn;
  const description = lang === 'tr' ? project.descriptionTr : project.descriptionEn;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            className="group flex items-center space-x-2 text-[#666666] hover:text-[#D4AF37] mb-12 transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>{t.portfolio.back[lang]}</span>
          </button>

          {/* Project Title & Category */}
          <div className="mb-16">
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
              {project.category || 'Portfolio'}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1A1A1A] leading-tight font-black">
              {title}
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            
            {/* Left: Key Details */}
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-[#F9F9F9] p-10 border-l-2 border-[#D4AF37]">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-[#666666] mb-2 font-bold">{t.projectDetails.location[lang]}</h3>
                    <p className="text-xl font-serif text-[#1A1A1A] font-bold">{project.location || 'Istanbul, Turkey'}</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-[#666666] mb-2 font-bold">{t.projectDetails.year[lang]}</h3>
                    <p className="text-xl font-serif text-[#1A1A1A] font-bold">{project.year || new Date(project.createdAt).getFullYear()}</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-[#666666] mb-2 font-bold">{t.projectDetails.client[lang]}</h3>
                    <p className="text-xl font-serif text-[#1A1A1A] font-bold">{project.client || t.projectDetails.privateClient[lang]}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[#666666] leading-loose text-lg font-medium">
                  {description}
                </p>
              </div>
            </div>

            {/* Right: Main Image */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
                <Image
                  src={project.imageUrl || '/logo.jpeg'}
                  alt={title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[2s]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {project.images && project.images.length > 0 && (
            <div className="mb-24">
              <h2 className="text-3xl font-serif font-black text-[#1A1A1A] mb-12 border-b border-black/5 pb-4 inline-block">
                {t.portfolio.gallery[lang]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.map((img) => (
                  <div key={img.id} className="relative aspect-[4/3] w-full overflow-hidden shadow-lg group">
                    <Image
                      src={img.url}
                      alt={`${title} Gallery`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer siteSettings={siteSettings} services={services} />
    </div>
  );
};

export default ProjectClient;