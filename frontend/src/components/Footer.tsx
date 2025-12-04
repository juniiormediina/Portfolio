import { Heart } from 'lucide-react';

/**
 * Footer component of the application.
 * This component displays a footer section with copyright information,
 * a message, and quick navigation links.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export function Footer() {

  return (<footer className="px-4 md:px-8 py-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="neomorphic-flat p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-[#718096]">
              <span>© 2025 Todos los derechos reservados</span>
            </div>

            {/* Message */}
            <div className="flex items-center gap-2 text-[#718096]">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-[#667EEA] fill-[#667EEA] animate-pulse" />
              <span>y mucho café</span>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="text-[#718096] hover:text-[#667EEA] transition-colors text-sm"
              >
                Inicio
              </a>
              <a
                href="#projects"
                className="text-[#718096] hover:text-[#667EEA] transition-colors text-sm"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className="text-[#718096] hover:text-[#667EEA] transition-colors text-sm"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);
}
