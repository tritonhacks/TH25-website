import "./style.css";
import React from 'react';
import extinguisher from "../../assets/extinguisher.svg"
import clouds from "../../assets/Clouds.svg"

const About = () => {
    return (
        <section id="about-wrapper">
            <div id="about-content">
                <div id="about">
                    <div className="flex-wrapper">
                        <div className="about-text">
                    <h1 id="about-title">ABOUT</h1>
                    <p id="about-paragraph">
                        TritonHacks is a two-day high school level hackathon aimed at 
                        providing greater access to CS education, specifically for 
                        disadvantaged local communities lacking their own resources to 
                        prepare students for careers in STEM fields. This year, the theme is Crisis!
                        <br></br><br></br>
                        If you're interested in becoming a recruit, scroll down to fill out our application!

                        TritonHacks is meant for everyone of any skill or experience level! We want you to
                        have fun and learn something new!
                 
                        <br></br><br></br>
                        Learn more about our other events <a href="https://csforeach.org/"><i>here!</i></a>
                        <svg>...</svg>
                        </p>
                        </div>
                    <img src={extinguisher} alt="extinguisher" id="extinguisher" />
                    </div>
                    
                </div>
            </div>
        </section>

    );
};


export default About;
