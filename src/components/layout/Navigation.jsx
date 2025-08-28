import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="flex gap-6 md:gap-10">
      <button id="menu-btn" className="md:hidden text-gray-800 dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars text-2xl"></i>
      </button>
      {menuOpen && (
        <div className="absolute bg-white shadow-md rounded-md mt-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-red-500'
                  : 'text-gray-700 dark:text-gray-300 hover:text-red-500'
              }`}
              onClick={() => {
                setMenuOpen(false); // Close menu on item click
                setActiveSection(item.id); // Set active section
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`nav-link font-medium transition-colors ${
            activeSection === item.id
              ? 'text-red-500'
              : 'text-gray-700 dark:text-gray-300 hover:text-red-500'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
