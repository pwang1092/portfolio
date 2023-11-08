import React from 'react';
import './about.css';
import ed from "../images/trojans.png";
import research from "../images/chem.png"; 
import robotics from "../images/gears.png"; 

const Skills = () => {
    return (
        <section id='about'>
            <span className = "aboutTitle" >About Me</span>
            <span className = "aboutDesc" >I am a freshman pursing my B.S. at the University of Southern California. Coursework I'm completing this year includes: Discrete Methods in CS, Introduction to Embedded Systems, Data Structures & Object Oriented Design, and Probability Theory.
Outside of classes, I'm an undergraduate research assistant, competitor on the USC ICPC team, and robotics software developer.</span>
            
            <div className = "aboutBars">
                <div className="aboutBar">
                    <img src={ed} alt="USC" className="aboutBarImg"></img>
                    <div className="aboutBarText">
                        <h2>Education</h2>
                        <p>Presidential Scholar at USC (awarded to approximately 5% of students) and Viterbi Scholar at the Viterbi School of Engineering.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={research} alt="research" className="aboutBarImg"></img>
                    <div className="aboutBarText">
                        <h2>Research</h2>
                        <p>CURVE undergraduate research fellow researching ray tracing for high frequency in the Wireless Devices and Systems lab. 
                            Implemented plane extraction script using point cloud library. 
                        </p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={robotics} alt="robotics" className="aboutBarImg"></img>
                    <div className="aboutBarText">
                        <h2>Competitions & Teams</h2>
                        <p>Selected to the USC ICPC team, placing 29th out of 82 at the socal regionals. Battlebots team
                            treasurer and webmaster, and former FTC robotics software member, working on drive control and sensors.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills; 