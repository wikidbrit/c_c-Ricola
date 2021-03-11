import React from 'react';
import Card from './card.js'

const CardContainer = ({cardsData}) => {
    return (
        
        <div className="cardContainer">
            {cardsData.map((item) => (
            <Card 
            key={item.footstep}
            footstep={item.footstep}
            h2={item.h2}
            h3={item.h1}
            image={item.cardImage.url}
            imageDescript={item.cardImage.description}
            extract={item.extract}
            description={item.description}
            sdgCollection={item.sdGsCollection.items}
            />
            ))}
        </div>
    );
}

export default CardContainer;


// sdGsCollection{
//     items{
//       description
//       url