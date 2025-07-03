import { useEffect, useState } from "react";
import {
  FaUser, FaIndustry, FaCheckCircle, FaEnvelope, FaPhoneAlt,
  FaWarehouse, FaClock, FaTrashAlt
} from "react-icons/fa";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";

export default function PerfilAmbiental() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const empreendimentos = JSON.parse(localStorage.getItem("empreendimentos")) || [];
    setDados(empreendimentos);
  }, []);

  function excluirEnquadramento(indexParaExcluir) {
    const confirmar = window.confirm("Tem certeza que deseja apagar este enquadramento?");
    if (!confirmar) return;

    const novaLista = dados.filter((_, index) => index !== indexParaExcluir);
    localStorage.setItem("empreendimentos", JSON.stringify(novaLista));
    setDados(novaLista);
  }

  if (dados.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        Nenhum enquadramento encontrado.
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-6 sm:p-10 space-y-8 mt-13">
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-orange-400 via-blue-400 text-transparent bg-clip-text">
          Histórico de Enquadramentos Ambientais
        </h1>

        <div className="space-y-8">
          {dados.map((registro, index) => (
            <div
              key={index}
              className="relative bg-white border-l-4 border-blue-500 shadow-md rounded-md p-6"
            >
              <span className="absolute -left-2 top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow" />

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                  <FaClock /> Enquadramento #{index + 1}
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    {new Date(registro.dataHora).toLocaleString("pt-BR")}
                  </span>
                  <button
                    onClick={() => excluirEnquadramento(index)}
                    className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                    title="Apagar este enquadramento"
                  >
                    <FaTrashAlt /> Apagar
                  </button>
                </div>
              </div>

              {/* Responsável */}
              <div className="mb-4 space-y-1 text-gray-700">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2 text-lg">
                  <FaUser className="text-blue-600" /> Responsável
                </h3>
                <p><FaCheckCircle className="inline text-green-600 mr-1" /> <strong>Nome:</strong> {registro.nome}</p>
                <p><FaEnvelope className="inline text-gray-500 mr-1" /> <strong>Email:</strong> {registro.email}</p>
                <p><FaPhoneAlt className="inline text-gray-500 mr-1" /> <strong>Telefone:</strong> {registro.telefone}</p>
                {registro.empreendimento && (
                  <p><FaWarehouse className="inline text-gray-500 mr-1" /> <strong>Empreendimento:</strong> {registro.empreendimento}</p>
                )}
              </div>

              {/* Enquadramento Técnico */}
              <div className="grid sm:grid-cols-2 gap-3 text-gray-700 text-sm border-t pt-4">
                <h3 className="font-semibold col-span-2 text-gray-800 flex items-center gap-2 text-lg mb-2">
                  <FaIndustry className="text-orange-500" /> Enquadramento Técnico
                </h3>
                <p><strong>Divisão:</strong> {registro.divisao}</p>
                <p><strong>Atividade:</strong> {registro.atividade}</p>
                <p><strong>Grupo:</strong> {registro.grupo}</p>
                <p><strong>Subcategoria:</strong> {registro.subcategoria}</p>
                <p><strong>Valor Informado:</strong> {registro.valor}</p>
                <p><strong>Porte:</strong> {registro.porte}</p>
                <p><strong>Unidade de Medida:</strong> {registro.unidadeMedida}</p>
                <p><strong>Potencial Poluidor:</strong> {registro.potencialPoluidor}</p>
              </div>

              {/* Classe do empreendimento */}
              {registro.classe && (
                <div className="mt-6 border-t pt-4 text-gray-800">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                    Classificação Ambiental
                  </h3>
                  <div className="bg-indigo-100 border border-indigo-300 text-indigo-800 rounded-lg px-4 py-2 inline-block font-medium shadow-sm">
                    {registro.classe}
                  </div>
                  <p className="text-sm text-gray-600 mt-2 max-w-md">
                    A <strong>{registro.classe}</strong> indica o nível de exigência do licenciamento ambiental,
                    definido com base no porte do empreendimento e no seu potencial poluidor.
                    Quanto maior a classe, mais complexos são os estudos e autorizações necessárias.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
