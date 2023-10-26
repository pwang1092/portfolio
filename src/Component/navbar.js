import React, { useState } from 'react';
import './navbar.css';
import logo from '../images/logo.png';
import contactImg from '../images/contact.png'; 
import {Link} from 'react-scroll'; 
import menu from '../images/menu.png'; 


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false); // for mobile burger menu

    return (
        <nav className="navbar"> 
            <img src={logo} alt="logo" className='logo'></img>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={1000} className="desktopMenuItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={1000} className="desktopMenuItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={1000} className="desktopMenuItem">Portfolio</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-120} duration={1000} className="desktopMenuItem">Skills</Link>
            </div>

            <Link activeClass='active' to='contactPage' spy={false} smooth={true} offset={175} duration={700}>
                <button className="desktopMenuBtn">
                    <img src={contactImg} alt="Contact" className = "desktopMenuImg" />Contact Me
                </button>
            </Link>

            {/* burger menu will display on mobile screen */}
            <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-75} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-75} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    );
}

export default Navbar; 