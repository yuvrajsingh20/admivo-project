import React from 'react';
import { DESTINATIONS } from '../constants';

interface DestinationsPageProps {
  onBack: () => void;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onBack }) => {
  return (
    <section className="py-24 px-6 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#111827]">Top Study Destinations</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Explore opportunities in the world's leading educational hubs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 p-2">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  alt={dest.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={dest.imageUrl}
                />
              </div>
              <div className="px-6 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl drop-shadow-sm">{dest.flag}</span>
                  <h3 className="text-xl font-bold text-slate-900">{dest.name}</h3>
                </div>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm font-medium h-12 overflow-hidden">
                  {dest.description}
                </p>
                <div className="inline-block">
                  <button className="text-slate-900 font-bold text-sm tracking-tight relative pb-1 hover:text-primary transition-colors">
                    Explore {dest.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest"
          >
            <span className="material-icons-outlined text-sm">west</span>
            Return to Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
