import React, { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.mobile-menu');
      const menuButton = document.querySelector('#menu-btn');
      
      if (mobileMenuOpen && menu && !menu.contains(event.target) && 
          menuButton && !menuButton.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-dark/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <span className="text-accent mr-1">M</span>aiyo
        </a>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="nav-link font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex gap-4">
          <a href="#" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/denis-maiyo-0a80aa363" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/MaiyoDenis" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <button 
          id="menu-btn" 
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} md:hidden`}>
        <div className="flex flex-col gap-4 py-4">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="nav-link font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 pt-4">
            <a href="#" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/denis-maiyo-0a80aa363" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/MaiyoDenis" className="social-icon text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
