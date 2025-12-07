import { Coffee, Heart, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * About a component of the application.
 * This component displays an "About" section with an introduction and highlights
 * about the developer's passion, approach, and journey.
 *
 * @returns {JSX.Element} The rendered About component.
 */
export function About() {
  // Retrieve the translation function from the LanguageContext
  const {t} = useLanguage();

  // Array of highlights to be displayed in the About section
  const highlights = [{
    icon: Coffee, // Icon representing passion
    title: t('about.passion_1'), // Title for the passion highlight
    description: t('about.passion.desc_1'), // Description for the passion highlight
  }, {
    icon: Lightbulb, // Icon representing approach
    title: t('about.approach_1'), // Title for the approach highlight
    description: t('about.approach.desc_1'), // Description for the approach highlight
  }, {
    icon: Heart, // Icon representing a journey
    title: t('about.journey_1'), // Title for the journey highlight
    description: t('about.journey.desc_1'), // Description for the journey highlight
  },];

  return (<section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
    <div className="max-w-6xl mx-auto w-full">
      {/* Section header */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
        className="text-center mb-16"
      >
        <h2 className="gradient-text mb-4">{t('about.title')}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#667EEA] to-[#764BA2] mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Description section */}
        <motion.div
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.2}}
          className="space-y-6"
        >
          <p className="text-[#718096] text-lg leading-relaxed">
            {t('about.intro_1')}
          </p>
          <p className="text-[#718096] text-lg leading-relaxed">
            {t('about.intro_2')}
          </p>
          <p className="text-[#718096] text-lg leading-relaxed">
            {t('about.intro_3')}
          </p>
        </motion.div>

        {/* Highlights section */}
        <motion.div
          initial={{opacity: 0, x: 20}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.4}}
          className="space-y-6"
        >
          {highlights.map((item, index) => (<motion.div
            key={item.title}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.5 + index * 0.1}}
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
          </motion.div>))}
        </motion.div>
      </div>
    </div>
  </section>);
}
