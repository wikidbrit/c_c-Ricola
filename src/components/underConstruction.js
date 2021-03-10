import React from 'react';
import UCimage from '../assets/underConstruction.png';

const UnderConstruction = ({construction, displayUnderConstruction, scrollToConstruction}) => {
    return (
        <div 
        ref={scrollToConstruction}
        style={{
            display: `${construction}`,
        }}>
            <img src={UCimage} alt="under construction" style={{ maxWidth:'50%', margin:'0 25vw'}}/>
        </div>
    );
}

export default UnderConstruction;
