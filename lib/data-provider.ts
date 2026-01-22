// Data Provider - veritabanı yoksa mock data kullanır
import { MOCK_SERVICES, MOCK_SITE_SETTINGS } from './mock-data';

const USE_MOCK = !process.env.DATABASE_URL;

// Mock portfolio items
export const MOCK_PORTFOLIO_ITEMS = [
  {
    id: 1,
    titleTr: 'Modern Villa Projesi',
    titleEn: 'Modern Villa Project',
    descriptionTr: 'İstanbul Beykoz\'da lüks villa inşaatı',
    descriptionEn: 'Luxury villa construction in Istanbul Beykoz',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    location: 'İstanbul, Beykoz',
    year: '2024',
    serviceId: 1,
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    images: []
  },
  {
    id: 2,
    titleTr: 'Ofis Binası Renovasyonu',
    titleEn: 'Office Building Renovation',
    descriptionTr: 'Şişli\'de 5 katlı ofis binası yenileme',
    descriptionEn: '5-story office building renovation in Sisli',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    location: 'İstanbul, Şişli',
    year: '2023',
    serviceId: 2,
    featured: true,
    createdAt: new Date('2023-06-20'),
    updatedAt: new Date('2023-06-20'),
    images: []
  },
  {
    id: 3,
    titleTr: 'Altın Varak Restoran',
    titleEn: 'Gold Leaf Restaurant',
    descriptionTr: 'Lüks restoran iç mekan altın varak uygulaması',
    descriptionEn: 'Luxury restaurant interior gold leaf application',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    location: 'İstanbul, Nişantaşı',
    year: '2024',
    serviceId: 5,
    featured: false,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10'),
    images: []
  }
];

// Get all services
export async function getServices() {
  if (USE_MOCK) {
    return MOCK_SERVICES;
  }
  const { prisma } = await import('./prisma');
  return prisma.service.findMany({ orderBy: { id: 'asc' } });
}

// Get site settings
export async function getSiteSettings() {
  if (USE_MOCK) {
    return MOCK_SITE_SETTINGS;
  }
  const { prisma } = await import('./prisma');
  return prisma.siteSettings.findFirst();
}

// Get all portfolio items
export async function getPortfolioItems() {
  if (USE_MOCK) {
    return MOCK_PORTFOLIO_ITEMS;
  }
  const { prisma } = await import('./prisma');
  return prisma.portfolioItem.findMany({ orderBy: { createdAt: 'desc' } });
}

// Get single portfolio item
export async function getPortfolioItem(id: number) {
  if (USE_MOCK) {
    const item = MOCK_PORTFOLIO_ITEMS.find(p => p.id === id);
    return item || null;
  }
  const { prisma } = await import('./prisma');
  return prisma.portfolioItem.findUnique({
    where: { id },
    include: { images: true }
  });
}

// Get portfolio items for sitemap
export async function getPortfolioItemsForSitemap() {
  if (USE_MOCK) {
    return MOCK_PORTFOLIO_ITEMS.map(item => ({
      id: item.id,
      updatedAt: item.updatedAt
    }));
  }
  const { prisma } = await import('./prisma');
  return prisma.portfolioItem.findMany({
    select: { id: true, updatedAt: true }
  });
}
