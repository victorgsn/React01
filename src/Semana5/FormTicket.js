import { useState } from "react";
import "./FormTicket.css";

export default function FormTicket() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = (firstName + " " + lastName).trim();

  return (
    <section className="form-ticket-container">
      <h2 className="titulo">Formulário de Ingresso</h2>
      <form>
        <label>
          Nome:
          <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        </label>
        <label>
          Sobrenome:
          <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </label>
      </form>
      <p>
        Seu ingresso será emitido para: <b>{fullName || "..."}</b>
      </p>
    </section>
  );
}
