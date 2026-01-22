import React from 'react';
import { getPortfolioItems } from '@/lib/data-provider';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const items = await getPortfolioItems();
  const projectCount = items.length;
  const messageCount = 0; // Mock - veritabanı olmadan mesaj yok

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Link href="/admin/portfolio" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm uppercase tracking-wider font-bold mb-2">Total Projects</h3>
          <p className="text-4xl font-black text-[#1A1A1A]">{projectCount}</p>
        </Link>

        <Link href="/admin/messages" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm uppercase tracking-wider font-bold mb-2">Messages</h3>
          <p className="text-4xl font-black text-[#1A1A1A]">{messageCount}</p>
        </Link>

      </div>
    </div>
  );
}
