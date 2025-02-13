import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import data from "./data/ambiente.json"; // Importando o JSON

// potencial polidor alto, médio e pequeno
const DynamicSelect = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [valor, setValor] = useState("");
  const [empreendimento, setEmpreendimento] = useState(null);

  // Função para definir o porte
  const definirPorte = (valor, porte) => {
    if (valor <= porte.pequeno) {
      return "Pequeno";
    } else if (valor <= porte.médio) {
      return "Médio";
    } else {
      return "Grande";
    }
  };

  // Handlers
  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedGroup("");
    setSelectedActivity("");
    setSelectedSubCategory("");
    setValor("");
    setEmpreendimento(null);
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setSelectedActivity("");
    setSelectedSubCategory("");
    setValor("");
    setEmpreendimento(null);
  };

  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
    setSelectedSubCategory("");
    setValor("");
    setEmpreendimento(null);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
    setValor("");
    setEmpreendimento(null);
  };

  const handleValorChange = (event) => setValor(Number(event.target.value));

  // Obter opções dinâmicas com base nas seleções
  const divisions = data.categorias.map((categoria) => categoria.divisao);
  const selectedDivisionData = data.categorias.find(
    (categoria) => categoria.divisao === selectedDivision
  );
  const groups = selectedDivisionData
    ? selectedDivisionData.grupos.map((grupo) => grupo.grupo)
    : [];
  const selectedGroupData = selectedDivisionData
    ? selectedDivisionData.grupos.find((grupo) => grupo.grupo === selectedGroup)
    : null;
  const activities = selectedGroupData
    ? selectedGroupData.atividades.map((atividade) => atividade.nome)
    : [];
  const selectedActivityData = selectedGroupData
    ? selectedGroupData.atividades.find(
        (atividade) => atividade.nome === selectedActivity
      )
    : null;
  const subCategories = selectedActivityData
    ? selectedActivityData.subcategorias.map((subcategoria) => subcategoria.nome)
    : [];
  const selectedSubCategoryData = selectedActivityData
    ? selectedActivityData.subcategorias.find(
        (subcategoria) => subcategoria.nome === selectedSubCategory
      )
    : null;

  // Função para processar o empreendimento
  const processarEmpreendimento = () => {
    if (!selectedSubCategoryData) {
      alert("Erro: Subcategoria não encontrada.");
      return;
    }

    const porteDefinido = definirPorte(valor, selectedSubCategoryData.porte);

    const empreendimentoInfo = {
      divisao: selectedDivision,
      grupo: selectedGroup,
      atividade: selectedActivity,
      subcategoria: selectedSubCategory,
      unidadeMedida: selectedSubCategoryData.unidade_medida,
      valor,
      porte: porteDefinido,
      potencialPoluidor: selectedSubCategoryData.potencial_poluidor,
    };

    setEmpreendimento(empreendimentoInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    processarEmpreendimento();
  };

  return (
    <>
      <Header />
      <div className="">
        <form className="form-container teste" onSubmit={handleSubmit}>
          {/* Divisão */}
          <label htmlFor="division-select">Selecione uma Divisão:</label>
          <select
            id="division-select"
            value={selectedDivision}
            onChange={handleDivisionChange}
          >
            <option value="" disabled>
              Selecione uma divisão
            </option>
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>

          {/* Grupo */}
          {selectedDivision && (
            <>
              <label htmlFor="group-select">Selecione o Grupo:</label>
              <select
                id="group-select"
                value={selectedGroup}
                onChange={handleGroupChange}
              >
                <option value="" disabled>
                  Selecione um grupo
                </option>
                {groups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Atividades */}
          {selectedGroup && (
            <>
              <label htmlFor="activity-select">Selecione a Atividade:</label>
              <select
                id="activity-select"
                value={selectedActivity}
                onChange={handleActivityChange}
              >
                <option value="" disabled>
                  Selecione uma atividade
                </option>
                {activities.map((activity) => (
                  <option key={activity} value={activity}>
                    {activity}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Subcategorias */}
          {selectedActivity && (
            <>
              <label htmlFor="subcategory-select">Selecione a Subcategoria:</label>
              <select
                id="subcategory-select"
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
              >
                <option value="" disabled>
                  Selecione uma subcategoria
                </option>
                {subCategories.map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Valor */}
          {selectedSubCategory && (
            <>
              <label htmlFor="valor">
                {selectedSubCategoryData?.unidade_medida}:
              </label>
              <input
                id="valor"
                type="number"
                value={valor}
                onChange={handleValorChange}
              />
            </>
          )}

          {/* Resultado */}
          {empreendimento && (
            <p>
              {`Empreendimento de ${empreendimento.porte} Porte e ${empreendimento.potencialPoluidor} Potencial Poluidor.`}
            </p>
          )}

          <button type="submit" disabled={!selectedSubCategory || !valor}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default DynamicSelect;