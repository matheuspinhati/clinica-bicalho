import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#convenios', label: 'Convênios' },
    { href: '#unidades', label: 'Unidades' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-item">
            <Phone size={14} />
            <span>(34) 3227-9025</span>
          </div>
          <div className="top-bar-item">
            <Clock size={14} />
            <span>Seg a Sex: 08h às 18h</span>
          </div>
          <div className="top-bar-item">
            <MapPin size={14} />
            <span>Uberlândia - MG</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-content">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Clínica Bicalho" className="logo-img" />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Agendar consulta
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-link-mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-cta"
              >
                Agendar consulta
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;

