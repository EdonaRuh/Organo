import "./ListaSuspensa.css";

const ListaSuspensa = ({
  label,
  placeholder,
  value,
  itens,
  aoAoterado,
  required,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => aoAoterado(event.target.value)}
        required={required}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}

        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
