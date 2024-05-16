import { useState } from "react";

import "./Formulario.css";
import Botao from "../Botao";
import CampoCor from "../CampoCor";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [time, setTime] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoCriarCard = (event) => {
    event.preventDefault();
    aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const aoCriarTime = (event) => {
    event.preventDefault();
    cadastrarTime({ nome: nomeTime, cor: corTime });
    setNomeTime("");
    setCorTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoCriarCard}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome"
          value={nome}
          isRequired
          aoAoterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite o cargo"
          value={cargo}
          isRequired
          aoAoterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          aoAoterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          label="Time"
          placeholder="Escolha o time correspondente"
          value={time}
          itens={times}
          aoAoterado={(valor) => setTime(valor)}
          required={true}
        />
        <Botao>Criar Card</Botao>
      </form>

      <form onSubmit={aoCriarTime}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome do time"
          value={nomeTime}
          isRequired
          aoAoterado={(valor) => setNomeTime(valor)}
        />
        <CampoCor
          label="Cor"
          value={corTime}
          aoAoterado={(valor) => setCorTime(valor)}
          isRequired
        />

        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
