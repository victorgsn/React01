import { useEffect, useRef, useState } from "react";
import "./Relogio.css";

function Relogio() {
  const [dataFormatada, setDataFormatada] = useState("");
  const ponteiroHora = useRef(null);
  const ponteiroMinuto = useRef(null);
  const ponteiroSegundo = useRef(null);

  useEffect(() => {
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const mesesAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    function atualizarRelogio() {
      const data = new Date();

      const diaSemana = diasSemana[data.getDay()];
      const dia = data.getDate();
      const mes = mesesAno[data.getMonth()];
      const ano = data.getFullYear();

      const horas = data.getHours().toString().padStart(2, "0");
      const minutos = data.getMinutes().toString().padStart(2, "0");
      const segundos = data.getSeconds().toString().padStart(2, "0");

      setDataFormatada(`${diaSemana}, ${dia} de ${mes} de ${ano} - ${horas}:${minutos}:${segundos}`);

      const grauHora = (data.getHours() % 12) * 30 + data.getMinutes() * 0.5;
      const grauMinuto = data.getMinutes() * 6 + data.getSeconds() * 0.1;
      const grauSegundo = data.getSeconds() * 6;

      if (ponteiroHora.current) ponteiroHora.current.style.transform = `rotate(${grauHora}deg)`;
      if (ponteiroMinuto.current) ponteiroMinuto.current.style.transform = `rotate(${grauMinuto}deg)`;
      if (ponteiroSegundo.current) ponteiroSegundo.current.style.transform = `rotate(${grauSegundo}deg)`;
    }

    atualizarRelogio();
    const intervalo = setInterval(atualizarRelogio, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (

    <div className="container-relogio">
    <h3>Meu Relógio</h3>
      <div className="relogio-digital">{dataFormatada}</div>

      <div className="relogio-analogico">
        <div className="ponteiro horas" ref={ponteiroHora}></div>
        <div className="ponteiro minutos" ref={ponteiroMinuto}></div>
        <div className="ponteiro segundos" ref={ponteiroSegundo}></div>
        <div className="centro"></div>

        <div className="numero num-12">12</div>
        <div className="numero num-3">3</div>
        <div className="numero num-6">6</div>
        <div className="numero num-9">9</div>
      </div>
    </div>
  );
}

export default Relogio;

