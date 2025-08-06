import Layout from "./Layout";

export default function CarCefirPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-green-900">CAR / CEFIR</h1>

      <p className="mb-4">
        O Cadastro Ambiental Rural (CAR) e o Cadastro Estadual Florestal de Imóveis Rurais (CEFIR) são registros obrigatórios que servem como ferramentas de regularização e controle ambiental das propriedades rurais.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Finalidades do CAR/CEFIR</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Identificar e integrar as informações ambientais das propriedades</li>
        <li>Auxiliar no planejamento ambiental e econômico</li>
        <li>Instrumentalizar políticas públicas</li>
        <li>Regularização de Áreas de Preservação Permanente e Reserva Legal</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Documentos Necessários</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Documentação do imóvel</li>
        <li>Geolocalização da propriedade</li>
        <li>Dados do proprietário</li>
        <li>Cadastro no sistema federal ou estadual</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Dúvidas Comuns</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Qual a diferença entre CAR e CEFIR?</li>
        <li>Como regularizar o imóvel após o cadastro?</li>
        <li>Existe multa para quem não faz?</li>
        <li>Onde consulto meu CAR?</li>
      </ul>
    </Layout>
  );
}
