import React from "react"
import "./landing.css"
import Play from "../assets/Playbutton.svg"

export default function playbutton({ toggler }){
    return(
        <div className="PlayButton" onClick={toggler}>
            <img src={Play} alt="Play button" className="PlaySymbol"></img> 
            </div>

    )
}