import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeAnimal} from '../actions/animalActions'
import { Item } from 'semantic-ui-react'


class AnimalCard extends React.Component {

  handleClick = () => {
    this.props.changeHandler("")
    this.props.changeAnimal(this.props.animal)
  }

  render(){
    let animal = this.props.animal
    let border = animal.endangered ? ("border-endangered") : ("border")
    let noSciName = animal.species.replace(/ *\([^)]*\) */g, "")
    return(
      <Item.Group className={border} onClick={this.handleClick}>
      <Link to="/animalinfo">
        <Item>
          <img className="list-image" src={animal.image} alt="" />
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a'>
                <p className="list-color" >{noSciName}</p>
            </Item.Header>
          </Item.Content>
        </Item>
        </Link>
      </Item.Group>
    )
  }
}


export default connect(null, {changeAnimal})(AnimalCard);