import React from 'react';
import './about.css';
import ed from "../images/trojans.png";
import research from "../images/chem.png"; 
import robotics from "../images/gears.png"; 

const Skills = () => {
    return (
        <section id='about'>
            <span className = "aboutTitle" >About Me</span>
            <span className = "aboutDesc" >I am a freshman pursing my B.S. at the University of Sothern California. I have experience doing research, competitive programming, and software design in robotics. In my free time, I enjoy playing chess, practicing piano, and daydreaming.</span>
            
            <div className = "aboutBars">

                <div className="aboutBar">
                    <img src={ed} alt="USC" className="aboutBarImg"></img>
                    <div className="aboutBarText">
                        <h2>Education</h2>
                        <p>Presidential Scholar at USC and Viterbi Scholar at the Viterbi School of Engineering.</p>
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
                        <p>Electronics team member in the SC Racing team and formerly FTC robotics software member.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills; 