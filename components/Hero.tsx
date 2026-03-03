import React from 'react';
import { Page } from '../types';
import TextType from './animations/TextType';
import HeroScene from "./three/HeroScene";

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <header className="relative bg-white pt-12 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-orange-50 border border-orange-100 mb-8">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
              Study Abroad 2025
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#111827] leading-[1.1] mb-8">
            Your Global Education <br />
            <span className="relative text-primary">
              <TextType
                text={[
                  "Journey Starts Here",
                  "Dream Big. Study Global.",
                  "Your Future Begins Today",
                ]}
                typingSpeed={70}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                deletingSpeed={40}
              />
            </span>
          </h1>

          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
            Expert guidance for Bachelors, Masters, and PhD admissions in top universities across USA, UK, Canada, and Europe. Join 500+ successful students.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-primary text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-[1.03] transition-transform shadow-xl shadow-primary/20">
              Book Free Counseling
            </button>

            <button
              onClick={() => onNavigate(Page.DESTINATIONS)}
              className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <span className="material-icons-outlined text-xl">language</span>
              Explore Destinations
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i + 10}`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="Student"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-500">
              Trusted by <span className="text-slate-900 font-bold">2,000+</span> students
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — PREMIUM 3D GRAPHIC */}
<div className="relative flex justify-center lg:justify-end">
  <div className="relative w-full h-full  ">

    {/* Soft Gradient Glow Background */}
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-orange-200/20 to-transparent rounded-full blur-3xl opacity-60 scale-150"></div>

    {/* 3D Canvas */}
    
    <div className="relative w-full h-[520px]">
  <HeroScene />
</div>

    {/* Fine Doodle 1 - Curved Line */}
    <svg
      className="absolute top-10 left-0 w-24 opacity-40 animate-pulse"
      viewBox="0 0 200 200"
    >
      <path
        d="M10 100 Q100 10 190 100"
        stroke="#f97316"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>

    {/* Fine Doodle 2 - Circle Accent */}
    <svg
      className="absolute bottom-16 right-8 w-20 opacity-40 animate-bounce"
      viewBox="0 0 200 200"
    >
      <circle
        cx="100"
        cy="100"
        r="40"
        stroke="#2563eb"
        strokeWidth="4"
        fill="none"
      />
    </svg>

    {/* Glass Card 1 */}
    <div className="absolute top-8 right-0 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 transition-all hover:scale-105">
      <p className="text-sm font-bold text-slate-800">
        🌍 120+ Universities
      </p>
    </div>

    {/* Glass Card 2 */}
    <div className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 transition-all hover:scale-105">
      <p className="text-sm font-bold text-slate-800">
        ✈️ 2,000+ Students Abroad
      </p>
    </div>

  </div>
</div>
      </div>
    </header>
  );
};

export default Hero;