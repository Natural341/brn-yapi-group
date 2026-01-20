import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailClient from './ServiceDetailClient';
import { MOCK_SERVICES, MOCK_SITE_SETTINGS } from '@/lib/mock-data';

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // Find service in MOCK_SERVICES
  const service = MOCK_SERVICES.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Add empty portfolioItems array to match expected type if needed (mock data doesn't have it by default)
  const serviceWithPortfolio = {
    ...service,
    portfolioItems: []
  };

  const siteSettings = MOCK_SITE_SETTINGS;
  const services = MOCK_SERVICES;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <ServiceDetailClient service={serviceWithPortfolio} />
      <Footer siteSettings={siteSettings} services={services} />
    </div>
  );
}