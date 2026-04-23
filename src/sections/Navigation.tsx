import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#spaces', label: t.nav.spaces },
    { href: '#programs', label: t.nav.programs },
    { href: '#news', label: t.nav.news },
    { href: '#timeline', label: t.nav.timeline },
    { href: '#contact', label: t.nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Determine which logo to use based on language and scroll state
  const getLogoSrc = () => {
    if (language === 'en') {
      return isScrolled 
        ? '/images/logo-techub-en-dark.png' 
        : '/images/logo-techub-en-white.png';
    }
    return isScrolled 
      ? '/images/logo-techub-dark.png' 
      : '/images/logo-techub-white.png';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Bigger and switches based on scroll */}
          <a href="#" className="flex items-center">
            <img
              src={getLogoSrc()}
              alt="TecHub"
              className="h-20 lg:h-24 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-techub-blue ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('sl')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'sl'
                    ? 'bg-techub-blue text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                SL
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en'
                    ? 'bg-techub-blue text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2 bg-techub-blue text-white text-sm font-semibold rounded-lg hover:bg-techub-blue-dark transition-colors"
            >
              {t.nav.interest}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center space-x-2 px-4 pt-4 border-t">
              <button
                onClick={() => setLanguage('sl')}
                className={`px-4 py-2 text-sm font-medium rounded ${
                  language === 'sl'
                    ? 'bg-techub-blue text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Slovenščina
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded ${
                  language === 'en'
                    ? 'bg-techub-blue text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
