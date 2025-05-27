import React from "react";

function Profile({ name, imageUrl, size = 100 }) {
  return (
    <div style={{ textAlign: "center", margin: "0 16px" }}>
      <img
        className="avatar"
        src={imageUrl}
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: "8px", display: "block", margin: "0 auto" }}
      />
      <p>{name}</p>
    </div>
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
      imageUrl: "/images/willsimth.png",
      size: 100
    }
  ];

  return (
    <section>
      <h2>Galeria de Famosos</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {people.map((person) => (
          <Profile
            key={person.id}
            name={person.name}
            imageUrl={person.imageUrl}
            size={person.size}
          />
        ))}
      </div>
    </section>
  );
}

export { Gallery, Profile };


