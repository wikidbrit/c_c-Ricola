import React from 'react';
import Card from './card.js'

const CardContainer = ({cardsData}) => {
    // console.log(cardsData)
    return (
        
        <div className="cardContainer">
            {cardsData.map((item) => (
            <Card 
            key={item.footstep}
            footstep={item.footstep}
            h3={item.h1}
            image={item.cardImage.url}
            imageDescript={item.cardImage.description}
            extract={item.extract.json}
            />
            ))}
        </div>
    );
}

export default CardContainer;
