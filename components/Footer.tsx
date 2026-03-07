import React from 'react';
import { Page } from '../types';
import { TextHoverEffect } from './ui/text-hover-effect';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B0B0C] font-sans relative overflow-hidden">

      {/* ── Giant Background Text Texture ── */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.02] blur-[1px] pointer-events-none mt-32">
        <TextHoverEffect text="ADMIVO" />
      </div>

      {/* ── Main Footer Layout ── */}
      <div className="max-w-[1280px] mx-auto px-[32px] pt-[72px] pb-[64px] relative z-10 flex flex-col">

        {/* Top Minimal CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/[0.06] pb-[32px] mb-[32px] gap-[24px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#E5E5E5] tracking-tight mb-[16px] max-sm:text-2xl">
              Shape your academic future.
            </h2>
            <p className="text-[14px] font-normal leading-[1.6] text-[#9CA3AF] max-w-[400px]">
              Join a network of high-achieving students guided by the world's leading admission experts.
            </p>
          </div>
          <div className="flex gap-[16px] w-full md:w-auto">
            <button
              className="bg-[#E5E5E5] text-[#0B0B0C] hover:bg-white transition-colors duration-200 h-10 px-[24px] rounded-md text-[14px] font-semibold w-full md:w-auto shadow-sm"
              onClick={() => onNavigate(Page.SERVICES)}
            >
              Get Started
            </button>
            <button
              className="border border-white/20 text-[#E5E5E5] hover:bg-white/5 transition-colors duration-200 h-10 px-[24px] rounded-md text-[14px] font-semibold w-full md:w-auto"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* 4-Column Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[32px] gap-x-[40px] w-full min-h-[200px]">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-[12px]">
            <div
              className="flex items-center gap-[8px] cursor-pointer"
              onClick={() => onNavigate(Page.UK_HOME)}
            >
              <span className="text-[18px] font-semibold tracking-[-0.01em] text-[#E5E5E5]">ADMIVO</span>
            </div>
            <p className="text-[14px] font-normal leading-[1.5] max-w-[260px] text-[#9CA3AF]">
              Admivo develops modern strategic solutions tailored for speed, institutional clarity, and innovation.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-semibold text-[#E5E5E5] uppercase tracking-[0.05em] mb-[16px]">Navigation</h4>
            <ul className="flex flex-col gap-[8px]">
              <li>
                <button onClick={() => onNavigate(Page.UK_HOME)} className="text-[14px] font-normal text-[#9CA3AF] hover:text-[#E5E5E5] transition-colors duration-200">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.SERVICES)} className="text-[14px] font-normal text-[#9CA3AF] hover:text-[#E5E5E5] transition-colors duration-200">
                  Products
                </button>
              </li>
              <li>
                <button disabled className="text-[14px] font-normal text-[#9CA3AF] opacity-50 cursor-not-allowed">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.UK_HOME)} className="text-[14px] font-normal text-[#9CA3AF] hover:text-[#E5E5E5] transition-colors duration-200">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Helpful Links */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-semibold text-[#E5E5E5] uppercase tracking-[0.05em] mb-[16px]">Resources</h4>
            <ul className="flex flex-col gap-[8px]">
              <li>
                <button className="text-[14px] font-normal text-[#9CA3AF] hover:text-[#E5E5E5] transition-colors duration-200 flex items-center gap-1 group">
                  Documentation
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </button>
              </li>
              <li>
                <button className="text-[14px] font-normal text-[#9CA3AF] hover:text-[#E5E5E5] transition-colors duration-200">
                  Support
                </button>
              </li>
              <li>
                <button className="text-[14px] font-normal text-[#9CA3AF] hover:text-[#E5E5E5] transition-colors duration-200">
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-semibold text-[#E5E5E5] uppercase tracking-[0.05em] mb-[16px]">Contact</h4>
            <ul className="flex flex-col gap-[8px] text-[14px] font-normal text-[#9CA3AF] mb-[16px]">
              <li className="flex items-center">
                <span>support@admivo.com</span>
              </li>
              <li className="flex items-center">
                <span>+44 20 7946 0958</span>
              </li>
              <li className="flex items-center">
                <span>London, United Kingdom</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-[16px] mt-[8px]">
              <a href="#" className="text-[#9CA3AF] hover:text-[#FACC15] transition-colors duration-200">
                <Facebook className="w-[16px] h-[16px]" strokeWidth={2} />
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-[#FACC15] transition-colors duration-200">
                <Twitter className="w-[16px] h-[16px]" strokeWidth={2} />
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-[#FACC15] transition-colors duration-200">
                <Instagram className="w-[16px] h-[16px]" strokeWidth={2} />
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-[#FACC15] transition-colors duration-200">
                <Linkedin className="w-[16px] h-[16px]" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="mt-[32px] pt-[20px] border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-[16px] text-[14px] font-normal text-[#9CA3AF]">
          <p className="order-2 md:order-1">© 2026 ADMIVO. All rights reserved.</p>
          <div className="flex gap-[20px] order-1 md:order-2">
            <a href="#" className="hover:text-[#E5E5E5] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#E5E5E5] transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
