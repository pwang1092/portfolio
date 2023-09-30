import React, {useRef} from 'react';
import './contact.css'; 

import javaP from '../images/java.png';
import cppP from '../images/c++.png';
import pyP from '../images/python.png';
import reactImg from '../images/react.png'; 

import emailjs from '@emailjs/browser'; 


const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        {/* Set up sendForm here: https://www.emailjs.com */}
        emailjs.sendForm('service_q484yf7', 'template_a7qrcdl', form.current, 'R8Suz9o57NTK5a2s9')
        .then((result) => {
            console.log(result.text);
            e.target.reset(); 
            alert('Email Sent!'); 
        }, (error) => {
            console.log(error.text);
            alert('Error - email me directly instead'); 
        });
    };

    return (
        <section id="contactPage">

            <div id="skills">
                <h1 className="contactPageTitle">My Skills</h1>
                <p className="skillsDesc">I have experience in Java, C++, and Python programming languages, along with several libraries and frameworks such as OpenCV, Numpy, and React. </p>

                <div id="skillsImgs">
                    <img src={javaP} alt ="lang" className="skillsImg"></img>
                    <img src={cppP} alt ="lang" className="skillsImg"></img>
                    <img src={pyP} alt ="lang" className="skillsImg"></img>
                    <img src={reactImg} alt ="lib" className="skillsImg"></img>
                </div>
            </div>

            {/* Contact form to send me email */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any internship opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name'></input>
                    <input type="email" className="email" placeholder='Your Email' name='from_email'></input>
                    <textarea className='msg' rows="8" placeholder='Your Message' name='message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                </form>
            </div>

        </section>
    ); 
}

export default Contact