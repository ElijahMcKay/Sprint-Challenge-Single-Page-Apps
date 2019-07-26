import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard (props) {
  // image={image}
  return (
    // <div> 
    //   <h2>{props.name}</h2>
    //   <h3>{props.type}</h3>
    //   <p>{props.dimension}</p>
    //   <p>{props.residents.length}</p>
    // </div> 
    <Card>
      {/* <Image src={props.pfp} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.type}</Card.Meta>
        <Card.Description>
          {props.dimension}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {`Residents: ${props.residents.length}`}
        </a>
      </Card.Content>
    </Card>
  )
}
