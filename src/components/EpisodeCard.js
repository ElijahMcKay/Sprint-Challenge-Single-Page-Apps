import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeCard (props) {
  // image={image}
  return (
    // <div> 
    //   <h2>{props.name}</h2>
    //   <h3>{props.episode}</h3>
    //   <p>{props.airDate}</p>
    // </div> 
    <Card>
        {/* <Image src={props.pfp} wrapped ui={false} /> */}
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>{props.episode}</Card.Meta>
            <Card.Description>
            {props.airDate}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            {/* <a>
            <Icon name='user' />
            {`Residents: ${props.residents.length}`}
            </a> */}
        </Card.Content>
    </Card>
  )
}