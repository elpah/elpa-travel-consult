import { Globe, MapPin, MessageCircle } from 'lucide-react';
import { SiInstagram, SiFacebook, SiYoutube, SiTiktok } from 'react-icons/si';

type FooterProps = {
  onNavigate: (
    page:
      | 'home'
      | 'services'
      | 'study-abroad'
      | 'visit-ghana'
      | 'invest-ghana'
      | 'about'
      | 'resources'
      | 'contact'
  ) => void;
};
export const Footer = ({ onNavigate }: FooterProps) => {
  const navLinks = [
    {
      name: 'Home',
      page: 'home',
    },
    {
      name: 'About',
      page: 'about',
    },
    {
      name: 'Services',
      page: 'services',
    },
    {
      name: 'Study Abroad',
      page: 'study-abroad',
    },
    {
      name: 'Visit Ghana',
      page: 'visit-ghana',
    },
    {
      name: 'Invest In Ghana',
      page: 'invest-ghana',
    },
    {
      name: 'Resources',
      page: 'resources',
    },
    {
      name: 'Contact',
      page: 'contact',
    },
  ] as any[];
  const socials = [
    { name: 'facebook', icon: SiFacebook },
    { name: 'instagram', icon: SiInstagram },
    { name: 'tiktok', icon: SiTiktok },
    { name: 'Youtube', icon: SiYoutube },
  ];
  const handleNavClick = (
    page: 'home' | 'services' | 'study-abroad' | 'visit-ghana' | 'about' | 'resources' | 'contact'
  ) => {
    onNavigate(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-screen-xl mx-auto px-6 xl:container">
        <div className="grid md:grid-cols-4 gap-12 mb-20 lg:gap-24">
          <div className="col-span-1 md:col-span-1">
            <div
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-slate-900">ELPA TRAVEL</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-blue-600">
                  Consult
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Your trusted Ghanaian travel, visa, and study abroad partner. Simplifying global
              exploration one client at a time.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10  bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <social.icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-slate-500 hover:text-blue-600 text-sm transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Visa Assistance
              </li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Study in Canada
              </li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Study in UK/USA
              </li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Corporate Ticketing
              </li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Travel Insurance
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Accra, Ghana - East Legon Area</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>+233 (0) 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className='break-words flex-1 min-w-0'>info@elpatravelconsult.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} ELPA Travel Consult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
