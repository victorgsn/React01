import React from "react";

function Profile({ name, imageUrl, size = 100 }) {
  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
      width={size}
      height={size}
      style={{ borderRadius: "8px", margin: "8px" }}
    />
  );
}

function Gallery() {
  const people = [
    {
      id: 1,
      name: "Neymar Jr.",
      imageUrl: "/images/neymar.png",
      size: 110
    },
    {
      id: 2,
      name: "Fernanda Torres",
      imageUrl: "/images/fernandatorres.png",
      size: 100
    },
    {
      id: 3,
      name: "Will Smith",
      imageUrl: "/images/willsmith.png",
      size: 100
    }
  ];

  return (
    <section>
      <h2>Galeria de Famosos</h2>
      {people.map((person) => (
        <div key={person.id}>
          <Profile
            name={person.name}
            imageUrl={person.imageUrl}
            size={person.size}
          />
          <p>{person.name}</p>
        </div>
      ))}
    </section>
  );
}

export { Gallery, Profile };


