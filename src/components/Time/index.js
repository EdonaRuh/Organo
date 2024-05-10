import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  const background = { backgroundColor: corSecundaria };
  const border = { borderColor: corPrimaria };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={background}>
        <h3 style={border}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
