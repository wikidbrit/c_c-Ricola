import React, {useState} from 'react';
import ricolaLogo from '../assets/RicolaWorldLogos-02.png';
// import hamburger from '../assets/hamburger-03.png'
import './landing.css';

export default function Header() {
    let [menu, setMenu] = useState("close");
    const toggler = () => {
        setMenu(prev => !prev)
    }


    return (
    
        <div className="headerDiv" style={{"position":"fixed", "top": "0", 'backgroundColor':'white'}}>
            <img src={ricolaLogo} className="ricolaLogo" alt="Ricola Logo"/>
            <nav>
                <a href="#" className="menu-toggle">
                    <div className={`menu-icon ${menu ? "close" : "open"}`} onClick={toggler}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                {/* <img src={hamburger} className="hamburgerIcon" alt="Dropdown Menu Icon"/> */}
            </nav>
            {/* <div className="menu">
                <nav className="menu-nav">
                <a href="a"i className="selected">home</a>
                <a href="a">Nature</a>
                <a href="a">People</a>
                <a href="a">X-Ricola</a>
                <a href="a">Business</a>
                </nav> 
            </div> */}
        </div>
        
    )
}
