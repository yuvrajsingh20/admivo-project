import { useState, useEffect } from "react";
import { Course, University, Destination } from "./types";

export const UNIVERSITIES: University[] = [
  {
    id: "oxford",
    name: "University of Oxford",
    rank: "QS Rank #2",
    location: "Oxford, England",
    fees: "£28,000 - £45,000 /yr",
    requirements: "Ranked top globally for Research.",
    imageUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ucl",
    name: "University College London",
    rank: "QS Rank #8",
    location: "London, England",
    fees: "£24,000 - £38,000 /yr",
    requirements: "Short 1-year Master's programs available.",
    imageUrl:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "edinburgh",
    name: "University of Edinburgh",
    rank: "QS Rank #15",
    location: "Edinburgh, Scotland",
    fees: "£21,000 - £33,000 /yr",
    requirements: "Strong engineering and health market.",
    imageUrl:
      "https://images.unsplash.com/photo-1555132562-b430e704743c?q=80&w=800&auto=format&fit=crop",
  },
];

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Business Analytics",
    salary: "£45,000/yr",
    tags: ["1 Year PG", "STEM"],
    icon: "analytics",
    colorClass: "text-blue-500 bg-blue-50",
  },
  {
    id: "2",
    title: "Computer Science",
    salary: "£50,000/yr",
    tags: ["3 Year UG", "High Demand"],
    icon: "code",
    colorClass: "text-purple-500 bg-purple-50",
  },
  {
    id: "3",
    title: "Public Health",
    salary: "£38,000/yr",
    tags: ["1 Year PG", "NHS Careers"],
    icon: "health_and_safety",
    colorClass: "text-green-500 bg-green-50",
  },
  {
    id: "4",
    title: "Architecture",
    salary: "£42,000/yr",
    tags: ["3-5 Years", "Creative"],
    icon: "architecture",
    colorClass: "text-orange-500 bg-orange-50",
  },
  {
    id: "5",
    title: "Psychology",
    salary: "£35,000/yr",
    tags: ["3 Year UG", "Research"],
    icon: "psychology",
    colorClass: "text-pink-500 bg-pink-50",
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "usa",
    name: "United States",
    description: "Home to Ivy League universities and vast STEM opportunities.",
    flagUrl: "https://flagcdn.com/w40/us.png",
    imageUrl:
      "https://storage.googleapis.com/banani-generated-images/generated-images/34a0eb33-4d12-4f91-82da-52b45606f604.jpg",
    exploreLabel: "Explore USA",
  },
  {
    id: "uk",
    name: "United Kingdom",
    description:
      "World-renowned institutions with short 1-year Master's programs.",
    flagUrl: "https://flagcdn.com/w40/gb.png",
    imageUrl:
      "https://storage.googleapis.com/banani-generated-images/generated-images/4694041b-4a1c-4001-8208-c8755f3f6afc.jpg",
    exploreLabel: "Explore UK",
  },
  {
    id: "germany",
    name: "Germany",
    description:
      "Tuition-free education at public universities and strong engineering market.",
    flagUrl: "https://flagcdn.com/w40/de.png",
    imageUrl:
      "https://storage.googleapis.com/banani-generated-images/generated-images/2f47ec33-aa01-4f0e-b43a-f627667fc6fd.jpg",
    exploreLabel: "Explore Germany",
  },
  {
    id: "canada",
    name: "Canada",
    description:
      "Friendly immigration policies and high quality of life for students.",
    flagUrl: "https://flagcdn.com/w40/ca.png",
    imageUrl:
      "https://storage.googleapis.com/banani-generated-images/generated-images/c407c399-91c6-4579-9f1c-fbbefb37d8de.jpg",
    exploreLabel: "Explore Canada",
  },
  {
    id: "australia",
    name: "Australia",
    description:
      "Excellent research facilities and extended post-study work rights.",
    flagUrl: "https://flagcdn.com/w40/au.png",
    imageUrl:
      "https://storage.googleapis.com/banani-generated-images/generated-images/984f164a-9d66-46ad-abb6-b2fb67dd5391.jpg",
    exploreLabel: "Explore Australia",
  },
  {
    id: "korea",
    name: "South Korea",
    description:
      "Cutting-edge technology, rich culture, and generous government scholarships.",
    flagUrl: "https://flagcdn.com/w40/kr.png",
    imageUrl:
      "https://storage.googleapis.com/banani-generated-images/generated-images/fee0afcd-e63e-497e-83e2-79187708bfea.jpg",
    exploreLabel: "Explore S. Korea",
  },
];

