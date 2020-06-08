import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HolaMundo from "./components/HolaMundo";
// import AdiosMundo from "./components/AdiosMundo";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Daniel Ángel",
    edad:29,
    color: "Rojo"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} />
      </header>
    </div>
  );
}

export default App;
