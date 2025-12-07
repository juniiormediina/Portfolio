import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  activeSection: string; // The currently active section of the page
  onNavigate: (section: string) => void; // Function to handle navigation to a specific section
}

/**
 * Header a component of the application.
 * This component renders a responsive navigation bar with links to different sections,
 * a language toggle button, and a mobile menu.
 *
 * @param {HeaderProps} props - The props for the Header component.
 * @param {string} props.activeSection - The currently active section of the page.
 * @param {function} props.onNavigate - Function to handle navigation to a specific section.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
export function Header({activeSection, onNavigate}: HeaderProps) {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Retrieve language-related functions and translations from the LanguageContext
  const {language, toggleLanguage, t} = useLanguage();

  // Navigation items to be displayed in the header
  const navItems = [{id: 'home', label: t('nav.home')}, // Home section
    {id: 'about', label: t('nav.about')}, // About section
    {id: 'projects', label: t('nav.projects')}, // Projects section
    {id: 'skills', label: t('nav.skills')}, // Skills section
    {id: 'contact', label: t('nav.contact')}, // Contact section
  ];

  /**
   * Handles navigation to a specific section.
   * Closes the mobile menu after navigation.
   *
   * @param {string} sectionId - The ID of the section to navigate to.
   */
  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (<header className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8">
    <nav className="max-w-7xl mx-auto neomorphic px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigate('home')}
          className="gradient-text text-xl md:text-2xl transition-transform hover:scale-105"
        >
          {'<Dev/>'}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (<li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all ${activeSection === item.id ? 'text-[#667EEA]' : 'text-[#718096] hover:text-[#2D3748]'}`}
              >
                {item.label}
                {activeSection === item.id && (<div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-full" />)}
              </button>
            </li>))}
          </ul>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="neomorphic-flat px-4 py-2 rounded-lg hover:shadow-xl transition-all flex items-center gap-2 text-[#718096] hover:text-[#667EEA]"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
            <span className="uppercase">{language}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 neomorphic-flat transition-all active:neomorphic-pressed"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (<X className="w-6 h-6 text-[#2D3748]" />) : (<Menu className="w-6 h-6 text-[#2D3748]" />)}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (<div className="md:hidden mt-6 space-y-4">
        <ul className="space-y-2">
          {navItems.map((item) => (<li key={item.id}>
            <button
              onClick={() => handleNavigate(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === item.id ? 'text-[#667EEA] neomorphic-pressed' : 'text-[#718096] hover:text-[#2D3748]'}`}
            >
              {item.label}
            </button>
          </li>))}
        </ul>

        {/* Mobile Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="w-full neomorphic-flat px-4 py-3 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-[#718096] hover:text-[#667EEA]"
          aria-label="Toggle language"
        >
          <Globe className="w-5 h-5" />
          <span className="uppercase">{language === 'es' ? 'Español' : 'English'}</span>
        </button>
      </div>)}
    </nav>
  </header>);
}
