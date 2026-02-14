import React from 'react';
import FinancialPlanning from './FinancialPlanning';
import VisaAccordion from './VisaAccordion';

const ServicesPage: React.FC = () => {
    const services = [
        {
            title: 'University Admissions',
            desc: 'Expert guidance for Bachelors, Masters, and PhD applications in top global universities.',
            icon: 'school',
            features: ['SOP/LOR Editing', 'University Shortlisting', 'Application Management']
        },
        {
            title: 'Visa Counseling',
            desc: 'High visa success rate with end-to-end documentation support and mock interviews.',
            icon: 'description',
            features: ['Financial Planning', 'Mock Interviews', 'Document Verification']
        },
        {
            title: 'Test Preparation',
            desc: 'Comprehensive coaching for IELTS, TOEFL, GRE, and GMAT by certified experts.',
            icon: 'edit_note',
            features: ['Live Classes', 'Mock Tests', 'Personal Mentorship']
        },
        {
            title: 'Career Counseling',
            desc: 'Identify your strengths and choose the right course that aligns with your career goals.',
            icon: 'trending_up',
            features: ['Psychometric Tests', 'Industry Insights', 'Job Market Analysis']
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#F9FAFB] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">What We Offer</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#111827]">Comprehensive Support</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        From your first inquiry to your first day at university, we handle everything.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row gap-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="material-icons-outlined text-primary text-3xl">{service.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#111827] mb-4">{service.title}</h3>
                                <p className="text-slate-500 mb-6 leading-relaxed font-medium">{service.desc}</p>
                                <ul className="space-y-3">
                                    {service.features.map(f => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                                            <span className="material-icons-outlined text-primary text-lg">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-24">
                    <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-sm border border-slate-100">
                        <FinancialPlanning />
                    </div>

                    <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-sm border border-slate-100">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-4xl font-black text-[#111827] mb-6">Frequently Asked Questions</h2>
                            <p className="text-slate-500 font-medium">Everything you need to know about the visa process and admissions.</p>
                        </div>
                        <VisaAccordion />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
