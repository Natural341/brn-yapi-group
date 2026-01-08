'use client';

import React, { useRef, useState, useTransition } from 'react';
import { TRANSLATIONS } from '../constants';
import { useLanguage } from '@/context/LanguageContext';
import { submitContactForm } from '@/app/contact/actions';

interface SiteSettings {
  email: string;
  phone: string;
  address: string;
  contactTitleEn: string;
  contactTitleTr: string;
  contactDescEn: string;
  contactDescTr: string;
  contactMainTitleEn: string | null;
  contactMainTitleTr: string | null;
}

const Contact: React.FC<{ siteSettings?: SiteSettings }> = ({ siteSettings }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS.contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (formData: FormData) => {
    setStatus('idle');
    startTransition(async () => {
      try {
        await submitContactForm(formData);
        setStatus('success');
        formRef.current?.reset();
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    });
  };

  const title = siteSettings ? (lang === 'tr' ? siteSettings.contactTitleTr : siteSettings.contactTitleEn) : t.title[lang];
  const description = siteSettings ? (lang === 'tr' ? siteSettings.contactDescTr : siteSettings.contactDescEn) : "Whether you have a distinct vision or need guidance, our team is ready to bring your architectural dreams to life.";
  const address = siteSettings?.address || "Zorlu Center, Level 5 \n Istanbul, Turkey";
  const email = siteSettings?.email || "info@brnyapigroup.com";
  const phone = siteSettings?.phone || "+90 (212) 000 00 00";
  
  const mainTitleHtml = siteSettings ? (lang === 'tr' ? siteSettings.contactMainTitleTr : siteSettings.contactMainTitleEn) : null;
  const defaultMainTitle = lang === 'tr' 
    ? "Vizyoner <br/> <span class='text-[#D4AF37] italic font-bold'>Mekanlar</span> İnşa Edelim." 
    : "Let's Build <br/> <span class='text-[#D4AF37] italic font-bold'>Visionary</span> Spaces.";

  return (
    <section id="contact" className="py-32 bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="mb-16">
              <h2 className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs font-black mb-8 block">{title}</h2>
              <h3 
                className="text-5xl md:text-6xl xl:text-7xl font-serif font-black leading-[1.1] mb-8"
                dangerouslySetInnerHTML={{ __html: mainTitleHtml || defaultMainTitle }}
              >
              </h3>
              <p className="text-white/50 leading-relaxed text-lg font-medium max-w-lg">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-white/10">
              <div className="group">
                <span className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  <span>Office</span>
                </span>
                <p className="text-lg font-serif leading-relaxed text-white/90 group-hover:text-white transition-colors whitespace-pre-line">
                  {address}
                </p>
              </div>
              <div className="group">
                <span className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4 font-bold">
                   <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                   <span>Contact</span>
                </span>
                <div className="flex flex-col space-y-2">
                  <a href={`mailto:${email}`} className="text-lg font-serif text-white/90 hover:text-[#D4AF37] transition-colors">{email}</a>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-lg font-serif text-white/90 hover:text-[#D4AF37] transition-colors">{phone}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] backdrop-blur-md p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl">
              <form ref={formRef} action={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder-transparent"
                      placeholder={t.name[lang]}
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3 text-[10px] text-[#D4AF37] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#D4AF37] uppercase tracking-widest font-bold">
                      {t.name[lang]}
                    </label>
                  </div>
                  <div className="group relative">
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder-transparent"
                      placeholder={t.email[lang]}
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3 text-[10px] text-[#D4AF37] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#D4AF37] uppercase tracking-widest font-bold">
                      {t.email[lang]}
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder-transparent"
                    placeholder={lang === 'tr' ? 'Telefon Numarası' : 'Phone Number'}
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3 text-[10px] text-[#D4AF37] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#D4AF37] uppercase tracking-widest font-bold">
                    {lang === 'tr' ? 'Telefon Numarası' : 'Phone Number'}
                  </label>
                </div>

                <div className="group relative">
                  <select name="service" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#D4AF37] focus:outline-none appearance-none cursor-pointer">
                    <option value="" className="bg-black text-white/50">{t.service[lang]}</option>
                    {t.options[lang].map(opt => <option key={opt} value={opt} className="bg-[#1A1A1A] text-white">{opt}</option>)}
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">▼</div>
                </div>

                <div className="group relative">
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none placeholder-transparent"
                    placeholder={t.message[lang]}
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3 text-[10px] text-[#D4AF37] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#D4AF37] uppercase tracking-widest font-bold">
                    {t.message[lang]}
                  </label>
                </div>

                {status === 'success' && (
                   <p className="text-green-500 text-sm font-bold tracking-wider">Message sent successfully!</p>
                )}
                {status === 'error' && (
                   <p className="text-red-500 text-sm font-bold tracking-wider">Failed to send message. Please try again.</p>
                )}

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isPending}
                    className="btn-premium w-full py-5 bg-[#D4AF37] text-black font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white transition-all shadow-lg disabled:opacity-50"
                  >
                    {isPending ? 'SENDING...' : t.submit[lang]}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;