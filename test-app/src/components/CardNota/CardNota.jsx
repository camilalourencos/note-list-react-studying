import React from "react";
import "./style.css";

//o card do usuário com email, tipo de acesso e nome
export function CardNota(props) {
  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_titulo">{props.notas.titulo}</h3>
      </header>
      <p className="card-nota_texto">{props.notas.texto}</p>
    </section>
  );
}
