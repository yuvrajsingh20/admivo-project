import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', page: Page.UK_HOME, disabled: false },
    { label: 'Destinations', page: Page.DESTINATIONS, disabled: true },
    { label: 'Services', page: Page.SERVICES, disabled: false },
    { label: 'Pricing', page: Page.PRICING, disabled: false },
    { label: 'Results', page: Page.RESULTS, disabled: false },
    { label: 'Blog', page: Page.BLOG, disabled: true },
  ];

  const handleNavigate = (page: Page) => {
    const item = menuItems.find(i => i.page === page);
    if (item?.disabled) return;
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavigate(Page.UK_HOME)}
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center transition-all group-hover:scale-95 duration-300">
            <span className="material-icons-outlined text-foreground text-lg">school</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-foreground">Admivo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              disabled={item.disabled}
              className={`text-[13px] font-bold tracking-tight transition-all relative ${item.disabled
                ? 'text-muted-foreground cursor-not-allowed opacity-40'
                : currentPage === item.page
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {item.label}
              {currentPage === item.page && !item.disabled && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-6">
            <button className="text-[13px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              Sign In
            </button>
            <button className="btn btn-primary text-[10px] tracking-[0.2em] uppercase h-10 px-6">
              Start Journey
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <span className="material-icons-outlined text-xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  disabled={item.disabled}
                  className={`text-xl font-bold text-left transition-colors flex items-center justify-between ${item.disabled
                    ? 'text-muted-foreground opacity-30 cursor-not-allowed'
                    : currentPage === item.page
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                    }`}
                >
                  {item.label}
                  {item.disabled && (
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] bg-secondary text-muted-foreground px-3 py-1 rounded-full">Coming Soon</span>
                  )}
                </button>
              ))}
              <div className="h-px bg-border my-4" />
              <div className="flex flex-col gap-4">
                <button className="btn btn-outline w-full py-6 text-xs uppercase tracking-widest font-bold">Login</button>
                <button className="btn btn-primary w-full py-6 text-xs uppercase tracking-widest font-bold">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
