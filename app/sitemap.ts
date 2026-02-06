import { MetadataRoute } from 'next'
import { MOCK_SERVICES } from '@/lib/mock-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://brnyapigroup.com'

  // Static pages
  const staticRoutes = [
    '',
    '/portfolio',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  // Service pages from mock data
  const serviceRoutes = MOCK_SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Project pages
  const projectRoutes = [
    { url: `${baseUrl}/projects/hafiz-mustafa`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/projects/edebiyat-fakultesi`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes]
}
