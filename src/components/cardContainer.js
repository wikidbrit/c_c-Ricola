import React, { useState } from 'react';
import Card from './card.js';
import Modal from './modal.js';

const CardContainer = ({cardsData}) => {
    const [showModal, setShowModal] = useState(false);
    const toggler = () => {
        setShowModal(prev => !prev)
    }


    return (
        
        <div className="cardContainer">
            {cardsData.map((item) => (
            <Card 
            key={item.footstep}
            footstep={item.footstep}
            h3={item.h1}
            image={item.cardImage.url}
            imageDescript={item.cardImage.description}
            extract={item.extract}
            description={item.description}
            sdgCollection={item.sdGsCollection.items}
            toggler={toggler}
            />
            ))}
            <Modal 
                showModal={showModal}
                toggler={toggler}
                // description={item.description}
                // footstep={footstep}
                // toggler={toggler}
                // h3={h3}
                // sdgCollection={sdgCollection}
            />
        </div>
    );
}

export default CardContainer;


// sdGsCollection{
//     items{
//       description
//       url