
import React from 'react';

const QuickInfo: React.FC = () => {
  const items = [
    { title: 'Population', value: '67.3 Million+', desc: 'Diverse & Multicultural hub', icon: 'groups' },
    { title: 'Currency', value: 'GBP (£)', desc: 'British Pound Sterling', icon: 'payments' },
    { title: 'Industries', value: 'Finance & Tech', desc: 'Leading Global Economic Center', icon: 'business' },
  ];

  return (
    <section className="py-12 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-icons-outlined">{item.icon}</span>
            </div>
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-1 tracking-wider">{item.title}</h3>
            <p className="text-3xl font-bold text-slate-900">{item.value}</p>
            <p className="text-sm mt-2 text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickInfo;
