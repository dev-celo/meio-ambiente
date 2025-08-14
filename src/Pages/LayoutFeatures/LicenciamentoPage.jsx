import Layout from "./Layout";
import { FaFileAlt, FaClock, FaBuilding, FaQuestionCircle, FaLeaf, FaCheckCircle } from "react-icons/fa";

export default function LicenciamentoPage() {
  return (
    <Layout>
      {/* Banner de destaque */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden mb-12 shadow-lg">
        <img
          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg"
          alt="Licenciamento Ambiental"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-700/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Licenciamento Ambiental
          </h1>
          <p className="mt-4 text-lg md:text-xl text-green-100 max-w-2xl">
            Concilie o desenvolvimento do seu empreendimento com a preservação ambiental de forma legal, segura e eficiente.
          </p>
        </div>
      </div>

      {/* Introdução detalhada */}
      <div className="prose prose-green max-w-none mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <FaLeaf className="text-green-700" /> O que é e para que serve
        </h2>
        <p>
          O <strong>licenciamento ambiental</strong> é um procedimento administrativo essencial que visa garantir que atividades humanas que possam impactar o meio ambiente sejam planejadas e executadas de forma sustentável. 
          Ele busca equilibrar o desenvolvimento econômico com a proteção dos recursos naturais, evitando danos ambientais irreversíveis e promovendo a responsabilidade socioambiental.
        </p>
        <p>
          Serve para autorizar legalmente a implantação, instalação e operação de empreendimentos, verificando se estão em conformidade com as normas ambientais. Além de garantir a legalidade do empreendimento, o licenciamento também:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Minimiza riscos de impactos ambientais e sociais.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Evita penalidades legais e sanções administrativas.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Garante segurança e credibilidade para investidores e clientes.</li>
          <li><FaCheckCircle className="inline text-green-700 mr-2" /> Promove práticas de sustentabilidade e preservação ambiental.</li>
        </ul>
      </div>

      {/* Tipos de licença */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaBuilding className="text-green-700" /> Tipos de Licença
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <FaFileAlt className="text-green-700" /> Licença Prévia (LP)
            </h3>
            <p>Emitida na fase de planejamento do empreendimento, avalia a viabilidade ambiental e define medidas de mitigação de impactos.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <FaClock className="text-green-700" /> Licença de Instalação (LI)
            </h3>
            <p>Autoriza a instalação das estruturas do empreendimento, garantindo que os planos aprovados estejam em conformidade ambiental.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <FaBuilding className="text-green-700" /> Licença de Operação (LO)
            </h3>
            <p>Permite que o empreendimento opere legalmente, após comprovar que todas as exigências ambientais foram atendidas.</p>
          </div>
        </div>
      </div>

      {/* Documentos Necessários */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaFileAlt className="text-green-700" /> Documentos Necessários
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Formulário de Requerimento preenchido e assinado</li>
          <li>Estudo de Impacto Ambiental (EIA) ou Relatório de Impacto Ambiental (RIMA) quando exigido</li>
          <li>Planta de localização, croquis e mapas temáticos</li>
          <li>Comprovantes de propriedade ou posse do terreno</li>
          <li>Laudos técnicos específicos, dependendo do tipo de atividade</li>
        </ul>
      </div>

      {/* Dúvidas Frequentes */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <FaQuestionCircle className="text-green-700" /> Dúvidas Frequentes
        </h2>
        <ul className="list-disc list-inside space-y-3 bg-green-50 p-6 rounded-xl shadow">
          <li>Qual o prazo médio de obtenção de cada licença?</li>
          <li>Qual órgão ambiental é responsável pela emissão?</li>
          <li>Como funciona para atividades rurais ou de pequeno porte?</li>
          <li>O que acontece se o empreendimento operar sem licença ambiental?</li>
          <li>Como a Ambitrade pode ajudar a agilizar o processo e garantir conformidade?</li>
        </ul>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <a
          href="/contato"
          className="inline-block bg-green-900 px-8 py-5 rounded-xl font-bold shadow-lg hover:bg-green-800 hover:scale-105 transition transform text-white!"
        >
          Fale com nossa equipe e regularize seu empreendimento
        </a>
      </div>
    </Layout>
  );
}
