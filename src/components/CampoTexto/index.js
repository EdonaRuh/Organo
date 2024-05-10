import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, value, aoAoterado, isRequired }) => {
  const aoDigitado = (event) => {
    aoAoterado(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={aoDigitado}
        required={isRequired}
      />
    </div>
  );
};

export default CampoTexto;
