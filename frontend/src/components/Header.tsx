import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

/**
 * Header component of the application.
 * This component provides a responsive navigation bar with links to different sections of the page.
 * It supports both desktop and mobile views, with a collapsible menu for smaller screens.
 *
 * @param {HeaderProps} props - The props for the Header component.
 * @param {string} props.activeSection - The ID of the currently active section.
 * @param {function} props.onNavigate - Callback function to handle navigation to a specific section.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
export function Header({activeSection, onNavigate}: HeaderProps) {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items for the header
  const navItems = [{id: 'home', label: 'Inicio'}, {id: 'about', label: 'Sobre mí'}, {
    id: 'projects', label: 'Proyectos'
  }, {id: 'skills', label: 'Habilidades'}, {id: 'contact', label: 'Contacto'},];

  /**
   * Handles navigation to a specific section and closes the mobile menu.
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
        <ul className="hidden md:flex items-center gap-8">
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
      {isMenuOpen && (<ul className="md:hidden mt-6 space-y-2">
        {navItems.map((item) => (<li key={item.id}>
          <button
            onClick={() => handleNavigate(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === item.id ? 'text-[#667EEA] neomorphic-pressed' : 'text-[#718096] hover:text-[#2D3748]'}`}
          >
            {item.label}
          </button>
        </li>))}
      </ul>)}
    </nav>
  </header>);
}
