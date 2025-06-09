import { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState('');

  function handleSend() {
    if (text.trim() !== '') {
      alert(`Mensagem enviada para ${contact.name} (${contact.email}):\n${text}`);
      setText('');
    }
  }

  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={`Digite uma mensagem para ${contact.name}`}
        onChange={e => setText(e.target.value)}
        rows={4}
        style={{ width: "100%", borderRadius: 4, padding: 8 }}
      />
      <br />
      <button onClick={handleSend}>
        Enviar para {contact.name}
      </button>
    </section>
  );
}