import React from 'react';
import './landing.css';
import plus from './plus.svg';


const heroButton = () => {

    return (
        <div className="HeroButton">
            
            <img className="plusIcon" src={plus} alt="plus icon"/>
        </div>
    );
}

export default heroButton;
