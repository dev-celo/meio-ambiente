import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Grid de conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaLeaf className="text-emerald-400 text-2xl" />
              <span className="text-xl font-bold">EcoEnquadra</span>
            </div>
            <p className="text-gray-400">
              Soluções completas em enquadramento ambiental para empresas comprometidas com a sustentabilidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Legislação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Licenciamento Ambiental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Due Diligence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Regularização</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Consultoria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Treinamentos</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaPhone className="text-emerald-400 mt-1" />
                <span className="text-gray-400">(73) 9 9977-9060</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="text-emerald-400 mt-1" />
                <span className="text-gray-400">pompeurodriguez@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-emerald-400 mt-1" />
                <span className="text-gray-400">RUA ITAPAGIPE, 113, CENTRO, IPIAÚ, BAHIA<br />São Paulo/SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Marcelo H P Silva. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;