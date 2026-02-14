
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
  flag: string;
  imageUrl: string;
}

export enum Page {
  UK_HOME = 'uk-home',
  DESTINATIONS = 'destinations',
  SERVICES = 'services',
  PRICING = 'pricing',
  RESULTS = 'results',
  BLOG = 'blog',
}
