'use client';

import React, { useState, useEffect } from 'react';

interface SeoSettings {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    ogImage: string;
}

// Default values from layout.tsx
const defaultSeoValues: SeoSettings = {
    seoTitle: 'BRN YAPI GRUP | İnşaat ve Mimarlık Mükemmelliği',
    seoDescription: 'BRN Yapı Grup, anahtar teslim inşaat, mimari tasarım, statik proje ve altın varak uygulamaları konusunda uzmanlaşmış profesyonel bir yapı grubudur. Türkiye genelinde kaliteli ve güvenilir inşaat hizmetleri sunuyoruz.',
    seoKeywords: 'inşaat, mimarlık, anahtar teslim, yapı, BRN Yapı, altın varak, statik proje, İstanbul inşaat, konut projeleri, ticari inşaat',
    ogImage: '/logo.jpeg',
};

export default function SeoAdminPage() {
    const [settings, setSettings] = useState<SeoSettings>(defaultSeoValues);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/seo');
            if (res.ok) {
                const data = await res.json();
                setSettings({
                    seoTitle: data.seoTitle || defaultSeoValues.seoTitle,
                    seoDescription: data.seoDescription || defaultSeoValues.seoDescription,
                    seoKeywords: data.seoKeywords || defaultSeoValues.seoKeywords,
                    ogImage: data.ogImage || defaultSeoValues.ogImage,
                });
            }
        } catch (error) {
            console.error('Failed to fetch SEO settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage(null);

        try {
            const res = await fetch('/api/seo', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings),
            });

            if (res.ok) {
                setMessage({ type: 'success', text: 'SEO ayarları başarıyla kaydedildi!' });
            } else {
                setMessage({ type: 'error', text: 'Kaydetme hatası oluştu.' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Sunucu hatası.' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#D4AF37]"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 mb-2">🔍 SEO Yönetimi</h1>
                <p className="text-gray-500">Google ve sosyal medya için site ayarlarınızı düzenleyin.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* SEO Title */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <label className="block text-sm font-bold text-[#D4AF37] uppercase tracking-wide mb-3">
                        Sayfa Başlığı (Title Tag)
                    </label>
                    <input
                        type="text"
                        value={settings.seoTitle}
                        onChange={(e) => setSettings({ ...settings, seoTitle: e.target.value })}
                        placeholder="BRN YAPI GRUP | İnşaat ve Mimarlık"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none transition-colors"
                    />
                    <p className="text-gray-400 text-xs mt-2">Google arama sonuçlarında görünen başlık (60 karakter önerilir)</p>
                </div>

                {/* SEO Description */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <label className="block text-sm font-bold text-[#D4AF37] uppercase tracking-wide mb-3">
                        Meta Açıklama (Description)
                    </label>
                    <textarea
                        value={settings.seoDescription}
                        onChange={(e) => setSettings({ ...settings, seoDescription: e.target.value })}
                        placeholder="Anahtar teslim inşaat, mimari tasarım ve profesyonel yapı çözümleri..."
                        rows={3}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none transition-colors resize-none"
                    />
                    <p className="text-gray-400 text-xs mt-2">Google arama sonuçlarında görünen açıklama (155 karakter önerilir)</p>
                </div>

                {/* SEO Keywords */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <label className="block text-sm font-bold text-[#D4AF37] uppercase tracking-wide mb-3">
                        Anahtar Kelimeler (Keywords)
                    </label>
                    <textarea
                        value={settings.seoKeywords}
                        onChange={(e) => setSettings({ ...settings, seoKeywords: e.target.value })}
                        placeholder="inşaat, mimarlık, anahtar teslim, yapı, BRN Yapı, altın varak..."
                        rows={2}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none transition-colors resize-none"
                    />
                    <p className="text-gray-400 text-xs mt-2">Virgülle ayrılmış anahtar kelimeler</p>
                </div>

                {/* OG Image */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <label className="block text-sm font-bold text-[#D4AF37] uppercase tracking-wide mb-3">
                        Sosyal Medya Görseli (OG Image URL)
                    </label>
                    <input
                        type="text"
                        value={settings.ogImage}
                        onChange={(e) => setSettings({ ...settings, ogImage: e.target.value })}
                        placeholder="/logo.jpeg veya https://..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none transition-colors"
                    />
                    <p className="text-gray-400 text-xs mt-2">Facebook, Twitter vb. paylaşımlarda görünecek görsel (1200x630 px önerilir)</p>
                </div>

                {/* Message */}
                {message && (
                    <div className={`p-4 rounded-lg text-sm font-bold ${message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                        {message.text}
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={saving}
                    className="w-full bg-[#D4AF37] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#1A1A1A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                    {saving ? 'Kaydediliyor...' : 'Kaydet'}
                </button>
            </form>

            {/* Info Box */}
            <div className="mt-10 p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                <h3 className="text-[#D4AF37] font-bold mb-3">💡 SEO İpuçları</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Başlık 60 karakteri geçmemeli ve ana anahtar kelimeyi içermeli.</li>
                    <li>• Meta açıklama 155 karakter civarında olmalı ve çekici olmalı.</li>
                    <li>• Anahtar kelimeler gerçek arama terimlerini yansıtmalı.</li>
                    <li>• Sosyal medya görseli 1200x630 piksel boyutunda olmalı.</li>
                </ul>
            </div>
        </div>
    );
}
