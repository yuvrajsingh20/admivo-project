
import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate(Page.UK_HOME)}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-icons-outlined text-white text-lg">school</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Admivo</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onNavigate(Page.UK_HOME)}
            className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === Page.UK_HOME ? 'text-primary' : 'text-slate-600'}`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate(Page.DESTINATIONS)}
            className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === Page.DESTINATIONS ? 'text-primary' : 'text-slate-600'}`}
          >
            Destinations
          </button>
          <button
            onClick={() => onNavigate(Page.SERVICES)}
            className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === Page.SERVICES ? 'text-primary' : 'text-slate-600'}`}
          >
            Services
          </button>
          <button
            onClick={() => onNavigate(Page.PRICING)}
            className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === Page.PRICING ? 'text-primary' : 'text-slate-600'}`}
          >
            Pricing
          </button>
          <button
            onClick={() => onNavigate(Page.RESULTS)}
            className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === Page.RESULTS ? 'text-primary' : 'text-slate-600'}`}
          >
            Results
          </button>
          <button
            onClick={() => onNavigate(Page.BLOG)}
            className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === Page.BLOG ? 'text-primary' : 'text-slate-600'}`}
          >
            Blog
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-600 px-4 py-2 hover:text-slate-900 transition-colors">
            Sign In
          </button>
          <button className="bg-primary text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
