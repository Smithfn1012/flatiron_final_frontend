import React from 'react';
import { Accordion, Icon, Segment, Image } from 'semantic-ui-react'
import Comments from './Comments'

class AnimalInfoCard extends React.Component {
  state = {
    activeIndex: 0
  }

  componentDidMount() {
      window.scrollTo(0, 0);
  }
  
    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }

  render(){
    const { activeIndex } = this.state
    let {animal} = this.props
    let profImg = animal.endangered ? ("profile-image-en") : ("profile-image")

    let endangered = animal.endangered ? ("I am endagered!") : ("I'm not endangered")

    return(

      <Segment>
         <Image src={animal.image} size='huge' centered className={profImg}/><br />

      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Species
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            {animal.species}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Endangered
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            {endangered}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Size
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            {animal.size}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Lifespan
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            {animal.lifespan}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Location
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            {animal.location}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Prey
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            {animal.prey}
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Predators
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            {animal.predators}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Interesting Fact
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            {animal.other_info}
          </p>
        </Accordion.Content>
      </Accordion>
      <br /><hr /><br />
      <Comments animal={animal} parent="animal"/>
      </Segment>
    )
  }
}


export default AnimalInfoCard;