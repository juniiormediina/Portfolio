import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Footer a component of the application.
 * This component displays the footer section with copyright information,
 * a message, and quick navigation links.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
export function Footer() {
  // Retrieve the translation function from the LanguageContext
  const {t} = useLanguage();

  return (<footer className="px-4 md:px-8 py-12 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="neomorphic-flat p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright section */}
          <div className="flex items-center gap-2 text-[#718096]">
            <span>© 2025 Todos los derechos reservados</span>
          </div>

          {/* Message section */}
          <div className="flex items-center gap-2 text-[#718096]">
            <span>{t('footer.text')}</span>
            <Heart className="w-4 h-4 text-[#667EEA] fill-[#667EEA] animate-pulse" />
            <span>{t('footer.text.comp')}</span>
          </div>

          {/* Quick links section */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-[#718096] hover:text-[#667EEA] transition-colors text-sm"
            >
              {t('nav.home')}
            </a>
            <a
              href="#projects"
              className="text-[#718096] hover:text-[#667EEA] transition-colors text-sm"
            >
              {t('nav.projects')}
            </a>
            <a
              href="#contact"
              className="text-[#718096] hover:text-[#667EEA] transition-colors text-sm"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>);
}
