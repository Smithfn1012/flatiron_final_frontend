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
