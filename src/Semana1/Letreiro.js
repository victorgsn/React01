import { useEffect, useState } from "react";

function Letreiro() {
  const frase = "Venha estudar na Fatec";
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setTexto(frase.substring(0, i + 1));
      i++;
      if (i > frase.length) i = 0;
    }, 300);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h3>Letreiro</h3>
      <div className="Letreiro">{texto}</div>
    </>
  );
}

export default Letreiro;
