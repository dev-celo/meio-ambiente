/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/form/Form";
import HeroSectionText from "./Components/caller/HeroSectionText";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from './Components/Footer/Footer';
import Separator from './Components/Separator/Separator';

const DynamicSelect = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (heroInView) controls.start('visible');
  }, [heroInView, controls]);

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

  return (
    <>
      <header className="mt-15">
        <Header />
      </header>

      <HeroSectionText />

      <Separator style = {{zIndex: "100000", marginTop: "100px"}} />

      <section
        ref={formRef}
        className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden" // Aumentei para max-w-5xl
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
            {/* Área do Formulário Ampliada */}
            <div className="p-10 sm:p-14 lg:p-16">
              <div className="text-center mb-10 max-w-md mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
                >
                  Fale com nossos especialistas
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-600"
                >
                  Preencha o formulário e receba uma análise gratuita
                </motion.p>
              </div>

              {/* Container do Formulário Centralizado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="max-w-lg mx-auto" // Centralização e largura controlada
              >
                <Form />
              </motion.div>
            </div>

            {/* Seção Ilustrativa (opcional) */}
            <div className="hidden lg:block bg-gradient-to-br from-emerald-500 to-teal-600">
              <div className="h-full flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-3">Soluções Personalizadas</h3>
                  <p className="text-emerald-100 opacity-90">
                    Nossa equipe especializada entrará em contato em até 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default DynamicSelect;