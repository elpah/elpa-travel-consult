import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Home } from './Home';
import { Services } from './Services';
import { StudyAbroad } from './StudyAbroad';
import { About } from './About';
import { VisitGhana } from './VisitGhana';
import { InvestGhana } from './InvestGhana';
import { Resources } from './Resources';
import { Contact } from './Contact';
export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<
    | 'home'
    | 'services'
    | 'study-abroad'
    | 'visit-ghana'
    | 'invest-ghana'
    | 'about'
    | 'resources'
    | 'contact'
  >('home');
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'study-abroad':
        return <StudyAbroad onNavigate={setCurrentPage} />;
      case 'visit-ghana':
        return <VisitGhana />;
      case 'invest-ghana':
        return <InvestGhana />;
      case 'about':
        return <About />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};
