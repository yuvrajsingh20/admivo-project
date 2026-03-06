import React from 'react';
import { motion } from 'framer-motion';
import FinancialPlanning from './FinancialPlanning';
import VisaAccordion from './VisaAccordion';

const ServicesPage: React.FC = () => {
    const services = [
        {
            title: 'University Admissions',
            desc: 'Expert strategy for Bachelors, Masters, and PhD applications in the world\'s most elite institutions.',
            icon: 'account_balance',
            features: ['SOP/LOR Strategy', 'Elite University Matching', 'Priority Application Mgmt']
        },
        {
            title: 'Visa Concierge',
            desc: 'Unmatched visa success rates with rigorous documentation support and elite mock interviews.',
            icon: 'verified',
            features: ['Fiscal Architecture', 'Diplomatic Interviews', 'Verified Audit']
        },
        {
            title: 'Prime Test Prep',
            desc: 'Bespoke coaching for IELTS, GRE, and GMAT by world-class certified academic experts.',
            icon: 'draw',
            features: ['Elite Syllabus', 'Unlimited Simulation', 'Direct Mentorship']
        },
        {
            title: 'Career Architecture',
            desc: 'Precision mapping of your academic strengths to high-impact global career trajectories.',
            icon: 'insights',
            features: ['Psychometric Logic', 'Market Dynamics', 'Network Access']
        }
    ];

    return (
        <section className="py-20 bg-[#FAFAFA] min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block"
                    >
                        Strategic Solutions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight"
                    >
                        Bespoke <span className="text-muted-foreground">Expert Services.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-sm font-medium leading-relaxed"
                    >
                        End-to-end guidance tailored for high-achieving students targeting the global elite institutions.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300 flex flex-col lg:flex-row gap-6 shadow-sm"
                        >
                            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 text-foreground">
                                <span className="material-icons-outlined text-2xl">{service.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-medium">{service.desc}</p>
                                <ul className="space-y-3">
                                    {service.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-[11px] text-foreground font-bold uppercase tracking-widest">
                                            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                <span className="material-icons-outlined text-[14px]">check</span>
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm"
                    >
                        <FinancialPlanning />
                    </motion.div>

                    <div className="bg-foreground text-background p-16 lg:p-20 rounded-2xl shadow-xl">
                        <div className="max-w-xl mx-auto text-center mb-12">
                            <span className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">Institutional Insights</span>
                            <h2 className="text-3xl font-bold mb-5 tracking-tight">Clarity for <span className="text-muted-foreground">serious applicants.</span></h2>
                            <p className="text-muted-foreground font-medium text-sm leading-relaxed">Rigorous transparency into the most complex dimensions of the international education journey.</p>
                        </div>
                        <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden text-foreground">
                            <VisaAccordion />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
