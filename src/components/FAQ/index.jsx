import "./style.css";
import React from 'react';
import firstAid from "../../assets/first_aid_kit.svg";


const FAQ = () => {
    return (
        <section id="faq">
            <div id="faq-header">
            <img src={firstAid} alt="first aid kit" id="firstAid" />
            <h1 id="faq-title">FAQs</h1>
            <div id="questions">
                <div className="faq-item">
                <div className="question">
                    <p>What is a hackathon?</p>
                </div>
                <p className="answer">
                    It’s basically a sprint for programmers! Our hackathon is targeted for high school students but 
                    typically a group of people interested in
                    programming come together to create a project in a sprint-like event!
                </p>
                </div>
                <div className="faq-item midway">
                <div className="question midway">
                    <p>What if I don’t know anything about coding?</p>
                </div>
                <p className="answer midway">
                    No worries! Our hackathon is designed for high school students of all
                    experience levels! We have starter kits for everyone, no matter how
                    much experience you have had!
                </p>
                </div>
                
                <div className="question">
                    <p>Do I work individually or with a team?</p>
                </div>
                <p className="answer">
                    Either! We strongly recommend working in a team as hackathons are
                    designed to be completed in groups and the work can be distributed
                    for a more collaborative atmosphere! We have a <b>4 person max!</b>
                </p>
                <div className="faq-item">
                    <div className="question">
                        <p>How do I find a team?</p>
                    </div>
                    <p className="answer">
                        During registration we ask if you already have a team, if you do,
                        great! If not we will form teams with students who are also interested
                        in working in teams.
                    </p>
                </div>
                <div className="faq-item">
                    <div className="question">
                        <p>What will a day at the hackathon look like?</p>
                    </div>
                    <p className="answer">
                        While you are working to complete your project, there will be food provided, and there will be workshops and panels throughout the day to teach you valuable skills and concepts
                    </p>
                </div>
                </div>
            </div>
        
        </section>
    );
};

export default FAQ;
