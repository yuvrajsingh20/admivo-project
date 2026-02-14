
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white">
      {/* High-Impact CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative bg-[#111827] rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl shadow-primary/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Take the first step</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
                Ready to transform your <span className="text-primary">future?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-lg font-medium">
                Our expert advisors are ready to guide you through every step of your international education journey.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <button className="bg-primary text-[#111827] px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">
                  Book Free Counseling
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all">
                  Chat with AI Assistant
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 w-full max-w-sm">
                <div className="space-y-8">
                  {[
                    { icon: 'verified', text: '100% Visa Success Rate' },
                    { icon: 'stars', text: 'Partnered with 500+ Universities' },
                    { icon: 'public', text: 'Global Presence in 15+ Countries' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                        <span className="material-icons-outlined text-sm">{item.icon}</span>
                      </div>
                      <span className="text-white font-bold text-sm tracking-wide">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#111827] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8 cursor-pointer group" onClick={() => onNavigate(Page.UK_HOME)}>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-icons-outlined text-[#111827] font-bold text-xl">school</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">Admivo</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-bold">
                Empowering students to reach the world's finest classrooms with personalized guidance and innovative technology.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-8 text-primary uppercase text-[10px] tracking-[0.3em]">Quick Navigation</h4>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-slate-400 text-sm font-bold">
                <li><button onClick={() => onNavigate(Page.UK_HOME)} className="hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => onNavigate(Page.DESTINATIONS)} className="hover:text-primary transition-colors">Destinations</button></li>
                <li><button onClick={() => onNavigate(Page.SERVICES)} className="hover:text-primary transition-colors">Services</button></li>
                <li><button onClick={() => onNavigate(Page.PRICING)} className="hover:text-primary transition-colors">Pricing</button></li>
                <li><button onClick={() => onNavigate(Page.RESULTS)} className="hover:text-primary transition-colors">Results</button></li>
                <li><button onClick={() => onNavigate(Page.BLOG)} className="hover:text-primary transition-colors">Blog</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 text-primary uppercase text-[10px] tracking-[0.3em]">Offices</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-bold">
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-primary text-sm mt-1">location_on</span>
                  <span>London, United Kingdom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-primary text-sm mt-1">location_on</span>
                  <span>New Delhi, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 text-primary uppercase text-[10px] tracking-[0.3em]">Newsletter</h4>
              <p className="text-slate-400 text-xs mb-6 font-bold uppercase tracking-wider">Stay updated on scholarship deadlines</p>
              <div className="flex bg-white/5 rounded-2xl p-2 border border-white/10 focus-within:border-primary transition-colors">
                <input
                  className="bg-transparent border-none rounded-xl p-3 text-sm flex-grow focus:ring-0 text-white placeholder-slate-500 font-bold"
                  placeholder="Email"
                  type="email"
                />
                <button className="bg-primary text-[#111827] p-3 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                  <span className="material-icons-outlined">send</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">
            <p>© 2026 Admivo Education Services. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
