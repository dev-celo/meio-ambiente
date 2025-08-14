import { useState } from "react";
import data from "../../data/ambiente.json";
import { FaLeaf, FaTasks, FaDollarSign, FaCheck } from "react-icons/fa";
import LeadCaptureModalForce from "../LeadCaptureModalForce/LeadCaptureModalForce";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [valor, setValor] = useState("");
  const [empreendimento, setEmpreendimento] = useState(null);
  const [error, setError] = useState("");
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const definirPorte = (valor, porte) => {
    if (valor <= porte.pequeno) return "Pequeno";
    else if (valor <= porte.médio) return "Médio";
    return "Grande";
  };

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedGroup("");
    setSelectedActivity("");
    setSelectedSubCategory("");
    setValor("");
    setEmpreendimento(null);
    setError("");
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setSelectedActivity("");
    setSelectedSubCategory("");
    setValor("");
    setEmpreendimento(null);
    setError("");
  };

  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
    setSelectedSubCategory("");
    setValor("");
    setEmpreendimento(null);
    setError("");
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
    setValor("");
    setEmpreendimento(null);
    setError("");
  };

  const handleValorChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0) {
      setValor(Number(value));
      setError("");
    } else {
      setError("Por favor, insira um valor válido.");
    }
  };

  const handleSubmit = async (dadosContato) => {
  if (!empreendimento) {
    console.error("Empreendimento ainda não foi processado.");
    return;
  }

  // Combina dados do contato + empreendimento dentro de "enquadramento"
  const dadosCompletos = {
    nome: dadosContato.nome,
    email: dadosContato.email,
    telefone: dadosContato.telefone,
    empreendimento: dadosContato.empreendimento || "",
    enquadramento: {
      ...empreendimento,
      dataHora: new Date().toISOString() // garante que dataHora existe
    }
  };

  

  try {
    const response = await fetch("https://meio-ambiente-backend.onrender.com/api/formulario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosCompletos)
    });

    const result = await response.json();

    if (response.ok) {
      setFormularioEnviado(true);
      setShowModal(false);
      navigate("/enquadramentos");
    } else {
      console.error("Erro no envio:", result.error);
    }
  } catch (err) {
    console.error("Erro de rede:", err);
  }
};


  const divisions = data.categorias.map((categoria) => categoria.divisao);
  const selectedDivisionData = data.categorias.find(
    (categoria) => categoria.divisao === selectedDivision
  );
  const groups = selectedDivisionData?.grupos.map((grupo) => grupo.grupo) || [];
  const selectedGroupData = selectedDivisionData?.grupos.find(
    (grupo) => grupo.grupo === selectedGroup
  );
  const activities = selectedGroupData?.atividades.map((atividade) => atividade.nome) || [];
  const selectedActivityData = selectedGroupData?.atividades.find(
    (atividade) => atividade.nome === selectedActivity
  );
  const subCategories = selectedActivityData?.subcategorias.map((subcategoria) => subcategoria.nome) || [];
  const selectedSubCategoryData = selectedActivityData?.subcategorias.find(
    (subcategoria) => subcategoria.nome === selectedSubCategory
  );

  const processarEmpreendimento = () => {
    let porteDefinido = "";
    let unidadeMedida = "";
    let potencialPoluidor = "";
    let classe = "";

    if (selectedActivityData.subcategorias.length > 0) {
      if (!selectedSubCategoryData) {
        setError("Erro: Subcategoria não encontrada.");
        return;
      }

      porteDefinido = definirPorte(valor, selectedSubCategoryData.porte);
      unidadeMedida = selectedSubCategoryData.unidade_medida;
      potencialPoluidor = selectedSubCategoryData.potencial_poluidor;
    } else {
      porteDefinido = "(Porte desnecessário)";
      unidadeMedida = "Não especificado";
      potencialPoluidor = selectedActivityData.potencial_poluidor;
    }

    // Regra de classificação
    const regras = {
      Pequeno: { Pequeno: 1, Médio: 2, Grande: 3 },
      Médio: { Pequeno: 2, Médio: 3, Grande: 5 },
      Alto: { Pequeno: 4, Médio: 5, Grande: 6 },
    };

    if (regras[potencialPoluidor] && regras[potencialPoluidor][porteDefinido]) {
      classe = `Classe ${regras[potencialPoluidor][porteDefinido]}`;
    } else {
      classe = "Não classificado";
    }

    setEmpreendimento({
      divisao: selectedDivision,
      grupo: selectedGroup,
      atividade: selectedActivity,
      subcategoria: selectedSubCategory || "(Porte desnecessário)",
      unidadeMedida,
      valor,
      porte: porteDefinido,
      potencialPoluidor,
      classe,
      data: new Date().toLocaleString("pt-BR")
    }, setShowModal(true));
  };



  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-xl rounded-lg sm:rounded-xl mt-4 sm:mt-6 space-y-4 sm:space-y-6">
        <div className="flex justify-center mb-4 sm:mb-6">
          <img src="./logo.png" alt="Logo" className="w-40 sm:w-48" />
        </div>

        <form
          className="w-full max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            processarEmpreendimento();
          }}
        >
          <div className="flex flex-col space-y-3 sm:space-y-4 items-center">
            {/* Divisão e Grupo */}
            <div className="w-full">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                <FaLeaf className="text-gray-600 text-sm sm:text-base" />
                <label className="block text-sm sm:text-base font-medium text-gray-900">
                  Selecione Divisão e Grupo
                </label>
              </div>

              <div className="flex flex-col space-y-3 sm:space-y-4 w-full">
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                  value={selectedDivision}
                  onChange={handleDivisionChange}
                >
                  <option value="" disabled>Selecione uma divisão</option>
                  {divisions.map((division) => (
                    <option key={division} value={division}>{division}</option>
                  ))}
                </select>


                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                  value={selectedGroup}
                  onChange={handleGroupChange}
                >
                  <option value="" disabled>Selecione um grupo</option>
                  {groups.map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Atividade e Subcategoria */}

            <div className="w-full mt-2 sm:mt-4">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                <FaTasks className="text-gray-600 text-sm sm:text-base" />
                <label className="block text-sm sm:text-base font-medium text-gray-900">
                  Selecione Atividade e Subcategoria
                </label>
              </div>

              <div className="flex flex-col space-y-3 sm:space-y-4 w-full">
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                  value={selectedActivity}
                  onChange={handleActivityChange}
                >
                  <option value="" disabled>Selecione uma atividade</option>
                  {activities.map((activity) => (
                    <option key={activity} value={activity}>{activity}</option>
                  ))}
                </select>

                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                >
                  <option value="" disabled>Selecione uma subcategoria</option>
                  {subCategories.map((subCategory) => (
                    <option key={subCategory} value={subCategory}>{subCategory}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Valor */}
            {selectedSubCategory && (
              <div className="w-full mt-2 sm:mt-3">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                  <FaDollarSign className="text-gray-600 text-sm sm:text-base" />
                  <label className="block text-sm sm:text-base font-medium text-gray-900">
                    {selectedSubCategoryData.unidade_medida}
                  </label>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="number"
                  value={valor}
                  onChange={handleValorChange}
                />
                {error && <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>}
              </div>
            )}

            {/* Botão Enviar */}
            <button
              type="submit"
              className="mt-3 sm:mt-4 w-full bg-gray-700 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-gray-900 transition duration-300 flex items-center justify-center"
            >
              <FaCheck className="mr-2 text-xs sm:text-sm" />
              Enviar
            </button>
          </div>
        </form>
      </div>

      {
        showModal &&
        <LeadCaptureModalForce onSubmit={handleSubmit} />
      }

      {
        formularioEnviado && (
          <div className="p-6">
            <h2 className="text-xl font-bold text-green-700">Obrigado pelo envio!</h2>
            <p className="mt-2">Em breve você receberá sua análise completa por e-mail ou WhatsApp.</p>
          </div>
        )
      }
    </>
  );
};

export default Form;