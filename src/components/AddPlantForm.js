import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addPlant } from '../actions/plantActions'

const options = [
  { key: 'a', text: 'Aquatic', value: 1 },
  { key: 'tu', text: 'Tundra', value: 2 },
  { key: 'dt', text: 'Desert', value: 3 },
  { key: 'r', text: 'Rainforest', value: 4 },
  { key: 'g', text: 'Grasslands', value: 5 },
  { key: 'ta', text: 'Taiga', value: 6 },
  { key: 'de', text: 'Deciduous Forest', value: 7 }
]

class AddPlantForm extends Component {

  state = {
    species: "",
    size: "",
    predators: "",
    location: "",
    seed_distribution: "",
    other_info: "",
    image: "",
    biome_id: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  biomeChangeHandler = (e, data) => {
    this.setState({
      biome_id: data.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    let newPlant = this.state
    this.props.addPlant(newPlant)
    alert(`${this.state.species} was created!`)

    this.setState({
      species: "",
      size: "",
      predators: "",
      location: "",
      seed_distribution: "",
      other_info: "",
      image: "",
      biome_id: ""
    })
  }

  render(){
    return(

      <Form className="forms" onSubmit={this.submitHandler} >
        <h1 className="form-header">Add Plant</h1>
        <hr />

        <Form.Field>
          <label>Biome</label>
          <input type="text" name="biome_id" placeholder="biome" value={this.state.biome} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Plant Name</label>
          <input type="text" name="species" placeholder="species" value={this.state.species} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Size</label>
        <input type="text" name="size" placeholder="size" value={this.state.size} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Predators</label>
        <input type="text" name="predators" placeholder="predators" value={this.state.predators} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Location</label>
        <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Seed Distribution</label>
          <input type="text" name="seed_distribution" placeholder="Seed Distribution" value={this.state.seed_distribution} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Image</label>
          <input type="text" name="image" placeholder="image" value={this.state.image} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Interesting Fact</label>
        <textarea name="other_info" placeholder="Facts" value={this.state.other_info} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field control={Button}>Submit</Form.Field>

      </Form>
    )
  }
}
export default connect(null, {addPlant})(AddPlantForm);