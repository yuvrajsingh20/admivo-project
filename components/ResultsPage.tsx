import React from 'react';

import PortfolioSection from './PortfolioSection';

const ResultsPage: React.FC = () => {
    const stats = [
        { label: 'Visas Approved', value: '2500+', icon: 'verified_user' },
        { label: 'Top Universities', value: '450+', icon: 'school' },
        { label: 'Countries Served', value: '15+', icon: 'public' },
        { label: 'Scholarships Won', value: '$2M+', icon: 'payments' },
    ];

    return (
        <section className="py-24 px-6 bg-[#F9FAFB] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Proven Track Record</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#111827]">Our Impact in Numbers</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Stories of success that define our legacy.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons-outlined text-primary text-3xl">{stat.icon}</span>
                            </div>
                            <div className="text-4xl font-black text-[#111827] mb-2">{stat.value}</div>
                            <div className="text-slate-500 font-bold text-sm tracking-wide uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <PortfolioSection />

                <div className="bg-[#111827] rounded-[3.5rem] p-12 lg:p-20 mt-24 relative overflow-hidden text-center">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-8">Ready to be our next success story?</h3>
                        <p className="text-slate-400 text-lg mb-12 font-medium">Start your journey today and let us help you reach your dream university.</p>
                        <button className="bg-primary text-[#111827] px-12 py-6 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-primary/20">
                            Apply Now
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
                </div>
            </div>
        </section>
    );
};

export default ResultsPage;
