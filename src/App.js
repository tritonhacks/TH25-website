import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import About from "./components/About";
import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <div className="section1">
        <Navbar />
        <Landing />
      </div>
      <div className="section2">
        <About />
        <FAQ />
        <Sponsors />
        <Contact />
      </div>
    </div>
  );
};

export default App;