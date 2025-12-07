import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigateToProjects: () => void; // Callback function to navigate to the projects section
}

/**
 * Hero a component of the application.
 * This component displays the hero section with an introduction, role, description,
 * and call-to-action buttons. It also includes decorative visual elements.
 *
 * @param {HeroProps} props - The props for the Hero component.
 * @param {function} props.onNavigateToProjects - Callback function to navigate to the projects section.
 *
 * @returns {JSX.Element} The rendered Hero component.
 */
export function Hero({onNavigateToProjects}: HeroProps) {
  // Retrieve the translation function from the LanguageContext
  const {t} = useLanguage();

  return (<section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 md:pt-0">
    <div className="max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Main content */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{rotate: [0, 10, -10, 0]}}
              transition={{duration: 2, repeat: Infinity, repeatDelay: 3}}
            >
              <Sparkles className="w-8 h-8 text-[#667EEA]" />
            </motion.div>
            <span className="text-[#718096]">{t('hero.greeting')}</span>
          </div>

          <div className="space-y-2">
            <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl">
              Junior Medina
            </h1>
            <h2 className="text-[#2D3748] text-2xl md:text-3xl lg:text-4xl">
              {t('hero.role')}
            </h2>
          </div>

          <p className="text-[#718096] text-lg md:text-xl max-w-xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onNavigateToProjects}
              className="group neomorphic px-8 py-4 hover:shadow-xl transition-all duration-300 active:neomorphic-pressed"
            >
                                <span className="flex items-center justify-center gap-2 gradient-text">
                                  {t('hero.cta')}
                                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                </span>
            </button>

            <a
              href="#contact"
              className="neomorphic-flat px-8 py-4 text-center text-[#2D3748] hover:text-[#667EEA] transition-all duration-300 active:neomorphic-pressed"
            >
              {t('hero.contact')}
            </a>
          </div>
        </motion.div>

        {/* Decorative visual element */}
        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8, delay: 0.2}}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative">
            {/* Main neumorphic circle */}
            <div className="w-80 h-80 neomorphic rounded-full flex items-center justify-center">
              <div className="w-64 h-64 neomorphic-pressed rounded-full flex items-center justify-center">
                <Code2 className="w-32 h-32 text-[#667EEA]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{y: [0, -20, 0]}}
              transition={{duration: 3, repeat: Infinity}}
              className="absolute top-0 right-0 w-16 h-16 neomorphic rounded-2xl flex items-center justify-center"
            >
              <span className="text-2xl">🎨</span>
            </motion.div>

            <motion.div
              animate={{y: [0, 20, 0]}}
              transition={{duration: 3, repeat: Infinity, delay: 1}}
              className="absolute bottom-0 left-0 w-16 h-16 neomorphic rounded-2xl flex items-center justify-center"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>

            <motion.div
              animate={{x: [0, 20, 0]}}
              transition={{duration: 3, repeat: Infinity, delay: 0.5}}
              className="absolute top-1/2 right-0 w-12 h-12 neomorphic rounded-xl flex items-center justify-center"
            >
              <span className="text-xl">✨</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
}
