import React, { useState } from 'react';
import './landing.css';


const HeroButton = ({category, displayCardsSection, displayUnderConstruction, togglerMountain, toggleMountain}) => {

    let [toggle, setToggle] = useState("+");

    const toggler = () => {
        setToggle(prev => !prev)
    }



    if(category==="Nature"){
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={toggler} onMouseLeave={toggler} onClick={displayCardsSection}>
                <span >{toggle ? "+" : `${category}`}</span>
            </div>
        );
    } else {
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={toggler} onMouseLeave={toggler} onClick={displayUnderConstruction}>
                <span >{toggle ? "+" : `${category}`}</span>
            </div>
        );
    }

   
}

export default HeroButton;

//if you want to change the state you need to pass in functions
//on click functions -> button expands



// `${classNames} ${toggle}`