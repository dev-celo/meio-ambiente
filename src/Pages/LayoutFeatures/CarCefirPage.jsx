import Layout from "./Layout";
import { FaQuestionCircle, FaLandmark, FaCheckCircle, FaMap, FaLeaf } from "react-icons/fa";

export default function CarCefirPage() {
  return (
    <Layout>
      {/* Banner de destaque */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden mb-12 shadow-lg">
        <img
          src="https://images.pexels.com/photos/3402371/pexels-photo-3402371.jpeg"
          alt="CAR / CEFIR"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-700/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            CAR / CEFIR
          </h1>
          <p className="mt-4 text-lg md:text-xl text-green-100 max-w-2xl">
            Regularize sua propriedade rural e integre informações ambientais de forma legal, segura e eficiente.
          </p>
        </div>
      </div>

      {/* O que é CAR / CEFIR */}
      <div className="mb-12 prose prose-green max-w-none">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaLeaf className="text-green-700" /> O que é CAR e CEFIR
        </h2>
        <p>
          O <strong>Cadastro Ambiental Rural (CAR)</strong> é um registro eletrônico obrigatório de todas as propriedades e posses rurais, visando o controle, monitoramento e planejamento ambiental.
          Já o <strong>Cadastro Estadual Florestal de Imóveis Rurais (CEFIR)</strong> complementa o CAR em nível estadual, garantindo conformidade com a legislação ambiental local.
        </p>
        <p>
          Essas ferramentas permitem integrar informações sobre Áreas de Preservação Permanente (APP), Reserva Legal (RL), uso do solo e vegetação nativa, contribuindo para políticas públicas de conservação e sustentabilidade.
        </p>
      </div>

      {/* Para que serve */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaCheckCircle className="text-green-700" /> Para que serve
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Integrar e monitorar informações ambientais das propriedades rurais.</li>
          <li>Planejamento ambiental e econômico eficiente.</li>
          <li>Instrumentalizar políticas públicas de conservação e uso sustentável.</li>
          <li>Regularização de APP e RL.</li>
          <li>Facilitar acesso a crédito agrícola e incentivos ambientais.</li>
          <li>Evitar multas e sanções ambientais.</li>
          <li>Base de dados confiável para órgãos estaduais e federais.</li>
        </ul>
      </div>

      {/* Quem precisa fazer */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaLandmark className="text-green-700" /> Quem precisa fazer
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Todos os proprietários e possuidores de imóveis rurais, físicos ou jurídicos.</li>
          <li>Propriedades com vegetação nativa ou em restauração.</li>
          <li>Áreas de agricultura, pecuária, silvicultura ou agroindústria.</li>
        </ul>
      </div>

      {/* Etapas do CAR / CEFIR */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaMap className="text-green-700" /> Etapas do Cadastro
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Coleta de dados do imóvel e do proprietário.</li>
          <li>Georreferenciamento das áreas de APP e RL.</li>
          <li>Envio do cadastro ao órgão ambiental competente.</li>
          <li>Análise e validação pelos órgãos estaduais ou federais.</li>
          <li>Regularização das áreas e emissão de certificado digital.</li>
        </ul>
      </div>

      {/* Dúvidas Comuns */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaQuestionCircle className="text-green-700" /> Dúvidas Comuns
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Qual a diferença entre CAR e CEFIR?</li>
          <li>Como regularizar o imóvel após o cadastro?</li>
          <li>Existe multa para quem não realiza o cadastro?</li>
          <li>Onde consultar o CAR?</li>
          <li>Quanto tempo demora a validação do cadastro?</li>
        </ul>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <a
          href="/contato"
          className="inline-block bg-green-900 text-white! px-8 py-5 rounded-xl font-bold shadow-lg hover:bg-green-800 hover:scale-105 transition transform"
        >
          Fale com nossa equipe e regularize sua propriedade
        </a>
      </div>
    </Layout>
  );
}
