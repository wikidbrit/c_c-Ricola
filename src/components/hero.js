import React from 'react';
import './landing.css';
import Ground from './ground.png';
import RightCloud from './cloud3.png';
import LeftCloudBig from './cloud2.png';
import LeftCloudSmall from './cloud1.png';
import Mountain from './mountain.png';
import Factory from './factory.png';
import Farm from './farm.png'
import Village from './village.png'
import PlayButton from './playbutton.js'
export default function Hero() {
    return (
        <div className ="hero-bg">
            <div className="wrapper">   

                <img src={Ground} alt="Ricola world ground" className='ground'/>
                <img src={Village} alt="A rending of a small town" className='village'/>
                <img src={Farm} alt="A rendering of a farm" className='farm'/>
                <img src={Factory} alt="A rendering of the Ricola factory" className='factory'/>
                <img src={Mountain} alt="Ricola world Mountain, its so impressive" className='Mountain'/>
                <img src={RightCloud} alt="A cloud in the sky" className="RightCloud"/>
                <img src={LeftCloudBig} alt="A cloud in the sky" className="LeftCloudBig"/>
                <img src= {LeftCloudSmall} alt="A cloud in the sky" className="LeftCloudSmall"/>
                <PlayButton />
            </div>

        </div>
    )
}
