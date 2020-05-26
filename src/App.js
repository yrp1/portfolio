import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Aboutme from "./components/Aboutme/Aboutme"
import Portfolio from "./components/Portfolio/Portfolio"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutme/>
      <Portfolio/>
    </div>
  );
}

export default App;
