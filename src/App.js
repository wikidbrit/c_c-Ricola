import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from "./components/nav.js"
import Hero from "./components/hero.js"
import SubText from "./components/subtext.js"
import CardSection from "./components/cardSection.js"

let natureButton = document.getElementById("Nature")



const query = 
        `query {
            categoriesCollection(limit: 20)
            {
            items
                {
                number
                name
                }
            }
            footstepCollection(order: footstep_ASC){
              items{
                footstep
                h1
                cardImage{
                  description
                  url
                }
                extract{
                  json
                }
                h2
                description{
                  json
                }
                sdGsCollection{
                  items{
                    description
                    url
                  }
                }
                categoryName
              }
              }
        }`
;


function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
      window
  .fetch(
  `https://graphql.contentful.com/content/v1/spaces/hr9iqsg7g59t?access_token=Pgo--ibSOmLEpNQiOr6dOeMUoxTsiBXzFe1DTJ0gk_k`,
  {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
  }
  )
  .then(response => response.json())
  .then((json) => setData(json.data));    
  }, [])

  if (!data) return <span>Loading...</span>
  
  const buttonData = data.categoriesCollection.items;
  const cardsData = data.footstepCollection.items;


  return (
    <React.Fragment>
      <Nav style={ `position:fixed`}/>
      <Hero buttonData={buttonData}/>
      <SubText />
      <CardSection 
        cardsData={cardsData}

      />
    </React.Fragment>
  );
}

export default App;
