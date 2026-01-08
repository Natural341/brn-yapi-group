import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Disallow admin from crawling
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
