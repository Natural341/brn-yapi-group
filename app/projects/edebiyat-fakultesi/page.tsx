import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MOCK_SERVICES, MOCK_SITE_SETTINGS } from '@/lib/mock-data';

export const metadata = {
    title: 'Istanbul Edebiyat Fakultesi | BRN YAPI GRUP',
    description: 'Istanbul Universitesi Edebiyat Fakultesi restorasyon ve altin varak calismalari.',
};

// Edebiyat Fakultesi images
const GALLERY_IMAGES = [
    '/references/edebiyat.jpeg',
    '/references/edebiyat2.jpeg',
];

export default function EdebiyatFakultesiPage() {
    const siteSettings = MOCK_SITE_SETTINGS;
    const services = MOCK_SERVICES;

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden">
                <Image
                    src="/references/edebiyat.jpeg"
                    alt="Istanbul Edebiyat Fakultesi"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/60 to-black/30" />

                {/* Back Button */}
                <Link
                    href="/#references"
                    className="absolute top-24 left-8 flex items-center text-white/80 hover:text-[#D4AF37] transition-colors z-10"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm uppercase tracking-widest font-bold">Geri Don</span>
                </Link>

                {/* Title */}
                <div className="absolute bottom-16 left-0 right-0 text-center">
                    <span className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-bold mb-4 block">Restorasyon ve Altin Varak</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-black">Istanbul Edebiyat Fakultesi</h1>
                    <p className="text-white/60 mt-4 text-sm tracking-widest uppercase">Istanbul Universitesi - Beyazit</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 py-20">
                {/* Description */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                        <span className="text-[#D4AF37] font-semibold">Istanbul Universitesi Edebiyat Fakultesi</span>,
                        Turkiye'nin en koklu egitim kurumlarindan biridir. 1863 yilinda insa edilen bu tarihi yapi,
                        Osmanli mimarisinin en guzel orneklerinden birini teskil etmektedir.
                    </p>
                    <p className="text-white/60 text-base leading-relaxed mt-6">
                        Gerceklestirdigimiz restorasyon calismasinda, yapinin orijinal altin varak detaylarina
                        sadik kalarak titiz bir iscilik sergiledik. Tarihi dokunun korunmasi ve gelecek nesillere
                        aktarilmasi amaciyla en yuksek kalite standartlarinda calismalar yapilmistir.
                    </p>
                </div>

                {/* Project Info */}
                <div className="flex justify-center gap-12 mb-16">
                    <div className="text-center">
                        <span className="text-[#D4AF37] font-bold block text-3xl font-serif">1863</span>
                        <span className="text-white/50 text-sm uppercase tracking-wider">Yapi Yili</span>
                    </div>
                    <div className="text-center">
                        <span className="text-[#D4AF37] font-bold block text-3xl font-serif">Beyazit</span>
                        <span className="text-white/50 text-sm uppercase tracking-wider">Konum</span>
                    </div>
                    <div className="text-center">
                        <span className="text-[#D4AF37] font-bold block text-3xl font-serif">Restorasyon</span>
                        <span className="text-white/50 text-sm uppercase tracking-wider">Proje Tipi</span>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mb-20">
                    <h2 className="text-2xl font-serif font-bold text-center mb-12">
                        <span className="text-[#D4AF37]">Proje</span> Galerisi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {GALLERY_IMAGES.map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/3] overflow-hidden group">
                                <Image
                                    src={img}
                                    alt={`Edebiyat Fakultesi ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <Contact siteSettings={siteSettings} />

            {/* Footer */}
            <Footer siteSettings={siteSettings} services={services} />
        </div>
    );
}
