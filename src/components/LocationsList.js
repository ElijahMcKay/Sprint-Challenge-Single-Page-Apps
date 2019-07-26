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

  return (
    <section className='character-list grid-view'>
      {data.map(obj => (
        <LocationCard
        name={obj.name}
        type={obj.type}
        dimension={obj.dimension}
        residents={obj.residents}
        key={obj.id}
        /> 
        ))}
    </section>

  )
}

export default LocationsList; 

