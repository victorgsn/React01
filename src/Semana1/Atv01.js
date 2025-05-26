import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import { Link } from "react-router-dom";

export default function Atv01() {
  return (
    <div>
      <Relogio />
      <Letreiro />
      <Link to="/" className="Voltar">
        Voltar
      </Link>
    </div>
  );
}
