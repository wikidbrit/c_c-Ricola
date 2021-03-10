import React, {useEffect} from 'react';
import CardHeader from './cardHeader.js';
import CardContainer from './cardContainer.js';


const CardSection = ({cardsData, hide, scrollTo, buttonData}) => {

let scrollToNature = React.createRef();

useEffect(() => {
    scrollToNature.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
  })
})

    return (
        <div className="cardSection"
        ref={scrollToNature}
        style={{
            display: `${hide}`
        }}
        >
            <CardHeader buttonData={buttonData}/>
            <CardContainer cardsData={cardsData}/>
        
        </div>
    );
}

export default CardSection;
