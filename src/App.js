// ? Prática
// ● Vamos explorar Componentes Funcionais:
// ○ Crie um projeto React do zero (dica: create-react-app)
// ○ Crie um Componente Funcional com o nome MyInfo
// ○ Adicione um elemento de título com seu nome (dica: <h1>)
// ○ Adicione um elemento de parágrafo com uma breve descrição sobre você (dica: <p>)
// ○ Crie uma lista ordenada com três coisas que vocês gosta de fazer nas suas horas livres
// ○ Renderize seu Componente Funcional no navegador
// ○ [EXTRA] Ainda não falamos sobre estilos.... mas que tal pesquisar sobre como isto acontece
// no React e fazer uma tentativa?

import React from "react";
import "./App.css";
import MyInfo from "./components/MyInfo/MyInfo.js";
import FlamingoSelfie from "./images/FlamingoSelfie.jpg";

function App() {
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

export default App;
