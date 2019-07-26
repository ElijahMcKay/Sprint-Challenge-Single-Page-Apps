import React, { useEffect, useState } from 'react';
import axios from "axios"; 

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]); 

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/documentation/#get-all-characters')
    .then(response => {
      console.log('Success', response)
    })
    .catch(error => {
      console.log('Something went wrong:', error); 
    })
  }, [])

  return <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}
