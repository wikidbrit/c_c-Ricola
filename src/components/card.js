import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Modal from './modal.js';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';


const Card = ({ footstep, h2, h3, image, style, extract, description, sdgCollection }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleClick = (event) => {
        const clicked = event.target.id;
        if (clicked !== "readMore"){
        setIsFlipped(!isFlipped);
        }
    }
    
    const [showModal, setShowModal] = useState(false);
    const toggler = () => {
        setShowModal(prev => !prev)
    }
    
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
                height: "90%",
                position:'static'
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
                height: "90%",
            }}
        >
            <span>{footstep}</span>
            <h4>{h3}</h4>
            <p>{documentToReactComponents(extract.json)}</p>
            <h4 id="readMore" onClick={toggler}>Read more</h4>
            <Modal 
                showModal={showModal}
                description={description}
                footstep={footstep}
                toggler={toggler}
                h3={h3}
                h2={h2}
                sdgCollection={sdgCollection}
            />
        </div>
        </ReactCardFlip>
        
        
        );
    };
    
    export default Card;
    
