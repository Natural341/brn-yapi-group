import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

  // Static pages
  const staticRoutes = [
    '',
    '/portfolio',
    // Add other static routes if necessary (e.g. /about if it's a separate page, but currently it's a section on home)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  // Dynamic Portfolio Items
  const portfolioItems = await prisma.portfolioItem.findMany({
    select: { id: true, updatedAt: true },
  })
  
  const portfolioRoutes = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.id}`,
    lastModified: item.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...portfolioRoutes]
}
