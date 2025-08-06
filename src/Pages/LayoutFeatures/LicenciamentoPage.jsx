import Layout from "./Layout";

export default function LicenciamentoPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-green-900">Licenciamento Ambiental</h1>

      <p className="mb-4">
        O licenciamento ambiental é um procedimento administrativo fundamental que tem como objetivo conciliar o desenvolvimento econômico com a preservação ambiental. É exigido para atividades ou empreendimentos que utilizam recursos naturais ou que possam causar impacto ao meio ambiente.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Quais são os tipos de licença?</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><strong>Licença Prévia (LP):</strong> Concedida na fase de planejamento do empreendimento.</li>
        <li><strong>Licença de Instalação (LI):</strong> Autoriza a instalação de acordo com os planos aprovados.</li>
        <li><strong>Licença de Operação (LO):</strong> Permite a operação após verificações de conformidade.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Documentos Necessários</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Formulário de Requerimento</li>
        <li>Estudo de Impacto Ambiental (quando exigido)</li>
        <li>Planta de localização e croquis</li>
        <li>Comprovantes de propriedade ou posse</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Dúvidas Frequentes</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Qual o prazo médio de obtenção?</li>
        <li>Qual órgão ambiental emite a licença?</li>
        <li>Como funciona em casos de atividade rural?</li>
        <li>O que acontece se eu operar sem licença?</li>
      </ul>
    </Layout>
  );
}
