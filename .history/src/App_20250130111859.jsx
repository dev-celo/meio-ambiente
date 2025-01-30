import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import data from "./data/ambiente.json"; // Importando o JSON

const getOptions = (obj, excludeKeys = []) => {
  return Object.keys(obj || {}).filter((key) => !excludeKeys.includes(key));
};

const DynamicSelect = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedSubGroup, setSelectedSubGroup] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [valor, setValor] = useState("");
  const [empreendimento, setEmpreendimento] = useState(null);

  const resetSelections = (level) => {
    if (level === "division") {
      setSelectedGroup("");
      setSelectedSubGroup("");
      setSelectedActivity("");
    } else if (level === "group") {
      setSelectedSubGroup("");
      setSelectedActivity("");
    } else if (level === "subGroup") {
      setSelectedActivity("");
    }
    setValor("");
    setEmpreendimento(null);
  };

  const definirPorte = (valor, porte) => {
    if (!porte) return "Desconhecido";
    if (valor <= porte.Pequeno) return "Pequeno";
    if (valor <= porte.Medio) return "Médio";
    return "Grande";
  };

  const handleSelection = (setter, level) => (event) => {
    setter(event.target.value);
    resetSelections(level);
  };

  const processarEmpreendimento = () => {
    const selectedData = data[selectedDivision]?.[selectedGroup]?.[selectedSubGroup]?.[selectedActivity];
    if (!selectedData) {
      alert("Erro: Atividade não encontrada.");
      return;
    }

    const { unidade_medida, porte, POTENCIAL_POLUIDOR } = selectedData;
    const porteDefinido = definirPorte(valor, porte);

    setEmpreendimento({
      divisao: selectedDivision,
      grupo: selectedGroup,
      subGrupo: selectedSubGroup,
      atividade: selectedActivity,
      unidadeMedida: unidade_medida,
      valor,
      porte: porteDefinido,
      potencialPoluidor: POTENCIAL_POLUIDOR,
    });
  };

  return (
    <>
      <Header />
      <div>
        <form className="form-container" onSubmit={(e) => { e.preventDefault(); processarEmpreendimento(); }}>
          <label>Divisão:</label>
          <select value={selectedDivision} onChange={handleSelection(setSelectedDivision, "division")}>
            <option value="" disabled>Selecione</option>
            {getOptions(data).map((division) => (
              <option key={division} value={division}>{division}</option>
            ))}
          </select>

          {selectedDivision && (
            <>
              <label>Grupo:</label>
              <select value={selectedGroup} onChange={handleSelection(setSelectedGroup, "group")}>
                <option value="" disabled>Selecione</option>
                {getOptions(data[selectedDivision]).map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </>
          )}

          {selectedGroup && (
            <>
              <label>Subgrupo:</label>
              <select value={selectedSubGroup} onChange={handleSelection(setSelectedSubGroup, "subGroup")}>
                <option value="" disabled>Selecione</option>
                {getOptions(data[selectedDivision][selectedGroup], ["Atividades", "POTENCIAL POLUIDOR"]).map((subGroup) => (
                  <option key={subGroup} value={subGroup}>{subGroup}</option>
                ))}
              </select>
            </>
          )}

          {selectedSubGroup && (
            <>
              <label>Atividade:</label>
              <select value={selectedActivity} onChange={handleSelection(setSelectedActivity, "activity")}>
                <option value="" disabled>Selecione</option>
                {getOptions(data[selectedDivision][selectedGroup][selectedSubGroup]).map((activity) => (
                  <option key={activity} value={activity}>{activity}</option>
                ))}
              </select>
            </>
          )}

          {selectedActivity && (
            <>
              <label>{data[selectedDivision][selectedGroup][selectedSubGroup]?.[selectedActivity]?.unidade_medida}:</label>
              <input type="number" value={valor} onChange={(e) => setValor(Number(e.target.value))} />
            </>
          )}

          {empreendimento && (
            <p>{`Empreendimento de porte ${empreendimento.porte}, potencial poluidor (${empreendimento.potencialPoluidor}).`}</p>
          )}

          <button type="submit" disabled={!selectedActivity || !valor}>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default DynamicSelect;
