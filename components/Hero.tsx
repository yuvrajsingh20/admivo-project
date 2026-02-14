
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <header className="relative bg-white pt-12 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-orange-50 border border-orange-100 mb-8">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Study Abroad 2025</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#111827] leading-[1.1] mb-8">
            Your Global Education <br />
            <span className="relative">
              Journey Starts Here
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/40 rounded-full"></span>
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

        <div className="relative flex justify-center lg:justify-end">
          {/* Main Illustration */}
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-50 scale-150"></div>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-travel-abroad-illustration_23-2149023714.jpg?t=st=1720000000&exp=1720003600&hmac=placeholder"
              className="relative z-10 w-full h-full object-contain mix-blend-multiply opacity-90"
              alt="Education Journey Illustration"
            />
            <div className="absolute top-1/4 -right-4 z-20 bg-white p-3 rounded-xl shadow-xl border border-slate-50 flex items-center gap-3 animate-bounce shadow-emerald-100">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <span className="material-icons-outlined text-sm">check_circle</span>
              </div>
              <span className="text-xs font-bold text-slate-700">Visa Approved!</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
