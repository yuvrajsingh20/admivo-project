
import React, { useState } from 'react';
import { Page } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import WhyChoose from './components/WhyChoose';
import PopularCourses from './components/PopularCourses';
import UniversityGrid from './components/UniversityGrid';
import PortfolioSection from './components/PortfolioSection';
import FinancialPlanning from './components/FinancialPlanning';
import VisaAccordion from './components/VisaAccordion';
import Footer from './components/Footer';
import DestinationsPage from './components/DestinationsPage';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import ResultsPage from './components/ResultsPage';
import BlogPage from './components/BlogPage';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.UK_HOME);

  const renderContent = () => {
    switch (currentPage) {
      case Page.DESTINATIONS:
        return <DestinationsPage onBack={() => setCurrentPage(Page.UK_HOME)} />;
      case Page.SERVICES:
        return <ServicesPage />;
      case Page.PRICING:
        return <PricingPage />;
      case Page.RESULTS:
        return <ResultsPage />;
      case Page.BLOG:
        return <BlogPage />;
      case Page.UK_HOME:
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <QuickInfo />
            <WhyChoose />
            <PopularCourses />
            <UniversityGrid onNavigate={setCurrentPage} />
            <PortfolioSection />
            <div className="bg-[#FAFAFA] border-y border-border">
              <FinancialPlanning />
            </div>
            <div className="py-20 bg-white">
              <div className="container-custom">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                  <span className="text-[12px] font-semibold tracking-[0.15em] text-[#6B7280] uppercase mb-[16px] block">
                    Institutional Intelligence
                  </span>
                  <h2 className="text-[40px] font-semibold text-[#111111] mb-[20px] tracking-[-0.02em] leading-[1.2]">
                    Strategic Insights & FAQs.
                  </h2>
                  <p className="text-[14px] text-[#4B5563] leading-[1.6]">
                    Comprehensive intelligence on elite admission protocols and global academic relocation.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <VisaAccordion />
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <ChatWidget />
    </div>
  );
};

export default App;
