import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MOCK_SERVICES, MOCK_SITE_SETTINGS } from '@/lib/mock-data';

export const metadata = {
    title: 'Hafiz Mustafa Projeleri | BRN YAPI GRUP',
    description: 'Hafiz Mustafa markalari icin gerceklestirdigimiz altin varak uygulamalari.',
};

// All Hafiz Mustafa project images
const GALLERY_IMAGES = [
    '/references/WhatsApp Image 2026-02-01 at 15.08.10.jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.10 (1).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.10 (2).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.10 (3).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.10 (4).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.11.jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.11 (1).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.11 (2).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.11 (3).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.11 (4).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.11 (5).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.11 (6).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.12.jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.12 (1).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.12 (2).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.12 (3).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.12 (4).jpeg',
    '/references/WhatsApp Image 2026-02-01 at 15.08.12 (5).jpeg',
    '/references/cvk-otel.jpeg',
];

export default function HafizMustafaPage() {
    const siteSettings = MOCK_SITE_SETTINGS;
    const services = MOCK_SERVICES;

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden">
                <Image
                    src="/references/WhatsApp Image 2026-02-01 at 15.08.12 (2).jpeg"
                    alt="Hafiz Mustafa"
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
                    <span className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-bold mb-4 block">Altin Varak Uygulamalari</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black">Hafiz Mustafa</h1>
                    <p className="text-white/60 mt-4 text-sm tracking-widest uppercase">1864'ten Bugune</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 py-20">
                {/* Description */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                        Turkiye'nin en koklu ve prestijli tatli markasi olan <span className="text-[#D4AF37] font-semibold">Hafiz Mustafa 1864</span> icin
                        gerceklestirdigimiz altin varak uygulamalari, Istanbul'un en onemli noktalarinda yer almaktadir.
                        Taksim, Beyazit, Bahcekapi, Aqua Florya ve Nuri Osmaniye gibi farkli lokasyonlardaki subelerde,
                        markanin tarihi kimligini ve zarafetini yansitan ozenli altin varak isciligimizi sergiliyoruz.
                    </p>
                    <p className="text-white/60 text-base leading-relaxed mt-6">
                        Her bir mekan, Osmanli doneminden esinlenen desenler ve modern tekniklerle harmanlanan
                        benzersiz detaylarla donatilmistir. CVK Park Bosphorus Hotel ve Four Seasons Hotel gibi
                        prestijli otellerde de uygulamalarimiz bulunmaktadir.
                    </p>
                </div>

                {/* Gallery */}
                <div className="mb-20">
                    <h2 className="text-2xl font-serif font-bold text-center mb-12">
                        <span className="text-[#D4AF37]">Proje</span> Galerisi
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {GALLERY_IMAGES.map((img, idx) => (
                            <div key={idx} className="relative aspect-square overflow-hidden group">
                                <Image
                                    src={img}
                                    alt={`Hafiz Mustafa Proje ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
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
