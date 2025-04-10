import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-white py-16 sm:py-24 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              Fale Conosco
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Estamos prontos para ajudar sua empresa a alcançar a excelência em sustentabilidade ambiental.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-50 text-emerald-600">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Endereço</h4>
                  <p className="mt-1 text-gray-600">
                    RUA ITAPAGIPE, 113<br />
                    CENTRO<br />
                    IPIAÚ BAHIA - BA, 45570-000
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-50 text-emerald-600">
                    <FaPhone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Telefone</h4>
                  <p className="mt-1 text-gray-600">
                    (73) 9 9977-9060 (WhatsApp)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-50 text-emerald-600">
                    <FaEnvelope className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">
                    pompeurodriguez@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-50 text-emerald-600">
                    <FaClock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Horário de Atendimento</h4>
                  <p className="mt-1 text-gray-600">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 9h às 12h
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors duration-300">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors duration-300">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="consultoria">Consultoria Ambiental</option>
                  <option value="licenciamento">Licenciamento</option>
                  <option value="projetos">Projetos Sustentáveis</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Enviar Mensagem
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24 rounded-2xl overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9 w-full h-80 sm:h-96 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d967.2779997475682!2d-39.73291157790234!3d-14.12951046373971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1744313648164!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;