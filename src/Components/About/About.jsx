import { FaHandshake, FaChartLine, FaLeaf, FaUserTie, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const AboutSection = () => {
  return (
    <section id="sobre" className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background decorativo */}
      <div className="hidden lg:block absolute -right-20 -top-20 w-64 h-64 bg-emerald-100 rounded-full opacity-20"></div>
      <div className="hidden lg:block absolute -left-20 bottom-0 w-80 h-80 bg-teal-100 rounded-full opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              Transformando Ideias em Sustentabilidade Real
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Somos a ponte entre sua visão empreendedora e a excelência ambiental que o mercado exige
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo de texto */}
          <div>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="text-lg font-medium mb-6">
                Na <strong className="text-emerald-600">Ambitrade</strong>, entendemos os desafios do empreendedorismo sustentável. Acreditamos que responsabilidade ambiental e sucesso financeiro andam juntos.
              </p>

              <ul className="space-y-6 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaChartLine className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Resultados Mensuráveis</h3>
                    <p className="mt-1">
                      Nossas soluções reduzem custos operacionais em até 35% enquanto elevam seu ESG score
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaLeaf className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Expertise Comprovada</h3>
                    <p className="mt-1">
                      +150 projetos implementados com selos ambientais conquistados no primeiro ano
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaUserTie className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Abordagem Personalizada</h3>
                    <p className="mt-1">
                      Soluções sob medida para o estágio atual do seu negócio, desde startups a grandes empresas
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card de conversão */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
            <div className="text-center mb-8">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-4">
                <FaHandshake className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pronto para dar o próximo passo?</h3>
              <p className="mt-2 text-gray-600">
                Agende uma consultoria gratuita de 30 minutos
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="business" className="sr-only">Tipo de negócio</label>
                <select
                  id="business"
                  name="business"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  required
                >
                  <option value="" disabled selected>Seu segmento de atuação</option>
                  <option value="industry">Indústria</option>
                  <option value="commerce">Comércio</option>
                  <option value="services">Serviços</option>
                  <option value="agriculture">Agronegócio</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Agendar Consultoria Gratuita
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Ou fale conosco agora:
              </p>
              <div className="mt-2 flex justify-center space-x-4">
                <a href="tel:+5511987654321" className="flex items-center text-emerald-600 hover:text-emerald-800">
                  <FaPhoneAlt className="mr-1" />
                  <span className="text-sm font-medium">(73) 9 9977-9060</span>
                </a>
                <a href="mailto:contato@ambitrade.com.br" className="flex items-center text-emerald-600 hover:text-emerald-800">
                  <MdOutlineEmail className="mr-1" />
                  <span className="text-sm font-medium">pompeurodriguez@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;