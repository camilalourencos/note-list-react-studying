import React, { useState } from "react";
import { Formulario } from "./components/Formulario/Formulario";
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

export default function App() {
  const [minhasNotas, criarNota] = useState([
    {
      titulo: "hey",
      texto: "hola",
    },

    {
      titulo: "test",
      texto: "test",
    },
  ]);

  function handleCriarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    criarNota([...minhasNotas, novaNota]);
  }

  return (
    <div className="conteudo">
      <Formulario criarNota={handleCriarNota} />
      <ListaDeNotas notas={minhasNotas} />
    </div>
  );
}
