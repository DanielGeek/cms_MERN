import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HolaMundo from "./components/HolaMundo";
// import AdiosMundo from "./components/AdiosMundo";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Daniel Angel" edad="29" />
        <Saludar name="Jessica " edad="35" />
      </header>
    </div>
  );
}

export default App;
