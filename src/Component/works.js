import React from 'react';
import './works.css'; 
import web from '../images/web.png';
import opencv from '../images/cv.png';
import data from '../images/data.png';
import datascience from '../images/dataScience3.png';
import vision from '../images/vision.png';
import webDesign from '../images/webDesign2.png'; 

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">I've been exploring different areas of computer science recently, including web design, computer vision, and data science and visualization. Visit my project code by clicking the images below! <br></br>(website built with React, OpenCV project, and data science project on COVID vaccinations vs COVID deaths) </span>
            <div className="worksImgs">
                <a href="https://github.com/pwang1092/portfolio.git" target="_blank" rel="noreferrer">
                    <img src={webDesign} alt="p1" className="worksImg"></img>
                </a>
                <a href="https://github.com/pwang1092/Computer-Vision" target="_blank" rel="noreferrer">
                    <img src={vision} alt="p2" className="worksImg"></img>
                </a>
                <a href="https://drive.google.com/drive/u/0/folders/1OfGfsR1w8ZXalf9PRDRypniAlpaE0j3P" target="_blank" rel="noreferrer">
                    <img src={datascience} alt="p3" className="worksImg"></img>
                </a>
            </div>
            <a href="https://github.com/pwang1092" target="_blank" rel="noreferrer">
                <button className ="workBtn">My Github</button>
            </a>
        </section>
    );
}

export default Works; 