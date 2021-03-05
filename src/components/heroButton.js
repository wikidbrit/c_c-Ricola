import React from 'react';
import './landing.css';
import plus from './plus.svg';


const heroButton = (props) => {

console.log(props.buttonData)

    return (
        <div className="HeroButton">
            <p>{props.buttonData.categoryName}</p>
            <img className="plusIcon" src={plus} alt="plus icon"/>
        </div>
    );
}

export default heroButton;

//if you want to change the state you need to pass in functions
//on click functions -> button expands