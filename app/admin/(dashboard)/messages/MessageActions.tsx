'use client';

import React, { useState } from 'react';
import { deleteMessage } from '../../actions';

interface Message {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  message: string;
  createdAt: Date;
}

export default function MessageActions({ msg }: { msg: Message }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this message?')) {
      setIsDeleting(true);
      await deleteMessage(msg.id);
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setIsOpen(true)}
          className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition shadow-sm"
        >
          View
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition shadow-sm disabled:opacity-50"
        >
          {isDeleting ? '...' : 'Delete'}
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-6 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Message Details</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">From</label>
                  <div className="text-gray-900 font-medium text-lg flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        {msg.name.charAt(0).toUpperCase()}
                    </div>
                    {msg.name}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Date Received</label>
                  <p className="text-gray-900 font-medium">{new Date(msg.createdAt).toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
                 <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline break-all font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    {msg.email}
                  </a>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                  <a href={`tel:${msg.phone}`} className="text-blue-600 hover:underline font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    {msg.phone || 'N/A'}
                  </a>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service Interest</label>
                <span className="inline-flex items-center px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-bold border border-[#D4AF37]/20">
                  {msg.service}
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message Content</label>
                <div className="bg-white p-5 rounded-lg text-gray-800 whitespace-pre-wrap leading-relaxed border border-gray-200 shadow-sm text-sm">
                  {msg.message}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-3 pt-4 border-t">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-white text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition font-medium text-sm"
              >
                Delete Message
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition font-medium text-sm shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
