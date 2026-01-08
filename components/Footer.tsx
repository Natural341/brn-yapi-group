'use client';

import React from 'react';
import Image from 'next/image';
import { TRANSLATIONS, NAV_ITEMS, SERVICES } from '../constants';
import { useLanguage } from '@/context/LanguageContext';
import { subscribeNewsletter } from '@/app/newsletter/actions';
import { ServiceItem } from '@/types';

interface SiteSettings {
  footerRightsEn: string;
  footerRightsTr: string;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
}

interface Service {
  id: number;
  slug: string;
  titleEn: string;
  titleTr: string;
}

const Footer: React.FC<{ siteSettings?: SiteSettings; services?: Service[] }> = ({ siteSettings, services }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS.footer;
  const rights = siteSettings ? (lang === 'tr' ? siteSettings.footerRightsTr : siteSettings.footerRightsEn) : t.rights[lang];
  const [newsletterState, setNewsletterState] = React.useState<{ success: boolean; message: string } | null>(null);

  // Use passed services or fallback to static list if empty
  const servicesList: (Service | ServiceItem)[] = services && services.length > 0 ? services : SERVICES;

  const getServiceTitle = (service: Service | ServiceItem) => {
    if ('titleEn' in service) {
      return lang === 'tr' ? service.titleTr : service.titleEn;
    }
    return service.title[lang];
  };

  const getServiceHref = (service: Service | ServiceItem) => {
    if ('slug' in service) {
      return `/services/${service.slug}`;
    }
    return `/#services`; // Fallback for static items without slug pages
  };

  const handleSubscribe = async (formData: FormData) => {
    const result = await subscribeNewsletter(formData);
    setNewsletterState(result);
    // Clear message after 3 seconds
    setTimeout(() => setNewsletterState(null), 3000);
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 relative overflow-hidden pt-8 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* Column 1: Brand - Increased padding to move it lower */}
          <div className="space-y-8 lg:pt-16">
            <div className="flex items-center space-x-4 -ml-8"> {/* Moved logo further left */}
              <div className="relative w-32 h-32"> {/* Increased size slightly more */}
                <Image
                  src="/logo.jpeg"
                  alt="BRN YAPI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-[0.2em] text-white">BRN YAPI</span>
                <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">YAPI GRUP</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {t.brandDesc[lang]}
            </p>
            <div className="space-y-4">
              {/* Company Instagram */}
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/brnyapigroup/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  <span className="text-sm">@brnyapigroup</span>
                </a>
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-wider font-bold">{lang === 'tr' ? 'Şirket' : 'Company'}</span>
              </div>
              {/* Personal Instagram - Faruk Baran */}
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/faruk__baran__/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  <span className="text-sm">@faruk__baran__</span>
                </a>
              </div>
              {/* Personal Instagram - Alperen */}
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/brnalperen/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  <span className="text-sm">@brnalperen</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="pt-16 md:pt-0 lg:pt-24">
            <h4 className="text-white font-serif font-bold text-lg mb-8 relative inline-block">
              {t.quickLinks[lang]}
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-[#D4AF37]"></span>
            </h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                    {item.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="pt-0 lg:pt-24">
            <h4 className="text-white font-serif font-bold text-lg mb-8 relative inline-block">
              {t.services[lang]}
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-[#D4AF37]"></span>
            </h4>
            <ul className="space-y-4">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <a href={getServiceHref(service)} className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                    {getServiceTitle(service)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="pt-0 lg:pt-24">
            <h4 className="text-white font-serif font-bold text-lg mb-8 relative inline-block">
              {t.newsletter[lang]}
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-[#D4AF37]"></span>
            </h4>
            <p className="text-white/70 text-sm mb-6">
              {t.newsletterDesc[lang]}
            </p>
            <form action={handleSubscribe} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder[lang]}
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-white/20"
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs py-3 hover:bg-white transition-colors"
              >
                {t.subscribe[lang]}
              </button>
              {newsletterState && (
                <p className={`text-xs font-bold tracking-wide mt-2 ${newsletterState.success ? 'text-green-500' : 'text-red-500'}`}>
                  {newsletterState.message}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} BRN YAPI. {rights}
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;