'use client';

import React from 'react';
import Link from 'next/link';
import { createPortfolioItem } from '../../../actions';

export default function NewProjectForm({ services }: { services: any[] }) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center space-x-4 mb-8">
        <Link href="/admin/portfolio" className="text-gray-500 hover:text-black">← Back</Link>
        <h1 className="text-3xl font-bold text-gray-800">Add New Project</h1>
      </div>

      <form action={createPortfolioItem} className="space-y-6 bg-white p-8 rounded-lg shadow">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Project Title (TR)</label>
            <input
              type="text"
              name="titleTr"
              required
              placeholder="Örn: Vadi İstanbul Villası"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Project Title (EN)</label>
            <input
              type="text"
              name="titleEn"
              required
              placeholder="e.g. Vadi Istanbul Villa"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">Client Name (Optional)</label>
          <input
            type="text"
            name="client"
            placeholder="e.g. Private Commission"
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Istanbul, Turkey"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Year</label>
            <input
              type="text"
              name="year"
              placeholder="e.g. 2024"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Category (Display Label)</label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Residential"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Related Service (Link)</label>
            <select
              name="serviceId"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="">Select a Service...</option>
              {services.map(s => (
                <option key={s.id} value={s.id}>{s.titleEn} / {s.titleTr}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">Project Main Image (Thumbnail)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">Gallery Images (Multiple)</label>
          <input
            type="file"
            name="gallery"
            accept="image/*"
            multiple
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Description (TR)</label>
            <textarea
              name="descriptionTr"
              rows={5}
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Description (EN)</label>
            <textarea
              name="descriptionEn"
              rows={5}
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1A1A1A] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
        >
          Create Project
        </button>

      </form>
    </div>
  );
}
