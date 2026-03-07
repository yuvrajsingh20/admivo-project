import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection: React.FC = () => {
    const portfolios = [
        {
            name: "Ananya Sharma",
            uni: "University of Oxford",
            program: "MSc in Computer Science",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
            quote: "The strategic guidance on my SOP was invaluable. Admivo made the complex Oxford process feel streamlined and achievable."
        },
        {
            name: "Rahul Mehta",
            uni: "Stanford University",
            program: "MBA",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
            quote: "From GMAT prep to visa support, the personalized attention I received was exceptional. They were with me at every single step."
        },
        {
            name: "Sarah Thompson",
            uni: "University of Toronto",
            program: "Bachelors in Engineering",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
            quote: "Admivo helped me navigate the Canadian system and secured a scholarship that made my dream of studying engineering abroad a reality."
        },
        {
            name: "Kim Min-su",
            uni: "Technical University of Munich",
            program: "Automotive Engineering",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
            quote: "Their expertise in the German education system and visa process was crucial. The Blocked Account and APS guidance was perfect."
        }
    ];

    return (
        <section className="py-20 bg-white border-b border-border max-md:py-16 max-sm:py-12">
            <div className="container-custom">
                <div className="text-center mb-12 max-sm:mb-8 max-sm:text-left">
                    <span className="text-[12px] font-semibold tracking-[0.15em] text-[#6B7280] uppercase mb-[16px] block">
                        Alumni Impact
                    </span>
                    <h2 className="text-[40px] font-semibold text-[#111111] tracking-[-0.02em] leading-[1.2] max-sm:text-[32px] max-sm:leading-[1.1]">
                        Proven Results at Global Scale.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolios.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-5 rounded-2xl border border-border flex flex-col hover:border-black/10 transition-all duration-300 group shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-foreground rounded-full scale-110 opacity-0 group-hover:opacity-5 transition-all"></div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-border"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-semibold text-[#111111] leading-tight tracking-tight">{item.name}</h4>
                                    <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mt-0.5">{item.uni}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-widest px-2 py-0.5 bg-secondary/50 rounded-md block w-fit mb-3">
                                    {item.program}
                                </span>
                                <p className="text-[14px] text-[#4B5563] leading-[1.6]">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="mt-auto pt-5 border-t border-border/50">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                    Case Study
                                    <span className="material-icons-outlined text-[14px]">arrow_forward</span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center max-sm:mt-8">
                    <button className="btn btn-outline h-10 px-6 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto max-sm:w-full max-sm:h-12">
                        More Success Stories
                        <span className="material-icons-outlined text-sm">north_east</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
