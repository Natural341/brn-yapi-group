import React from 'react';
import { deleteSubscriber, subscribeNewsletter } from '@/app/newsletter/actions';

export const dynamic = 'force-dynamic';

async function handleManualSubscribe(formData: FormData) {
  'use server';
  await subscribeNewsletter(formData);
}

export default async function AdminNewsletterPage() {
  // Mock - veritabanı olmadan boş array
  const subscribers: any[] = [];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Newsletter Subscribers</h1>
        <div className="bg-white px-4 py-2 rounded border border-black/10 text-sm font-bold text-gray-500">
          Total: {subscribers.length}
        </div>
      </div>

      {/* Add Subscriber Form */}
      <div className="mb-8 bg-white p-6 border border-black/5 rounded-lg shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Add Subscriber Manually</h2>
        <form action={handleManualSubscribe} className="flex gap-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter email address" 
            required 
            className="flex-1 p-3 border border-gray-200 rounded outline-none focus:border-[#D4AF37]"
          />
          <button type="submit" className="bg-[#D4AF37] text-white px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors">
            Add Email
          </button>
        </form>
      </div>

      <div className="bg-white border border-black/5 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-black/5">
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600">Email</th>
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600">Date Subscribed</th>
              <th className="p-4 font-bold text-sm uppercase tracking-wider text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub) => (
              <tr key={sub.id} className="border-b border-black/5 last:border-b-0 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-700 font-medium">{sub.email}</td>
                <td className="p-4 text-gray-500 text-sm">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4 text-right">
                  <form action={deleteSubscriber.bind(null, sub.id)}>
                    <button className="text-red-500 hover:text-red-700 transition-colors font-bold text-xs uppercase tracking-widest">
                      Remove
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {subscribers.length === 0 && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-gray-500">No subscribers yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}