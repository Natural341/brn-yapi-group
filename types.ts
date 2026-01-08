
export type Language = 'en' | 'tr';

export interface NavItem {
  key: string;
  label: Record<Language, string>;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
}

export interface ProjectItem {
  id: number;
  title: Record<Language, string>;
  category: Record<Language, string>;
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
  description?: Record<Language, string>;
  location?: string;
  year?: string;
  gallery?: string[];
}
