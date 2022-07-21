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
      <MyInfo />
    </div>
  );
}

export default App;
