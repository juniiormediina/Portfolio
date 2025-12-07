import { createContext, ReactNode, useContext, useState } from 'react';

type Language = 'es'|'en';

interface LanguageContextType {
  language: Language; // The current language ('es' for Spanish, 'en' for English)
  toggleLanguage: () => void; // Function to toggle the language between 'es' and 'en'
  t: (key: string) => string; // Function to retrieve the translation for a given key
}

// Create a context for managing language settings
const LanguageContext = createContext<LanguageContextType|undefined>(undefined);

// Object containing translations for supported languages
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Ingeniero de Software Frontend',
    'hero.description': 'Transformo ideas en experiencias digitales excepcionales. Especializado en crear interfaces modernas, accesibles y centradas en el usuario.',
    'hero.cta': 'Ver mi trabajo',
    'hero.contact': 'Contáctame',

    // About
    'about.title': 'Sobre mí',
    'about.intro': 'Soy un ingeniero de software frontend apasionado por crear experiencias web excepcionales que combinan diseño elegante con código limpio y rendimiento óptimo.',
    'about.intro_1': 'Soy un ingeniero de software frontend con más de 5 años de experiencia creando\n' + '              aplicaciones web modernas y escalables. Mi enfoque está en desarrollar interfaces\n' + '              intuitivas que combinen funcionalidad con diseño excepcional.',
    'about.intro_2': 'Me especializo en React, TypeScript y arquitecturas frontend robustas.\n' + '              Creo firmemente en la importancia de escribir código mantenible, accesible\n' + '              y optimizado para ofrecer las mejores experiencias de usuario.',
    'about.intro_3': 'Cuando no estoy programando, me encontrarás explorando nuevas herramientas de diseño,\n' + '              contribuyendo a proyectos open source o compartiendo conocimientos con la comunidad.',
    'about.passion': '¿Qué me apasiona?',
    'about.passion_1': 'Apasionado',
    'about.passion.desc': 'Me encanta transformar ideas complejas en interfaces intuitivas y accesibles. Disfruto manteniéndome actualizado con las últimas tecnologías frontend y mejores prácticas de la industria.',
    'about.passion.desc_1': 'Por crear código limpio y escalable para mantener experiencias memorables',
    'about.approach': 'Mi enfoque',
    'about.approach_1': 'Innovador',
    'about.approach.desc': 'Creo en el desarrollo centrado en el usuario, código mantenible y la colaboración efectiva. Cada proyecto es una oportunidad para aprender algo nuevo y superar límites.',
    'about.approach.desc_1': 'Siempre explorando nuevas tecnologías y tendencias del mundo del desarrollo frontend.',
    'about.journey': 'Mi trayectoria',
    'about.journey_1': 'Atención al Detalle',
    'about.journey.desc': 'Con más de 5 años de experiencia en desarrollo frontend, he trabajado en diversos proyectos desde startups hasta empresas consolidadas, siempre enfocado en entregar valor real a los usuarios.',
    'about.journey.desc_1': 'Obsesionado con los pequeños detalles que marcan la diferencia',

    // Projects
    'projects.title': 'Proyectos destacados',
    'projects.subtitle': 'Una selección de mis trabajos más recientes y significativos',
    'projects.view': 'Ver demo',
    'projects.code': 'Ver código',
    'projects.loadMore': 'Mostrar más proyectos',
    'projects.showLess': 'Mostrar menos',

    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear experiencias web excepcionales',
    'skills.core': 'Tecnologías Core',
    'skills.styling': 'Styling & Animación',
    'skills.tools': 'Herramientas',
    'skills.quality': 'Testing & Calidad',
    'skills.technologies': 'tecnologías',
    'skills.beyond': 'Más allá del código',
    'skills.beyond.subtitle': 'Habilidades blandas que complementan mi perfil técnico',
    'skills.teamwork': 'Trabajo en equipo',
    'skills.teamwork.desc': 'Colaboración efectiva',
    'skills.leadership': 'Liderazgo',
    'skills.leadership.desc': 'Guiando equipos al éxito',
    'skills.communication': 'Comunicación',
    'skills.communication.desc': 'Clara y asertiva',
    'skills.learning': 'Aprendizaje',
    'skills.learning.desc': 'Siempre evolucionando',
    'skills.stats.years': 'Años de experiencia',
    'skills.stats.tech': 'Tecnologías dominadas',
    'skills.stats.projects': 'Proyectos completados',

    // Contact
    'contact.title': '¡Conectemos!',
    'contact.subtitle': '¿Tienes un proyecto en mente o simplemente quieres conversar? Estoy siempre abierto a' + ' nuevas oportunidades y colaboraciones',
    'contact.email': 'La forma más directa de contactarme',
    'contact.send_email': 'Enviar email',
    'contact.copy_it': '¡Copiado!',
    'contact.copy_email': 'Copiar email',
    'contact.find.me': 'O encuéntrame en',
    'contact.linkedin': 'Conecta conmigo profesionalmente',
    'contact.github': 'Revisa mi código',
    'contact.instagram': 'Sígueme para ver mi trabajo',
    'contact.visit': 'Visitar perfil →',
    'contact.availability': 'Actualmente',
    'contact.availability.1': 'disponible',
    'contact.availability.2': 'para proyectos freelance y oportunidades full-time',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.text': 'Hecho con',
    'footer.by': 'por',
    'footer.text.comp': 'y mucho café',
  }, en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Frontend Software Engineer",
    "hero.description": "I turn ideas into exceptional digital experiences. Specialized in building modern, accessible, and user-centered interfaces.",
    "hero.cta": "View my work",
    "hero.contact": "Contact me",

    // About
    "about.title": "About Me",
    "about.intro": "I am a frontend software engineer passionate about crafting outstanding web experiences that blend elegant design with clean code and optimal performance.",
    "about.intro_1": "I am a frontend software engineer with over 5 years of experience building modern and scalable web applications. My focus is on developing intuitive interfaces that combine functionality with exceptional design.",
    "about.intro_2": "I specialize in React, TypeScript, and robust frontend architectures. I strongly believe in writing maintainable, accessible, and optimized code to deliver the best user experiences.",
    "about.intro_3": "When I'm not coding, you’ll find me exploring new design tools, contributing to open-source projects, or sharing knowledge with the community.",
    "about.passion": "What drives me?",
    "about.passion_1": "Passionate",
    "about.passion.desc": "I love transforming complex ideas into intuitive and accessible interfaces. I enjoy staying up to date with the latest frontend technologies and industry best practices.",
    "about.passion.desc_1": "About creating clean and scalable code to deliver memorable experiences",
    "about.approach": "My Approach",
    "about.approach_1": "Innovative",
    "about.approach.desc": "I believe in user-centered development, maintainable code, and effective collaboration. Every project is an opportunity to learn something new and push boundaries.",
    "about.approach.desc_1": "Always exploring new technologies and trends in the frontend development world.",
    "about.journey": "My Journey",
    "about.journey_1": "Attention to Detail",
    "about.journey.desc": "With over 5 years of experience in frontend development, I’ve worked on a wide range of projects—from startups to established companies—always focused on delivering real value to users.",
    "about.journey.desc_1": "Obsessed with the small details that make a big difference",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of my most recent and meaningful work",
    "projects.view": "View demo",
    "projects.code": "View code",
    "projects.loadMore": "Show more projects",
    "projects.showLess": "Show less",

    // Skills
    "skills.title": "Technical Skills",
    "skills.subtitle": "Technologies and tools I master to build exceptional web experiences",
    "skills.core": "Core Technologies",
    "skills.styling": "Styling & Animation",
    "skills.tools": "Tools",
    "skills.quality": "Testing & Quality",
    "skills.technologies": "technologies",
    "skills.beyond": "Beyond Code",
    "skills.beyond.subtitle": "Soft skills that complement my technical profile",
    "skills.teamwork": "Teamwork",
    "skills.teamwork.desc": "Effective collaboration",
    "skills.leadership": "Leadership",
    "skills.leadership.desc": "Leading teams to success",
    "skills.communication": "Communication",
    "skills.communication.desc": "Clear and assertive",
    "skills.learning": "Learning",
    "skills.learning.desc": "Always evolving",
    "skills.stats.years": "Years of experience",
    "skills.stats.tech": "Mastered technologies",
    "skills.stats.projects": "Completed projects",

    // Contact
    "contact.title": "Let’s Connect!",
    "contact.subtitle": "Do you have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.",
    "contact.email": "The most direct way to reach me",
    "contact.send_email": "Send email",
    "contact.copy_it": "Copied!",
    "contact.copy_email": "Copy email",
    "contact.find.me": "Or find me on",
    "contact.linkedin": "Connect with me professionally",
    "contact.github": "Check my code",
    "contact.instagram": "Follow me to see more of my work",
    "contact.visit": "Visit profile →",

    "contact.availability": "Currently",
    "contact.availability.1": "available",
    "contact.availability.2": "for freelance projects and full-time opportunities",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.text": "Built with",
    "footer.by": "by",
    "footer.text.comp": "and plenty of coffee"
  },
};

/**
 * Provides the language context to its children.
 * Manages the current language state and provides functions to toggle the language
 * and retrieve translations.
 *
 * @param {Object} props - The props for the LanguageProvider component.
 * @param {ReactNode} props.children - The child components to be wrapped by the provider.
 *
 * @returns {JSX.Element} The LanguageProvider component.
 */
export function LanguageProvider({children}: {children: ReactNode}) {
  const [language, setLanguage] = useState<Language>('es');

  /**
   * Toggles the current language between 'es' (Spanish) and 'en' (English).
   */
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  /**
   * Retrieves the translation for a given key based on the current language.
   *
   * @param {string} key - The key for the translation.
   * @returns {string} The translated string or the key if no translation is found.
   */
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (<LanguageContext.Provider value={{language, toggleLanguage, t}}>
    {children}
  </LanguageContext.Provider>);
}

/**
 * Custom hook to access the language context.
 * Throws an error if used outside a LanguageProvider.
 *
 * @returns {LanguageContextType} The language context value.
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
