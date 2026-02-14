
import { Course, University, Destination } from './types';

export const UNIVERSITIES: University[] = [
  {
    id: 'oxford',
    name: 'University of Oxford',
    rank: 'QS Rank #2',
    location: 'Oxford, England',
    fees: '£28,000 - £45,000 /yr',
    requirements: 'Ranked top globally for Research.',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ucl',
    name: 'University College London',
    rank: 'QS Rank #8',
    location: 'London, England',
    fees: '£24,000 - £38,000 /yr',
    requirements: 'Short 1-year Master\'s programs available.',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'edinburgh',
    name: 'University of Edinburgh',
    rank: 'QS Rank #15',
    location: 'Edinburgh, Scotland',
    fees: '£21,000 - £33,000 /yr',
    requirements: 'Strong engineering and health market.',
    imageUrl: 'https://images.unsplash.com/photo-1555132562-b430e704743c?q=80&w=800&auto=format&fit=crop'
  }
];

export const COURSES: Course[] = [
  { id: '1', title: 'Business Analytics', salary: '£45,000/yr', tags: ['1 Year PG', 'STEM'], icon: 'analytics', colorClass: 'text-blue-500 bg-blue-50' },
  { id: '2', title: 'Computer Science', salary: '£50,000/yr', tags: ['3 Year UG', 'High Demand'], icon: 'code', colorClass: 'text-purple-500 bg-purple-50' },
  { id: '3', title: 'Public Health', salary: '£38,000/yr', tags: ['1 Year PG', 'NHS Careers'], icon: 'health_and_safety', colorClass: 'text-green-500 bg-green-50' },
  { id: '4', title: 'Architecture', salary: '£42,000/yr', tags: ['3-5 Years', 'Creative'], icon: 'architecture', colorClass: 'text-orange-500 bg-orange-50' },
  { id: '5', title: 'Psychology', salary: '£35,000/yr', tags: ['3 Year UG', 'Research'], icon: 'psychology', colorClass: 'text-pink-500 bg-pink-50' }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'usa',
    name: 'United States',
    description: 'Home to Ivy League universities and vast STEM opportunities.',
    flag: '🇺🇸',
    imageUrl: 'https://img.freepik.com/free-vector/new-york-skyline-silhouette_23-2147514169.jpg'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    description: 'World-renowned institutions with short 1-year Master\'s programs.',
    flag: '🇬🇧',
    imageUrl: 'https://img.freepik.com/free-vector/london-landscape-flat-design_23-2147551062.jpg'
  },
  {
    id: 'germany',
    name: 'Germany',
    description: 'Tuition-free education at public universities and strong engineering market.',
    flag: '🇩🇪',
    imageUrl: 'https://img.freepik.com/free-vector/berlin-city-landscape_23-2147526743.jpg'
  },
  {
    id: 'canada',
    name: 'Canada',
    description: 'Friendly immigration policies and high quality of life for students.',
    flag: '🇨🇦',
    imageUrl: 'https://img.freepik.com/free-vector/canada-day-flat-design_23-2148154673.jpg'
  },
  {
    id: 'australia',
    name: 'Australia',
    description: 'Excellent research facilities and extended post-study work rights.',
    flag: '🇦🇺',
    imageUrl: 'https://img.freepik.com/free-vector/australian-skyline_23-2147829767.jpg'
  },
  {
    id: 'korea',
    name: 'South Korea',
    description: 'Cutting-edge technology, rich culture, and generous government scholarships.',
    flag: '🇰🇷',
    imageUrl: 'https://img.freepik.com/free-vector/korean-culture-background_23-2147510795.jpg'
  }
];
