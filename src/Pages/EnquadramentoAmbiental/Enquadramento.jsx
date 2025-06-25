import { useEffect, useState } from "react";
import { FaUser, FaIndustry, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaWarehouse } from "react-icons/fa";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";

export default function PerfilAmbiental() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const empreendimentos = JSON.parse(localStorage.getItem("empreendimentos")) || [];
    if (empreendimentos.length > 0) {
      setDados(empreendimentos[empreendimentos.length - 1]); // mostra o mais recente
    }
  }, []);

  if (!dados) {
    return (
      <div className="p-6 text-center text-gray-600">
        Nenhum enquadramento encontrado.
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 sm:p-10 mt-25 mb-10 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4">
          Detalhes do Enquadramento Ambiental
        </h1>

        {/* Informações do usuário */}
        <section className="space-y-4 border-b pb-6">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center">
            <FaUser className="mr-2 text-blue-600" /> Informações do Responsável
          </h2>
          <p><FaCheckCircle className="inline text-green-600 mr-1" /> <strong>Nome:</strong> {dados.nome}</p>
          <p><FaEnvelope className="inline text-gray-500 mr-1" /> <strong>Email:</strong> {dados.email}</p>
          <p><FaPhoneAlt className="inline text-gray-500 mr-1" /> <strong>Telefone:</strong> {dados.telefone}</p>
          {dados.empreendimento && (
            <p><FaWarehouse className="inline text-gray-500 mr-1" /> <strong>Empreendimento:</strong> {dados.empreendimento}</p>
          )}
        </section>

        {/* Informações técnicas */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center">
            <FaIndustry className="mr-2 text-orange-500" /> Enquadramento Técnico
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <p><strong>Divisão:</strong> {dados.divisao}</p>
            <p><strong>Grupo:</strong> {dados.grupo}</p>
            <p><strong>Atividade:</strong> {dados.atividade}</p>
            <p><strong>Subcategoria:</strong> {dados.subcategoria}</p>
            <p><strong>Porte:</strong> {dados.porte}</p>
            <p><strong>Unidade de Medida:</strong> {dados.unidadeMedida}</p>
            <p><strong>Valor Informado:</strong> {dados.valor}</p>
            <p><strong>Potencial Poluidor:</strong> {dados.potencialPoluidor}</p>
          </div>
        </section>

        <div className="text-center text-sm text-gray-400 pt-6 border-t">
          Data do envio: {new Date(dados.dataHora).toLocaleString("pt-BR")}
        </div>
      </div>
      <Footer />
    </>
  );
}
