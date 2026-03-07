import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <header className="relative bg-[#FAFAFA] pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center border-b border-border">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white border border-border mb-3 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[12px] font-medium text-[#6B7280] tracking-wide uppercase">
              Admissions 2026/27 Now Open
            </span>
          </div>

          <h1 className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold text-[#111111] leading-[1.05] tracking-tight mb-4 max-w-[12em]">
            Elevate your global future.
          </h1>

          <p className="text-[17px] text-[#4B5563] mb-6 max-w-md leading-relaxed">
            Strategic application support for students targeting elite universities globally.
            From Oxford to MIT, we guide your journey to excellence.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              className="btn btn-primary h-12 px-8 text-sm tracking-wide"
            >
              Free Consultation
            </button>

            <button
              disabled
              className="btn btn-outline h-12 px-8 text-sm tracking-wide flex items-center gap-2 text-muted-foreground cursor-not-allowed opacity-60"
            >
              Explore Hubs
              <span className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">P2</span>
            </button>
          </div>

          <div className="flex items-center gap-6 mt-8 border-t border-border/50 pt-8 max-w-md">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i + 20}`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  alt="Student"
                />
              ))}
            </div>
            <p className="text-[13px] text-[#6B7280]">
              <span className="text-[#111111] font-semibold block text-[14px]">500+ Offers Received</span>
              Elite Global University Admissions
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE — MINIMALIST VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full aspect-square max-w-[500px] min-h-[400px] flex items-center justify-center">

            {/* Doodle Animation Main Visual */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[120%] h-[120%] max-w-none object-contain mix-blend-multiply opacity-90 grayscale contrast-125 brightness-110 pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)'
                }}
              >
                <source src="/videos/hero-doodle.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Refined Premium Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-8 card-minimal !p-5 flex items-center gap-4 backdrop-blur-md bg-white/90 z-20 shadow-xl border-primary/10"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <span className="material-icons-outlined text-lg">verified</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Visa Success</p>
                <p className="text-lg font-bold text-foreground">99.8% Rate</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 left-8 card-minimal !p-5 flex items-center gap-4 backdrop-blur-md bg-white/90 z-20 shadow-xl border-primary/10"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons-outlined text-lg">stars</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Scholarships</p>
                <p className="text-lg font-bold text-foreground">$2.4M Awarded</p>
              </div>
            </motion.div>

            {/* Central elements were removed to let the doodle video shine */}

          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;