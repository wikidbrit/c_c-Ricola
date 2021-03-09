import React from 'react';
import CardHeader from './cardHeader.js';
import CardContainer from './cardContainer.js';


const CardSection = ({cardsData, hide, scrollTo}) => {

    return (
        <div className="cardSection"
        ref={scrollTo}
        style={{
            display: `${hide}`
        }}
        
        >
            <CardHeader />
            <CardContainer cardsData={cardsData}/>
        </div>
    );
}

export default CardSection;
