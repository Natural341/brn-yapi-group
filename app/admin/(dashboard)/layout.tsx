import React from 'react';
import Link from 'next/link';
import '../../globals.css';

export const metadata = {
  title: 'Admin Dashboard',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1A1A] text-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-800">
          <span className="text-xl font-bold tracking-widest text-[#D4AF37]">ADMIN</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="block px-4 py-3 rounded hover:bg-white/10 transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/portfolio" className="block px-4 py-3 rounded hover:bg-white/10 transition-colors">
            Portfolio
          </Link>
          <Link href="/admin/services" className="block px-4 py-3 rounded hover:bg-white/10 transition-colors">
            Services
          </Link>
          <Link href="/admin/settings" className="block px-4 py-3 rounded hover:bg-white/10 transition-colors">
            Settings
          </Link>
          <Link href="/admin/messages" className="block px-4 py-3 rounded hover:bg-white/10 transition-colors">
            Messages
          </Link>
          <Link href="/admin/newsletter" className="block px-4 py-3 rounded hover:bg-white/10 transition-colors">
            Newsletter
          </Link>
          <Link href="/admin/seo" className="block px-4 py-3 rounded hover:bg-white/10 transition-colors text-[#D4AF37]">
            🔍 SEO Yönetimi
          </Link>
          <div className="pt-8 border-t border-gray-800 mt-4">
            <Link href="/" className="block px-4 py-3 text-gray-400 hover:text-white transition-colors text-sm">
              ← Back to Site
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
