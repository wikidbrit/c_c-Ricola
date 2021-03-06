import React from 'react';
import DownButton from '../assets/downButton.svg';

const CardHeader = () => {

    return (
        <div className="cardHeader">
            <img src={DownButton} alt="down button"/>
            <h3>Nature</h3>
            <div className="horizontalRule hr"></div>
        </div>
    );
}

export default CardHeader;
