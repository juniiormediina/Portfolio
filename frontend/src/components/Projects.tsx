import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

interface Project {
  /**
   * Represents a project to be displayed in the Projects component.
   *
   * @property {number} id - Unique identifier for the project.
   * @property {string} title - Title of the project.
   * @property {string} description - Brief description of the project.
   * @property {string[]} technologies - List of technologies used in the project.
   * @property {string} imageUrl - URL of the project's image.
   * @property {string} [liveUrl] - Optional URL for the live demo of the project.
   * @property {string} [githubUrl] - Optional URL for the project's GitHub repository.
   */
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

/**
 * Projects component of the application.
 * This component displays a grid of featured projects, including their title, description,
 * technologies, and links to live demos or GitHub repositories.
 *
 * @returns {JSX.Element} The rendered Projects component.
 */
export function Projects() {
  // Initial list of projects to be displayed
  const initialProjects: Project[] = [{
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
    technologies: ['Next.js', 'React', 'Firebase', 'Framer Motion'],
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
  },];

  // State to manage the list of projects
  const [projects] = useState<Project[]>(initialProjects);

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
          <h2 className="gradient-text mb-4">Proyectos Destacados</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667EEA] to-[#764BA2] mx-auto rounded-full"></div>
          <p className="text-[#718096] mt-6 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo frontend
          </p>
        </motion.div>

        {/* Grid of projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (<motion.div
              key={project.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="neomorphic overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project image */}
              <div className="relative h-56 overflow-hidden bg-[#F7FAFC]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748] to-transparent opacity-60"></div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-[#2D3748]">{project.title}</h3>
                <p className="text-[#718096]">{project.description}</p>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (<span
                      key={tech}
                      className="neomorphic-flat px-3 py-1 text-sm text-[#667EEA]"
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
                      <span className="text-sm">Demo</span>
                    </a>)}
                  {project.githubUrl && (<a
                      href={project.githubUrl}
                      className="neomorphic-flat px-4 py-2 flex items-center gap-2 text-[#2D3748] hover:text-[#667EEA] transition-colors active:neomorphic-pressed"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Código</span>
                    </a>)}
                </div>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
