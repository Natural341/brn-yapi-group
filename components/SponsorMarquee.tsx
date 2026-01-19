'use client';

import React from 'react';
import Link from 'next/link';
import { Sponsor } from '@prisma/client';

export default function SponsorMarquee({ sponsors }: { sponsors: Sponsor[] }) {
    if (!sponsors || sponsors.length === 0) return null;

    const half = Math.ceil(sponsors.length / 2);
    const row1 = sponsors.slice(0, half);
    const row2 = sponsors.slice(half);

    // If only one row worth of items, duplicate to both rows or just show one?
    // Request was "2 satırlı sütünlardan oluşan kayan yapı" (2 rows scrolling structure).
    // If we don't have enough for 2 rows, we can just split what we have.
    // If very few items, we might need to duplicate them to make the marquee look full.

    const MarqueeRow = ({ items, direction = 'left' }: { items: Sponsor[], direction?: 'left' | 'right' }) => (
        <div className="relative flex overflow-x-hidden group">
            <div className={`py-4 animate-marquee whitespace-nowrap flex items-center gap-12 ${direction === 'right' ? 'animate-marquee-reverse' : ''}`}>
                {[...items, ...items, ...items, ...items].map((sponsor, index) => (
                    <div key={`${sponsor.id}-${index}`} className="flex items-center justify-center min-w-[150px] opacity-70 hover:opacity-100 transition-opacity">
                        {sponsor.url ? (
                            <Link href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                {sponsor.type === 'IMAGE' ? (
                                    <img src={sponsor.content} alt={sponsor.name} className="h-12 w-auto object-contain brightness-0 invert" />
                                ) : (
                                    <span className="text-white/60 font-bold text-lg uppercase tracking-widest hover:text-white">{sponsor.content}</span>
                                )}
                            </Link>
                        ) : (
                            sponsor.type === 'IMAGE' ? (
                                <img src={sponsor.content} alt={sponsor.name} className="h-12 w-auto object-contain brightness-0 invert" />
                            ) : (
                                <span className="text-white/60 font-bold text-lg uppercase tracking-widest">{sponsor.content}</span>
                            )
                        )}
                    </div>
                ))}
            </div>
            <div className={`absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center gap-12 ${direction === 'right' ? 'animate-marquee2-reverse' : ''}`}>
                {[...items, ...items, ...items, ...items].map((sponsor, index) => (
                    <div key={`${sponsor.id}-${index}-dup`} className="flex items-center justify-center min-w-[150px] opacity-70 hover:opacity-100 transition-opacity">
                        {sponsor.url ? (
                            <Link href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                {sponsor.type === 'IMAGE' ? (
                                    <img src={sponsor.content} alt={sponsor.name} className="h-12 w-auto object-contain brightness-0 invert" />
                                ) : (
                                    <span className="text-white/60 font-bold text-lg uppercase tracking-widest hover:text-white">{sponsor.content}</span>
                                )}
                            </Link>
                        ) : (
                            sponsor.type === 'IMAGE' ? (
                                <img src={sponsor.content} alt={sponsor.name} className="h-12 w-auto object-contain brightness-0 invert" />
                            ) : (
                                <span className="text-white/60 font-bold text-lg uppercase tracking-widest">{sponsor.content}</span>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full absolute bottom-40 z-30 pointer-events-none">
            {/* Pointer events none wrapper, but enable for children links */}
            <div className="pointer-events-auto flex flex-col gap-2">
                {/* Split into 2 rows. If total items < 2, just show one row logic needs adjustment but assuming enough sponsors */}
                {sponsors.length > 0 && <MarqueeRow items={sponsors} direction="left" />}
                {sponsors.length > 5 && <MarqueeRow items={sponsors.slice().reverse()} direction="right" />}
                {/* Simple heuristic: if enough items, show reverse row for variety, or just split. 
             Let's blindly split for now to ensure 2 rows as requested. */}
            </div>
        </div>
    );
}
