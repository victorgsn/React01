import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import "./Messenger.css";

const contacts = [
  { name: "Kaynan Lima", email: "Kaynan@mail.com" },
  { name: "João Vitor", email: "jv@mail.com" },
  { name: "Victor Gabriel", email: "vg@mail.com" },
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
