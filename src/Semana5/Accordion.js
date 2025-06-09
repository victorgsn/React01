import "./Accordion.css";
import { useState } from "react";

export default function Accordion() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  return (
    <section className="acordeon">
      <h2 className="titulo">X men 97</h2>
      <h3>Sobre a série</h3>
      <Painel
        titulo="História"
        ativo={indiceAtivo === 0}
        aoMostrar={() => setIndiceAtivo(0)}
      >
        **X-Men '97** é uma série animada lançada em 2024 pela Marvel Studios, servindo como continuação direta da clássica 
        animação dos anos 1990, **X-Men: The Animated Series**. A trama retoma a história logo após os eventos
         da série original, com os X-Men enfrentando novas ameaças enquanto lidam com a perda do Professor Xavier. 
         A série mantém o estilo visual retrô modernizado, mistura ação, drama e temas sociais, e traz de volta 
         personagens icônicos como Ciclope, Jean Grey, Tempestade, Wolverine e Magneto — que agora assume um papel 
         central como líder dos X-Men.

      </Painel>
      <Painel
        titulo="Curiosidades"
        ativo={indiceAtivo === 1}
        aoMostrar={() => setIndiceAtivo(1)}
      >
        🎬 É uma continuação direta da série animada dos anos 90.
        🎙️ Muitos dubladores originais retornaram, como os de Wolverine e Vampira.
        🧲 Magneto assume a liderança dos X-Men após a ausência do Professor Xavier.
        📚 Traz referências diretas aos quadrinhos clássicos, especialmente dos anos 80/90.
        🌟 Foi um grande sucesso de crítica, elogiada pela fidelidade e maturidade da história.
      </Painel>
    </section>
  );
}

function Painel({ titulo, children, ativo, aoMostrar }) {
  return (
    <section className="painel">
      <h3>{titulo}</h3>
      {ativo ? <p>{children}</p> : <button onClick={aoMostrar}>Mostrar</button>}
    </section>
  );
}
