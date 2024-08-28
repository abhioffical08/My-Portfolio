import React from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects" 
import "./style.css";
// import Portfolio from './components/Portfolio';

import Contact from './components/Contact';
import Footer from './components/Footer';


// import "./App.css";

const App = () => {
  return (
    <>
     {/* <div className="App">
      <Portfolio />
    </div> */}

      <Header/>
      <main className="wrapper">
      <Featured/>
      <About/>
      <Services/>
      <Projects/>
      <Contact />
      </main>
      <Footer />

    </>
  );
};

export default App;
