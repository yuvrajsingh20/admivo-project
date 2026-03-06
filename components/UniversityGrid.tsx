import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';

interface UniversityGridProps {
  onNavigate: (page: Page) => void;
}

const UniversityGrid: React.FC<UniversityGridProps> = ({ onNavigate }) => {
  const destinations = [
    { name: 'United Kingdom', schools: '120+ Universities', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop', id: 'uk', active: true },
    { name: 'USA', schools: '250+ Tier-1 Schools', image: 'https://images.unsplash.com/photo-1550721444-f7384e9372ed?q=80&w=800&auto=format&fit=crop', id: 'usa', active: false },
    { name: 'Canada', schools: 'Elite Research Hubs', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop', id: 'canada', active: false },
    { name: 'Germany', schools: 'Public Institutions', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop', id: 'germany', active: false }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#6B7280] uppercase mb-[16px] block">
              Global Network
            </span>
            <h2 className="text-[40px] font-semibold text-[#111111] tracking-[-0.02em] leading-[1.2] mb-[20px]">
              Elite university hubs.
            </h2>
            <p className="text-[14px] text-[#4B5563] leading-[1.6]">
              Precision-mapped academic destinations providing strategic access to the world's most prestigious corporate and research networks.
            </p>
          </div>
          <button
            disabled
            className="btn btn-outline h-11 px-6 text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 cursor-not-allowed hidden md:flex items-center gap-2"
          >
            All Destinations <span className="text-[8px] bg-secondary px-1.5 py-0.5 rounded-sm">P2</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => dest.active && onNavigate(Page.DESTINATIONS)}
              className={`relative rounded-2xl overflow-hidden group border border-border/50  ${idx === 0 ? 'md:col-span-8' :
                idx === 1 ? 'md:col-span-4' :
                  idx === 2 ? 'md:col-span-4' : 'md:col-span-8'
                } ${dest.active ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className={`w-full h-full object-cover transition-transform duration-1000 ${dest.active ? 'group-hover:scale-105' : 'grayscale text-neutral-400'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-80" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{dest.name}</h3>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-widest">{dest.schools}</p>
                  </div>
                  {!dest.active ? (
                    <span className="text-[10px] font-bold text-white/50 border border-white/20 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                      Phase 2
                    </span>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-foreground transition-all duration-500">
                      <span className="material-icons-outlined text-lg">arrow_forward</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityGrid;
