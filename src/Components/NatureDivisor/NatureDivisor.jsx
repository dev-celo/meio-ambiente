import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLeaf, FaTree, FaWater, FaMountain, FaSeedling } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NatureDivider = () => {
  const navigate = useNavigate();
  const [currentIllustration, setCurrentIllustration] = useState(0);
  
  const illustrations = [
    { 
      icon: <FaLeaf className="h-16 w-16 text-emerald-400" />,
      text: "Sustentabilidade que transforma",
      bg: "bg-emerald-50"
    },
    { 
      icon: <FaTree className="h-16 w-16 text-green-500" />,
      text: "Crescimento responsável",
      bg: "bg-green-50"
    },
    { 
      icon: <FaWater className="h-16 w-16 text-blue-400" />,
      text: "Preservação dos recursos",
      bg: "bg-blue-50"
    },
    { 
      icon: <FaMountain className="h-16 w-16 text-teal-500" />,
      text: "Equilíbrio ambiental",
      bg: "bg-teal-50"
    },
    { 
      icon: <FaSeedling className="h-16 w-16 text-lime-500" />,
      text: "Futuro verde",
      bg: "bg-lime-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIllustration((prev) => (prev + 1) % illustrations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative py-16 sm:py-24 overflow-hidden transition-colors duration-1000 ${illustrations[currentIllustration].bg}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/nature-pattern.svg')] bg-repeat bg-[length:300px]"></div>
      </div>
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-emerald-200/30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-3/4 right-20 w-24 h-24 rounded-full bg-teal-200/30"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={currentIllustration}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6">
            {illustrations[currentIllustration].icon}
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {illustrations[currentIllustration].text}
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
              <FaLeaf className="mr-3" />
              Junte-se ao movimento
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating nature illustrations */}
      <div className="hidden lg:block">
        <motion.img 
          src="/floating-leaves-1.png" 
          alt=""
          className="absolute top-20 left-40 w-24"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img 
          src="/floating-leaves-2.png" 
          alt=""
          className="absolute bottom-20 right-32 w-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
};

export default NatureDivider;