import React from "react";


const card = ({ footstep, h3, image, imageDescript, style }) => {
  return (
    <div
      className={`card ${style}`} /*yellowText greenText textBottom textTop */
      id={`card${footstep}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span>{footstep}</span>
      <h3>{h3}</h3>
      {/* <img src={image} alt={imageDescript}/> */}
    </div>
  );
};

export default card;
