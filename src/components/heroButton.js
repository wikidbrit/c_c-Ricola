import React, { useState } from 'react';
import './landing.css';


const HeroButton = ({category, displayCardsSection, displayUnderConstruction, toggleNature, toggleBusiness, togglePeople, toggleXRicola, hoverMountain, hoverFarm, hoverVillage, hoverFactory}) => {


    // let [toggle, setToggle] = useState("+");
    // // let [toggle2, setToggle2] = useState('hide');

    // const toggler = () => {
    //     setToggle(prev => !prev)
    //     // setToggle2(prev => !prev)
    // }

    if(category==="Nature"){
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={hoverMountain} onMouseLeave={hoverMountain} onClick={displayCardsSection}>
                <span >{toggleNature ? "+" : `${category}`}</span>
            </div>
        );
    } if(category==="Business"){
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={hoverFarm} onMouseLeave={hoverFarm} onClick={displayCardsSection}>
                <span >{toggleBusiness ? "+" : `${category}`}</span>
            </div>
        );
    } if(category==="People"){
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={hoverVillage} onMouseLeave={hoverVillage} onClick={displayCardsSection}>
                <span >{togglePeople ? "+" : `${category}`}</span>
            </div>
        );
    } else {
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={hoverFactory} onMouseLeave={hoverFactory} onClick={displayUnderConstruction}>
                <span >{toggleXRicola ? "+" : `${category}`}</span>
            </div>
        );
    }

   
}

export default HeroButton;

//if you want to change the state you need to pass in functions
//on click functions -> button expands



// `${classNames} ${toggle}`