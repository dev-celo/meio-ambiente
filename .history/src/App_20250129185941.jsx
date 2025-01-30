import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import data from "./data/ambiente.json"; // Importando o JSON

const DynamicSelect = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedSubGroup, setSelectedSubGroup] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [valor, setValor] = useState("");
  const [empreendimento, setEmpreendimento] = useState(null);

  // Função para definir o porte
  const definirPorte = (valor, porte) => {
    if (valor <= porte.Pequeno) {
      console.log("Pequeno");
      return "Pequeno";
    } else if (valor <= porte.Medio) {
      console.log("medio");
      return "Medio";
    } else {
      return "Grande";
    }
  };

  // Handlers
  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedGroup("");
    setSelectedSubGroup("");
    setSelectedActivity("");
    setValor("");
    setEmpreendimento(null);
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setSelectedSubGroup("");
    setSelectedActivity("");
    setValor("");
    setEmpreendimento(null);
  };

  const handleSubGroupChange = (event) => {
    setSelectedSubGroup(event.target.value);
    setSelectedActivity("");
    setValor("");
    setEmpreendimento(null);
  };

  const handleActivityChange = (event) => setSelectedActivity(event.target.value);
  const handleValorChange = (event) => setValor(Number(event.target.value));

  // Obter opções dinâmicas com base nas seleções
  const divisions = Object.keys(data);
  const groups = selectedDivision ? Object.keys(data[selectedDivision]) : [];
  const subGroups = selectedGroup && data[selectedDivision][selectedGroup]
    ? Object.keys(data[selectedDivision][selectedGroup]).filter(
      (key) => key !== "Atividades" && key !== "POTENCIAL POLUIDOR"
    )
    : [];
  const activities = selectedGroup && data[selectedDivision][selectedGroup]?.Atividades
    ? [data[selectedDivision][selectedGroup].Atividades]
    : [];

  // Função para processar o empreendimento
  const processarEmpreendimento = () => {
    const divisao = selectedDivision;
    const grupo = selectedGroup;
    const subGrupo = selectedSubGroup;
    const atividade = selectedActivity;
  
    let selectedData = data[divisao]?.[grupo]?.[subGrupo];
  
    // Verifica se existe uma camada "Subcategorias"
    if (selectedData?.Subcategorias) {
      selectedData = selectedData.Subcategorias[atividade]; // Ajusta para a subcategoria escolhida
    }
  
    
    console.log(unidadeMedida);
    const firstKey = selectedData ? Object.keys(selectedData)[0] : null;
    const unidadeMedida = firstKey ? selectedData[firstKey]?.unidade_medida;
    const porte = firstKey ? selectedData[firstKey]?.porte : undefined;
    const potencialPoluidor = selectedData?.POTENCIAL_POLUIDOR || selectedData?.potencial_poluidor;
  
    console.log("Dados selecionados:", selectedData);
    console.log("Porte encontrado:", porte);
  
    if (!porte) {
      alert("Erro: Não foi possível definir o porte. Verifique as seleções.");
      return;
    }
  
    const porteDefinido = definirPorte(valor, porte);
  
    const empreendimentoInfo = {
      divisao,
      grupo,
      subGrupo,
      atividade,
      unidadeMedida,
      valor,
      porte: porteDefinido,
      potencialPoluidor,
    };
  
    setEmpreendimento(empreendimentoInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    processarEmpreendimento();
    alert("Dados enviados com sucesso!");
  };

  return (
    <>
      <Header />
      <div className="">
        <form className="form-container teste" onSubmit={handleSubmit}>
          {/* Divisão */}
          <label htmlFor="division-select">Selecione uma Divisão:</label>
          <select id="division-select" value={selectedDivision} onChange={handleDivisionChange}>
            <option value="" disabled>Selecione uma divisão</option>
            {divisions.map((division) => (
              <option key={division} value={division}>{division}</option>
            ))}
          </select>

          {/* Grupo */}
          {selectedDivision && (
            <>
              <label htmlFor="group-select">Selecione o Grupo:</label>
              <select id="group-select" value={selectedGroup} onChange={handleGroupChange}>
                <option value="" disabled>Selecione um grupo</option>
                {groups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </>
          )}

          {/* Subgrupo */}
          {selectedGroup && subGroups.length > 0 && (
            <>
              <label htmlFor="subgroup-select">Selecione o Subgrupo:</label>
              <select id="subgroup-select" value={selectedSubGroup} onChange={handleSubGroupChange}>
                <option value="" disabled>Selecione um subgrupo</option>
                {subGroups.map((subGroup) => (
                  <option key={subGroup} value={subGroup}>{subGroup}</option>
                ))}
              </select>
            </>
          )}

          {/* Atividades */}
          {selectedGroup && activities.length > 0 && (
            <>
              <label htmlFor="activity-select">Selecione a Atividade:</label>
              <select id="activity-select" value={selectedActivity} onChange={handleActivityChange}>
                <option value="" disabled>Selecione uma atividade</option>
                {activities.map((activity, index) => (
                  <option key={index} value={activity}>{activity}</option>
                ))}
              </select>
            </>
          )}

          {/* Valor */}
          {selectedSubGroup && (
            <>
              <label htmlFor="valor">
                {data[selectedDivision][selectedGroup][selectedSubGroup]?.unidade_medida}:
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
              {`Empreendimento de ${empreendimento.porte} porte e ${empreendimento.potencialPoluidor} potencial poluidor.`}
            </p>
          )}

          <button type="submit" disabled={!selectedSubGroup || !valor}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default DynamicSelect;