import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSectionText = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12
      }
    }
  };

  const scrollToSection = () => {
  const element = document.getElementById("form-completo");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="relative min-h-screen flex bg-white overflow-hidden mt-2">
      {/* Seção da Imagem (apenas desktop) */}
      <div
        className="hidden lg:block w-[30rem] h-[calc(100vh-2.5rem)] flex-shrink-0 bg-gray-800 mt-10"
        style={{
          backgroundImage: 'url("/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top 20%',
        }}
      />

      {/* Seção do Conteúdo */}
      <div
        ref={ref}
        className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 w-full"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Tag de Categoria */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center mb-4 sm:mb-6 px-3 py-1 rounded-full bg-emerald-50/80 backdrop-blur-sm mt-6"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center mr-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <span className="text-xs font-semibold tracking-wider text-emerald-700 uppercase">
              Tecnologia Verde
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              Realize o Enquadramento ambiental
            </span>{' '}
            para o seu Empreendimento!
          </motion.h1>

          {/* Descrição */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-[38rem] px-2 sm:px-0"
          >
            Descubra em poucos segundos as exigências legais para sua atividade. 
          </motion.p>

          {/* Destaque de Benefício */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8 w-full max-w-xl px-2 sm:px-0"
          >
            <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_24px_rgba(5,94,73,0.08)] mx-auto">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-600/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Clique abaixo e faça seu enquadramento agora mesmo.</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  <span className="text-emerald-600 font-semibold">92% dos clientes</span>alcançam selo verde dentro do primeiro ano de implementação.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full px-2 sm:px-0"
          >
            <button onClick={scrollToSection} className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden text-sm sm:text-base">
              <span className="relative z-10 flex items-center justify-center">
                Iniciar Enquadramento Ambiental
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>

            <button className="px-5 py-3 sm:px-6 sm:py-4 border-2 border-gray-200 text-white font-bold rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Ver Estudo de Caso
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionText;