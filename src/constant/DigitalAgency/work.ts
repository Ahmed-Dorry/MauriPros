export interface ICapability {
  id: number;
  number: string;
  title: string;
  description: string;
  includes: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  includesTitle?: string; // 👈 ضفنا السطر ده عشان نقرأ كلمة Includes من الترجمة
  capabilities: ICapability[];
}