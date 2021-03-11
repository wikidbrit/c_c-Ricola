import React, { useEffect } from 'react';
import UCimage from '../assets/underConstruction.png';

const UnderConstruction = ({construction, displayUnderConstruction, scrollToUC}) => {

    let scrollToConstruction = React.createRef();

    useEffect(() => {
        scrollToConstruction.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
      })
    })

    return (
        <div className="underConstruction"
        ref={scrollToConstruction}
        style={{
            display: `${construction}`
        }}>
            <img src={UCimage} alt="under construction" style={{ maxWidth:'50%', margin:'0 25vw'}}/>
        </div>
    );
}

export default UnderConstruction;
