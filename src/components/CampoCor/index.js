import "./CampoCor.css";

const CampoCor = ({ label, value, aoAoterado, isRequired }) => {
  function aoEscolher(event) {
    aoAoterado(event.target.value);
  }

  return (
    <div className="campo-cor">
      <label>{label}</label>
      <div className="cor-input-wrapper">
        <input
          className="cor-input"
          type="color"
          value={value}
          onChange={aoEscolher}
          isRequired={isRequired}
        />
      </div>
    </div>
  );
};

export default CampoCor;
