import React from 'react';
import AnimalInfoCard from '../components/AnimalInfoCard'
import {connect} from 'react-redux'

class AnimalInfoContainer extends React.Component {


  render(){
      let {chosenAnimal} = this.props
    return(
      <div>
        <AnimalInfoCard animal={chosenAnimal} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chosenAnimal: state.chosenAnimal,
  }
}

export default connect(mapStateToProps)(AnimalInfoContainer);
