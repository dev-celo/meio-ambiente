import { useState, useEffect } from "react";
import data from "./data/data.json";

const DynamicSelect = () => {
  const [divisao, setDivisao] = useState("");
  const [grupo, setGrupo] = useState("");
  const [subGrupo, setSubGrupo] = useState("");
  const [atividade, setAtividade] = useState("");
  const [options, setOptions] = useState({ grupos: [], subGrupos: [], atividades: [] });
  const [detalhes, setDetalhes] = useState({ unidadeMedida: "", porte: "", potencialPoluidor: "" });

  useEffect(() => {
    if (divisao) {
      setOptions((prev) => ({
        ...prev,
        grupos: Object.keys(data[divisao] || {}),
        subGrupos: [],
        atividades: [],
      }));
      setGrupo("");
      setSubGrupo("");
      setAtividade("");
    }
  }, [divisao]);

  useEffect(() => {
    if (grupo) {
      setOptions((prev) => ({
        ...prev,
        subGrupos: Object.keys(data[divisao]?.[grupo] || {}),
        atividades: [],
      }));
      setSubGrupo("");
      setAtividade("");
    }
  }, [grupo]);

  useEffect(() => {
    if (subGrupo) {
      setOptions((prev) => ({
        ...prev,
        atividades: Object.keys(data[divisao]?.[grupo]?.[subGrupo]?.Subcategorias || {}),
      }));
      setAtividade("");
    }
  }, [subGrupo]);

  useEffect(() => {
    if (atividade) {
      const selectedData = data[divisao]?.[grupo]?.[subGrupo]?.Subcategorias?.[atividade] || {};
      
      setDetalhes({
        unidadeMedida: selectedData.unidade_medida || "",
        porte: selectedData.porte || "",
        potencialPoluidor: selectedData["POTENCIAL POLUIDOR"] || selectedData.potencial_poluidor || "",
      });
    }
  }, [atividade]);

  return (
    <div>
      <select value={divisao} onChange={(e) => setDivisao(e.target.value)}>
        <option value="">Selecione uma Divisão</option>
        {Object.keys(data).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      
      <select value={grupo} onChange={(e) => setGrupo(e.target.value)} disabled={!divisao}>
        <option value="">Selecione um Grupo</option>
        {options.grupos.map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      
      <select value={subGrupo} onChange={(e) => setSubGrupo(e.target.value)} disabled={!grupo}>
        <option value="">Selecione um Subgrupo</option>
        {options.subGrupos.map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      
      <select value={atividade} onChange={(e) => setAtividade(e.target.value)} disabled={!subGrupo}>
        <option value="">Selecione uma Atividade</option>
        {options.atividades.map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      
      {atividade && (
        <div>
          <p>Unidade de Medida: {detalhes.unidadeMedida}</p>
          <p>Porte: {detalhes.porte}</p>
          <p>Potencial Poluidor: {detalhes.potencialPoluidor}</p>
        </div>
      )}
    </div>
  );
};

export default DynamicSelect;
