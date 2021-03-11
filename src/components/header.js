import React, {useState} from 'react';
import ricolaLogo from '../assets/RicolaWorldLogos-02.png';
import './landing.css';

export default function Header() {
    let [menu, setMenu] = useState("close");
    const toggler = () => {
        setMenu(prev => !prev)
    }
    return (
    
        <div className="headerDiv" style={{"position":"fixed", "top": "0", 'backgroundColor':'white'}}>
            <img src={ricolaLogo} className="ricolaLogo" alt="Ricola Logo"/>
        </div>
        
    )
}
