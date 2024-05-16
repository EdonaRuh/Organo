import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // cria ids não repetidos

import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { ...colaborador, id: uuidv4() };
    setColaboradores([...colaboradores, novoColaborador]);
  };

  const [times, setTimes] = useState([
    { id: uuidv4(), favorito: false, nome: "Programação", cor: "#57C278" },
    { id: uuidv4(), favorito: false, nome: "Front-End", cor: "#82CFFA" },
    { id: uuidv4(), favorito: false, nome: "Data Science", cor: "#A6D157" },
    { id: uuidv4(), favorito: false, nome: "Devops", cor: "#E06B69" },
    { id: uuidv4(), favorito: false, nome: "Ux e Design", cor: "#D86EBF" },
    { id: uuidv4(), favorito: false, nome: "Mobile", cor: "#FEBA05" },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  function deletarColaborador(id) {
    setColaboradores((prevColaboradores) =>
      prevColaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
        cadastrarTime={cadastrarTime}
      />
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
