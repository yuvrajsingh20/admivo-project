export interface University {
  id: string;
  name: string;
  rank: string;
  location: string;
  fees: string;
  requirements: string;
  imageUrl: string;
}

export interface Course {
  id: string;
  title: string;
  salary: string;
  tags: string[];
  icon: string;
  colorClass: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  flagUrl: string;
  imageUrl: string;
  exploreLabel: string;
}
export interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  author: string;
  content: string;
}
export enum Page {
  UK_HOME = 'uk-home',
  DESTINATIONS = 'destinations',
  SERVICES = 'services',
  PRICING = 'pricing',
  RESULTS = 'results',
  BLOG = 'blog',
}
  
}
