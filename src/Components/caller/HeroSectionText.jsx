import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Form from '../form/Form';

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
        <div className="">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Realize o Enquadramento Ambiental do seu Empreendimento e saiba quais os estudos e procedimentos preliminares:
          </motion.h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionText;