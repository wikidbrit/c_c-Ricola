import React from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Modal = ({toggler, showModal, footstep, h2, h3, description, sdgCollection}) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            {/* <span>{footstep}</span>
            <h4>{h3}</h4>
            <h2>{h2}</h2>
            <p>{documentToReactComponents(description.json)}</p>
            {sdgCollection.map((item) => (
            <img src={item.url} alt="sdg" width="60px"/> */}
            {/* ))} */}
            <p onClick={toggler}>x</p>
            
        </div>
    );
}

export default Modal;