// ─── Types for Country Detail ────────────────────────────────────────────────

export interface CountryFact {
  icon: string;
  label: string;
  value: string;
}

export interface CountryUniversity {
  name: string;
  rank: string;
  location: string;
  fees: string;
  tag: string;
  imageUrl: string;
}

export interface WhyStudyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface CountryDetail {
  bannerImage: string;
  tagline: string;
  overview: string;
  facts: CountryFact[];
  universities: CountryUniversity[];
  whyStudy: WhyStudyItem[];
}

// ─── Country Detail Data ─────────────────────────────────────────────────────

export const COUNTRY_DETAILS: Record<string, CountryDetail> = {
  uk: {
    bannerImage:
      "https://images.pexels.com/photos/9787564/pexels-photo-9787564.jpeg",
    tagline: "World-class education. Historic campuses. Global careers.",
    overview:
      "The United Kingdom is home to some of the world's oldest and most prestigious universities. With a rich academic tradition, UK institutions offer an unparalleled environment for intellectual growth, cutting-edge research, and professional development — all in a culturally rich and diverse society.",
    facts: [
      { icon: "location_city", label: "Capital", value: "London" },
      { icon: "payments", label: "Currency", value: "GBP (£)" },
      { icon: "translate", label: "Language", value: "English" },
      { icon: "call", label: "Dialing Code", value: "+44" },
      { icon: "school", label: "Universities", value: "130+" },
      { icon: "groups", label: "Intl. Students", value: "600K+" },
    ],
    universities: [
      {
        name: "University of Oxford",
        rank: "QS #2",
        location: "Oxford, England",
        fees: "£28,000–£45,000/yr",
        tag: "Research Leader",
        imageUrl:
          "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "University College London",
        rank: "QS #8",
        location: "London, England",
        fees: "£24,000–£38,000/yr",
        tag: "1-Year Masters",
        imageUrl:
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Imperial College London",
        rank: "QS #6",
        location: "London, England",
        fees: "£30,000–£46,000/yr",
        tag: "STEM Powerhouse",
        imageUrl:
          "https://images.unsplash.com/20/cambridge.JPG?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "University of Edinburgh",
        rank: "QS #15",
        location: "Edinburgh, Scotland",
        fees: "£21,000–£33,000/yr",
        tag: "Historic Campus",
        imageUrl:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
      },
    ],
    whyStudy: [
      {
        icon: "emoji_events",
        title: "World-Renowned Degrees",
        desc: "4 of the world's top 10 universities are based in the UK, with globally recognized qualifications.",
      },
      {
        icon: "schedule",
        title: "Shorter Duration",
        desc: "Complete a full Master's in just 1 year, saving significant time and money.",
      },
      {
        icon: "work",
        title: "Graduate Route Visa",
        desc: "Stay and work in the UK for 2 years after graduation on the Post-Study Work visa.",
      },
      {
        icon: "science",
        title: "Research Excellence",
        desc: "UK universities produce 14% of the world's most-cited research papers.",
      },
      {
        icon: "diversity_3",
        title: "Multicultural Hub",
        desc: "Over 600,000 international students from 180+ countries study in the UK each year.",
      },
      {
        icon: "savings",
        title: "Chevening Scholarships",
        desc: "Prestigious fully-funded scholarships available for outstanding international students.",
      },
    ],
  },

  usa: {
    bannerImage:
      "https://images.pexels.com/photos/3230122/pexels-photo-3230122.jpeg",
    tagline: "Ivy League excellence meets boundless innovation.",
    overview:
      "The United States is the world's top destination for international students, combining academic excellence with unmatched research funding, industry connections, and a vibrant campus culture. With over 4,000 accredited institutions, there's a perfect fit for every student.",
    facts: [
      { icon: "location_city", label: "Capital", value: "Washington D.C." },
      { icon: "payments", label: "Currency", value: "USD ($)" },
      { icon: "translate", label: "Language", value: "English" },
      { icon: "call", label: "Dialing Code", value: "+1" },
      { icon: "school", label: "Universities", value: "4,000+" },
      { icon: "groups", label: "Intl. Students", value: "1M+" },
    ],
    universities: [
      {
        name: "MIT",
        rank: "QS #1",
        location: "Cambridge, MA",
        fees: "$57,000–$75,000/yr",
        tag: "World #1",
        imageUrl:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Harvard University",
        rank: "QS #4",
        location: "Cambridge, MA",
        fees: "$54,000–$70,000/yr",
        tag: "Ivy League",
        imageUrl:
          "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Stanford University",
        rank: "QS #5",
        location: "Stanford, CA",
        fees: "$56,000–$72,000/yr",
        tag: "Silicon Valley",
        imageUrl:
          "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "University of Chicago",
        rank: "QS #11",
        location: "Chicago, IL",
        fees: "$60,000–$75,000/yr",
        tag: "Economics Hub",
        imageUrl:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
      },
    ],
    whyStudy: [
      {
        icon: "emoji_events",
        title: "Top-Ranked Globally",
        desc: "26 of the world's top 100 universities are based in the US, including the Ivy League.",
      },
      {
        icon: "hub",
        title: "Innovation Ecosystem",
        desc: "Study near Silicon Valley, Wall Street, or major biotech and research corridors.",
      },
      {
        icon: "work",
        title: "OPT Work Program",
        desc: "STEM graduates can work in the US for up to 3 years post-graduation through OPT.",
      },
      {
        icon: "science",
        title: "Unrivalled Research Funding",
        desc: "US universities receive the highest research funding in the world.",
      },
      {
        icon: "diversity_3",
        title: "Diverse Campus Life",
        desc: "A melting pot of cultures with over 1 million international students each year.",
      },
      {
        icon: "savings",
        title: "Fulbright Scholarships",
        desc: "Prestigious government scholarships and generous university merit awards available.",
      },
    ],
  },

  germany: {
    bannerImage:
      "https://images.pexels.com/photos/772472/pexels-photo-772472.jpeg",
    tagline: "Tuition-free. Future-focused. Heart of Europe.",
    overview:
      "Germany has emerged as one of the world's most attractive study destinations, offering tuition-free education at public universities to international students. Renowned for engineering, science, and business, German institutions provide rigorous academics alongside strong industry links to global giants like BMW, Siemens, and Bosch.",
    facts: [
      { icon: "location_city", label: "Capital", value: "Berlin" },
      { icon: "payments", label: "Currency", value: "EUR (€)" },
      { icon: "translate", label: "Language", value: "German" },
      { icon: "call", label: "Dialing Code", value: "+49" },
      { icon: "school", label: "Universities", value: "400+" },
      { icon: "groups", label: "Intl. Students", value: "350K+" },
    ],
    universities: [
      {
        name: "TU Munich",
        rank: "QS #37",
        location: "Munich, Bavaria",
        fees: "Tuition-Free*",
        tag: "Engineering Elite",
        imageUrl:
          "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "LMU Munich",
        rank: "QS #54",
        location: "Munich, Bavaria",
        fees: "Tuition-Free*",
        tag: "Research Pioneer",
        imageUrl:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Heidelberg University",
        rank: "QS #87",
        location: "Heidelberg",
        fees: "Tuition-Free*",
        tag: "Germany's Oldest",
        imageUrl:
          "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Humboldt University",
        rank: "QS #120",
        location: "Berlin",
        fees: "Tuition-Free*",
        tag: "Berlin Culture",
        imageUrl:
          "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800&auto=format&fit=crop",
      },
    ],
    whyStudy: [
      {
        icon: "money_off",
        title: "Tuition-Free Education",
        desc: "Public universities charge no tuition fees — only a small semester administrative fee.",
      },
      {
        icon: "engineering",
        title: "Engineering Excellence",
        desc: "Home to global engineering giants: BMW, Siemens, Bosch, and Mercedes-Benz.",
      },
      {
        icon: "work",
        title: "18-Month Job Seeker Visa",
        desc: "Stay in Germany for 18 months after graduation to find employment.",
      },
      {
        icon: "location_on",
        title: "Schengen Access",
        desc: "Travel freely across 26 European countries from the heart of the continent.",
      },
      {
        icon: "science",
        title: "Max Planck Research",
        desc: "Germany's Max Planck and Fraunhofer institutes lead in world-class research.",
      },
      {
        icon: "savings",
        title: "DAAD Scholarships",
        desc: "Germany's DAAD offers extensive funding opportunities for international students.",
      },
    ],
  },

  canada: {
    bannerImage:
      "https://images.pexels.com/photos/2827843/pexels-photo-2827843.jpeg",
    tagline: "Clear PR pathways. World-class campuses. Stunning landscapes.",
    overview:
      "Canada has rapidly grown into one of the world's most sought-after student destinations. With friendly immigration policies, high-quality education, affordable living compared to the US, and some of the most straightforward permanent residency pathways — Canada is the complete package.",
    facts: [
      { icon: "location_city", label: "Capital", value: "Ottawa" },
      { icon: "payments", label: "Currency", value: "CAD ($)" },
      { icon: "translate", label: "Language", value: "EN / FR" },
      { icon: "call", label: "Dialing Code", value: "+1" },
      { icon: "school", label: "Universities", value: "100+" },
      { icon: "groups", label: "Intl. Students", value: "800K+" },
    ],
    universities: [
      {
        name: "University of Toronto",
        rank: "QS #21",
        location: "Toronto, Ontario",
        fees: "CAD $45,000–$65,000/yr",
        tag: "Top Canadian",
        imageUrl:
          "https://images.unsplash.com/photo-1507992781348-310259076fe0?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "McGill University",
        rank: "QS #30",
        location: "Montreal, Quebec",
        fees: "CAD $28,000–$48,000/yr",
        tag: "Bilingual City",
        imageUrl:
          "https://images.unsplash.com/photo-1519178614-68673b201f36?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "UBC",
        rank: "QS #34",
        location: "Vancouver, BC",
        fees: "CAD $35,000–$55,000/yr",
        tag: "Pacific Hub",
        imageUrl:
          "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "University of Waterloo",
        rank: "QS #112",
        location: "Waterloo, Ontario",
        fees: "CAD $30,000–$52,000/yr",
        tag: "Tech Powerhouse",
        imageUrl:
          "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop",
      },
    ],
    whyStudy: [
      {
        icon: "flight_land",
        title: "Express Entry PR",
        desc: "Canada's Express Entry system provides one of the world's clearest paths to permanent residency.",
      },
      {
        icon: "flight_land",
        title: "Safe & Welcoming",
        desc: "Consistently ranked among the world's most peaceful and welcoming nations for immigrants.",
      },
      {
        icon: "work",
        title: "3-Year PGWP",
        desc: "Post-Graduate Work Permit lets graduates work in Canada for up to 3 years.",
      },
      {
        icon: "health_and_safety",
        title: "Healthcare Access",
        desc: "International students in most provinces are eligible for provincial health coverage.",
      },
      {
        icon: "nature",
        title: "Stunning Lifestyle",
        desc: "From Toronto's skyline to BC's mountains — Canada offers an unmatched quality of life.",
      },
      {
        icon: "savings",
        title: "Affordable vs. US",
        desc: "High-quality education at significantly lower tuition costs than US counterparts.",
      },
    ],
  },

  australia: {
    bannerImage:
      "https://images.pexels.com/photos/1086852/pexels-photo-1086852.jpeg",
    tagline: "World-class research. Vibrant cities. Sun-soaked lifestyle.",
    overview:
      "Australia is a world-leader in education with 7 universities in the global top 100. Combining rigorous academics with an unmatched quality of life, generous post-study work rights, stunning natural beauty, and a warm, multicultural society — Australia offers the complete international student experience.",
    facts: [
      { icon: "location_city", label: "Capital", value: "Canberra" },
      { icon: "payments", label: "Currency", value: "AUD ($)" },
      { icon: "translate", label: "Language", value: "English" },
      { icon: "call", label: "Dialing Code", value: "+61" },
      { icon: "school", label: "Universities", value: "43" },
      { icon: "groups", label: "Intl. Students", value: "750K+" },
    ],
    universities: [
      {
        name: "University of Melbourne",
        rank: "QS #14",
        location: "Melbourne, VIC",
        fees: "AUD $40,000–$65,000/yr",
        tag: "Australia #1",
        imageUrl:
          "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "University of Sydney",
        rank: "QS #18",
        location: "Sydney, NSW",
        fees: "AUD $38,000–$60,000/yr",
        tag: "Iconic Campus",
        imageUrl:
          "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "ANU",
        rank: "QS #30",
        location: "Canberra, ACT",
        fees: "AUD $35,000–$55,000/yr",
        tag: "Research Elite",
        imageUrl:
          "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "University of Queensland",
        rank: "QS #40",
        location: "Brisbane, QLD",
        fees: "AUD $34,000–$52,000/yr",
        tag: "Sunshine State",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
      },
    ],
    whyStudy: [
      {
        icon: "wb_sunny",
        title: "Exceptional Lifestyle",
        desc: "Australia's outdoor culture, thriving cities and warm climate make student life extraordinary.",
      },
      {
        icon: "work",
        title: "Generous Work Rights",
        desc: "Work 48hrs/fortnight during studies and unlimited hours during breaks.",
      },
      {
        icon: "science",
        title: "Research Excellence",
        desc: "World-leading research in medicine, engineering, environmental science, and AI.",
      },
      {
        icon: "flight_land",
        title: "Temporary Grad Visa",
        desc: "Stay 2–4 years post-graduation depending on your degree level and study location.",
      },
      {
        icon: "diversity_3",
        title: "Exceptionally Safe",
        desc: "Australia is consistently ranked among the world's safest countries for students.",
      },
      {
        icon: "diversity_3",
        title: "Multicultural Nation",
        desc: "Students from over 140 countries — one of the most diverse societies on Earth.",
      },
    ],
  },

  korea: {
    bannerImage:
      "https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg",
    tagline: "K-culture, cutting-edge tech, and government scholarships.",
    overview:
      "South Korea has rapidly risen as a premier destination for international students, blending top academic institutions with one of the world's most dynamic tech economies. The Korean Government Scholarship (GKS) program, affordable living costs, a safe environment, and a vibrant cultural scene make Korea uniquely compelling.",
    facts: [
      { icon: "location_city", label: "Capital", value: "Seoul" },
      { icon: "payments", label: "Currency", value: "KRW (₩)" },
      { icon: "translate", label: "Language", value: "Korean" },
      { icon: "call", label: "Dialing Code", value: "+82" },
      { icon: "school", label: "Universities", value: "200+" },
      { icon: "groups", label: "Intl. Students", value: "170K+" },
    ],
    universities: [
      {
        name: "Seoul National University",
        rank: "QS #31",
        location: "Seoul",
        fees: "₩4M–₩9M/yr",
        tag: "National Prestige",
        imageUrl:
          "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Korea University",
        rank: "QS #74",
        location: "Seoul",
        fees: "₩5.5M–₩11M/yr",
        tag: "SKY Alliance",
        imageUrl:
          "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "KAIST",
        rank: "QS #65",
        location: "Daejeon",
        fees: "Scholarship Avail.",
        tag: "STEM Leader",
        imageUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Yonsei University",
        rank: "QS #79",
        location: "Seoul",
        fees: "₩5M–₩10M/yr",
        tag: "Global Campus",
        imageUrl:
          "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    whyStudy: [
      {
        icon: "savings",
        title: "GKS Scholarship",
        desc: "Fully-funded Korean Government Scholarship covers tuition, housing, and living allowance.",
      },
      {
        icon: "computer",
        title: "Tech-Forward Nation",
        desc: "World leader in semiconductors, internet speed, and consumer electronics innovation.",
      },
      {
        icon: "restaurant",
        title: "Rich Cultural Life",
        desc: "Immerse in K-pop, K-drama, ancient palaces, and one of Asia's most dynamic food scenes.",
      },
      {
        icon: "local_hospital",
        title: "World-Class Healthcare",
        desc: "Korea's healthcare system is world-renowned for quality and affordability.",
      },
      {
        icon: "train",
        title: "Best-in-Class Transit",
        desc: "High-speed KTX rail and Seoul's metro make getting around fast and affordable.",
      },
      {
        icon: "work",
        title: "Chaebol Careers",
        desc: "Direct access to Samsung, LG, Hyundai internships and graduate opportunities.",
      },
    ],
  },
};

// ─── Currency Conversion ────────────────────────────────────────────────

const CURRENCY_CODES: Record<string, string> = {
  uk: "GBP",
  usa: "USD",
  germany: "EUR",
  canada: "CAD",
  australia: "AUD",
  korea: "KRW",
};

export interface CurrencyRate {
  code: string;
  rate: string | null;
  loading: boolean;
  error: boolean;
}

export function useCurrencyRate(countryId: string): CurrencyRate {
  const code = CURRENCY_CODES[countryId] ?? null;

  const [rate, setRate] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!code) return;

    setRate(null);
    setError(false);
    setLoading(true);

    fetch(`https://api.exchangerate-api.com/v4/latest/${code}`)
      .then((r) => {
        if (!r.ok) throw new Error("Network response was not ok");
        return r.json();
      })
      .then((json) => {
        const inr = json?.rates?.INR;
        if (inr != null) {
          setRate(
            `1 ${code} = ₹${Number(inr).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`,
          );
        } else {
          throw new Error("INR rate missing");
        }
      })
      .catch(() => {
        setError(true);
        setRate(null);
      })
      .finally(() => setLoading(false));
  }, [code]);

  return { code: code ?? "", rate, loading, error };
}
