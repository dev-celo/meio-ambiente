import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";

const DynamicSelect = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueGroup, setSelectedValueGroup] = useState("");
  const [selectedValueSubGroup, setSelectedValueSubGroup] = useState("");
  const [selectedTipology, setSelectedTipology] = useState("");
  const [animalQuantity, setAnimalQuantity] = useState("");

  // Lista de opções para o select
  const options = [
    { value: "AGRICULTURA E FLORESTAS", label: "AGRICULTURA E FLORESTAS" },
    { value: "MINERAÇÃO", label: "MINERAÇÃO" },
    { value: "SILVICULTURA", label: "SILVICULTURA" },
  ];

  const subOption = [
    { value: "A1", label: "Produtos da Agricultura" },
    { value: "A2", label: "Criação de Animais" },
    { value: "A3", label: "Criações Confinadas e Semi-confinadas" },
  ];

  const size = [
    { value: "PEQUENA", label: "ATIVIDADES SUJEITAS A AUTORIZAÇÃO POR PROCEDIMENTO ESPECIAL DE LICENCIAMENTO, REGISTRO NO CEFIR E REQUERIMENTO, QUANDO FOR O CASO, DAS DEMAIS AUTORIZAÇÕES COMPETENTES, TAIS COMO: ASV E OUTORGA" },
    { value: "MEDIA", label: "Pecuária: ATIVIDADE SUJEITA A AUTORIZAÇÃO POR PROCEDIMENTO ESPECIAL DE LICENCIAMENTO, REGISTRO NO CEFIR E REQUERIMENTO, QUANDO FOR O CASO, DAS DEMAIS AUTORIZAÇÕES COMPETENTES, TAIS COMO: ASV E OUTORGA" },
    { value: "GRANDE", label: "Criações Confinadas e Semi-confinadas" },
  ];

  const others = [
    { value: "BOVINOS", label: "Bovinos e Bubalinos" },
    { value: "AVES", label: "Aves e Pequenos Mamíferos" },
    { value: "CAPRINOS", label: "Caprinos e Ovinos" },
  ];

  // Handlers
  const handleChange = (event) => setSelectedValue(event.target.value);

  const handleChangeGroup = (event) => setSelectedValueGroup(event.target.value);

  const handleChangeSubGroup = (event) => setSelectedValueSubGroup(event.target.value);

  const handleChangeTipology = (event) => setSelectedTipology(event.target.value);

  const handleAnimalQuantityChange = (event) => setAnimalQuantity(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      selectedValue,
      selectedValueGroup,
      selectedValueSubGroup,
      selectedTipology,
      animalQuantity,
    });
    alert("Dados enviados com sucesso!");
  };

  return (
    <div className="">
      <Header />
      <form className="form-container teste" onSubmit={handleSubmit}>
        <label htmlFor="division-select">Selecione uma Divisão:</label>
        <select id="division-select" value={selectedValue} onChange={handleChange}>
          <option value="" disabled>
            Selecione uma divisão
          </option>
          {options.map((data) => (
            <option key={data.value} value={data.value}>
              {data.label}
            </option>
          ))}
        </select>

        {selectedValue && (
          <>
            <label htmlFor="group-select">Selecione o Grupo:</label>
            <select id="group-select" value={selectedValueGroup} onChange={handleChangeGroup}>
              <option value="" disabled>
                Selecione um grupo
              </option>
              {subOption.map((data) => (
                <option key={data.value} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedValueGroup && (
          <>
            <label htmlFor="subgroup-select">Selecione o Subgrupo:</label>
            <select
              id="subgroup-select"
              value={selectedValueSubGroup}
              onChange={handleChangeSubGroup}
            >
              <option value="" disabled>
                Selecione um subgrupo
              </option>
              {size.map((data) => (
                <option key={data.value} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedValueSubGroup && (
          <>
            <label htmlFor="tipology-select">Selecione uma Tipologia:</label>
            <select
              id="tipology-select"
              value={selectedTipology}
              onChange={handleChangeTipology}
            >
              <option value="" disabled>
                Selecione uma tipologia
              </option>
              {others.map((data) => (
                <option key={data.value} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
          </>
        )}

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

        <p>{`Empreendimento de Grande porte e Alto potencial poluidor. Classe 5`}</p>

        <button type="submit" disabled={!selectedTipology}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default DynamicSelect;
