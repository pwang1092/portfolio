import React, { useState } from 'react';
import './intro.css';
import bg from '../images/selfie_cut2.png';
import { Link } from 'react-scroll'; 
import contactImg from '../images/contact.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Peter Wang</span><br />Computer Science student</span>
                <p className="introPara"> I'm a student at the University of Southern California. In my free time, I enjoy practicing piano, hiking, and playing board games, especially love playing chess! 
                </p>

                {/** button scrolls down to contact form */}
                <Link activeClass='active' to='contactPage' spy='true' smooth={true} offset={175} duration={700} >
                    <button className="btn">
                        <img src={contactImg} alt="contact me" className = "btnImg"/>Contact me
                    </button>
                </Link>
            </div>
            
            <img src={bg} alt="selfie" className="bg" />
        </section>
    );
}

export default Intro; 