import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import LocationCard from "./LocationCard"; 

function LocationsList() {
    const [data, setData] = useState([]); 

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      console.log('Success', response)
      setData(response.data.results);
    })
    .catch(error => {
      console.log('Something went wrong:', error); 
    })  

    
  }, []) 

  console.log(data)

  return (
    <section className='character-list grid-view'>
      {data.map(obj => (
        <LocationCard
        pfp={obj.image}
        name={obj.name}
        status={obj.status}
        species={obj.species}
        gender={obj.gender}
        key={obj.id}
        /> 
        ))}
    </section>

  )
}

export default LocationsList; 

