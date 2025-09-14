import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SeaShell Shorecast</h1>
        <Weather />
      </header>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/169424-michelle-durham"
          target="_blank"
          rel="noreferrer"
          className=".App-link"
        >
          {" "}
          Michelle Durham{" "}
        </a>
        🐞 open sourced on{" "}
        <a
          href="https://github.com/Beachyshells/react-project"
          target="_blank"
          rel="noreferrer"
          className=".App-link"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://seashells-shorecast.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className=".App-link"
        >
          Netlify
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
