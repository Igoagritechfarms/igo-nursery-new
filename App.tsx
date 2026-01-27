
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import GardenAssistant from './pages/GardenAssistant';
import Landscape from './pages/Landscape';
import AMC from './pages/AMC';
import Lab from './pages/Lab';
import KnowledgeHub from './pages/KnowledgeHub';
import Visit from './pages/Visit';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [cartCount, setCartCount] = useState(0);

  const handlePageChange = (p: Page) => {
    window.location.hash = p;
    setCurrentPage(p);
    window.scrollTo(0, 0);
  };

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.Home);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home />;
      case Page.Shop: return <Shop addToCart={() => setCartCount(c => c + 1)} />;
      case Page.Assistant: return <GardenAssistant />;
      case Page.Landscape: return <Landscape />;
      case Page.AMC: return <AMC />;
      case Page.Lab: return <Lab />;
      case Page.Knowledge: return <KnowledgeHub />;
      case Page.Visit: return <Visit />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-igo-lime selection:text-igo-dark">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange} 
        cartCount={cartCount}
      />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
};

export default App;
