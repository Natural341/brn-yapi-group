import React from 'react';
import SponsorList from './SponsorList';
import AddSponsorForm from './AddSponsorForm';

export const dynamic = 'force-dynamic';

export default async function AdminSponsorsPage() {
    // Mock - veritabanı olmadan boş array
    const sponsors: any[] = [];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Sponsors</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Sponsor</h2>
                        <AddSponsorForm />
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <SponsorList sponsors={sponsors} />
                    </div>
                </div>
            </div>
        </div>
    );
}
