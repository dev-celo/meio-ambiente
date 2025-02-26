import { useState } from "react";
import "./form.css";
import data from "../../data/ambiente.json";
import { FaLeaf, FaTasks, FaDollarSign, FaCheck } from "react-icons/fa";

const Form = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [valor, setValor] = useState("");
  const [empreendimento, setEmpreendimento] = useState(null);
  const [error, setError] = useState("");

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
    if (!selectedSubCategoryData) {
      setError("Erro: Subcategoria não encontrada.");
      return;
    }

    const porteDefinido = definirPorte(valor, selectedSubCategoryData.porte);

    setEmpreendimento({
      divisao: selectedDivision,
      grupo: selectedGroup,
      atividade: selectedActivity,
      subcategoria: selectedSubCategory,
      unidadeMedida: selectedSubCategoryData.unidade_medida,
      valor,
      porte: porteDefinido,
      potencialPoluidor: selectedSubCategoryData.potencial_poluidor,
    });
  };

  return (
    <>
      <div className="max-w-6xl w-full mx-auto p-8 bg-white shadow-2xl rounded-xl mt-6">
        <div className="flex justify-center mb-6">
          <img src="./logo.png" alt="Logo" className="w-48" />
        </div>
        <form className="max-w-sm mx-auto" onSubmit={(e) => { e.preventDefault(); processarEmpreendimento(); }}>
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex items-center space-x-2">
              <FaLeaf className="text-gray-600" />
              <label className="block mb-0.5 text-sm font-medium text-gray-900">Selecione Divisão e Grupo</label>
            </div>

            <div className="flex space-x-4">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250px]"
                value={selectedDivision}
                onChange={handleDivisionChange}
              >
                <option value="" disabled>Selecione uma divisão</option>
                {divisions.map((division) => (
                  <option key={division} value={division}>{division}</option>
                ))}
              </select>

              {selectedDivision && (
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250px]"
                  value={selectedGroup}
                  onChange={handleGroupChange}
                >
                  <option value="" disabled>Selecione um grupo</option>
                  {groups.map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {selectedGroup && (
            <div className="flex flex-col space-y-2 mt-2 items-center">
              <div className="flex items-center space-x-2">
                <FaTasks className="text-gray-600" />
                <label className="block mb-0.5 text-sm font-medium text-gray-900">Selecione Atividade e Subcategoria</label>
              </div>

              <div className="flex space-x-4">
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250px]"
                  value={selectedActivity}
                  onChange={handleActivityChange}
                >
                  <option value="" disabled>Selecione uma atividade</option>
                  {activities.map((activity) => (
                    <option key={activity} value={activity}>{activity}</option>
                  ))}
                </select>

                {selectedActivity && (
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250px]"
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                  >
                    <option value="" disabled>Selecione uma subcategoria</option>
                    {subCategories.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>{subCategory}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          )}

          {selectedSubCategory && (
            <div className="flex flex-col space-y-1 mt-3 items-center">
              <div className="flex items-center space-x-2">
                <FaDollarSign className="text-gray-600" />
                <label className="block mb-2 text-sm font-medium text-gray-900">{selectedSubCategoryData?.unidade_medida}</label>
              </div>
              <input className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 " type="number" value={valor} onChange={handleValorChange} />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          )}

          <button type="submit" className=" mt-2.5 w-full bg-gray-700 text-white py-3 rounded-lg text-lg hover:bg-gray-900 transition duration-300 flex items-center justify-center">
            <FaCheck className="mr-2" />
            Enviar
          </button>
        </form>
      </div>

      {empreendimento && (
        <div className="fixed top-20 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
          <FaCheck />
          <p>{`Empreendimento de ${empreendimento.porte} Porte e ${empreendimento.potencialPoluidor} Potencial Poluidor.`}</p>
        </div>
      )}
    </>
  );
};

export default Form;