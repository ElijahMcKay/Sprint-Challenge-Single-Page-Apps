import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import EpisodeCard from "./EpisodeCard"; 

function EpisodeList() {
    const [data, setData] = useState([]); 

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/episode/')
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
        <EpisodeCard
        name={obj.name}
        episode={obj.episode}
        airDate={obj.airDate}
        key={obj.id}
        /> 
        ))}
    </section>

  ) 
}

export default EpisodeList; 

