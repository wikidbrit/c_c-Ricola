import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
// import Modal from './modal.js';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';


const Card = ({ toggler, footstep, h3, image, style, extract, description, sdgCollection }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleClick = (event) => {
        const clicked = event.target.id;
        if (clicked !== "readMore"){
        setIsFlipped(!isFlipped);
        }
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
            <p>{documentToReactComponents(extract.json)}</p>
            <h4 id="readMore" onClick={toggler}>Read more</h4>
        </div>
        </ReactCardFlip>
        
        );
    };
    
    export default Card;
    
