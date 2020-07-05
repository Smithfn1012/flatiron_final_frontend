import React from 'react';
import AnimalContainer from '../containers/AnimalContainer'
import PlantContainer from '../containers/PlantContainer'
import { Accordion, Icon, Segment, Image, Button } from 'semantic-ui-react'


class BiomeCard extends React.Component {
  state = {
    activeIndex: 0,
    animal: false,
    plant: false
  }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }


  animalHandler = () => {
    let click = this.state.animal
    this.setState({
      animal: !click
    })
  }

  plantHandler = () => {
    let click = this.state.plant
    this.setState({
      plant: !click
    })
  }

  render(){
    const { activeIndex } = this.state
    let biome = this.props.biome
    return(
      <Segment>
         <Image src={biome.image} size='huge' className="profile-image" centered /><br />

      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Biome
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            {biome.biome_name}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Ecosystems
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            {biome.ecosystems}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Temperature Range
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            {biome.temp_range}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Biodiversity
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            {biome.biodiversity}
          </p>
        </Accordion.Content>
      </Accordion>
      <br />
      <Button.Group>
        <Button onClick={this.animalHandler} content='Animals in this Biome' />
        <Button.Or />
        <Button onClick={this.plantHandler} content='Plants in this Biome' />
      </Button.Group>
      {this.state.animal ? <AnimalContainer animals={this.props.animals} search={this.props.search} changeHandler={this.props.changeHandler}/> : null}
      {this.state.plant ? <PlantContainer plants={this.props.plants} search={this.props.search} changeHandler={this.props.changeHandler}/> : null}
      </Segment>
    )
  }
}


export default BiomeCard;