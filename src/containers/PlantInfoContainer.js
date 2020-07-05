import React from 'react';
import PlantInfoCard from '../components/PlantInfoCard'
import {connect} from 'react-redux'

class PlantInfoContainer extends React.Component {


  render(){
      let {chosenPlant} = this.props
    return(
      <div>
        <PlantInfoCard plant={chosenPlant} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chosenPlant: state.chosenPlant,
  }
}

export default connect(mapStateToProps)(PlantInfoContainer);