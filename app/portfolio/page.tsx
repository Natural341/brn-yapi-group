import React from 'react';
import PortfolioClient from './PortfolioClient';
import { MOCK_SERVICES, MOCK_SITE_SETTINGS } from '@/lib/mock-data';

// Empty portfolio items - frontend uses mock data
const MOCK_PORTFOLIO_ITEMS: any[] = [];

const PortfolioPage = async () => {
  return (
    <PortfolioClient
      initialItems={MOCK_PORTFOLIO_ITEMS}
      siteSettings={MOCK_SITE_SETTINGS as any}
      services={MOCK_SERVICES as any}
    />
  );
};

export default PortfolioPage;