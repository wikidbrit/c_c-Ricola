import React, { useState } from 'react';
import './landing.css';


const HeroButton = ({category, displayCardsSection, displayUnderConstruction}) => {


    let [toggle, setToggle] = useState("+");
    // let [toggle2, setToggle2] = useState('hide');

    const toggler = () => {
        setToggle(prev => !prev)
        // setToggle2(prev => !prev)
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

//if you want to change the state you need to pass in functions
//on click functions -> button expands



// `${classNames} ${toggle}`