import { Link } from "react-router-dom";
import Contador from "./Contador";

export default function Atv02() {
  return (
    <>
      <Contador />
      <div className="centralizar">
        <Link to="/" className="Voltar">
          Voltar
        </Link>
      </div>
    </>
  );
}
