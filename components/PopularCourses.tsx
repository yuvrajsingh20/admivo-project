
import React from 'react';
import { COURSES } from '../constants';

const PopularCourses: React.FC = () => {
  return (
    <section className="py-20 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Most Popular Courses</h2>
          <p className="text-slate-500">Discover programs that lead to high-demand careers</p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <span className="material-icons-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <span className="material-icons-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-6 px-6 lg:px-[calc((100vw-1280px)/2+24px)] hide-scrollbar pb-8">
        {COURSES.map((course) => (
          <div key={course.id} className="flex-none w-72 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${course.colorClass}`}>
              <span className="material-icons-outlined">{course.icon}</span>
            </div>
            <h4 className="text-lg font-bold mb-2">{course.title}</h4>
            <p className="text-xs text-slate-500 mb-4">Average Salary: {course.salary}</p>
            <div className="flex flex-wrap gap-2">
              {course.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-100 rounded text-[10px] font-medium text-slate-600 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
