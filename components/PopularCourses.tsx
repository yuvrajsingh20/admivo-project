import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface Course {
  id: number;
  title: string;
  salary: string;
  category: string;
  duration: string;
  icon: string;
}

const PopularCourses: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const courses: Course[] = [
    { id: 1, title: "Business Analytics", salary: "£45,000/yr", category: "STEM", duration: "1 Year PG", icon: "assessment" },
    { id: 2, title: "Computer Science", salary: "£50,000/yr", category: "High Demand", duration: "3 Year UG", icon: "code" },
    { id: 3, title: "Public Health", salary: "£38,000/yr", category: "NHS Careers", duration: "1 Year PG", icon: "local_hospital" },
    { id: 4, title: "Architecture", salary: "£42,000/yr", category: "Creative", duration: "3-5 Years", icon: "architecture" },
    { id: 5, title: "Psychology", salary: "£35,000/yr", category: "Research", duration: "3 Year UG", icon: "psychology" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white border-b border-border max-md:py-16 max-sm:py-12">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12 max-sm:mb-8 max-sm:flex-col max-sm:items-start max-sm:gap-6">
          <div>
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#6B7280] uppercase mb-[16px] block">
              Curated Programs
            </span>
            <h2 className="text-[40px] font-semibold text-[#111111] tracking-[-0.02em] leading-[1.2] max-sm:text-[32px]">
              Popular Career Paths.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-foreground transition-all duration-300 active:scale-95"
            >
              <span className="material-icons-outlined text-sm">west</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-foreground transition-all duration-300 active:scale-95"
            >
              <span className="material-icons-outlined text-sm">east</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="min-w-[300px] bg-white rounded-2xl border border-border p-5 flex flex-col group hover:border-black/10 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center mb-6 text-[#6B7280] group-hover:text-[#111111] transition-colors duration-300">
                <span className="material-icons-outlined text-xl">{course.icon}</span>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111111] mb-3 tracking-tight duration-300">
                {course.title}
              </h3>

              <div className="p-4 bg-secondary/30 rounded-xl border border-transparent group-hover:border-border transition-all mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <p className="text-[11px] font-bold text-foreground uppercase tracking-widest">
                    Salary: <span className="text-muted-foreground">{course.salary}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.15em] px-2.5 py-1 bg-secondary rounded-md border border-border/50">
                  {course.duration}
                </span>
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.15em] px-2.5 py-1 bg-secondary rounded-md border border-border/50">
                  {course.category}
                </span>
              </div>

              <div className="mt-auto pt-6 border-t border-border/50">
                <button className="text-[11px] font-bold text-foreground uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Curriculum
                  <span className="material-icons-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
