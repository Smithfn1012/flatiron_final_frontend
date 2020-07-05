import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AnimalContainer from './containers/AnimalContainer'
import PlantContainer from './containers/PlantContainer'
import HomeContainer from './containers/HomeContainer'
import BiomeContainer from './containers/BiomeContainer'
import AnimalInfoContainer from './containers/AnimalInfoContainer'
import PlantInfoContainer from './containers/PlantInfoContainer'
import FormContainer from './containers/FormContainer'
import QuizContainer from './containers/QuizContainer'
import AboutContainer from './containers/AboutContainer'

import {bindActionCreators} from 'redux'
import {getPlants} from './actions/plantActions'
import {getAnimals} from './actions/animalActions'
import {getQuestionsAnswers} from './actions/quizActions'
import {getComments} from './actions/commentActions'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
    div.transition-group {
           position: relative;
      }
    section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
`;

class App extends Component {

  state = {
    filteredList: [],
    search: ""
  }

  componentDidMount(){
    this.props.getPlants()
    this.props.getAnimals()
    this.props.getQuestionsAnswers()
    this.props.getComments()
  }


    changeHandler = (e, search) => {
      this.setState({
        search: e
      })
    }

    shuffle = (array) => {
      let currentIndex = array.length, tempVal, randomIndex
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        tempVal = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = tempVal
      }
      return array
    }

    shuffledChoices = () => {
      let choices = this.props.questionsAnswers.map(qa => this.shuffle(qa.choices))
      return choices
    }


  render() {
    return (
      <Wrapper className="App">
        <NavBar animals={this.props.animals} plants={this.props.plants} questionsAnswers={this.props.questionsAnswers} changeHandler={this.changeHandler} search={this.state.search}/>

        <TransitionGroup className="transition-group">
          <CSSTransition
            key={this.props.location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
            <section className="route-section">
              <Switch location={this.props.location}>
                <Route
                  path="/animals"
                  render={() => <AnimalContainer animals={this.props.animals} search={this.state.search} changeHandler={this.changeHandler}/> }
                  />
                <Route
                  path="/plants"
                  render={() => <PlantContainer plants={this.props.plants} search={this.state.search} changeHandler={this.changeHandler}/>}
                  />
                <Route
                  path="/biome"
                  render={() => <BiomeContainer search={this.state.search} changeHandler={this.changeHandler}/>}
                  />
                <Route
                  path="/animalinfo"
                  render={() => <AnimalInfoContainer comments={this.props.comments}/>}
                  />
                <Route
                  path="/plantinfo"
                  render={() => <PlantInfoContainer comments={this.props.comments}/>}
                  />
                <Route
                  path="/about"
                  component={AboutContainer}
                  />
                <Route
                  path="/form"
                  component={FormContainer}
                  />
                <Route
                  path="/quiz"
                  render={()=> <QuizContainer questionsAnswers={this.props.questionsAnswers}
                  choices={this.shuffledChoices()}
                  />}
                  />
                <Route
                  path="/"
                  render={() => <HomeContainer/>}
                  />
              </Switch>
              <Footer />
            </section>

          </CSSTransition>
        </TransitionGroup>

      </Wrapper>
    );
  }
}

function mapStateToProps(state){
  return {
    plants: state.plants,
    animals: state.animals,
    chosenBiome: state.chosenBiome,
    questionsAnswers: state.questionsAnswers,
    comments: state.comments
  }
}
function mapDispatchToProps(dispatch){
  return {
    getPlants: bindActionCreators(getPlants, dispatch),
    getAnimals: bindActionCreators(getAnimals, dispatch),
    getQuestionsAnswers: bindActionCreators(getQuestionsAnswers, dispatch),
    getComments: bindActionCreators(getComments, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
