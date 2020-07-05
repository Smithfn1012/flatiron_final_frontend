import React from 'react';
import { Accordion, Icon, Segment, Image} from 'semantic-ui-react'
import Comments from './Comments'

class PlantInfoCard extends React.Component {
  state = { activeIndex: 0 }

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
    let {plant} = this.props
    return(
      <Segment>
         <Image src={plant.image} size='huge' className="profile-image" centered />

      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Species
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            {plant.species}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Size
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            {plant.size}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Seed Distribution
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            {plant.seed_distribution}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Location
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            {plant.location}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Predators
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            {plant.predators}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Interesting Fact
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            {plant.other_info}
          </p>
        </Accordion.Content>
      </Accordion>
      <br /><hr /><br />
      <Comments plant={plant} parent="plant"/>
      </Segment>
    )
  }
}


export default PlantInfoCard;