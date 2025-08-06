import Layout from "./Layout";

export default function MapeamentoPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-green-900">Mapeamento Ambiental</h1>

      <p className="mb-4">
        O mapeamento ambiental é uma ferramenta técnica utilizada para identificar e analisar as características naturais de uma área, como solo, relevo, cobertura vegetal e uso do solo. Ele é essencial para o planejamento sustentável de propriedades rurais ou projetos ambientais.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Aplicações do Mapeamento</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Planejamento agropecuário</li>
        <li>Regularização fundiária e ambiental</li>
        <li>Identificação de áreas de risco e proteção</li>
        <li>Monitoramento de desmatamento</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Tecnologias Utilizadas</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Drones com GPS</li>
        <li>Imagens de satélite</li>
        <li>Softwares de SIG (Sistema de Informação Geográfica)</li>
        <li>Georreferenciamento</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Dúvidas Frequentes</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Qual o custo médio de um mapeamento?</li>
        <li>Quem pode realizá-lo?</li>
        <li>Serve como base para licenciamento?</li>
        <li>Precisa ser renovado?</li>
      </ul>
    </Layout>
  );
}
