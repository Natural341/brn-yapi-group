import { NextResponse } from 'next/server';
import { getSiteSettings } from '@/lib/data-provider';

export async function GET() {
    try {
        const settings = await getSiteSettings();
        if (!settings) {
            return NextResponse.json({
                seoTitle: '',
                seoDescription: '',
                seoKeywords: '',
                ogImage: '',
            });
        }
        return NextResponse.json({
            seoTitle: (settings as any).seoTitle || '',
            seoDescription: (settings as any).seoDescription || '',
            seoKeywords: (settings as any).seoKeywords || '',
            ogImage: (settings as any).ogImage || '',
        });
    } catch (error) {
        console.error('SEO GET error:', error);
        return NextResponse.json({ error: 'Failed to fetch SEO settings' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    // Mock mode - veritabanı olmadan güncelleme yapılamaz
    if (!process.env.DATABASE_URL) {
        return NextResponse.json({ error: 'Database not configured - running in mock mode' }, { status: 503 });
    }

    try {
        const body = await request.json();
        const { seoTitle, seoDescription, seoKeywords, ogImage } = body;

        const { prisma } = await import('@/lib/prisma');
        const settings = await prisma.siteSettings.findFirst();
        if (!settings) {
            return NextResponse.json({ error: 'Site settings not found' }, { status: 404 });
        }

        await prisma.siteSettings.update({
            where: { id: settings.id },
            data: {
                seoTitle,
                seoDescription,
                seoKeywords,
                ogImage,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('SEO PUT error:', error);
        return NextResponse.json({ error: 'Failed to update SEO settings' }, { status: 500 });
    }
}
