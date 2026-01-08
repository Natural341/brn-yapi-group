import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { deleteService } from '../../actions';

export default async function AdminServicesPage() {
  const services = await prisma.service.findMany();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Services Management</h1>
        <Link 
          href="/admin/services/new" 
          className="bg-[#D4AF37] text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors"
        >
          Add New Service
        </Link>
      </div>

      <div className="bg-white border border-black/5 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-black/5">
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600">Icon</th>
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600">Slug</th>
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600">Title (EN)</th>
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600">Title (TR)</th>
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b border-black/5 last:border-b-0 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-700">{service.icon}</td>
                <td className="p-4 text-gray-700">{service.slug}</td>
                <td className="p-4 text-gray-700">{service.titleEn}</td>
                <td className="p-4 text-gray-700">{service.titleTr}</td>
                <td className="p-4 flex items-center space-x-4">
                  <Link 
                    href={`/admin/services/${service.id}`}
                    className="text-[#D4AF37] hover:text-black transition-colors font-medium text-sm uppercase tracking-wide"
                  >
                    Edit
                  </Link>
                  <form action={deleteService.bind(null, service.id)}>
                    <button className="text-red-500 hover:text-red-700 transition-colors font-medium text-sm uppercase tracking-wide">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}