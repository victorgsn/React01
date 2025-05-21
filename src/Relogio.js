import { useEffect, useState } from "react";
import "./relogio.css";

export default function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo); 
  }, []);

  const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const mesesAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

  const diaSemana = diasSemana[horaAtual.getDay()];
  const dia = horaAtual.getDate();
  const mes = mesesAno[horaAtual.getMonth()];
  const ano = horaAtual.getFullYear();

  const horas = horaAtual.getHours().toString().padStart(2, '0');
  const minutos = horaAtual.getMinutes().toString().padStart(2, '0');
  const segundos = horaAtual.getSeconds().toString().padStart(2, '0');

  const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano} - ${horas}:${minutos}:${segundos}`;

  const grauHora = (horaAtual.getHours() % 12) * 30 + horaAtual.getMinutes() * 0.5;
  const grauMinuto = horaAtual.getMinutes() * 6 + horaAtual.getSeconds() * 0.1;
  const grauSegundo = horaAtual.getSeconds() * 6;

  return (
    <div>
      <div className="Centralizar">
      <h2>Meu Relógio</h2>
      <div className="relogio-digital">{dataFormatada}</div>

      <div className="relogio-analogico">
        <div className="ponteiro horas" style={{ transform: `rotate(${grauHora}deg)` }}></div>
        <div className="ponteiro minutos" style={{ transform: `rotate(${grauMinuto}deg)` }}></div>
        <div className="ponteiro segundos" style={{ transform: `rotate(${grauSegundo}deg)` }}></div>
        <div className="centro"></div>

        <div className="numero num-12">12</div>
        <div className="numero num-3">3</div>
        <div className="numero num-6">6</div>
        <div className="numero num-9">9</div>
      </div>
      </div>
    </div>
  );
}
 