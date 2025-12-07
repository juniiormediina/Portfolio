import { useState } from 'react';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number; // Unique identifier for the project
  title: string; // Title of the project
  description: string; // Description of the project
  technologies: string[]; // List of technologies used in the project
  imageUrl: string; // URL of the project's image
  liveUrl?: string; // Optional URL to the live version of the project
  githubUrl?: string; // Optional URL to the project's GitHub repository
}

/**
 * Projects a component of the application.
 * This component displays a list of projects with their details, including title, description,
 * technologies, and links to live demos or GitHub repositories. It also includes a "Load More" button
 * to toggle between showing a subset or all projects.
 *
 * @returns {JSX.Element} The rendered Projects component.
 */
export function Projects() {
  // Retrieve the translation function from the LanguageContext
  const {t} = useLanguage();

  // List of all projects to be displayed
  const allProjects: Project[] = [{
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Panel de administración completo con analytics en tiempo real, gestión de inventario y sistema de pedidos.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  }, {
    id: 2,
    title: 'Social Media App',
    description: 'Aplicación social con feeds en tiempo real, sistema de mensajería y notificaciones push.',
    technologies: ['Next.js', 'React', 'Firebase', 'Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  }, {
    id: 3,
    title: 'Task Management Platform',
    description: 'Plataforma colaborativa de gestión de tareas con tableros Kanban, calendario y reportes.',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  }, {
    id: 4,
    title: 'Design System',
    description: 'Sistema de diseño completo con componentes reutilizables, documentación interactiva y tokens.',
    technologies: ['React', 'Storybook', 'Styled Components'],
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  }, {
    id: 5,
    title: 'Portfolio Generator',
    description: 'Herramienta para crear portfolios personalizados con plantillas prediseñadas y editor visual.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'MDX'],
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  }, {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico interactivo con mapas, pronósticos detallados y alertas personalizadas.',
    technologies: ['React', 'TypeScript', 'Leaflet', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  }, {
    id: 7,
    title: 'Finance Tracker',
    description: 'Aplicación de seguimiento financiero personal con gráficos, presupuestos y reportes automáticos.',
    technologies: ['React', 'Redux Toolkit', 'Recharts', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  }, {
    id: 8,
    title: 'Fitness App',
    description: 'App de fitness con rutinas personalizadas, seguimiento de progreso y comunidad social.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },];

  // State to toggle between showing all projects or a subset
  const [showAll, setShowAll] = useState(false);

  // Determine the projects to display based on the state
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (<section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
    <div className="max-w-7xl mx-auto w-full">
      {/* Section header */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
        className="text-center mb-16"
      >
        <h2 className="gradient-text mb-4">{t('projects.title')}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#667EEA] to-[#764BA2] mx-auto rounded-full"></div>
        <p className="text-[#718096] mt-6 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (<motion.div
            key={project.id}
            layout
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.9}}
            transition={{duration: 0.5, delay: index * 0.1}}
            whileHover={{y: -8}}
            className="neomorphic overflow-hidden group"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-4">
              <h3 className="text-[#2D3748] group-hover:text-[#667EEA] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#718096]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (<span
                  key={tech}
                  className="px-3 py-1 neomorphic-flat text-[#667EEA] text-sm"
                >
                                {tech}
                              </span>))}
              </div>
              {/* Links to live demo and GitHub */}
              <div className="flex gap-4 pt-2">
                {project.liveUrl && (<a
                  href={project.liveUrl}
                  className="neomorphic-flat px-4 py-2 flex items-center gap-2 text-[#2D3748] hover:text-[#667EEA] transition-colors active:neomorphic-pressed"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">{t('projects.view')}</span>
                </a>)}
                {project.githubUrl && (<a
                  href={project.githubUrl}
                  className="neomorphic-flat px-4 py-2 flex items-center gap-2 text-[#2D3748] hover:text-[#667EEA] transition-colors active:neomorphic-pressed"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">{t('projects.code')}</span>
                </a>)}
              </div>
            </div>
          </motion.div>))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {allProjects.length > 4 && (<motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.4}}
        className="mt-12 text-center"
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="group neomorphic px-8 py-4 hover:shadow-xl transition-all duration-300 active:neomorphic-pressed inline-flex items-center gap-2"
        >
                      <span className="gradient-text">
                        {showAll ? t('projects.showLess') : t('projects.loadMore')}
                      </span>
          <ChevronDown
            className={`w-5 h-5 text-[#667EEA] transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
          />
        </button>
      </motion.div>)}
    </div>
  </section>);
}
