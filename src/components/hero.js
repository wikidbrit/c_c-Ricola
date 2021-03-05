import React from 'react';
import './landing.css';
import HeroButton from './heroButton.js';
import PlayButton from './playbutton.js';
import Ground from '../assets/ground.png';
import RightCloud from '../assets/cloud3.png';
import LeftCloudBig from '../assets/cloud2.png';
import LeftCloudSmall from '../assets/cloud1.png';
import Mountain from '../assets/mountain.png';
import Factory from '../assets/factory.png';
import Farm from '../assets/farm.png';
import Village from '../assets/village.png';
import Toon from '../assets/Rasmus.png';



// const query = `
// query{
//     footstep
//       (id:"3bgRzGQT5iyeUbxEbI2sRA")
//       {
//         h1
//         h2
//         cardImage {
//           title
//           description
//           url
//         }
//       }
//   }`;

// const query = 
//         `query {
//             categoriesCollection(limit: 20)
//             {
//             items
//                 {
//                 number
//                 name
//                 }
//             } 
//         }`
// ;

function Hero({buttonData}) {

    // let [data, setData] = useState(null);

    // useEffect(() => {
    //     window
    // .fetch(
    // `https://graphql.contentful.com/content/v1/spaces/hr9iqsg7g59t?access_token=Pgo--ibSOmLEpNQiOr6dOeMUoxTsiBXzFe1DTJ0gk_k`,
    // {
    // method: "POST",
    // headers: {
    //     "Content-Type": "application/json",
    // },
    // body: JSON.stringify({ query }),
    // }
    // )
    // .then(response => response.json())
    // .then((json) => setData(json.data));    
    // }, [])

    // if (!data) return <span>Loading...</span>
    // const buttonData = data.categoriesCollection.items;

    return (
        <div className ="hero-bg">
            <div className="wrapper">
                {buttonData.map((item) => (
                     <HeroButton 
                     key={item.number}
                     category={item.name}
              
                    />
                ))}
               
                
                <img src={Ground} alt="Ricola world ground" className='ground'/>
                <img src={Toon} alt="A little cartoon Rasmus to help guide your journey though Ricola World" className='rasmus'/>
                <img src={Village} alt="A rending of a small town" className='village'/>
                <img src={Farm} alt="A rendering of a farm" className='farm'/>
                <img src={Factory} alt="A rendering of the Ricola factory" className='factory'/>
                <img src={Mountain} alt="Ricola world Mountain, its so impressive" className='Mountain'/>
                <img src={RightCloud} alt="A cloud in the sky" className="RightCloud"/>
                <img src={LeftCloudBig} alt="A cloud in the sky" className="LeftCloudBig"/>
                <img src= {LeftCloudSmall} alt="A cloud in the sky" className="LeftCloudSmall"/>
                <PlayButton />
                <div className="accentText">
                    <p className="accentHeader">EXPLORE THE <br></br>RICOLA WORLD</p>
                    <p className="accentUnder">LEARN MORE ABOUT <br></br>OUR SUSTAINABLE FOOTSTEPS...</p>
                    <div className="horizontalRule"></div>
                </div>     
            </div>
        </div>
    )
}

export default Hero;
