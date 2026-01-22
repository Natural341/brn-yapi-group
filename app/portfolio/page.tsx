import React from 'react';
import { getPortfolioItems, getSiteSettings, getServices } from '@/lib/data-provider';
import PortfolioClient from './PortfolioClient';

const PortfolioPage = async () => {
  const items = await getPortfolioItems();
  const siteSettings = await getSiteSettings();
  const services = await getServices();

  return <PortfolioClient initialItems={items as any} siteSettings={siteSettings ?? undefined} services={services as any} />;
};

export default PortfolioPage;