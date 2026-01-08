import React from 'react';
import { prisma } from '@/lib/prisma';
import SettingsForm from './SettingsForm';

export default async function AdminSettingsPage() {
  try {
    const settings = await prisma.siteSettings.findFirst();

    if (!settings) {
      return <div className="p-8">Settings not found. Please run seed.</div>;
    }

    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Site Settings</h1>
        </div>

        <div className="bg-white border border-black/5 p-8 rounded-lg">
          <SettingsForm settings={JSON.parse(JSON.stringify(settings))} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load settings:", error);
    return <div className="p-8 text-red-500">Error loading settings. Please check console.</div>;
  }
}
