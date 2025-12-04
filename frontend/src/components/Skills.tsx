import { motion } from 'motion/react';
import { CheckCircle, Code2, Palette, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export function Skills() {
  const skills: Skill[] = [
    // Core Frontend
    {name: 'React', category: 'Core', icon: '⚛️'},
    {name: 'TypeScript', category: 'Core', icon: '📘'},
    {name: 'JavaScript', category: 'Core', icon: '💛'},
    {name: 'Next.js', category: 'Core', icon: '▲'},

    // Styling
    {name: 'CSS/SCSS', category: 'Styling', icon: '🎨'},
    {name: 'Tailwind CSS', category: 'Styling', icon: '💨'},
    {name: 'Styled Components', category: 'Styling', icon: '💅'},
    {name: 'Motion', category: 'Styling', icon: '✨'},

    // State Management & Tools
    {name: 'Redux / Zustand', category: 'Tools', icon: '🔄'},
    {name: 'React Query', category: 'Tools', icon: '🔍'},
    {name: 'Git / GitHub', category: 'Tools', icon: '🔱'},
    {name: 'Webpack / Vite', category: 'Tools', icon: '⚡'},

    // Testing & Quality
    {name: 'Jest', category: 'Quality', icon: '🃏'},
    {name: 'Cypress', category: 'Quality', icon: '🌲'},
    {name: 'Storybook', category: 'Quality', icon: '📖'},
    {name: 'Performance', category: 'Quality', icon: '🚀'},
  ];

  const categories = [
    {
      id: 'Core',
      label: 'Tecnologías Core',
      icon: Code2,
      color: 'from-[#667EEA] to-[#764BA2]',
      bgColor: 'bg-gradient-to-br from-[#667EEA]/10 to-[#764BA2]/10'
    },
    {
      id: 'Styling',
      label: 'Styling & Animación',
      icon: Palette,
      color: 'from-[#F093FB] to-[#F5576C]',
      bgColor: 'bg-gradient-to-br from-[#F093FB]/10 to-[#F5576C]/10'
    },
    {
      id: 'Tools',
      label: 'Herramientas',
      icon: Wrench,
      color: 'from-[#4FACFE] to-[#00F2FE]',
      bgColor: 'bg-gradient-to-br from-[#4FACFE]/10 to-[#00F2FE]/10'
    },
    {
      id: 'Quality',
      label: 'Testing & Calidad',
      icon: CheckCircle,
      color: 'from-[#43E97B] to-[#38F9D7]',
      bgColor: 'bg-gradient-to-br from-[#43E97B]/10 to-[#38F9D7]/10'
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Habilidades Técnicas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667EEA] to-[#764BA2] mx-auto rounded-full"></div>
          <p className="text-[#718096] mt-6 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias web excepcionales
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.id);
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: categoryIndex * 0.1}}
                className="neomorphic p-8 rounded-3xl"
              >
                {/* Título de categoría mejorado */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`neomorphic-flat p-4 rounded-2xl ${category.bgColor}`}>
                    <IconComponent
                      className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      style={{stroke: 'url(#gradient)'}}/>
                  </div>
                  <div>
                    <h3 className="text-[#2D3748]">{category.label}</h3>
                    <p className="text-[#718096] text-sm mt-1">
                      {categorySkills.length} tecnologías
                    </p>
                  </div>
                </div>

                {/* Grid de skills mejorado */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{opacity: 0, scale: 0.8, y: 20}}
                      whileInView={{opacity: 1, scale: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: {duration: 0.2}
                      }}
                      className="group relative"
                    >
                      <div
                        className="neomorphic p-6 rounded-2xl h-full flex flex-col items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        {/* Efecto de brillo en hover */}
                        <div
                          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${category.bgColor}`}></div>

                        {/* Icono emoji */}
                        <motion.div
                          className="text-4xl relative z-10"
                          animate={{
                            rotate: [0, -10, 10, -10, 0],
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: 0,
                            delay: skillIndex * 0.1
                          }}
                        >
                          {skill.icon}
                        </motion.div>

                        {/* Nombre de la tecnología */}
                        <p
                          className="text-[#2D3748] text-center relative z-10 group-hover:text-[#667EEA] transition-colors duration-300">
                          {skill.name}
                        </p>

                        {/* Indicador decorativo */}
                        <div
                          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-[#667EEA]/0 to-transparent group-hover:via-[#667EEA] transition-all duration-300 rounded-full"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sección adicional de soft skills mejorada */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.4}}
          className="mt-16 neomorphic p-8 rounded-3xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-[#2D3748] mb-2">Más allá del código</h3>
            <p className="text-[#718096]">Habilidades blandas que complementan mi perfil técnico</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {icon: '👥', label: 'Trabajo en equipo', description: 'Colaboración efectiva'},
              {icon: '🎯', label: 'Orientado a resultados', description: 'Enfoque en objetivos'},
              {icon: '💬', label: 'Comunicación', description: 'Clara y asertiva'},
              {icon: '🚀', label: 'Aprendizaje', description: 'Siempre evolucionando'},
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.4, delay: 0.5 + index * 0.1}}
                whileHover={{y: -5}}
                className="neomorphic-flat p-6 rounded-2xl space-y-3 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-2">{item.icon}</div>
                <p className="text-[#2D3748]">{item.label}</p>
                <p className="text-[#718096] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estadística decorativa */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8, delay: 0.6}}
          className="mt-12 grid grid-cols-3 gap-6 text-center"
        >
          {[
            {number: '5+', label: 'Años de experiencia'},
            {number: '16', label: 'Tecnologías dominadas'},
            {number: '50+', label: 'Proyectos completados'},
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{scale: 0}}
              whileInView={{scale: 1}}
              viewport={{once: true}}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              className="neomorphic-flat p-6 rounded-2xl"
            >
              <div className="gradient-text text-3xl md:text-4xl mb-2">{stat.number}</div>
              <p className="text-[#718096] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
