import "./Accordion.css";
import { useState } from "react";

export default function Accordion() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  return (
    <section className="acordeon">
      <h2 className="titulo">Devil May Cry</h2>
      <h3>Sobre o jogo</h3>
      <Painel
        titulo="História"
        ativo={indiceAtivo === 0}
        aoMostrar={() => setIndiceAtivo(0)}
      >
        Devil May Cry é uma famosa série de jogos de ação da Capcom, conhecida
        pelo protagonista Dante e seu combate estiloso contra demônios. O
        primeiro jogo foi lançado em 2001 e se tornou referência no gênero hack
        and slash.
      </Painel>
      <Painel
        titulo="Curiosidades"
        ativo={indiceAtivo === 1}
        aoMostrar={() => setIndiceAtivo(1)}
      >
        O jogo foi originalmente planejado como um novo Resident Evil, mas
        acabou se tornando uma franquia própria. Dante, o personagem principal,
        é famoso por seu humor sarcástico e habilidades acrobáticas.
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
