import { Link } from 'react-router-dom';
import { Globe, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SiInstagram, SiFacebook, SiYoutube, SiTiktok } from 'react-icons/si';

export const Footer = () => {
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

  const socials = [
    { name: 'facebook', icon: SiFacebook, link: 'https://www.facebook.com/elpatravelconsult' },
    { name: 'instagram', icon: SiInstagram, link: 'https://www.instagram.com/elpatravel_consult' },
    { name: 'tiktok', icon: SiTiktok, link: 'https://www.tiktok.com/@elpa_travel_consult' },
    { name: 'Youtube', icon: SiYoutube },
  ];

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-screen-xl mx-auto px-6 xl:container">
        <div className="grid md:grid-cols-4 gap-12 mb-20 lg:gap-24">
          <div className="col-span-1 md:col-span-1">
            <Link to="\">
              <div className="flex items-center gap-2 mb-6 cursor-pointer">
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
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Your trusted Ghanaian travel, visa, and study abroad partner. Simplifying global
              exploration one client at a time.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) =>
                social.link ? (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ) : null
              )}
            </div>

            {/* <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  className="w-10 h-10  bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                  href={social.link ?? ''}
                  target="_blank"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <button className="text-slate-500 hover:text-blue-600 text-sm transition-colors cursor-pointer">
                      {link.name}
                    </button>
                  </Link>
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
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="tel:+447453594805" className="hover:text-blue-600 transition-colors">
                  +44 7453 594805
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:info@elpatravelconsult.com"
                  className="break-words flex-1 min-w-0 hover:text-blue-600 transition-colors"
                >
                  info@elpatravelconsult.com
                </a>
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
