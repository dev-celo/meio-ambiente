import Layout from "./Layout";
import { FaMap, FaMapMarkedAlt, FaQuestionCircle, FaHelicopter , FaSatelliteDish, FaCheckCircle, FaLeaf } from "react-icons/fa";

export default function MapeamentoPage() {
  return (
    <Layout>
      {/* Banner de destaque */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden mb-12 shadow-lg">
        <img
          src="https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg"
          alt="Mapeamento Ambiental"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-700/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Mapeamento Ambiental
          </h1>
          <p className="mt-4 text-lg md:text-xl text-green-100 max-w-2xl">
            Identifique, analise e planeje sua área de forma sustentável, utilizando tecnologias modernas e informações confiáveis.
          </p>
        </div>
      </div>

      {/* O que é Mapeamento Ambiental */}
      <div className="mb-12 prose prose-green max-w-none">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaLeaf className="text-green-700" /> O que é e para que serve
        </h2>
        <p>
          O <strong>mapeamento ambiental</strong> é uma ferramenta técnica que identifica e analisa características naturais de uma área, como relevo, solo, vegetação e uso do solo. 
          Ele é essencial para planejamento sustentável, gestão ambiental e suporte a processos legais e de regularização.
        </p>
        <p>
          Serve para:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Apoiar o planejamento agropecuário e florestal.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Auxiliar na regularização fundiária e ambiental.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Identificar áreas de risco e proteção ambiental.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Monitorar desmatamento e alterações no uso do solo.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Fornecer dados confiáveis para licenciamento e tomada de decisão.</li>
        </ul>
      </div>

      {/* Tecnologias utilizadas */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaSatelliteDish className="text-green-700" /> Tecnologias Utilizadas
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li><FaHelicopter className="inline text-green-700 mr-2" /> Drones com GPS e câmeras multiespectrais</li>
          <li><FaSatelliteDish className="inline text-green-700 mr-2" /> Imagens de satélite de alta resolução</li>
          <li><FaMapMarkedAlt className="inline text-green-700 mr-2" /> Softwares de SIG (Sistema de Informação Geográfica)</li>
          <li><FaMap className="inline text-green-700 mr-2" /> Georreferenciamento preciso das áreas</li>
        </ul>
      </div>

      {/* Dúvidas Frequentes */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaQuestionCircle className="text-green-700" /> Dúvidas Frequentes
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Qual o custo médio de um mapeamento ambiental?</li>
          <li>Quem pode realizá-lo?</li>
          <li>Serve como base para licenciamento ambiental?</li>
          <li>Precisa ser atualizado ou renovado?</li>
          <li>Quanto tempo leva para gerar o relatório completo?</li>
        </ul>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <a
          href="/contato"
          className="inline-block bg-green-900 text-white! px-8 py-5 rounded-xl font-bold shadow-lg hover:bg-green-800 hover:scale-105 transition transform"
        >
          Fale com nossa equipe e solicite seu mapeamento
        </a>
      </div>
    </Layout>
  );
}
