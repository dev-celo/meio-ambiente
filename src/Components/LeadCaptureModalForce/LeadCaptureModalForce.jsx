import { useState } from "react";
import PropTypes from "prop-types";
import './lead.css';

export default function LeadCaptureModalForce({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empreendimento: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (!/^[0-9]{10,11}$/.test(formData.telefone.replace(/\D/g, ''))) {
      newErrors.telefone = "Telefone inválido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 10) {
      value = `${value.substring(0, 10)}-${value.substring(10)}`;
    }
    
    setFormData(prev => ({ ...prev, telefone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErrors({ submit: "Ocorreu um erro ao enviar. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal-container">
        {/* Cabeçalho fixo */}
        <div className="lead-modal-header">
          <h2 className="lead-modal-title">
            Enquadramento Concluído!
          </h2>
        </div>

        {/* Conteúdo centralizado */}
        <div className="lead-modal-content">
          <p className="lead-modal-description">
            Para enviar o resultado completo e orientações específicas para o seu caso,
            precisamos de algumas informações. Elas serão usadas apenas para contato técnico.
          </p>

          {errors.submit && (
            <div className="lead-modal-error">
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit} className="lead-modal-form">
            <div className="lead-input-group">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={handleChange}
                className={`lead-input ${errors.nome ? 'lead-input-error' : ''}`}
              />
              {errors.nome && <p className="lead-error-message">{errors.nome}</p>}
            </div>

            <div className="lead-input-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className={`lead-input ${errors.email ? 'lead-input-error' : ''}`}
              />
              {errors.email && <p className="lead-error-message">{errors.email}</p>}
            </div>

            <div className="lead-input-group">
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone / WhatsApp"
                value={formData.telefone}
                onChange={handleChange}
                onInput={handlePhoneInput}
                className={`lead-input ${errors.telefone ? 'lead-input-error' : ''}`}
              />
              {errors.telefone && <p className="lead-error-message">{errors.telefone}</p>}
            </div>

            <div className="lead-input-group">
              <input
                type="text"
                name="empreendimento"
                placeholder="Nome do empreendimento (opcional)"
                value={formData.empreendimento}
                onChange={handleChange}
                className="lead-input"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="lead-submit-button"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Informações'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

LeadCaptureModalForce.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};