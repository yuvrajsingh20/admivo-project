
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
            <FinancialPlanning />
            <div className="bg-white py-24 px-6 md:px-12 rounded-[4rem] mx-6 my-12 shadow-sm border border-slate-100">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-black text-[#111827] mb-6">Frequently Asked Questions</h2>
                <p className="text-slate-500 font-medium">Everything you need to know about the visa process and admissions.</p>
              </div>
              <VisaAccordion />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-light">
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
