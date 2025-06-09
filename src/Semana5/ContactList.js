import "./ContactList.css";

export default function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              onClick={() => onSelect(contact)}
              style={{
                fontWeight:
                  selectedContact?.email === contact.email ? "bold" : "normal",
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
