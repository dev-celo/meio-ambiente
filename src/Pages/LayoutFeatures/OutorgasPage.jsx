import Layout from './Layout';

export default function OutorgasPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-green-900">Outorga de Uso da Água</h1>

      <p className="mb-4">
        A outorga é o ato administrativo que autoriza o uso dos recursos hídricos. É regulamentada pela Política Nacional de Recursos Hídricos e garante o uso racional da água para atividades como irrigação, abastecimento, indústria e piscicultura.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Quando é necessária?</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Captação de água em rios, lagos ou lençóis freáticos</li>
        <li>Lançamento de efluentes</li>
        <li>Construção de barragens ou reservatórios</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Tipos de Outorga</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Outorga de Direito de Uso</li>
        <li>Declaração de Regularidade</li>
        <li>Outorga Preventiva</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Perguntas Frequentes</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Qual a diferença entre uso insignificante e outorga formal?</li>
        <li>Quem emite a outorga na Bahia?</li>
        <li>Quanto tempo dura a validade?</li>
        <li>É necessário renovar?</li>
      </ul>
    </Layout>
  );
}
