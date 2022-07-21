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
import MyInfo from "./components/MyInfo/MyInfo";
// import FlamingoSelfie from "./images/FlamingoSelfie.jpg";

function App() {
  return (
    <div className="App">
      <MyInfo
        name="José Luis Freites"
        photo=""
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
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
    suscipit est veniam accusamus eveniet."
        List01="Compartir con mi familia"
        List02="Leer y estar al día sobre tecnología en Computación"
        List03="Ver películas, escuchar buena música y jugar en el PC"
      />
    </div>
  );
}

export default App;
