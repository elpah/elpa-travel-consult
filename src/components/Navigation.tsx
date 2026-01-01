import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Study Abroad', path: '/study-abroad' },
    { name: 'Visit Ghana', path: '/visit-ghana' },
    { name: 'Invest In Ghana', path: '/invest-ghana' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/95 backdrop-blur-sm py-6'}`}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between lg:px-4 xl:container">
          <Link to="\">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-m leading-none text-slate-900">ELPA TRAVEL</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-blue-600">
                  Consult
                </span>
              </div>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) => (isActive ? 'text-blue-600' : ' text-slate-600')}
                to={link.path}
              >
                <button
                  key={link.name}
                  className={`text-xs font-medium transition-colors cursor-pointer hover:text-blue-600 xl:text-sm`}
                >
                  {link.name}
                </button>
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://calendar.app.google/igo7gWv9UcxajYLF8"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Book Consultation
            </a>
          </div>
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="md:w-8 md:h-8" /> : <Menu className="md:w-8 md:h-8" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed inset-0 z-40 bg-white pt-24 lg:hidden"
          >
            <ul className="flex flex-col gap-6 pt-4 md:pt-6">
              {navLinks.map(link => (
                <li
                  key={link.name}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-gray-300"
                >
                  {' '}
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block w-full px-6 pb-5 text-left text-lg md:text-xl md:pb-6 transition-colors ${
                        isActive ? 'text-blue-600' : 'text-slate-900'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <div className="px-6 md:px-16 md:text-xl md:pb-6">
                <a
                  href="https://calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mx-auto bg-blue-600 text-white py-4 rounded-xl font-bold text-center"
                >
                  Book Consultation
                </a>{' '}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
