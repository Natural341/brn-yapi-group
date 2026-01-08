
import { NavItem, ServiceItem, ProjectItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: { en: 'Home', tr: 'Anasayfa' }, href: '/' },
  { key: 'about', label: { en: 'About Us', tr: 'Hakkımızda' }, href: '/#about' },
  { key: 'services', label: { en: 'Services', tr: 'Hizmetler' }, href: '/#services' },
  // { key: 'portfolio', label: { en: 'Portfolio', tr: 'Portfolyo' }, href: '/portfolio' }, // Hidden
  { key: 'contact', label: { en: 'Contact', tr: 'İletişim' }, href: '/#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'anahtar-teslim-insaat',
    title: { en: 'Turnkey Construction', tr: 'Anahtar Teslim İnşaat' },
    description: {
      en: 'Complete construction solutions from ground breaking to final delivery.',
      tr: 'Projelendirmeden iskana, stres yönetimini sıfıra indiren anahtar teslim çözümler.'
    },
    icon: 'Building',
  },
  {
    id: 'mimari-tasarim',
    title: { en: 'Architectural Design', tr: 'Mimari Tasarım & Proje' },
    description: {
      en: 'Innovative and functional architectural designs that bring your vision to life.',
      tr: 'Fonksiyonelliği estetikle buluşturan vizyoner mimari tasarım hizmetleri.'
    },
    icon: 'DraftingCompass',
  },
  {
    id: 'insaat-muhendisligi-statik',
    title: { en: 'Structural Engineering', tr: 'İnşaat Mühendisliği & Statik' },
    description: {
      en: 'Seismic resistant design and structural calculations ensuring safety.',
      tr: 'Deprem yönetmeliklerine tam uyumlu, güvenli ve ekonomik mühendislik çözümleri.'
    },
    icon: 'Layers',
  },
  {
    id: 'kaba-ince-insaat',
    title: { en: 'Rough & Fine Construction', tr: 'Kaba ve İnce İnşaat' },
    description: {
      en: 'Expert execution of structural frameworks and detailed interior finishes.',
      tr: 'Betonarme karkastan en ince dekoratif detaylara kadar titiz işçilik.'
    },
    icon: 'HardHat',
  },
  {
    id: 'kirim-yikim-isleri',
    title: { en: 'Demolition Works', tr: 'Kırım & Yıkım İşleri' },
    description: {
      en: 'Controlled demolition, debris removal, and site preparation services.',
      tr: 'Kontrollü bina yıkımı, hafriyat ve şantiye hazırlık hizmetleri.'
    },
    icon: 'Hammer',
  },
  {
    id: 'altin-varak',
    title: { en: 'Gold Leaf', tr: 'Altın Varak' },
    description: {
      en: 'Exquisite gold leaf craftsmanship adding timeless elegance and luxury.',
      tr: 'Mekanlarınıza asil bir dokunuş katan eşsiz altın varak uygulamaları.'
    },
    icon: 'Sparkle',
  },
];

export const PROJECTS: ProjectItem[] = []; // Empty array as per rebrand

