import { useEffect, useState } from "react";

function Relogio() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      let data = new Date();
      let h = data.getHours().toString().padStart(2, "0");
      let m = data.getMinutes().toString().padStart(2, "0");
      let s = data.getSeconds().toString().padStart(2, "0");
      setHora(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h3>Relógio</h3>
      <div className="Relogio">{hora}</div>
    </>
  );
}

export default Relogio;
