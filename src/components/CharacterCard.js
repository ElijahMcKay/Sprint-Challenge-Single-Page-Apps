import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


function CharacterCard (props) {

  return (
    // <div>
    //   <img src={props.pfp} alt={`${props.name}`}/>  
    //   <h2>{props.name}</h2>
    //   <h3>{props.status}</h3>
    //   <p>{props.species}</p>
    //   <p>{props.gender}</p>
    // </div>
    <Card>
      <Image src={props.pfp} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.status}</Card.Meta>
        <Card.Description>
          {props.species}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Episodes
        </a>
      </Card.Content>
    </Card>
  )
}

export default CharacterCard; 
