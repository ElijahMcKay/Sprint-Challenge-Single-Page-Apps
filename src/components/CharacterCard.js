import React from 'react'

function CharacterCard (props) {

  console.log(props); 
  return (
    <div>
      <img src={props.pfp} alt={`${props.name}`}/>  
      <h2>{props.name}</h2>
      <h3>{props.status}</h3>
      <p>{props.species}</p>
      <p>{props.gender}</p>
    </div>
  )
}

export default CharacterCard; 
