
import React, { useState } from 'react';

const VisaAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const sections = [
    {
      title: 'Student Visa (Tier 4) Process',
      content: 'Applications usually open 6 months before your course starts. You\'ll need a CAS (Confirmation of Acceptance for Studies), proof of finances, and a valid passport. Our experts handle the complex documentation for you.'
    },
    {
      title: 'Language Proficiency Requirements',
      content: 'Most UK universities require IELTS Academic scores between 6.0 and 7.5. Some institutions accept alternative tests like TOEFL or Pearson PTE. We provide free training for students who need to improve their scores.'
    },
    {
      title: 'Health Insurance (IHS)',
      content: 'International students must pay the Immigration Health Surcharge as part of their visa application. This grants you access to the UK\'s National Health Service (NHS) during your stay.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Visa & Admission Requirements</h2>
        <div className="space-y-4">
          {sections.map((section, idx) => (
            <div key={idx} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-7 bg-white text-left font-bold group"
              >
                <span className="text-slate-800 text-lg">{section.title}</span>
                <span className={`material-icons-outlined text-primary transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-60' : 'max-h-0'}`}
              >
                <div className="p-7 pt-0 text-slate-500 text-base leading-relaxed border-t border-slate-50">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaAccordion;