export const TRANSLATIONS = {
  hero: {
    tagline: {
      en: 'Building the Future, Defining Excellence.',
      tr: 'Geleceği İnşa Ediyoruz.'
    },
    cta: {
      en: 'Our Services',
      tr: 'Hizmetlerimiz'
    }
  },
  about: {
    title: { en: 'Quality and Innovation', tr: 'Kalite ve İnovasyon' },
    text1: {
      en: 'BRN YAPI GROUP is a leader in high-end construction and architectural design. We specialize in creating spaces that redefine the urban landscape while maintaining the highest standards of luxury and durability.',
      tr: 'BRN YAPI GROUP, üst düzey inşaat ve mimari tasarımda liderdir. En yüksek lüks ve dayanıklılık standartlarını korurken kentsel manzarayı yeniden tanımlayan mekanlar yaratma konusunda uzmanız.'
    },
    text2: {
      en: 'From concept to completion, our team of experts ensures every detail reflects our commitment to excellence. We don\'t just build structures; we build trust.',
      tr: 'Konseptten tamamlanmaya kadar, uzman ekibimiz her detayın mükemmelliğe olan bağlılığımızı yansıtmasını sağlar. Sadece yapılar değil, güven inşa ediyoruz.'
    }
  },
  contact: {
    title: { en: 'Get in Touch', tr: 'İletişime Geçin' },
    subtitle: { en: 'Request a Quote', tr: 'Teklif Alın' },
    name: { en: 'Full Name', tr: 'Ad Soyad' },
    email: { en: 'Email Address', tr: 'E-posta Adresi' },
    service: { en: 'Service Type', tr: 'Hizmet Türü' },
    message: { en: 'Your Message', tr: 'Mesajınız' },
    submit: { en: 'Send Message', tr: 'Mesaj Gönder' },
    options: {
      en: ['Turnkey Construction', 'Architectural Design', 'Renovation', 'Gold Leaf'],
      tr: ['Anahtar Teslim İnşaat', 'Mimari Tasarım', 'Tadilat', 'Altın Varak']
    }
  },
  footer: {
    rights: {
      en: 'All rights reserved.',
      tr: 'Tüm hakları saklıdır.'
    },
    quickLinks: { en: 'Quick Links', tr: 'Hızlı Erişim' },
    services: { en: 'Our Services', tr: 'Hizmetlerimiz' },
    newsletter: { en: 'Newsletter', tr: 'Bülten' },
    newsletterDesc: { en: 'Subscribe to receive updates on our latest projects.', tr: 'En son projelerimizden haberdar olmak için abone olun.' },
    subscribe: { en: 'Subscribe', tr: 'Abone Ol' },
    emailPlaceholder: { en: 'Your email address', tr: 'E-posta adresiniz' },
    brandDesc: {
      en: 'Redefining architectural excellence with visionary designs and premium construction quality since 2010.',
      tr: '2010\'dan bu yana vizyoner tasarımlar ve üstün inşaat kalitesiyle mimari mükemmelliği yeniden tanımlıyoruz.'
    }
  },
  portfolio: {
    label: { en: 'Our Work', tr: 'Projelerimiz' },
    title: { en: 'Curated Excellence', tr: 'Seçkin Mükemmellik' },
    subtitle: { en: 'Explore our portfolio of visionary projects where art meets engineering.', tr: 'Sanatın mühendislikle buluştuğu vizyoner proje portföyümüzü keşfedin.' },
    viewProject: { en: 'View Project', tr: 'Projeyi Görüntüle' },
    back: { en: 'Back to Portfolio', tr: 'Portfolyoya Dön' },
    gallery: { en: 'Project Gallery', tr: 'Proje Galerisi' }
  },
  projectDetails: {
    location: { en: 'Location', tr: 'Konum' },
    year: { en: 'Year', tr: 'Yıl' },
    client: { en: 'Client', tr: 'Müşteri' },
    privateClient: { en: 'Private Commission', tr: 'Özel Sipariş' }
  },
  contactDetails: {
    office: { en: 'Office', tr: 'Ofis' },
    contact: { en: 'Contact', tr: 'İletişim' },
    callAction: { en: "Let's Build Visionary Spaces.", tr: "Vizyoner Mekanlar İnşa Edelim." },
    desc: { en: 'Whether you have a distinct vision or need guidance, our team is ready to bring your architectural dreams to life.', tr: 'İster net bir vizyonunuz olsun ister rehberliğe ihtiyacınız olsun, ekibimiz mimari hayallerinizi hayata geçirmeye hazır.' }
  },
  servicesSection: {
    title: { en: 'What We Do', tr: 'Neler Yapıyoruz' },
    subtitle: { en: 'Bespoke Solutions.', tr: 'Özel Çözümler.' },
    learnMore: { en: 'Learn More', tr: 'Daha Fazla' }
  }
};
