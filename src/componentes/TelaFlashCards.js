import React from "react";
import Cards from "./Cards";

export default function TelaFlashCards() {
  const [pergRespondidas, setPergRespondidas] = React.useState(0);
  const cards = [
    {
      pergunta: "O que é JSX?",
      resposta: "JSX é uma extensão de linguagem do JavaScript",
    },
    {
      pergunta: "React é:",
      resposta:
        "React é uma biblioteca JavaScript para construção de interfaces",
    },
    {
      pergunta: "Componentes devem iniciar com",
      resposta: "Componentes devem iniciar com letra maiúscula",
    },
    {
      pergunta: "Podemos colocar __ dentro do JSX",
      resposta: "Podemos colocar expressões dentro do JSX",
    },
  ];

  return (
    <>
      <div className="tela2">
        <header>
          <img src="./assets/img/logo.png" alt="logo"></img>
          <h1>ZapRecall</h1>
        </header>
        <main>
          <div className="perguntas">
            {cards.map((card, index) => (
              <Cards
                index={index}
                pergunta={card.pergunta}
                resposta={card.resposta}
              />
            ))}
          </div>
        </main>
        <footer>
          <p> {pergRespondidas}/4 concluidos </p>
        </footer>
      </div>
    </>
  );
}