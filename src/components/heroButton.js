import React, { useState } from 'react';
import './landing.css';


const HeroButton = ({category, displayCardsSection, displayUnderConstruction}) => {
    let [toggle, setToggle] = useState("+");

    const toggler = () => {
        setToggle(prev => !prev)
    }

    if(category==="Nature"){
        console.log("nature")
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={toggler} onMouseLeave={toggler} onClick={displayCardsSection}>
                <span >{toggle ? "+" : `${category}`}</span>
            </div>
        );
    } else {
        console.log("other")
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={toggler} onMouseLeave={toggler} onClick={displayUnderConstruction}>
                <span >{toggle ? "+" : `${category}`}</span>
            </div>
        );
    }   
}

export default HeroButton;
