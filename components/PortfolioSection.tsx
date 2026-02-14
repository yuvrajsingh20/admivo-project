import React from 'react';

const SUCCESS_STORIES = [
    {
        id: 1,
        name: 'Ananya Sharma',
        university: 'University of Oxford, UK',
        program: 'MSc in Computer Science',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
        testimonial: 'Admivo made the complex Oxford application process feel seamless. Their guidance on my SOP was a game-changer.'
    },
    {
        id: 2,
        name: 'Rahul Mehta',
        university: 'Stanford University, USA',
        program: 'MBA',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        testimonial: 'From GMAT prep to visa interview, the team was with me at every step. Truly grateful for the personalized attention.'
    },
    {
        id: 3,
        name: 'Sarah Thompson',
        university: 'University of Toronto, Canada',
        program: 'Bachelors in Engineering',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
        testimonial: 'Canada was my dream destination. Admivo helped me find the best scholarship that covered 50% of my tuition.'
    },
    {
        id: 4,
        name: 'Kim Min-su',
        university: 'Technical University of Munich, Germany',
        program: 'Masters in Automotive Engineering',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        testimonial: 'The free education in Germany sounded too good to be true, but Admivo guided me through the Blocked Account and APS process perfectly.'
    }
];

const PortfolioSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Proven Results</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#111827]">Student Success Stories</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        Join the hundreds of students who have embarked on their global education journey with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SUCCESS_STORIES.map((story) => (
                        <div key={story.id} className="group relative bg-[#F9FAFB] rounded-[2.5rem] p-6 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-transparent hover:border-primary/20">
                            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>

                            <div className="relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-[2px] w-8 bg-primary"></div>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{story.program}</span>
                                </div>
                                <h3 className="text-xl font-extrabold text-[#111827] mb-2">{story.name}</h3>
                                <p className="text-sm font-bold text-slate-500 mb-4">{story.university}</p>
                                <div className="relative">
                                    <span className="material-icons-outlined absolute -left-2 -top-2 text-primary/20 text-4xl leading-none">format_quote</span>
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3 relative z-10">
                                        {story.testimonial}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="bg-[#111827] text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary hover:text-[#111827] transition-all flex items-center gap-3 mx-auto shadow-xl hover:shadow-primary/20">
                        View More Success Stories
                        <span className="material-icons-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
