import React from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Modal = ({toggler, showModal, footstep, h2, h3, description, sdgCollection}) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <span>{footstep}</span>
            <h4>{h3}</h4>

            <div className="sdgs">
            {sdgCollection.map((item) => (
            <img src={item.url} alt="sdg" width="50px"/>
            ))}
            </div>
            <p className="close" onClick={toggler}>x</p>

            <h2>{h2}</h2>
            <p>{documentToReactComponents(description.json)}</p>
        </div>
    );
}

export default Modal;
