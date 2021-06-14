
import { React, useState, useEffect } from 'react'
import Classes from './nearCities.module.css'

function CloseCities(props) {

  //const url = 'https://api.comparatrip.eu/cities/popular/from/Paris/5 '

  const [isLoading, setIsloading] = useState(true);
  const [loadedCities, setCities] = useState([]);
  
  useEffect (
    () => {
      setIsloading(true);
      fetch(props.url).then(response => {
        return response.json()
      }).then(data => {

        const cityInfo = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          cityInfo.push(meetup)
        }
        setIsloading(false);
        setCities(cityInfo);
      });
    },
    []
  );

  if (isLoading) {
    return <section>
      <p>Loading ...</p>
    </section>
  }

  return (
    <div className={Classes.oneCity} title="allCites">
      <span  className={Classes.span}>RECHERCHES RÉCENTES</span>
      {loadedCities && loadedCities.map((City, index) => (
        <div className={Classes.goodlook}>
        <div key={index}    className={Classes.span} >
          <span className={Classes.pointer}>{City.local_name}</span>
        </div>
        </div>
      ))}
    </div>
  );
}

export default CloseCities;
