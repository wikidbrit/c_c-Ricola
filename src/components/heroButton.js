import React from 'react';
import './landing.css';

const HeroButton = ({category, displayCardsSection, displayUnderConstruction, toggleNature, toggleBusiness, togglePeople, toggleXRicola, hoverMountain, hoverFarm, hoverVillage, hoverFactory}) => {

    if(category==="Nature"){
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={hoverMountain} onMouseLeave={hoverMountain} onClick={displayCardsSection}>
                <span >{toggleNature ? "+" : `${category}`}</span>
            </div>
        );
    } if(category==="Business"){
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={hoverFarm} onMouseLeave={hoverFarm} onClick={displayUnderConstruction}>
                <span>{toggleBusiness ? "+" : `${category}`}</span>
            </div>
        );
    } if(category==="People"){
        return (
            <div className={`HeroButton ${category}`} id={category} onMouseEnter={hoverVillage} onMouseLeave={hoverVillage} onClick={displayUnderConstruction}>
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