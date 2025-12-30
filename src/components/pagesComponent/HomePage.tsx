import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Home } from './Home';
import { Services } from './Services';
import { StudyAbroad } from './StudyAbroad';
import { About } from './About';
import { VisitGhana } from './VisitGhana';
import { Resources } from './Resources';
import { Contact } from './Contact';
export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<
    'home' | 'services' | 'study-abroad' |'visit-ghana'| 'about' | 'resources' | 'contact'
  >('home');
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'study-abroad':
        return <StudyAbroad />;
         case 'visit-ghana':
        return <VisitGhana />;
      case 'about':
        return <About />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
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
