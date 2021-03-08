import React, { useState } from 'react';
import './landing.css';
import plus from '../assets/plus.svg';


const HeroButton = ({category}) => {


    // let [toggle, setToggle] = useState('show');
    // let [toggle2, setToggle2] = useState('hide');

    // // const toggler = () => {
    // //     setToggle(prev => !prev)
    // // }

    // const show = () => 
    // setToggle('hide')

    // const hide = () => 
    // setToggle2('show')

    // const classNames = 'HeroButton'

    return (
        // <React.Fragment>
        <div className={`HeroButton ${category}`} id={category}>
            <span>+</span>
        </div>

        // <div className={`${classNames} ${toggle2}`} id={category} onMouseEnter={hide}>
        //     Hej
        // </div>
        // </React.Fragment>
    );
}

export default HeroButton;

//if you want to change the state you need to pass in functions
//on click functions -> button expands



// `${classNames} ${toggle}`