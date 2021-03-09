import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
// import Modal from './modal.js';


const Card = ({ footstep, h3, image, style, json }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    // const [showModal, setShowModal] = useState(false);
    // const toggler = () => {
    //     setShowModal(prev => !prev)
    // }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={handleClick}
                className={`card ${style} front`}
                id={`card${footstep}`}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "90%"
                }}
            >
                <span>{footstep}</span>
                <h3>{h3}</h3>
                {/* <img src={image} alt={imageDescript}/> */}
            </div>


            <div onClick={handleClick}
                className={`card ${style} back`}
                id={`card${footstep}`}
                style={{
                    backgroundColor: "var(--yellow)",
                    backgroundSize: "cover",
                    height: "90%"
                }}
            >
                <span>{footstep}</span>
                <h4>{h3}</h4>
                <p>{json}</p>
                <h4>Read more</h4>
            </div>


            {/* <Modal 
            showModal={showModal}
            toggler={toggler}
            footstep={footstep}
            h3={h3}
            /> */}
        </ReactCardFlip>
    );
};

export default Card;
