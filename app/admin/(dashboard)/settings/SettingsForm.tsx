'use client';

import React, { useTransition } from 'react';
import { updateSiteSettings } from '../../actions';

interface SiteSettings {
  id: number;
  email: string;
  phone: string;
  address: string;
  contactTitleEn: string;
  contactTitleTr: string;
  contactDescEn: string;
  contactDescTr: string;
  heroTitleEn: string;
  heroTitleTr: string;
  heroSubtitleEn: string;
  heroSubtitleTr: string;
  aboutTitleEn: string;
  aboutTitleTr: string;
  aboutDescEn: string;
  aboutDescTr: string;
  footerRightsEn: string;
  footerRightsTr: string;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
  aboutSectionTitleEn: string | null;
  aboutSectionTitleTr: string | null;
  contactMainTitleEn: string | null;
  contactMainTitleTr: string | null;
  portfolioTitleEn: string | null;
  portfolioTitleTr: string | null;
  portfolioSubtitleEn: string | null;
  portfolioSubtitleTr: string | null;
  portfolioDescEn: string | null;
  portfolioDescTr: string | null;
  heroImageUrl: string | null;
  adminUsername?: string;
  adminPassword?: string;
}

export default function SettingsForm({ settings }: { settings: SiteSettings }) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await updateSiteSettings(formData);
      alert('Settings updated successfully!');
    });
  };

  return (
    <form action={handleSubmit} className="space-y-12 max-w-4xl">
      
      {/* Hero Section */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Hero Section</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Hero Background Image</label>
          {settings.heroImageUrl && (
            <div className="mb-4">
              <img src={settings.heroImageUrl} alt="Hero Background" className="w-64 h-40 object-cover rounded border border-gray-200" />
            </div>
          )}
          <input 
            type="file" 
            name="heroImage" 
            accept="image/*"
            className="w-full p-2 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (EN)</label>
            <input type="text" name="heroTitleEn" defaultValue={settings.heroTitleEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (TR)</label>
            <input type="text" name="heroTitleTr" defaultValue={settings.heroTitleTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Subtitle (EN)</label>
            <input type="text" name="heroSubtitleEn" defaultValue={settings.heroSubtitleEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Subtitle (TR)</label>
            <input type="text" name="heroSubtitleTr" defaultValue={settings.heroSubtitleTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">About Section (Our Philosophy)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Section Small Title (EN)</label>
            <input type="text" name="aboutSectionTitleEn" defaultValue={settings.aboutSectionTitleEn || 'Our Philosophy'} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Section Small Title (TR)</label>
            <input type="text" name="aboutSectionTitleTr" defaultValue={settings.aboutSectionTitleTr || 'Felsefemiz'} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (EN)</label>
            <input type="text" name="aboutTitleEn" defaultValue={settings.aboutTitleEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (TR)</label>
            <input type="text" name="aboutTitleTr" defaultValue={settings.aboutTitleTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (EN)</label>
            <textarea name="aboutDescEn" rows={4} defaultValue={settings.aboutDescEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (TR)</label>
            <textarea name="aboutDescTr" rows={4} defaultValue={settings.aboutDescTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Portfolio Section (Homepage)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Main Title (EN)</label>
            <input type="text" name="portfolioTitleEn" defaultValue={settings.portfolioTitleEn || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Main Title (TR)</label>
            <input type="text" name="portfolioTitleTr" defaultValue={settings.portfolioTitleTr || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Subtitle (EN)</label>
            <input type="text" name="portfolioSubtitleEn" defaultValue={settings.portfolioSubtitleEn || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Subtitle (TR)</label>
            <input type="text" name="portfolioSubtitleTr" defaultValue={settings.portfolioSubtitleTr || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (EN)</label>
            <textarea name="portfolioDescEn" rows={2} defaultValue={settings.portfolioDescEn || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (TR)</label>
            <textarea name="portfolioDescTr" rows={2} defaultValue={settings.portfolioDescTr || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
        </div>
      </section>

      {/* Contact Section Big Title */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Contact Section (Big Title)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (EN)</label>
            <input type="text" name="contactMainTitleEn" defaultValue={settings.contactMainTitleEn || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (TR)</label>
            <input type="text" name="contactMainTitleTr" defaultValue={settings.contactMainTitleTr || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Social Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Instagram URL</label>
            <input type="text" name="instagram" defaultValue={settings.instagram || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">LinkedIn URL</label>
            <input type="text" name="linkedin" defaultValue={settings.linkedin || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Twitter/X URL</label>
            <input type="text" name="twitter" defaultValue={settings.twitter || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Facebook URL</label>
            <input type="text" name="facebook" defaultValue={settings.facebook || ''} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Hero Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (EN)</label>
            <input type="text" name="heroTitleEn" defaultValue={settings.heroTitleEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (TR)</label>
            <input type="text" name="heroTitleTr" defaultValue={settings.heroTitleTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Subtitle (EN)</label>
            <input type="text" name="heroSubtitleEn" defaultValue={settings.heroSubtitleEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Subtitle (TR)</label>
            <input type="text" name="heroSubtitleTr" defaultValue={settings.heroSubtitleTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">About Section (Our Philosophy)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (EN)</label>
            <input type="text" name="aboutTitleEn" defaultValue={settings.aboutTitleEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Title (TR)</label>
            <input type="text" name="aboutTitleTr" defaultValue={settings.aboutTitleTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (EN)</label>
            <textarea name="aboutDescEn" rows={4} defaultValue={settings.aboutDescEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (TR)</label>
            <textarea name="aboutDescTr" rows={4} defaultValue={settings.aboutDescTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Footer Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Rights Text (EN)</label>
            <input type="text" name="footerRightsEn" defaultValue={settings.footerRightsEn} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Rights Text (TR)</label>
            <input type="text" name="footerRightsTr" defaultValue={settings.footerRightsTr} className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors" />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" 
              defaultValue={settings.email}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
            <input 
              type="text" 
              name="phone" 
              defaultValue={settings.phone}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Address (Multiline)</label>
            <textarea 
              name="address" 
              rows={3}
              defaultValue={settings.address}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none"
            />
          </div>
        </div>
      </section>

      {/* Contact Section Texts */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Contact Section Texts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Section Title (EN)</label>
            <input 
              type="text" 
              name="contactTitleEn" 
              defaultValue={settings.contactTitleEn}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Section Title (TR)</label>
            <input 
              type="text" 
              name="contactTitleTr" 
              defaultValue={settings.contactTitleTr}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (EN)</label>
            <textarea 
              name="contactDescEn" 
              rows={4}
              defaultValue={settings.contactDescEn}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Description (TR)</label>
            <textarea 
              name="contactDescTr" 
              rows={4}
              defaultValue={settings.contactDescTr}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors resize-none"
            />
          </div>
        </div>
      </section>

      {/* Admin Credentials */}
      <section>
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6 border-b border-black/5 pb-2">Admin Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Username</label>
            <input 
              type="text" 
              name="adminUsername" 
              defaultValue={settings.adminUsername || 'admin'}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Password</label>
            <input 
              type="text" 
              name="adminPassword" 
              defaultValue={settings.adminPassword || '123'}
              className="w-full p-4 bg-white border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      <div className="pt-4">
        <button 
          type="submit" 
          disabled={isPending}
          className="px-8 py-4 bg-[#D4AF37] text-white font-bold uppercase tracking-widest hover:bg-[#b8952b] transition-colors disabled:opacity-50"
        >
          {isPending ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </form>
  );
}
