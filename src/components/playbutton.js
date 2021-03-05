import React from "react"
import "./landing.css"
import Play from "../assets/Playbutton.svg"

export default function playbutton(){
    return(
        <div className="PlayButton">
            <img src={Play} alt="Play button" className="PlaySymbol"></img>
            
            </div>

    )
}