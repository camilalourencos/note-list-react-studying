import React, { useState } from "react";
import "./style.css";

//esse trecho pode ser usado pra submeter o email do user e tipo de acesso > vai virar um CardNota
export function Formulario(props) {
  const [titulo, mudançaDeTitulo] = useState({ titulo: "" });
  const [texto, novoTexto] = useState({ texto: "" });

  return (
    //não to feliz com onSubmit e onClick, mas foi o jeito que funcionou, helpa
    <form className="form-cadastro" onSubmit={() => submitNota()}>
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        value={props.titulo}
        onChange={(evento) => mudançaDeTitulo(evento.target.value)}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        value={props.texto}
        onChange={(evento) => novoTexto(evento.target.value)}
      />
      <button
        onClick={submitNota}
        className="form-cadastro_input form-cadastro_submit"
      >
        Criar Nota
      </button>
    </form>
  );

  function submitNota(evento) {
    evento.preventDefault();
    props.criarNota(titulo, texto);
  }
}
