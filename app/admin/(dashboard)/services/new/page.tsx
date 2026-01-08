'use client';

import React from 'react';
import Link from 'next/link';
import { createService } from '../../../actions';

export default function NewServicePage() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center space-x-4 mb-8">
        <Link href="/admin/services" className="text-gray-500 hover:text-black">← Back</Link>
        <h1 className="text-3xl font-bold text-gray-800">Add New Service</h1>
      </div>

      <form action={createService} className="space-y-8 bg-white p-8 rounded-lg shadow border border-black/5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Slug (URL)</label>
            <input type="text" name="slug" required placeholder="e.g. urban-design" className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Icon Type</label>
            <select name="icon" className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors">
              <option value="Hammer">Hammer</option>
              <option value="Compass">Compass</option>
              <option value="Palette">Palette</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Service Image</label>
          <input type="file" name="image" accept="image/*" className="w-full p-2 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (EN)</label>
            <input type="text" name="titleEn" required className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (TR)</label>
            <input type="text" name="titleTr" required className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (EN)</label>
            <textarea name="descriptionEn" rows={3} required className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (TR)</label>
            <textarea name="descriptionTr" rows={3} required className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Full Content (EN)</label>
            <textarea name="contentEn" rows={10} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Full Content (TR)</label>
            <textarea name="contentTr" rows={10} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors text-sm" />
          </div>
        </div>

        <button type="submit" className="px-8 py-4 bg-[#D4AF37] text-white font-bold uppercase tracking-widest hover:bg-[#b8952b] transition-colors">
          Create Service
        </button>

      </form>
    </div>
  );
}
