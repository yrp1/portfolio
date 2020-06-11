import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Aboutme from "./components/Aboutme/Aboutme"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Page from "./Page"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
    <Page>
      <Navbar/>
      <Aboutme/>
      <Projects/>
      <Experience/>
      <Footer/>
    </Page>
    </div>
  );
}

export default App;
