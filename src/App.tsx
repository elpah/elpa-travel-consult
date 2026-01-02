import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Theme } from './settings/types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const InvestGhana = lazy(() => import('./pages/InvestGhana'));
const Resources = lazy(() => import('./pages/Resources'));
const Services = lazy(() => import('./pages/Services'));
const StudyAbroad = lazy(() => import('./pages/StudyAbroad'));
const VisitGhana = lazy(() => import('./pages/VisitGhana'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const CountryDetailsPage = lazy(() => import('./pages/CountryDetailsPage'));

let theme: Theme = 'light';

function App() {
  const { pathname } = useLocation();
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  setTheme(theme);
  return (
    <div className="app-container">
      <Navigation />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/invest-ghana" element={<InvestGhana />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/study-abroad/programs" element={<ProgramsPage />} />
            <Route path="/visit-ghana" element={<VisitGhana />} />
            <Route path="/study-abroad/countries/:countryName" element={<CountryDetailsPage />} />
            <Route path="/study-abroad/countries" element={<CountryDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
