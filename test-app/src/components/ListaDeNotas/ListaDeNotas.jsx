import React from "react";
import { CardNota } from "../CardNota/CardNota";
import "./style.css";

//lista com todas os cards criados. É aqui que eu defino o numero de cards no css (grid-template-columns: auto auto;)
export function ListaDeNotas(props) {
  return (
    <ul className="lista-notas">
      {props.notas.map((nota, index) => {
        return (
          <li className="lista-notas_item" key={index}>
            <CardNota notas={nota} />
          </li>
        );
      })}
    </ul>
  );
}
