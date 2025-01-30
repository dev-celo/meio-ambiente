import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import data from "./data/ambiente.json"; // Importando o JSON

const DynamicSelect = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedSubGroup, setSelectedSubGroup] = useState("");
  const [selectedTipology, setSelectedTipology] = useState("");
  const [animalQuantity, setAnimalQuantity] = useState("");

  // Handlers
  const handleDivisionChange = (event) => setSelectedDivision(event.target.value);
  const handleGroupChange = (event) => setSelectedGroup(event.target.value);
  const handleSubGroupChange = (event) => setSelectedSubGroup(event.target.value);
  const handleTipologyChange = (event) => setSelectedTipology(event.target.value);
  const handleAnimalQuantityChange = (event) => setAnimalQuantity(event.target.value);

  // Obter opções dinâmicas com base nas seleções
  const divisions = Object.keys(data);
  const groups = selectedDivision ? Object.keys(data[selectedDivision]) : [];
  const subGroups = selectedGroup && data[selectedDivision][selectedGroup]?.Subcategorias
    ? Object.keys(data[selectedDivision][selectedGroup].Subcategorias)
    : [];
  const tipologies = selectedSubGroup && data[selectedDivision][selectedGroup]?.Subcategorias?.[selectedSubGroup]?.TIPOLOGIA
    ? [data[selectedDivision][selectedGroup].Subcategorias[selectedSubGroup].TIPOLOGIA]
    : [];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      selectedDivision,
      selectedGroup,
      selectedSubGroup,
      selectedTipology,
      animalQuantity,
    });
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
          {selectedGroup && data[selectedDivision][selectedGroup]?.Subcategorias && (
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

          {/* Tipologia */}
          {selectedSubGroup && tipologies.length > 0 && (
            <>
              <label htmlFor="tipology-select">Selecione uma Tipologia:</label>
              <select id="tipology-select" value={selectedTipology} onChange={handleTipologyChange}>
                <option value="" disabled>Selecione uma tipologia</option>
                {tipologies.map((tipology) => (
                  <option key={tipology} value={tipology}>{tipology}</option>
                ))}
              </select>
            </>
          )}

          {/* Quantidade de Animais */}
          {selectedTipology && (
            <>
              <label htmlFor="animal-quantity">Quantidade de Animais:</label>
              <input
                id="animal-quantity"
                type="number"
                value={animalQuantity}
                onChange={handleAnimalQuantityChange}
              />
            </>
          )}

          {/* Resultado */}
          {selectedTipology && animalQuantity && (
            <p>{`Empreendimento de Grande porte e Alto potencial poluidor. Classe 5`}</p>
          )}

          <button type="submit" disabled={!selectedTipology}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default DynamicSelect;