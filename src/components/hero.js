import React from 'react';
import './landing.css';
import Ground from './ground.png';
import RightCloud from './cloud3.png';
import LeftCloudBig from './cloud2.png';
import LeftCloudSmall from './cloud1.png';


export default function Hero() {
    return (
        <div className ="hero-bg">
            <div className="wrapper">   
                <div className="ground">
                    <img src={Ground} alt="Ricola world ground"/>
                    <img src={RightCloud} alt="A cloud in the sky" className="RightCloud"/>
                    <img src={LeftCloudBig} alt="A cloud in the sky" className="LeftCloudBig"/>
                    <img src= {LeftCloudSmall} alt="A cloud in the sky" className="LeftCloudSmall"/>
            
                    

                </div>
            </div>
        
            
            
            
            
            
        </div>
    )
}
