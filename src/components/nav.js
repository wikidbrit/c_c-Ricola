import React from 'react';
import ricolaLogo from './RicolaWorldLogos-02.png';
import hamburger from './hamburger-03.png'
import './landing.css';

export default function nav() {
    return (
    
        <div className="headerDiv">
            <img src={ricolaLogo} className="ricolaLogo" alt="Ricola Logo"/>
            <img src={hamburger} className="hamburgerIcon" alt="Dropdown Menu Icon"/>
        </div>
        
    )
}
