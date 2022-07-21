import React from "react";
import FlamingoSelfie from "../images/Flamingo_ME2.jpg";

function MyInfo(props) {
  return (
    <div className="App">
      <header className="header centered">
        <div className="Title">
          <h1>Hola!, soy José Luis Freites</h1>
        </div>
      </header>

      <main className="centered">
        <div className="MyPhoto">
          <img
            className="imgMyPhoto"
            src={FlamingoSelfie}
            alt="FlamingoSelfie"
          />
        </div>

        <div className="Paragraph">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            cupiditate porro omnis quibusdam praesentium doloremque fugit sit
            obcaecati ullam possimus quia dolorem quae impedit similique atque,
            explicabo iusto vero officia! Quis, nemo aspernatur autem possimus
            ad modi aliquid perspiciatis vitae beatae delectus omnis aperiam
            necessitatibus laboriosam odit debitis quibusdam deserunt eligendi
            cum molestias provident. Non aut provident cum incidunt quo.
            Adipisci doloremque harum quia aut officia ea dolorum maxime minus
            iusto distinctio at est, earum laudantium, beatae recusandae.
            Excepturi ratione aperiam vitae, quasi similique minima. Illum
            officiis quaerat possimus veritatis? Quasi excepturi porro magni
            mollitia atque voluptate ipsam pariatur sequi a, non ut natus
            necessitatibus eligendi cupiditate minima amet praesentium nisi
            suscipit est veniam accusamus eveniet.
          </p>
        </div>

        <div className="List">
          <h3>Cosas que me gustan hacer:</h3>
          <ol>
            <li>Compartir con mi familia</li>
            <li>Leer y estar al día sobre tecnología en Computación</li>
            <li>Ver películas y escuchar buena música</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

export default MyInfo;
