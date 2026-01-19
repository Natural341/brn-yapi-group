'use client';

import React, { useTransition } from 'react';
import { deleteSponsor, toggleSponsorStatus } from '@/app/admin/actions';

export default function SponsorList({ sponsors }: { sponsors: any[] }) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this sponsor?')) {
            startTransition(() => deleteSponsor(id));
        }
    };

    const handleToggle = (id: number, currentStatus: boolean) => {
        startTransition(() => toggleSponsorStatus(id, !currentStatus));
    };

    if (sponsors.length === 0) {
        return <div className="p-8 text-center text-gray-500">No sponsors found.</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Preview</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {sponsors.map((sponsor) => (
                        <tr key={sponsor.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {sponsor.type === 'IMAGE' ? (
                                    <img src={sponsor.content} alt={sponsor.name} className="h-10 w-auto object-contain bg-black/5 rounded" />
                                ) : (
                                    <span className="font-bold text-gray-800">{sponsor.content}</span>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sponsor.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sponsor.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    onClick={() => handleToggle(sponsor.id, sponsor.isActive)}
                                    className={`px-2 py-1 text-xs font-bold rounded ${sponsor.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                                >
                                    {sponsor.isActive ? 'Active' : 'Inactive'}
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    onClick={() => handleDelete(sponsor.id)}
                                    disabled={isPending}
                                    className="text-red-600 hover:text-red-900 font-bold ml-4 disabled:opacity-50"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
