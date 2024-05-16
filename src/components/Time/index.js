import hexToRgba from "hex-to-rgba";

import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({
  mudarCor,
  nome,
  cor,
  colaboradores,
  aoDeletar,
  id,
  aoFavoritar,
}) => {
  const background = { backgroundColor: hexToRgba(cor, "0.6") };
  const border = { borderColor: cor };

  const deletarTime = (id, index) => {
    aoDeletar(id, index);
  };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={background}>
        <input
          value={cor}
          type="color"
          className="input-cor"
          onChange={(e) => mudarCor(e.target.value, id)}
        />
        <h3 style={border}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => {
            return (
              <Colaborador
                id={colaborador.id}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                corDeFundo={cor}
                imagem={colaborador.imagem}
                favorito={colaborador.favorito}
                aoDeletar={() => deletarTime(colaborador.id, index)}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
