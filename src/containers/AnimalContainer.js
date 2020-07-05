import React from "react";
import AnimalCard from "../components/AnimalCard";

class AnimalContainer extends React.Component {

  compare = (a,b) => {
    if (a.species < b.species) {
      return -1
    }
    if (a.species > b.species) {
      return 1
    }
    return 0
  }

  filteredAnimal = () => {
    let filteredAnimal = this.props.animals.sort(this.compare).filter(animal =>
        animal.species.toLowerCase().includes(this.props.search.toLowerCase())
      ).map(animal => <AnimalCard key={animal.id} animal={animal} changeHandler={this.props.changeHandler} />)
      return filteredAnimal
  }

  animal = () => {
    let animal = this.props.animals.sort(this.compare).map(animal => (
      <AnimalCard key={animal.id} animal={animal} changeHandler={this.props.changeHandler} />
    ))
    return animal
  }

  render() {
    return (
      <div>
        <div className="flex">
          {this.props.search === "" ? this.animal() : this.filteredAnimal()}
        </div>
      </div>
    )
    }
  }

export default AnimalContainer;
