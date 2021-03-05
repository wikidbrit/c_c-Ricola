import React from 'react';
import CardHeader from './cardHeader.js';
import CardContainer from './cardContainer.js';


const CardSection = ({cardsData}) => {

    return (
        <div className="cardSection">
            <CardHeader />
            <CardContainer cardsData={cardsData}/>
        </div>
    );
}

export default CardSection;
