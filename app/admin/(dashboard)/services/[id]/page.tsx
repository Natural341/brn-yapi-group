import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import EditServiceForm from './EditServiceForm';

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const serviceId = parseInt(id);

  if (isNaN(serviceId)) {
    notFound();
  }

  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  });

  if (!service) {
    notFound();
  }

  return (
    <div className="p-8">
      <div className="flex items-center space-x-4 mb-8">
        <Link 
          href="/admin/services"
          className="text-gray-400 hover:text-[#1A1A1A] transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Edit Service: {service.slug}</h1>
      </div>

      <div className="bg-white border border-black/5 p-8 rounded-lg">
        <EditServiceForm service={service} />
      </div>
    </div>
  );
}
