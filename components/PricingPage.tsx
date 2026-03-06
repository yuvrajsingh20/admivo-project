import React from 'react';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
    const plans = [
        {
            name: 'Academic Audit',
            price: 'Institutional',
            desc: 'A precision audit of your current profile and global eligibility.',
            features: ['Profile Architecture', 'Strategic Hub Selection', 'Initial Roadmap']
        },
        {
            name: 'Global Entry',
            price: 'Strategic',
            popular: true,
            desc: 'End-to-end strategic placement for multiple global institutions.',
            features: ['Portfolio Management', 'Elite SOP Strategy', 'Document Audit', 'Visa Concierge']
        },
        {
            name: 'Ivy Elite',
            price: 'Executive',
            desc: 'A dedicated advisor for the world\'s top 0.1% institutions.',
            features: ['Private Mentorship', 'Interview Mastery', 'Scholarship Negotiation', 'Global Network Access']
        }
    ];

    return (
        <section className="py-20 bg-white min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block"
                    >
                        Strategic Investment
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight"
                    >
                        Invest in your <span className="text-muted-foreground">Legacy.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-sm font-medium leading-relaxed"
                    >
                        Transparent scaling based on the complexity of your global academic ambitions.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative p-6 rounded-2xl flex flex-col transition-all duration-300 border ${plan.popular ? 'border-foreground bg-foreground text-background shadow-xl scale-105 z-10' : 'bg-white border-border text-foreground hover:border-foreground/20 shadow-sm'}`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background border border-border px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">Recommended</span>
                            )}
                            <h3 className={`text-xl font-bold mb-3 tracking-tight ${plan.popular ? 'text-background' : 'text-foreground'}`}>{plan.name}</h3>
                            <p className={`${plan.popular ? 'text-muted-foreground' : 'text-muted-foreground'} text-xs font-medium mb-6`}>{plan.desc}</p>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map(f => (
                                    <li key={f} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/10 text-white' : 'bg-secondary text-foreground'}`}>
                                            <span className="material-icons-outlined text-[14px]">check</span>
                                        </div>
                                        <span className={plan.popular ? 'text-muted-foreground' : 'text-muted-foreground'}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn w-full h-12 text-[10px] tracking-widest uppercase transition-all ${plan.popular ? 'bg-background text-foreground hover:bg-background/90 shadow-lg' : 'btn-primary'}`}>
                                Begin Journey
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground text-[10px] font-medium italic uppercase tracking-widest">
                        * All institutional fees are subject to university-specific application variants.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
