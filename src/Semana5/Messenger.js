import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import "./Messenger.css";

const contacts = [
  { name: "Victor Gabriel", email: "victorgabriel@mail.com" },
  { name: "João Vitor", email: "joaovictor@mail.com" },
  { name: "Kaynan lima", email: "kaynanlima@mail.com" },
];

export default function Messenger() {
  const [to, setTo] = useState([0]);
  return (
    <section>
      <h2 className="titulo">AMIGOS</h2>
      <div className="messenger-container">
        <ContactList
          contacts={contacts}
          selectedContact={to}
          onSelect={(contact) => setTo(contact)}
        />
        <Chat key={to.email} contact={to} />
      </div>
    </section>
  );
}
