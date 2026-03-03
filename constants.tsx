import { Course, University, Destination, BlogPost } from './types';

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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 High-Paying Degrees in the UK for 2025',
    subtitle: 'Discover which fields are offering the highest starting salaries for international graduates.',
    category: 'Career Advice',
    date: 'Feb 12, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea9eec1?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Discover which fields are offering the highest starting salaries for international graduates this year.',
    author: 'Dr. Emily Watson',
    content: `<h2>Why Your Degree Choice Matters More Than Ever</h2><p>In today's competitive job market, the degree you choose can significantly impact your earning potential. For international students considering the UK, understanding which fields command the highest salaries is crucial for making an informed decision.</p><p>The UK job market has seen a dramatic shift post-pandemic, with certain sectors experiencing exponential growth while others have stagnated. Technology, healthcare, and finance continue to dominate the high-salary landscape, but emerging fields like AI and renewable energy are rapidly climbing the rankings.</p><h2>The Top Contenders</h2><p><strong>Medicine and Dentistry</strong> remain at the pinnacle, with newly qualified doctors earning upwards of £30,000 during foundation years and specialists commanding £80,000+.</p><p><strong>Computer Science and AI</strong> have surged dramatically. Graduates from top universities are routinely receiving packages between £45,000–£70,000 at entry level.</p><p><strong>Engineering</strong> — specifically chemical, electrical, and petroleum — offers robust starting salaries between £30,000–£45,000, with rapid progression in energy and manufacturing sectors.</p><h2>Making Your Decision</h2><p>Beyond raw salary figures, consider growth trajectory, job availability, and your genuine interest in the field. A high-paying career you're passionate about will always outperform one you chose purely for financial reasons.</p>`
  },
  {
    id: 2,
    title: 'How to Secure a 100% Scholarship for your Masters',
    subtitle: 'A complete step-by-step guide on profile building and acing your scholarship interview.',
    category: 'Scholarships',
    date: 'Feb 10, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    excerpt: 'A complete step-by-step guide on profile building and acing your scholarship interview.',
    author: 'James Miller',
    content: `<h2>The Scholarship Landscape in 2026</h2><p>Securing a full scholarship for a Master's degree is one of the most competitive endeavours an international student can undertake. Yet thousands of students succeed each year — and the difference often comes down to strategy, not just grades.</p><p>Full scholarships typically cover tuition, living expenses, and sometimes travel. The most prestigious ones — Chevening, Rhodes, Gates Cambridge, Commonwealth — are internationally recognised and can open doors that remain firmly shut to others.</p><h2>Building Your Profile — Start 18 Months Early</h2><p><strong>Academic Excellence</strong> is non-negotiable. Most fully-funded scholarships require a minimum of a 2:1 equivalent or a 3.5 GPA.</p><p><strong>Leadership Experience</strong> is what separates applicants. Scholarship committees are not looking for students — they're looking for future leaders.</p><h2>The Interview — Final Frontier</h2><p>If invited to interview, prepare for questions about your leadership philosophy and how you plan to give back to your home country. Practice with mock interviews, stay calm, and let your authentic self shine through.</p>`
  },
  {
    id: 3,
    title: 'Visa Interview Tips: What Officers Really Look For',
    subtitle: 'Common questions and the best way to answer them to ensure your visa success.',
    category: 'Visa Guide',
    date: 'Feb 08, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Common questions and the best way to answer them to ensure your visa success.',
    author: 'Sarah Jenkins',
    content: `<h2>Understanding What Officers Are Really Assessing</h2><p>A visa interview is not an exam — it's a conversation designed to verify one thing: are you a genuine student with a legitimate intent to study and return home? Understanding this fundamental purpose will change how you prepare.</p><p>Visa officers are trained to assess credibility quickly. They typically spend between 2–5 minutes per applicant, which means your answers must be clear, concise, and consistent with your documentation.</p><h2>The Questions You'll Almost Certainly Face</h2><p><strong>"Why this university?"</strong> — Never give a generic answer. Research the specific department, the professor whose work aligns with yours, and the facilities. Specificity signals genuine intent.</p><p><strong>"Who is funding your studies?"</strong> — Know your financial documents inside out. Hesitation here raises red flags immediately.</p><h2>The Mindset That Wins</h2><p>Approach the interview as a professional conversation, not an interrogation. Confidence, honesty, and preparation are your three greatest assets walking into that room.</p>`
  }
];
