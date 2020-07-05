import React from 'react';
import {connect} from 'react-redux';
import BiomeCard from '../components/BiomeCard';

class BiomeContainer extends React.Component {

  render(){
    let {chosenBiome, animals, plants} = this.props
    return(
      <div>
        <BiomeCard biome={chosenBiome} animals={animals} plants={plants} search={this.props.search} changeHandler={this.props.changeHandler}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chosenBiome: state.chosenBiome,
    animals: state.animals.filter(animal => animal.biome_id === state.chosenBiome.id),
    plants: state.plants.filter(plant => plant.biome_id === state.chosenBiome.id)
  }
}

export default connect(mapStateToProps)(BiomeContainer);