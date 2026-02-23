import React, { useState } from "react";
import { DESTINATIONS } from "../constants";
import CountryDetailPage from "./CountryDetailPage";

interface DestinationsPageProps {
  onBack: () => void;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onBack }) => {
  const [selectedCountry, setSelectedCountry] = useState<{
    id: string;
    name: string;
  } | null>(null);

  if (selectedCountry) {
    return (
      <CountryDetailPage
        countryId={selectedCountry.id}
        countryName={selectedCountry.name}
        onBack={() => setSelectedCountry(null)}
      />
    );
  }

  return (
    <section className="py-24 px-6 bg-[#F0F4F8] min-h-screen">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .dest-title {
          animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) both;
        }
        .dest-subtitle {
          animation: fadeUp 0.65s 0.12s cubic-bezier(.22,1,.36,1) both;
        }
        .dest-card {
          animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) both;
          opacity: 0;
        }
        .dest-card:nth-child(1) { animation-delay: 0.10s; }
        .dest-card:nth-child(2) { animation-delay: 0.18s; }
        .dest-card:nth-child(3) { animation-delay: 0.26s; }
        .dest-card:nth-child(4) { animation-delay: 0.34s; }
        .dest-card:nth-child(5) { animation-delay: 0.42s; }
        .dest-card:nth-child(6) { animation-delay: 0.50s; }
        .dest-card-inner {
          transition: box-shadow 0.4s cubic-bezier(.22,1,.36,1), transform 0.4s cubic-bezier(.22,1,.36,1);
        }
        .dest-card:hover .dest-card-inner {
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.14);
          transform: translateY(-5px);
        }
        .dest-card-img {
          transition: transform 0.7s cubic-bezier(.22,1,.36,1), filter 0.5s ease;
        }
        .dest-card:hover .dest-card-img {
          transform: scale(1.07);
          filter: brightness(1.04) saturate(1.08);
        }
        .dest-explore-btn {
          position: relative;
          display: inline-block;
          padding-bottom: 3px;
          transition: color 0.2s ease;
        }
        .dest-explore-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: #F59E0B;
          border-radius: 2px;
        }
        .dest-explore-btn:hover {
          color: #D97706;
        }
        .dest-back-btn {
          animation: fadeIn 0.7s 0.6s both;
          transition: color 0.2s;
        }
        .dest-back-btn:hover {
          color: #D97706;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="dest-title text-4xl lg:text-5xl font-extrabold mb-4 text-[#111827] tracking-tight">
            Top Study Destinations
          </h2>
          <p className="dest-subtitle text-[#6B7280] text-base max-w-xl mx-auto font-medium">
            Explore opportunities in the world's leading educational hubs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="dest-card group"
              onClick={() =>
                setSelectedCountry({ id: dest.id, name: dest.name })
              }
            >
              <div
                className="dest-card-inner bg-white rounded-2xl overflow-hidden border border-slate-100"
                style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)" }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#E8F0FE]">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="dest-card-img w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="px-6 pt-5 pb-6">
                  {/* Flag image + Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={dest.flagUrl}
                      alt={`${dest.name} flag`}
                      className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-sm flex-shrink-0"
                    />
                    <h3 className="text-[17px] font-bold text-[#111827] tracking-tight">
                      {dest.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5 font-medium min-h-[40px]">
                    {dest.description}
                  </p>

                  {/* CTA */}
                  <button className="dest-explore-btn text-[#111827] font-bold text-sm tracking-tight">
                    {dest.exploreLabel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="mt-16 text-center">
          <button
            onClick={onBack}
            className="group inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#F59E0B] font-bold uppercase text-xs tracking-widest transition-colors duration-300"
          >
            <span className="inline-flex items-center gap-2">
              <span className="material-icons-outlined text-sm transition-transform duration-300 group-hover:-translate-x-1">
                west
              </span>
              Return to Homepage
            </span>
            <span className="block h-px w-6 bg-slate-300 group-hover:w-full group-hover:bg-[#F59E0B] transition-all duration-500 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
