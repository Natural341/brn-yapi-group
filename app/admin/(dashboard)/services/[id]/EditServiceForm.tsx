'use client';

import React, { useTransition } from 'react';
import { updateService } from '../../../actions';

interface Service {
  id: number;
  slug: string;
  icon: string;
  imageUrl: string | null;
  titleEn: string;
  titleTr: string;
  descriptionEn: string;
  descriptionTr: string;
  contentEn: string;
  contentTr: string;
  servicePortfolioTitleEn: string | null;
  servicePortfolioTitleTr: string | null;
  servicePortfolioDescEn: string | null;
  servicePortfolioDescTr: string | null;
}

export default function EditServiceForm({ service }: { service: Service }) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await updateService(service.id, formData);
      alert('Service updated successfully!');
    });
  };

  return (
    <form action={handleSubmit} className="space-y-8 max-w-4xl">
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Service Image</label>
        {service.imageUrl && (
          <div className="mb-4">
            <img src={service.imageUrl} alt="Current Service Image" className="w-32 h-32 object-cover rounded border border-gray-200" />
            <p className="text-xs text-gray-400 mt-1">Current Image</p>
          </div>
        )}
        <input 
          type="file" 
          name="image" 
          accept="image/*"
          className="w-full p-2 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
        />
      </div>

      {/* Main Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (EN)</label>
          <input 
            type="text" 
            name="titleEn" 
            defaultValue={service.titleEn}
            className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (TR)</label>
          <input 
            type="text" 
            name="titleTr" 
            defaultValue={service.titleTr}
            className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Short Description (EN)</label>
          <textarea 
            name="descriptionEn" 
            rows={3}
            defaultValue={service.descriptionEn}
            className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Short Description (TR)</label>
          <textarea 
            name="descriptionTr" 
            rows={3}
            defaultValue={service.descriptionTr}
            className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none"
          />
        </div>
      </div>

      {/* Full Content */}
      <div className="space-y-8 border-t border-black/5 pt-8">
        <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">Detail Page Content</h3>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Full Content (EN)</label>
          <textarea 
            name="contentEn" 
            rows={10}
            defaultValue={service.contentEn}
            className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Full Content (TR)</label>
          <textarea 
            name="contentTr" 
            rows={10}
            defaultValue={service.contentTr}
            className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Service Portfolio Text */}
      <div className="space-y-8 border-t border-black/5 pt-8">
        <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">Service Detail Page - Portfolio Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Portfolio Section Title (EN)</label>
            <input 
              type="text" 
              name="servicePortfolioTitleEn" 
              defaultValue={service.servicePortfolioTitleEn || ''}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Portfolio Section Title (TR)</label>
            <input 
              type="text" 
              name="servicePortfolioTitleTr" 
              defaultValue={service.servicePortfolioTitleTr || ''}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Portfolio Section Desc (EN)</label>
            <textarea 
              name="servicePortfolioDescEn" 
              rows={2}
              defaultValue={service.servicePortfolioDescEn || ''}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Portfolio Section Desc (TR)</label>
            <textarea 
              name="servicePortfolioDescTr" 
              rows={2}
              defaultValue={service.servicePortfolioDescTr || ''}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button 
          type="submit" 
          disabled={isPending}
          className="px-8 py-4 bg-[#D4AF37] text-white font-bold uppercase tracking-widest hover:bg-[#b8952b] transition-colors disabled:opacity-50"
        >
          {isPending ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
