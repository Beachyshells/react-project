import React from "react";
import Weather from "./Weather";
import FormDisplayCity from "./FormDisplayCity";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SeaShell Shorecast</h1>
        <Weather city="Tokyo" />
        <FormDisplayCity />
      </header>
    </div>
  );
}

export default App;
