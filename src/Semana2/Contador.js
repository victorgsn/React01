import React, { useState } from "react";
import "./Contador.css";

const Contador = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const alterarContagem = (genero, valor) => {
    if (genero === "homens") {
      setHomens((prev) => Math.max(0, prev + valor));
    } else {
      setMulheres((prev) => Math.max(0, prev + valor));
    }
  };

  const resetContador = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador">
      <div className="total">
        <h3>Total</h3>
        <div className="input-total">{total}</div>
        <button className="botao-reset" onClick={resetContador}>
          <img src="/images/reset.png" alt="Resetar" />
        </button>
      </div>
      <div className="secoes-container">
        <div className="secao">
          <img src="/images/men.png" alt="Homens" />
          <div className="botoes">
            <button onClick={() => alterarContagem("homens", 1)}>+</button>
            <button onClick={() => alterarContagem("homens", -1)}>−</button>
          </div>
          <h5>Homens</h5>
          <div className="input-contador">{homens}</div>
        </div>
        <div className="secao">
          <img src="/images/woman.png" alt="Mulheres" />
          <div className="botoes">
            <button onClick={() => alterarContagem("mulheres", 1)}>+</button>
            <button onClick={() => alterarContagem("mulheres", -1)}>−</button>
          </div>
          <h5>Mulheres</h5>
          <div className="input-contador">{mulheres}</div>
        </div>
      </div>
    </div>
  );
};

export default Contador;
