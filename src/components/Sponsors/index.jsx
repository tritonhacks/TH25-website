import "./style.css";
import cseucsd from "../../assets/logos/cseucsd.png";

import csfe from "../../assets/logos/csfe-logo.svg"
import sublime from "../../assets/logos/sublime.png";
import desmos from "../../assets/logos/desmos.png";


import janestreet from "../../assets/logos/jane_street.png";
import React from 'react';

const Sponsors = () => {
  return (
    <section id="sponsors-wrapper">
    <div class="rightText">
        <h1 id="sponsors">Sponsors</h1>
        <div id="sponsor-images">
        <a href="https://csforeach.org/" target="_blank" rel="noopener noreferrer">
          <img src={csfe} alt="CSforeach"></img>
        </a>
        <a href="https://cse.ucsd.edu/" target="_blank" rel="noopener noreferrer">
          <img src={cseucsd} alt="UCSD CSE"></img>
        </a>
      
  
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={sublime} alt="Sublime"></img>
        </a>
        <a href="https://desmos.com" target="_blank" rel="noopener noreferrer">
          <img src={desmos} alt="Desmos"></img>
        </a>
        
         <a href="https://www.janestreet.com" target="_blank" rel="noopener noreferrer">
          <img src={janestreet} alt="Jane Street"></img>
        </a>
        
      </div>
        <p id="sponsor-us">
          Companies that are providing us with the resources to come to the rescue. <br></br>
          Interested in sponsoring us? Email us at&nbsp;
          <span>
            <a id="email" href="mailto:tritonhacks@gmail.com">
              tritonhacks@gmail.com
            </a>
          </span>
          .
        </p>

        <p id="dei">
          This program is supported in part by a co-sponsorship from the Office
          of the Vice Chancellor for Equity, Diversity, and Inclusion.  Any views or
          opinions expressed in this program are solely those of the speaker(s) and/or
          organizer(s) and do not necessarily represent those of the Office of the Vice
          Chancellor.
        </p>
      </div>

    </section>
  );
};

export default Sponsors;