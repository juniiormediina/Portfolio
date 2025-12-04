import { Coffee, Heart, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const highlights = [
    {
      icon: Coffee,
      title: 'Apasionado',
      description: 'Por crear código limpio y experiencias memorables',
    },
    {
      icon: Lightbulb,
      title: 'Innovador',
      description: 'Siempre explorando nuevas tecnologías y tendencias',
    },
    {
      icon: Heart,
      title: 'Detallista',
      description: 'Obsesionado con los pequeños detalles que marcan la diferencia',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Sobre mí</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667EEA] to-[#764BA2] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#718096] text-lg leading-relaxed">
              Soy un ingeniero de software frontend con más de 5 años de experiencia creando 
              aplicaciones web modernas y escalables. Mi enfoque está en desarrollar interfaces 
              intuitivas que combinen funcionalidad con diseño excepcional.
            </p>

            <p className="text-[#718096] text-lg leading-relaxed">
              Me especializo en React, TypeScript y arquitecturas frontend robustas. 
              Creo firmemente en la importancia de escribir código mantenible, accesible 
              y optimizado para ofrecer las mejores experiencias de usuario.
            </p>

            <p className="text-[#718096] text-lg leading-relaxed">
              Cuando no estoy programando, me encontrarás explorando nuevas herramientas de diseño, 
              contribuyendo a proyectos open source o compartiendo conocimientos con la comunidad.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="neomorphic p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="neomorphic-flat p-3 rounded-xl">
                    <item.icon className="w-6 h-6 text-[#667EEA]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#2D3748] mb-2">{item.title}</h4>
                    <p className="text-[#718096]">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
