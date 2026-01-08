import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailClient from './ServiceDetailClient';

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const service = await prisma.service.findUnique({
    where: { slug },
    include: { portfolioItems: true }
  });

  if (!service) {
    notFound();
  }

  const siteSettings = await prisma.siteSettings.findFirst();
  const services = await prisma.service.findMany({ orderBy: { id: 'asc' } });

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <ServiceDetailClient service={service} />
      <Footer siteSettings={siteSettings ?? undefined} services={services} />
    </div>
  );
}