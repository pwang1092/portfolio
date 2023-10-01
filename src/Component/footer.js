import React from 'react';
import './footer.css'; 

import github from '../images/github2.png';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="email">Email: pwang1092@gmail.com</div>

            <div className="imgs">
                <a href="https://www.linkedin.com/in/usc-peter-wang/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" className="img"></img>
                </a>
                <a href="https://github.com/pwang1092" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className="img"></img>
                </a>
                <a href="https://www.instagram.com/peterwang1092/" target="_blank" rel="noreferrer">
                    <img src={insta} alt="instagram" className="img"></img>
                </a>
            </div>  

        </footer>
    ); 
}

export default Footer; 