import React from 'react';

import PlantCard from '../components/PlantCard'

class PlantContainer extends React.Component {

  compare = (a,b) => {
    if (a.species < b.species) {
      return -1
    }
    if (a.species > b.species) {
      return 1
    }
    return 0
  }

  filteredPlant = () => {
    let filteredPlant = this.props.plants.sort(this.compare).filter(plant =>
        plant.species.toLowerCase().includes(this.props.search.toLowerCase())
      ).map(plant => <PlantCard key={plant.id} plant={plant} changeHandler={this.props.changeHandler} />)
      return filteredPlant
  }

  plant = () => {
    let plant = this.props.plants.sort(this.compare).map(plant => (
      <PlantCard key={plant.id} plant={plant} changeHandler={this.props.changeHandler} />
    ))
    return plant
  }

  render(){
    return(
      <div>
        <div className="flex">
          {this.props.search === "" ? this.plant() : this.filteredPlant()}
        </div>
      </div>
    )
  }
}


export default PlantContainer;