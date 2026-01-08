'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// All varak images from public/varak folder
const VARAK_IMAGES = [
    '/varak/indownloader.app_picture_0070898001767781672.jpg',
    '/varak/indownloader.app_picture_0091367001767781508.jpg',
    '/varak/indownloader.app_picture_0184409001767781463.jpg',
    '/varak/indownloader.app_picture_0314695001767781435.jpg',
    '/varak/indownloader.app_picture_0420387001767781523.jpg',
    '/varak/indownloader.app_picture_0420831001767781708.jpg',
    '/varak/indownloader.app_picture_0422265001767781541.jpg',
    '/varak/indownloader.app_picture_0463513001767781615.jpg',
    '/varak/indownloader.app_picture_0650139001767781644.jpg',
    '/varak/indownloader.app_picture_0671378001767781487.jpg',
    '/varak/indownloader.app_picture_0773664001767781585.jpg',
    '/varak/indownloader.app_picture_0854408001767781656.jpg',
    '/varak/indownloader.app_picture_0982731001767781600.jpg',
    '/varak/indownloader.app_picture_0991489001767781568.jpg',
];

interface VarakGalleryProps {
    lang: 'en' | 'tr';
}

const VarakGallery: React.FC<VarakGalleryProps> = ({ lang }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (image: string, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % VARAK_IMAGES.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(VARAK_IMAGES[nextIndex]);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + VARAK_IMAGES.length) % VARAK_IMAGES.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(VARAK_IMAGES[prevIndex]);
    };

    // VSCO-style masonry pattern
    const getGridClass = (index: number) => {
        const pattern = index % 6;
        switch (pattern) {
            case 0: return 'col-span-2 row-span-2'; // Large
            case 1: return 'col-span-1 row-span-1'; // Small
            case 2: return 'col-span-1 row-span-2'; // Tall
            case 3: return 'col-span-1 row-span-1'; // Small
            case 4: return 'col-span-1 row-span-1'; // Small
            case 5: return 'col-span-2 row-span-1'; // Wide
            default: return 'col-span-1 row-span-1';
        }
    };

    return (
        <section className="py-12 md:py-20 bg-[#FAFAFA]">
            {/* Narrower container for aesthetic look */}
            <div className="w-full px-8 md:px-24 lg:px-48">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">
                        {lang === 'tr' ? 'GALERİ' : 'GALLERY'}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-[#1A1A1A] mb-4">
                        {lang === 'tr' ? 'Altın Varak Çalışmalarımız' : 'Our Gold Leaf Works'}
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg font-medium">
                        {lang === 'tr'
                            ? 'Her projede altın varakın zarafetini ve ihtişamını yansıtan özenli işçilik.'
                            : 'Meticulous craftsmanship reflecting the elegance and grandeur of gold leaf in every project.'}
                    </p>
                </div>

                {/* Flex Gallery - Higher density */}
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                    {VARAK_IMAGES.map((image, index) => {
                        // Smaller sizes for higher density
                        const sizePattern = index % 5;
                        let sizeClass = '';
                        // Mobile: 3 per row (~32%), Tablet: 4 per row (~24%), Desktop: 5 per row (~19%)
                        switch (sizePattern) {
                            case 0: sizeClass = 'w-[calc(33%-6px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)] aspect-[4/3]'; break; // Standard
                            case 1: sizeClass = 'w-[calc(33%-6px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)] aspect-square'; break; // Square
                            case 2: sizeClass = 'w-[calc(33%-6px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)] aspect-[3/4]'; break; // Tall
                            case 3: sizeClass = 'w-[calc(33%-6px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)] aspect-[4/3]'; break; // Wide
                            case 4: sizeClass = 'w-[calc(33%-6px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)] aspect-square'; break; // Small square
                            default: sizeClass = 'w-[calc(33%-6px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)] aspect-[4/3]';
                        }

                        return (
                            <div
                                key={index}
                                className={`${sizeClass} relative overflow-hidden cursor-pointer group flex-grow`}
                                onClick={() => openLightbox(image, index)}
                            >
                                <Image
                                    src={image}
                                    alt={`Altın Varak ${index + 1}`}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-75">
                                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-10"
                        onClick={closeLightbox}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                        onClick={prevImage}
                    >
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                        onClick={nextImage}
                    >
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Altın Varak"
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest">
                        {currentIndex + 1} / {VARAK_IMAGES.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default VarakGallery;
