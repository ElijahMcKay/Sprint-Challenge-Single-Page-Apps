import React from 'react'

export default function EpisodeCard (props) {
  // image={image}
  return (
    <div> 
      <h2>{props.name}</h2>
      <h3>{props.episode}</h3>
      <p>{props.airDate}</p>
    </div> 
  )
}