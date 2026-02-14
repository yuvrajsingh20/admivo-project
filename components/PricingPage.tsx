import React from 'react';

const PricingPage: React.FC = () => {
    const plans = [
        {
            name: 'Starter',
            price: 'Free',
            desc: 'Initial consultation and profile evaluation.',
            features: ['Profile Evaluation', 'Country Selection', 'Basic Counseling']
        },
        {
            name: 'Global Admissions',
            price: 'Consult us',
            popular: true,
            desc: 'End-to-end service for multiple university applications.',
            features: ['University Shortlisting', 'SOP & LOR Support', 'Application Tracking', 'Visa Counseling']
        },
        {
            name: 'Elite VIP',
            price: 'Premium',
            desc: 'Dedicated counselor for top-tier Ivy League admissions.',
            features: ['Personal Mentorship', 'Interview Prep', 'Scholarship Assistance', 'Post-departure Support']
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#F9FAFB] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Transparent Pricing</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#111827]">Investment in Your Future</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Choose a package that fits your needs.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div key={idx} className={`relative bg-white p-12 rounded-[3rem] shadow-sm flex flex-col ${plan.popular ? 'border-2 border-primary ring-4 ring-primary/5' : 'border border-slate-100'}`}>
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#111827] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</span>
                            )}
                            <h3 className="text-2xl font-bold text-[#111827] mb-2">{plan.name}</h3>
                            <p className="text-slate-500 text-sm font-medium mb-8">{plan.desc}</p>
                            <div className="text-4xl font-black text-[#111827] mb-10">{plan.price}</div>
                            <ul className="space-y-6 mb-12 flex-grow">
                                {plan.features.map(f => (
                                    <li key={f} className="flex items-center gap-3 text-slate-700 font-bold">
                                        <span className="material-icons-outlined text-primary">done</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-5 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-primary text-[#111827] shadow-xl shadow-primary/20 hover:scale-105' : 'bg-[#111827] text-white hover:bg-primary hover:text-[#111827]'}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
