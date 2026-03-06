import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VisaAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const sections = [
    {
      title: 'Global Student Visa Protocols',
      content: 'Visa applications typically commence 6 months prior to your program start date. Essential requirements include a valid admission offer (CAS/I-20), financial solvency proof, and current travel documents. Our specialists ensure your documentation meets the highest standards for approval.'
    },
    {
      title: 'Linguistic Competency Standards',
      content: 'Top-tier institutions generally require IELTS Academic scores ranging from 6.5 to 8.0, or equivalent TOEFL/PTE certifications. We offer dedicated language refinement programs to ensure you meet and exceed these academic benchmarks.'
    },
    {
      title: 'Global Health Coverage (IHS)',
      content: 'Most international study destinations require mandatory health insurance coverage as part of the visa protocol. This ensures comprehensive access to host country medical services throughout the duration of your academic program.'
    }
  ];

  return (
    <div className="container-custom">
      <div className="max-w-2xl mx-auto py-12">
        <div className="space-y-4">
          {sections.map((section, idx) => (
            <div key={idx} className="border border-border rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-black/[0.02]"
              >
                <span className="text-[#111111] text-[14px] font-semibold tracking-tight">{section.title}</span>
                <span className={`material-icons-outlined text-[#6B7280] text-lg transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-[#4B5563] text-[14px] leading-[1.6] font-normal bg-white">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaAccordion;
