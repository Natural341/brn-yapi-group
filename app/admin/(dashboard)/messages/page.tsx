import React from 'react';
import { prisma } from '@/lib/prisma';
import MessageActions from './MessageActions';

export const dynamic = 'force-dynamic';

export default async function AdminMessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Messages</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">From</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="font-bold">{msg.name}</div>
                  <div className="text-gray-500 text-xs">{msg.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{msg.phone || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{msg.service}</td>
                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">{msg.message}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">{new Date(msg.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <MessageActions msg={msg} />
                </td>
              </tr>
            ))}
            {messages.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500 text-sm">No messages received yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
