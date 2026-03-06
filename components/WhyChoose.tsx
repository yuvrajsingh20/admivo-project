import React from 'react';
import { motion } from 'framer-motion';

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: "military_tech",
      title: "Academic Prestige",
      desc: "Secure admission at world-leading institutions with a track record of academic excellence."
    },
    {
      icon: "language",
      title: "Global Recognition",
      desc: "Join an elite cohort of students globally recognized for their potential and leadership."
    },
    {
      icon: "rocket_launch",
      title: "Career Acceleration",
      desc: "Connect with high-impact careers through our specialized alumni and partner networks."
    },
    {
      icon: "museum",
      title: "Cultural Immersion",
      desc: "Gain a truly global perspective through deep immersion in diverse academic communities."
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] border-b border-border">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-[12px] font-semibold tracking-[0.15em] text-[#6B7280] uppercase mb-[16px] block">
            The Admivo Standard
          </span>
          <h2 className="text-[40px] font-semibold text-[#111111] tracking-[-0.02em] leading-[1.2]">
            Why elite students choose our platform.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-5 rounded-2xl border border-border shadow-sm hover:border-black/10 hover:shadow-md transition-all duration-300 group flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center mb-6 text-[#6B7280] group-hover:text-[#111111] transition-colors duration-300">
                <span className="material-icons-outlined text-2xl">{reason.icon}</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#111111] mb-3 tracking-tight duration-300">
                {reason.title}
              </h3>
              <p className="text-[14px] text-[#4B5563] leading-[1.6]">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
