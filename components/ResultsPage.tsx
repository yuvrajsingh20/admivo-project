import React from 'react';
import { motion } from 'framer-motion';
import PortfolioSection from './PortfolioSection';

const ResultsPage: React.FC = () => {
    const stats = [
        { label: 'Visas Approved', value: '2500+', icon: 'verified_user' },
        { label: 'Top Universities', value: '450+', icon: 'school' },
        { label: 'Countries Served', value: '15+', icon: 'public' },
        { label: 'Scholarships Won', value: '$2M+', icon: 'payments' },
    ];

    return (
        <section className="py-20 bg-[#FAFAFA] min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">Proven Track Record</span>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-5 text-foreground tracking-tight">Our Impact in <span className="text-muted-foreground">Numbers.</span></h2>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">Quantifiable success stories that define our commitment to excellence.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-2xl text-center border border-border hover:shadow-sm transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6 text-foreground">
                                <span className="material-icons-outlined text-2xl">{stat.icon}</span>
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-3 tabular-nums tracking-tight">{stat.value}</div>
                            <div className="text-muted-foreground font-bold text-[10px] tracking-widest uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <PortfolioSection />

                <div className="bg-foreground text-background rounded-2xl p-16 lg:p-20 mt-20 relative overflow-hidden text-center shadow-xl">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl lg:text-4xl font-bold text-background mb-5 tracking-tight">Ready to be our next <br /><span className="text-muted-foreground">global success story?</span></h3>
                        <p className="text-muted-foreground text-sm mb-6 font-medium">Start your strategic journey today and let us guide you to your dream institution.</p>
                        <button className="btn btn-secondary h-12 px-10 text-xs tracking-widest uppercase">
                            Begin Application
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsPage;
