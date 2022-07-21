import React from "react";
// import FlamingoSelfie from "../images/Flamingo_ME2.jpg";

function MyInfo(props) {
  return (
    <div className="App">
      <header className="header centered">
        <div className="Title">
          <h1>Hola!, soy José Luis Freites</h1>
        </div>
      </header>

      <main className="main centered">
        <div className="MyPhoto">
          <img
            className="imgMyPhoto"
            src={require(`../images/${props.photo}.jpg`)}
            alt="MyPhoto"
          />
          {/* <img className="imgMyPhoto" src={props.photo} alt="FlamingoSelfie" /> */}
        </div>

        <div className="Paragraph">
          <p className="p-content">{props.description}</p>
        </div>
        <div className="List">
          <h3>En mi tiempo libre me gusta:</h3>
          <ol className="freeTime">
            <li className="List01">{props.List01}</li>
            <li className="List02">{props.List02}</li>
            <li className="List03">{props.List03}</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

export default MyInfo;
