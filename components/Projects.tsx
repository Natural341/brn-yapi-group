'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  category: string | null;
  createdAt: Date;
};

interface SiteSettings {
  portfolioTitleEn: string | null;
  portfolioTitleTr: string | null;
  portfolioSubtitleEn: string | null;
  portfolioSubtitleTr: string | null;
  portfolioDescEn: string | null;
  portfolioDescTr: string | null;
}

interface ProjectsProps {
  projects?: PortfolioItem[];
  siteSettings?: SiteSettings;
}

const Projects: React.FC<ProjectsProps> = ({ projects = [], siteSettings }) => {
  const { lang } = useLanguage();

  const title = siteSettings ? (lang === 'tr' ? siteSettings.portfolioTitleTr : siteSettings.portfolioTitleEn) : "Our Portfolio";
  const subtitle = siteSettings ? (lang === 'tr' ? siteSettings.portfolioSubtitleTr : siteSettings.portfolioSubtitleEn) : "Selected Works";
  const desc = siteSettings ? (lang === 'tr' ? siteSettings.portfolioDescTr : siteSettings.portfolioDescEn) : "Each project is a unique dialogue between the client and the environment.";

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Improved Grid Layout - Smaller Images via 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <Link
                href={`/portfolio/${project.id}`}
                key={project.id}
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-white shadow-sm mb-6">
                  <div className="w-full h-full overflow-hidden relative">
                    <Image
                      src={project.imageUrl || '/logo.jpeg'}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="border-t border-black/5 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-1">
                    {project.category || 'Architecture'}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">
                    {(project as any)[`title${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || (project as any).titleEn || (project as any).title}
                  </h4>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400 italic">
              No projects to display at the moment.
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <Link href="/portfolio" className="inline-block border-b-2 border-[#D4AF37] text-[#1A1A1A] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#D4AF37] transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;