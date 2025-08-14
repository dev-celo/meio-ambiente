import Layout from "./Layout";
import { FaWater, FaClock, FaFileAlt, FaQuestionCircle, FaCheckCircle, FaBuilding } from "react-icons/fa";

export default function OutorgasPage() {
  return (
    <Layout>
      {/* Banner de destaque */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden mb-12 shadow-lg">
        <img
          src="https://images.pexels.com/photos/33429688/pexels-photo-33429688.jpeg"
          alt="Outorga de Uso da Água"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-700/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Outorga de Uso da Água
          </h1>
          <p className="mt-4 text-lg md:text-xl text-green-100 max-w-2xl">
            Garanta o uso legal e sustentável da água para seu empreendimento ou atividade.
          </p>
        </div>
      </div>

      {/* Introdução detalhada */}
      <div className="prose prose-green max-w-none mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <FaWater className="text-green-700" /> O que é a Outorga
        </h2>
        <p>
          A <strong>outorga de direito de uso de recursos hídricos</strong> é um ato administrativo que autoriza legalmente o uso da água, garantindo a gestão sustentável e racional desse recurso. Ela é regulamentada pela Política Nacional de Recursos Hídricos e fiscalizada por órgãos ambientais competentes.
        </p>
        <p>
          Serve para assegurar que os usos da água não causem conflitos entre usuários, protejam os ecossistemas e promovam o desenvolvimento econômico dentro das normas legais. A outorga é necessária em situações como irrigação, abastecimento urbano, uso industrial, piscicultura e lançamento de efluentes.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Garante o uso legal da água evitando sanções administrativas.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Protege os recursos hídricos e o meio ambiente.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Estabelece limites de quantidade e qualidade de água utilizada.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Permite planejamento seguro para irrigação, indústria e demais usos.</li>
        </ul>
      </div>

      {/* Quando é necessária */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaClock className="text-green-700" /> Quando é Necessária
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Captação de água em rios, lagos ou lençóis freáticos</li>
          <li>Lançamento de efluentes e resíduos líquidos</li>
          <li>Construção de barragens, açudes ou reservatórios</li>
          <li>Uso industrial ou comercial da água</li>
        </ul>
      </div>

      {/* Tipos de Outorga */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaBuilding className="text-green-700" /> Tipos de Outorga
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <FaFileAlt className="text-green-700" /> Outorga de Direito de Uso
            </h3>
            <p>Autoriza o uso regular e controlado de recursos hídricos para qualquer finalidade.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <FaClock className="text-green-700" /> Declaração de Regularidade
            </h3>
            <p>Documenta que o uso de água é insignificante ou não requer outorga formal.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <FaBuilding className="text-green-700" /> Outorga Preventiva
            </h3>
            <p>Emissão antecipada para uso futuro, garantindo prioridade legal do recurso hídrico.</p>
          </div>
        </div>
      </div>

      {/* Perguntas Frequentes */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaQuestionCircle className="text-green-700" /> Perguntas Frequentes
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Qual a diferença entre uso insignificante e outorga formal?</li>
          <li>Quem emite a outorga na Bahia e quais são os órgãos competentes?</li>
          <li>Quanto tempo dura a validade da outorga?</li>
          <li>É necessário renovar periodicamente?</li>
          <li>Como a Ambitrade pode ajudar a agilizar o processo e garantir conformidade legal?</li>
        </ul>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <a
          href="/contato"
          className="inline-block bg-green-900 text-white! px-8 py-5 rounded-xl font-bold shadow-lg hover:bg-green-800 hover:scale-105 transition transform"
        >
          Fale com nossa equipe e regularize seu uso da água
        </a>
      </div>
    </Layout>
  );
}
