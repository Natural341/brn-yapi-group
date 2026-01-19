'use client';

import React, { useRef, useState } from 'react';
import { createSponsor } from '@/app/admin/actions';

export default function AddSponsorForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [type, setType] = useState('TEXT');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        await createSponsor(formData);
        setLoading(false);
        formRef.current?.reset();
        setType('TEXT'); // Reset type default
    }

    return (
        <form ref={formRef} action={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37] focus:ring-opacity-50 p-2 border"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37] focus:ring-opacity-50 p-2 border"
                >
                    <option value="TEXT">Text</option>
                    <option value="IMAGE">Image</option>
                </select>
            </div>

            {type === 'TEXT' ? (
                <div>
                    <label className="block text-sm font-medium text-gray-700">Content (Text)</label>
                    <input
                        type="text"
                        name="contentText"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37] focus:ring-opacity-50 p-2 border"
                    />
                </div>
            ) : (
                <div>
                    <label className="block text-sm font-medium text-gray-700">Logo (Image)</label>
                    <input
                        type="file"
                        name="contentFile"
                        accept="image/*"
                        required
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37]/10 file:text-[#D4AF37] hover:file:bg-[#D4AF37]/20"
                    />
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700">URL (Optional)</label>
                <input
                    type="url"
                    name="url"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#D4AF37] focus:ring focus:ring-[#D4AF37] focus:ring-opacity-50 p-2 border"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1A1A1A] text-white py-2 px-4 rounded hover:bg-[#D4AF37] transition-colors font-bold disabled:opacity-50"
            >
                {loading ? 'Adding...' : 'Add Sponsor'}
            </button>
        </form>
    );
}
