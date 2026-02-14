
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
