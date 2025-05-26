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
  return (
    <section>
      <h2>Galeria de Perfis</h2>
      <Profile
        name="Fernanda Montenegro"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Fernanda_Montenegro_2015.jpg"
        size={90}
      />
      <Profile
        name="Pelé"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/2e/Pele_2010.jpg"
        size={100}
      />
      <Profile
        name="Ayrton Senna"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/4e/Ayrton_Senna_8.jpg"
        size={110}
      />
    </section>
  );
}

export { Gallery, Profile };
