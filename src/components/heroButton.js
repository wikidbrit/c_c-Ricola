import React from 'react';
import './landing.css';
import plus from './plus.svg';


const heroButton = ({category}) => {

    return (
        <div className="HeroButton" id={category}>
            <img className="plusIcon" src={plus} alt="plus icon"/>
        </div>
    );
}

export default heroButton;

//if you want to change the state you need to pass in functions
//on click functions -> button expands