import React, { useState } from 'react';
import './landing.css';
import HeroButton from './heroButton.js';
// import PlayButton from './playbutton.js';
import Ground from '../assets/ground.png';
import RightCloud from '../assets/cloud3.png';
import LeftCloudBig from '../assets/cloud2.png';
import LeftCloudSmall from '../assets/cloud1.png';
import Mountain from '../assets/mountain.png';
import Factory from '../assets/factory.png';
import Farm from '../assets/farm.png';
import Village from '../assets/village.png';
import Toon from '../assets/RicolaAvatarPlaceholder.png';
import ReactPlayer from 'react-player';

function Hero({buttonData, displayCardsSection, displayUnderConstruction}) {

    let [opacity, setOpacity] = useState("0%")
    let [display, setDisplay] = useState( "none" )
    let [playing, setPlaying] = useState( false )

    let [toggleNature, setToggleNature] = useState( "+" )
    let [toggleBusiness, setToggleBusiness] = useState( "+" )
    let [togglePeople, setTogglePeople] = useState( "+" )
    let [toggleXRicola, setToggleXRicola] = useState( "+" )

    const hoverMountain = () => {
        setToggleNature(prev => !prev);
    }
    const hoverFarm = () => {
        setToggleBusiness(prev => !prev);
    }
    const hoverVillage = () => {
        setTogglePeople(prev => !prev);
    }
    const hoverFactory = () => {
        setToggleXRicola(prev => !prev);
    }

    const videoToggler = () => {
        setOpacity(prev => !prev)
        setDisplay(prev => !prev)
        setPlaying(prev => !prev)
    }

    return (
        <div className ="hero-bg">
            <div className="wrapper">
                {buttonData.map((item) => (
                     <HeroButton 
                     key={item.number}
                     category={item.name}
                    displayCardsSection={displayCardsSection}
                    displayUnderConstruction={displayUnderConstruction}
                    toggleNature={toggleNature}
                    toggleBusiness={toggleBusiness}
                    togglePeople={togglePeople}
                    toggleXRicola={toggleXRicola}
                    hoverMountain={hoverMountain}
                    hoverFarm={hoverFarm}
                    hoverVillage={hoverVillage}
                    hoverFactory={hoverFactory}

                    />
                ))}
                <img src={Ground} alt="Ricola world ground" className='ground' style={{zIndex:'2'}}/>
                <img src={Toon} style={{zIndex:'2'}} alt="" className='rasmus' onClick={videoToggler} />
                <img src={Village} style={{zIndex:'2'}} alt="A rending of a small town" className='village' onClick={displayUnderConstruction} onMouseEnter={hoverVillage} onMouseLeave={hoverVillage}/>
                <img src={Farm} style={{zIndex:'2'}} alt="A rendering of a farm" className='farm' onClick={displayUnderConstruction} onMouseEnter={hoverFarm} onMouseLeave={hoverFarm}/>
                <img src={Factory} style={{zIndex:'2'}} alt="A rendering of the Ricola factory" className='factory' onClick={displayUnderConstruction} onMouseEnter={hoverFactory} onMouseLeave={hoverFactory}/>
                <img src={Mountain} style={{zIndex:'2'}} alt="Ricola world Mountain, its so impressive" className='Mountain'
                    onClick={displayCardsSection} onMouseEnter={hoverMountain} onMouseLeave={hoverMountain}/>
                <img src={RightCloud} alt="A cloud in the sky" className="RightCloud"/>
                <img src={LeftCloudBig} alt="A cloud in the sky" className="LeftCloudBig"/>
                <img src={LeftCloudSmall} alt="A cloud in the sky" className="LeftCloudSmall"/>       
                <div className="accentText">
                    <p className="accentHeader">Explore the<br></br>Ricola World</p>
                    <p className="accentUnder">Learn more about <br></br>our sustainable footsteps...</p>
                    <div className="horizontalRule"></div>
                </div>
                <div className="videoWrapper" onClick={videoToggler} style={{
                        position:"absolute",
                        height:"100%",
                        width:"100%",
                        backgroundColor:"rgba(0,0,0,0.5)",
                        opacity:`${opacity ? "0%" : "100%" }`,
                        display:`${display ? "none" : "block" }`,
                        zIndex:"2"
                    }}>
                    <ReactPlayer 
                    
                    url="https://youtu.be/HfyFRSD5YL0"
                    playing={playing}
                    style={{
                        margin:"10vh auto",
                        border:"2px solid #005245"
                    }}
                    
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Hero;
