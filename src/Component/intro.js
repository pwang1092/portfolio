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
                <span className="introText">I'm <span className="introName">Peter Wang</span><br />Chess Grandmaster...</span>
                <p className="introPara">Just kidding, only in my dreams. <br/> I'm actually a Computer Engineering and Computer Science major at the University of Southern California, with an interest in computer vision and machine learning.</p>

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