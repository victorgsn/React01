import React from "react";

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <span style={{ color: "gray" }}>
          <del>{name}</del> ✔
        </span>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  const items = [
    { id: 1, name: "Escova de dentes", isPacked: true },
    { id: 2, name: "Carregador de celular", isPacked: false },
    { id: 3, name: "Camisas", isPacked: true },
    { id: 4, name: "Passaporte", isPacked: false },
    { id: 5, name: "Tênis", isPacked: true },
    { id: 6, name: "Livro", isPacked: false },
  ];

  const total = items.length;
  const packed = items.filter((item) => item.isPacked).length;

  return (
    <section>
      <h2>Lista de Viagem</h2>
      <p>
        {packed} de {total} itens já estão na mala.
      </p>
      <ul>
        {items.map((item) => (
          <Item key={item.id} name={item.name} isPacked={item.isPacked} />
        ))}
      </ul>
    </section>
  );
}
