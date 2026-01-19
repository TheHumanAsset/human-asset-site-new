
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'website';
  url: string;
  thumbnail: string;
}

export type Duration = 20 | 40 | 60;

export interface Service {
  id: string;
  title: string;
  description: string;
  durations: Duration[];
  category: 'Commercial' | 'Individual' | 'Strategic';
  subServices?: SubService[];
}

export interface SubService {
  id: string;
  title: string;
  description: string;
}
