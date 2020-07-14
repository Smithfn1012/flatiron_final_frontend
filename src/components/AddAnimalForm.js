import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addAnimal } from '../actions/animalActions'

const options = [
  { key: 'a', text: 'Aquatic', value: 1 },
  { key: 'tu', text: 'Tundra', value: 2 },
  { key: 'dt', text: 'Desert', value: 3 },
  { key: 'r', text: 'Rainforest', value: 4 },
  { key: 'g', text: 'Grasslands', value: 5 },
  { key: 'ta', text: 'Taiga', value: 6 },
  { key: 'de', text: 'Deciduous Forest', value: 7 }
]

class AddAnimalForm extends Component {

  state = {
    species: "",
    lifespan: "",
    size: "",
    prey: "",
    predators: "",
    location: "",
    other_info: "",
    image: "",
    endangered: "",
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
    let newAnimal = this.state
    this.props.addAnimal(newAnimal)
    alert(`${this.state.species} was created!`)

    this.setState({
      species: "",
      lifespan: "",
      size: "",
      prey: "",
      predators: "",
      location: "",
      other_info: "",
      image: "",
      endangered: "",
      biome_id: ""
    })
  }

  render(){
    return(
      <Form className="forms" onSubmit={this.submitHandler} >
        <h1 className="form-header">Add Animal</h1>
        <hr />

        <Form.Field>
          <Form.Select fluid name="biome_id" label='Biome' options={options} value={this.state.value} onChange={(e, data) => this.biomeChangeHandler(e, data)} />
        </Form.Field>

        <Form.Field>
          <label>Species</label>
          <input type="text" name="species" placeholder="species" value={this.state.species} onChange={this.changeHandler} error />
        </Form.Field>

        <Form.Field>
          <label>Lifespan</label>
          <input type="text" name="lifespan" placeholder="lifespan" value={this.state.lifespan} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Size</label>
          <input type="text" name="size" placeholder="size" value={this.state.size} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Prey</label>
          <input type="text" name="prey" placeholder="prey" value={this.state.prey} onChange={this.changeHandler} />
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
          <label>Image</label>
          <input type="text" name="image" placeholder="image address" value={this.state.image} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Endangered</label>
          <br/>
          True: <input type="radio" name="endangered" value={true} onChange={this.changeHandler} /> |
          False: <input type="radio" name="endangered" value={false} onChange={this.changeHandler} />
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
export default connect(null, {addAnimal})(AddAnimalForm);
