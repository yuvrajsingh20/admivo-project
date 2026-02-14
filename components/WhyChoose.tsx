
import React from 'react';

const WhyChoose: React.FC = () => {
  const benefits = [
    { title: 'Academic Excellence', desc: 'Home to 4 of the world\'s top 10 universities with rigorous standards.', icon: 'school' },
    { title: 'Shorter Degrees', desc: 'Save time and money with 3-year undergrad and 1-year master\'s programs.', icon: 'timer' },
    { title: 'Post-Study Work', desc: 'Graduate Route visa allows you to stay and work for 2 years after study.', icon: 'work_outline' },
    { title: 'Cultural Hub', desc: 'A gateway to Europe with a rich history and vibrant arts scene.', icon: 'language' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose the United Kingdom?</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 mb-6 bg-[#FFF9E6] rounded-full flex items-center justify-center">
                <span className="material-icons-outlined text-primary text-4xl">{benefit.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
