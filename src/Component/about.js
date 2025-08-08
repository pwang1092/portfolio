import React from 'react';
import './about.css';
import ed from "../images/trojans.png";
import research from "../images/chem.png"; 
import robotics from "../images/gears.png"; 
import work from "../images/work.png"; 

const Skills = () => {
    return (
        <section id='about'>
            <span className = "aboutTitle" >About Me</span>
            <span className = "aboutDesc" >I am a junior pursing my B.S. at the University of Southern California. Coursework I'm completed include Introduction to Machine Learning, Introduction to Algorithms and Theory of Computing, Introduction to Digital Circuits, and Probability Theory.
Outside of classes, I'm an undergraduate research assistant at the FPGA/Parallel Computing Group led by Professor Prasanna and a general member of QuantSC. </span>
            
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
                        <p>Undergraduate research assistant currently testing embedding cache methods to improve inference of graph transformer networks on edge devices. 
                            Previously a CURVE undergraduate research fellow researching ray tracing for high frequency in the Wireless Devices and Systems lab, completing 
                            point cloud preprocessing module to cluster objects and segment planes to improve raytracing simulation runtime. 
                        </p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={robotics} alt="robotics" className="aboutBarImg"></img>
                    <div className="aboutBarText">
                        <h2>Competitions & Teams</h2>
                        <p>Selected to the USC ICPC team, placing 29th out of 82 at the socal regionals. Previously USC ARC's Battlebots team
                            treasurer and webmaster, and former FTC robotics software member, working on drive control and sensors.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={work} alt="work" className="aboutBarImg"></img>
                    <div className="aboutBarText">
                        <h2>Experience</h2>
                        <p>Previously Software Engineeirng intern at Principal Financial, summer 2024. 
                            Leveraged Drupal and PHP to create environment specific redirects for development, testing, and live sites.
                            Implemented a stock ticker to display live stock prices on Principal’s flagship site.
                            Finalist in Principal Intern Code Jam. Presented our solution that automated code documentation using generative AI.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills; 