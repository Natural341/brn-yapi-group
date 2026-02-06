'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// 2 Main Project Categories
const PROJECTS = [
    {
        id: 'hafiz-mustafa',
        name: 'Hafiz Mustafa',
        nameEn: 'Hafiz Mustafa',
        nameTr: 'Hafiz Mustafa',
        descriptionEn: 'Prestigious gold leaf applications for the legendary Hafiz Mustafa brand across multiple locations in Istanbul.',
        descriptionTr: 'Efsanevi Hafiz Mustafa markasi icin Istanbul\'un farkli noktalarinda prestijli altin varak uygulamalari.',
        coverImage: '/references/WhatsApp Image 2026-02-01 at 15.08.10 (1).jpeg',
        category: 'Altin Varak',
        locations: ['Taksim', 'Beyazit', 'Bahcekapi', 'Aqua Florya', 'Nuri Osmaniye'],
    },
    {
        id: 'edebiyat-fakultesi',
        name: 'Istanbul Edebiyat Fakultesi',
        nameEn: 'Istanbul Faculty of Literature',
        nameTr: 'Istanbul Edebiyat Fakultesi',
        descriptionEn: 'Restoration and gold leaf work for the historic Istanbul University Faculty of Literature building.',
        descriptionTr: 'Tarihi Istanbul Universitesi Edebiyat Fakultesi binasi icin restorasyon ve altin varak calismasi.',
        coverImage: '/references/edebiyat.jpeg',
        category: 'Restorasyon',
        locations: ['Istanbul Universitesi'],
    },
];

const References: React.FC = () => {
    const { lang } = useLanguage();

    const title = lang === 'tr' ? 'Referanslarimiz' : 'Our References';
    const subtitle = lang === 'tr' ? 'Tamamladigimiz Projeler' : 'Completed Projects';

    return (
        <section id="references" className="py-24 md:py-40 bg-[#0A0A0A]">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-4">
                        {title}
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white">
                        {subtitle}
                    </h3>
                </div>

                {/* 2 Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {PROJECTS.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group relative overflow-hidden bg-[#111] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={project.coverImage}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h4 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                                    {lang === 'tr' ? project.nameTr : project.nameEn}
                                </h4>
                                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                                    {lang === 'tr' ? project.descriptionTr : project.descriptionEn}
                                </p>
                                <div className="flex items-center text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                                    <span>{lang === 'tr' ? 'Detaylari Gor' : 'View Details'}</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default References;
