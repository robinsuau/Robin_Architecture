import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Maisons & Villas', path: '/maisons' },
  { label: 'Lieux Publics', path: '/public' },
  { label: 'Rénovation', path: '/renovation' },
  { label: 'Contact', path: '/contact' },
];

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="group">
            <h1 className={`text-2xl font-serif tracking-widest uppercase transition-colors duration-300 ${isScrolled || location.pathname !== '/' ? 'text-dark' : 'text-white'}`}>
              Robin<span className="text-secondary">.</span>
            </h1>
            <p className={`text-[10px] tracking-[0.3em] font-light ${isScrolled || location.pathname !== '/' ? 'text-gray-500' : 'text-gray-300'}`}>
              ARCHITECTE
            </p>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase transition-all duration-300 hover:text-secondary relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full ${
                    isActive ? 'text-secondary after:w-full' : (isScrolled || location.pathname !== '/' ? 'text-dark' : 'text-white/90')
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none ${
              isScrolled || location.pathname !== '/' ? 'text-dark' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-2xl font-serif text-dark hover:text-secondary transition-colors ${
                  isActive ? 'text-secondary italic' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white/80 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif text-white mb-6">Robin Architecte</h2>
            <p className="font-light leading-relaxed max-w-md text-gray-400">
              Concevoir des espaces de vie durables et harmonieux. Une approche architecturale ancrée à Clermont-Ferrand depuis 20 ans, alliant esthétisme contemporain et respect de l'existant.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6">Contact</h3>
            <div className="space-y-4 font-light text-sm">
              <p>12 Avenue de la République</p>
              <p>63000 Clermont-Ferrand</p>
              <p className="mt-4 hover:text-secondary transition-colors cursor-pointer">+33 4 73 00 00 00</p>
              <p className="hover:text-secondary transition-colors cursor-pointer">contact@robin-architecte.fr</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-gray-500">
          <p>&copy; {new Date().getFullYear()} Robin Architecte. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;