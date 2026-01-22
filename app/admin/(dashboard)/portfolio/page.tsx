import React from 'react';
import Link from 'next/link';
import { getPortfolioItems } from '@/lib/data-provider';
import DeleteButton from './DeleteButton';

export const dynamic = 'force-dynamic';

export default async function AdminPortfolioPage() {
  const items = await getPortfolioItems() as any[];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Portfolio</h1>
        <Link 
          href="/admin/portfolio/new" 
          className="bg-[#1A1A1A] text-white px-6 py-3 rounded text-sm font-bold hover:bg-[#D4AF37] transition-colors"
        >
          + Add New Project
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.titleEn} / {item.titleTr}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end items-center space-x-4">
                  <Link href={`/admin/portfolio/${item.id}`} className="text-[#D4AF37] hover:text-black transition-colors font-bold uppercase text-xs tracking-wide">
                    Edit
                  </Link>
                  <DeleteButton id={item.id} />
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500 text-sm">No projects found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
