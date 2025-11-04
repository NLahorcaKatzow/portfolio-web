import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import logoImg from '../assets/logo.png';

const Header = () => {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al hacer click en un enlace
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#top', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-theme-background/80 backdrop-blur-md border-b border-theme-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Nombre */}
          <div className="flex-shrink-0">
            <a 
              href="#top" 
              className="block px-3 py-2 text-theme-text hover:text-theme-accent hover:bg-theme-surface/50 rounded-md transition-colors duration-200 font-bold"
            >
              LNK
            </a>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-theme-text hover:text-theme-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-theme-background/95 backdrop-blur-md border-t border-theme-border">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-theme-text hover:text-theme-accent hover:bg-theme-surface/50 rounded-md transition-colors duration-200 font-medium"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 