import React from 'react';
import { prisma } from '@/lib/prisma';
import PortfolioClient from './PortfolioClient';

export const dynamic = 'force-dynamic';

const PortfolioPage = async () => {
  const items = await prisma.portfolioItem.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const siteSettings = await prisma.siteSettings.findFirst();
  const services = await prisma.service.findMany({ orderBy: { id: 'asc' } });

  return <PortfolioClient initialItems={items} siteSettings={siteSettings ?? undefined} services={services} />;
};

export default PortfolioPage;