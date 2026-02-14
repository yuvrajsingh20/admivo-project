
import React from 'react';
import { DESTINATIONS } from '../constants';
import { Page } from '../types';

interface UniversityGridProps {
  onNavigate: (page: Page) => void;
}

const UniversityGrid: React.FC<UniversityGridProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 text-[#111827]">Top Study Destinations</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Explore opportunities in the world's leading educational hubs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="relative h-60 bg-[#EBF1F7]/50 overflow-hidden flex items-center justify-center p-8">
                <img
                  alt={dest.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  src={dest.imageUrl}
                />
              </div>
              <div className="p-8 pb-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-xl border border-slate-50">
                    {dest.flag}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#111827]">
                    {dest.name}
                  </h3>
                </div>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm font-medium flex-grow">
                  {dest.description}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => onNavigate(Page.DESTINATIONS)}
                    className="text-[#111827] font-bold text-sm tracking-tight relative pb-1 inline-block group/link"
                  >
                    Explore {dest.id === 'usa' ? 'USA' : dest.id === 'uk' ? 'UK' : dest.id === 'korea' ? 'S. Korea' : dest.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full origin-left transform scale-x-100 transition-transform duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityGrid;
