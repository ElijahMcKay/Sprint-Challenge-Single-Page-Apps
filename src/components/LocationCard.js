import React from 'react'

export default function LocationCard (props) {
  // image={image}
  return (
  <div> 
    <h2>{props.name}</h2>
    <h3>{props.type}</h3>
    <p>{props.dimension}</p>
    <p>{props.residents}</p>
  </div>
  )
}
