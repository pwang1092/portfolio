import React from 'react';
import './about.css';
import ed from "../images/trojans.png";
import research from "../images/chem.png"; 
import robotics from "../images/gears.png"; 

const Skills = () => {
    return (
        <section id='about'>
            <span className = "aboutTitle" >About Me</span>
            <span className = "aboutDesc" >I am currently a freshman pursing my B.S. in Computer Science and Computer Engineering (CECS) at the University of Sothern California. This year, I'm involved in undergraduate research, competitive programming, and software design in robotics. </span>
            
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
                        <p>CURVE undergraduate research fellow researching ray tracing for high frequency in the Wireless Devices and Systems lab.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={robotics} alt="robotics" className="aboutBarImg"></img>
                    <div className="aboutBarText">
                        <h2>Design Teams</h2>
                        <p>Electronics team member in the SC Racing team and formerly FTC robotics software member, working on drive control and sensors.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills; 