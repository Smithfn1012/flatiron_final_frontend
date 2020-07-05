import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changePlant} from '../actions/plantActions'
import { Item } from 'semantic-ui-react'

class PlantCard extends React.Component {

  handleClick = () => {
    this.props.changeHandler("")
    this.props.changePlant(this.props.plant)
  }

  render(){
    let plant = this.props.plant
    let noSciName = plant.species.replace(/ *\([^)]*\) */g, "")
    return(
      <Item.Group className="border" onClick={this.handleClick}>
        <Link to="/plantinfo">
          <Item>
            <img className="list-image" src={plant.image} alt="" />
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


export default connect(null, {changePlant})(PlantCard);