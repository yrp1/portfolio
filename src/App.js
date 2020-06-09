import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Aboutme from "./components/Aboutme/Aboutme"
import Portfolio from "./components/Portfolio/Portfolio"
import Experience from "./components/Experience/Experience"
import Page from "./Page"

function App() {
  return (
    <div className="App">
    <Page>
      <Navbar/>
      <Aboutme/>
      <Portfolio/>
      <Experience/>
    </Page>
    </div>
  );
}

export default App;
