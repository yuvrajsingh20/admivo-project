import React from 'react';
import { motion } from 'framer-motion';

const QuickInfo: React.FC = () => {
  const stats = [
    { label: 'Student Success', value: '4,000+', sub: 'Elite global university offers', icon: 'workspace_premium' },
    { label: 'Global Partners', value: '180+', sub: 'Direct institutional pathways', icon: 'hub' },
    { label: 'Expert Mentors', value: '85+', sub: 'Ivy League & Oxford alumni', icon: 'psychology' },
  ];

  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-[#111111]">
                  <span className="material-icons-outlined text-sm">{stat.icon}</span>
                </div>
                <span className="text-[12px] font-semibold tracking-[0.15em] text-[#6B7280] uppercase block">{stat.label}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-[40px] font-semibold text-[#111111] leading-[1.2] tabular-nums">
                  {stat.value}
                </h3>
                <p className="text-[14px] text-[#4B5563] leading-[1.6]">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
