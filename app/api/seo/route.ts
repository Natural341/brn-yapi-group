import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const settings = await prisma.siteSettings.findFirst();
        if (!settings) {
            return NextResponse.json({
                seoTitle: '',
                seoDescription: '',
                seoKeywords: '',
                ogImage: '',
            });
        }
        return NextResponse.json({
            seoTitle: settings.seoTitle || '',
            seoDescription: settings.seoDescription || '',
            seoKeywords: settings.seoKeywords || '',
            ogImage: settings.ogImage || '',
        });
    } catch (error) {
        console.error('SEO GET error:', error);
        return NextResponse.json({ error: 'Failed to fetch SEO settings' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { seoTitle, seoDescription, seoKeywords, ogImage } = body;

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
