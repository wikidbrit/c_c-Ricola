import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Popup from 'reactjs-popup';

const Card = ({ footstep, h2, h3, image, style, extract, description, sdgCollection }) => {
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
            height: "100%",
            position:'static'
        }}
        >
        <div className="cardHeading">
            <span>{footstep}</span>
            <h3>{h3}</h3>
        </div>
        </div>
        
        
        <div onClick={handleClick}
        className={`card ${style} back`}
        id={`card${footstep}`}
        style={{
            backgroundColor: "var(--yellow)",
            backgroundSize: "cover",
            height: "100%",
        }}
        >
        <div className="cardHeadingBack">
            <span>{footstep}</span>
            <h4>{h3}</h4>
        </div>
        <p>{documentToReactComponents(extract.json)}</p>
        
        <Popup trigger={<button id="readMore">Read more</button>}>
        {close => (
            <div className="modal">
                <button
                className="close"
                onClick={() => {
                    close();
                }}
                >x</button>
                <span>{footstep}</span>
                <h4>{h3}</h4>
                
                <h2>{h2}</h2>
                <div className="horizontalRule hr cardRuler"></div>
                <p>{documentToReactComponents(description.json)}</p>
                
                <div className="sdgs">
                {sdgCollection.map((item) => (
                    <img src={item.url} alt="sdg" width="50vw"/>
                ))}
                </div>
                </div>
                )}
                </Popup>
                </div>
                </ReactCardFlip>
                );
            };
            
            export default Card;
            
            