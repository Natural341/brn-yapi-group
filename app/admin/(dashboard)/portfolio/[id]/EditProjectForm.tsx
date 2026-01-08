'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { updatePortfolioItem, deletePortfolioItem, deletePortfolioImage } from '../../../actions';

interface PortfolioItem {
  id: number;
  titleEn: string;
  titleTr: string;
  descriptionEn: string;
  descriptionTr: string;
  category: string | null;
  client: string | null;
  location: string | null;
  year: string | null;
  serviceId: number | null;
  imageUrl: string | null;
  images: { id: number; url: string }[];
}

export default function EditProjectForm({ project, services }: { project: PortfolioItem, services: any[] }) {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = (formData: FormData) => {
    startTransition(async () => {
      await updatePortfolioItem(project.id, formData);
      alert('Project updated successfully!');
    });
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this project?')) {
      await deletePortfolioItem(project.id);
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link href="/admin/portfolio" className="text-gray-500 hover:text-black">← Back</Link>
          <h1 className="text-3xl font-bold text-gray-800">Edit Project</h1>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 font-bold uppercase text-xs tracking-widest"
        >
          Delete Project
        </button>
      </div>

      <form action={handleUpdate} className="space-y-8 bg-white p-8 rounded-lg shadow border border-black/5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Project Title (TR)</label>
            <input
              type="text"
              name="titleTr"
              defaultValue={project.titleTr}
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
              defaultValue={project.titleEn}
              required
              placeholder="e.g. Vadi Istanbul Villa"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={project.location || ''}
              placeholder="e.g. Istanbul, Turkey"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Year</label>
            <input
              type="text"
              name="year"
              defaultValue={project.year || ''}
              placeholder="e.g. 2024"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">Client Name (Optional)</label>
          <input
            type="text"
            name="client"
            defaultValue={project.client || ''}
            placeholder="e.g. Private Commission"
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Category (Display Label)</label>
            <input
              type="text"
              name="category"
              defaultValue={project.category || ''}
              placeholder="e.g. Residential"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Related Service (Link)</label>
            <select
              name="serviceId"
              defaultValue={project.serviceId || ''}
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
          <label className="block text-sm font-bold text-gray-700">Project Main Image</label>
          {project.imageUrl && (
            <div className="mb-4">
              <img src={project.imageUrl} alt="Current" className="w-32 h-24 object-cover rounded" />
            </div>
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Description (TR)</label>
            <textarea
              name="descriptionTr"
              rows={5}
              defaultValue={project.descriptionTr}
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Description (EN)</label>
            <textarea
              name="descriptionEn"
              rows={5}
              defaultValue={project.descriptionEn}
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
            ></textarea>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">Add More Gallery Images</label>
          <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
            {project.images.map(img => (
              <div key={img.id} className="relative group shrink-0">
                <img src={img.url} className="w-24 h-24 object-cover rounded border border-gray-200" />
                <button
                  type="button"
                  onClick={async () => {
                    if (confirm('Delete this image?')) {
                      await deletePortfolioImage(img.id);
                      window.location.reload();
                    }
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow hover:bg-red-700 transition-colors"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            name="gallery"
            accept="image/*"
            multiple
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#1A1A1A] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors disabled:opacity-50"
        >
          {isPending ? 'Updating...' : 'Update Project'}
        </button>

      </form>
    </div>
  );
}
