import { Linkedin, Instagram, Mail, Send, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'contacto@miportfolio.com';

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/tu-perfil',
      color: '#0A66C2',
      description: 'Conecta conmigo profesionalmente',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/tu-perfil',
      color: '#E4405F',
      description: 'Sígueme para ver mi trabajo',
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Conectemos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667EEA] to-[#764BA2] mx-auto rounded-full"></div>
          <p className="text-[#718096] mt-6 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente o simplemente quieres conversar? 
            Estoy siempre abierto a nuevas oportunidades y colaboraciones
          </p>
        </motion.div>

        {/* Email principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="neomorphic p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-[#667EEA]" />
              <h3 className="text-[#2D3748]">Email</h3>
            </div>
            
            <p className="text-[#718096] text-center mb-6">
              La forma más directa de contactarme
            </p>

            <div className="neomorphic-pressed p-4 rounded-xl mb-4">
              <p className="text-center text-[#2D3748] text-lg">{email}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleSendEmail}
                className="neomorphic px-6 py-3 flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 active:neomorphic-pressed group"
              >
                <Send className="w-5 h-5 text-[#667EEA] group-hover:translate-x-1 transition-transform" />
                <span className="text-[#2D3748]">Enviar email</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="neomorphic-flat px-6 py-3 flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 active:neomorphic-pressed"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-500">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 text-[#718096]" />
                    <span className="text-[#718096]">Copiar email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-[#2D3748] text-center mb-8">O encuéntrame en</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="neomorphic p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="neomorphic-flat p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <social.icon className="w-10 h-10" style={{ color: social.color }} />
                  </div>
                  <div>
                    <h4 className="text-[#2D3748] mb-2">{social.name}</h4>
                    <p className="text-[#718096] text-sm">{social.description}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm gradient-text">Visitar perfil →</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center neomorphic-flat p-8 max-w-2xl mx-auto"
        >
          <p className="text-[#718096] text-lg">
            💼 Actualmente <span className="text-[#667EEA]">disponible</span> para proyectos freelance y oportunidades full-time
          </p>
        </motion.div>
      </div>
    </section>
  );
}
