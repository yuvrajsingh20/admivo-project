import React from 'react';

const BLOG_POSTS = [
    {
        id: 1,
        title: 'Top 10 High-Paying Degrees in the UK for 2025',
        category: 'Career Advice',
        date: 'Feb 12, 2026',
        image: 'https://images.unsplash.com/photo-1454165833767-027ffea9eec1?q=80&w=800&auto=format&fit=crop',
        excerpt: 'Discover which fields are offering the highest starting salaries for international graduates this year.',
        author: 'Dr. Emily Watson'
    },
    {
        id: 2,
        title: 'How to Secure a 100% Scholarship for your Masters',
        category: 'Scholarships',
        date: 'Feb 10, 2026',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
        excerpt: 'A complete step-by-step guide on profile building and acing your scholarship interview.',
        author: 'James Miller'
    },
    {
        id: 3,
        title: 'Visa Interview Tips: What Officers Really Look For',
        category: 'Visa Guide',
        date: 'Feb 08, 2026',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
        excerpt: 'Common questions and the best way to answer them to ensure your visa success.',
        author: 'Sarah Jenkins'
    }
];

const BlogPage: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#F9FAFB] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Knowledge Hub</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#111827]">Latest from our Blog</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        Insightful articles, guides, and news to help you navigate your international education journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-primary text-[#111827] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10">
                                <div className="flex items-center gap-3 mb-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#111827] mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                                    {post.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-[#111827] font-extrabold text-sm group/btn">
                                    Read Article
                                    <span className="material-icons-outlined text-primary group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <nav className="flex items-center gap-2">
                        {[1, 2, 3, 4].map(num => (
                            <button key={num} className={`w-12 h-12 rounded-2xl font-bold transition-all ${num === 1 ? 'bg-[#111827] text-white' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'}`}>
                                {num}
                            </button>
                        ))}
                        <button className="w-12 h-12 rounded-2xl bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 flex items-center justify-center">
                            <span className="material-icons-outlined">chevron_right</span>
                        </button>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
