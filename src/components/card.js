import React from 'react';

const card = ({footstep, h3, image, imageDescript}) => {
    return (
        <div className="card" id={ `card${footstep}` } style={{backgroundImage: `url(${image})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
            <span>{footstep}</span>
            <h3>{h3}</h3>
            {/* <img src={image} alt={imageDescript}/> */}
        </div>
    );
}

export default card;
