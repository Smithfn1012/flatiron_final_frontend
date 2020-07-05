import {
    LOAD_ANIMALS,
    CHANGE_ANIMAL,
    ADD_ANIMAL
  } from "../actions/animalActions";
  import { LOAD_PLANTS, CHANGE_PLANT, ADD_PLANT } from "../actions/plantActions";
  import {
    LOAD_BIOMES,
    CHANGE_BIOME,
    START_ADDING_BIOMES
  } from "../actions/biomeActions";
  import { LOAD_QANDA } from "../actions/quizActions";
  import {
    LOAD_COMMENTS,
    ADD_COMMENT_ANIMAL,
    ADD_COMMENT_PLANT
  } from "../actions/commentActions";
  
  const initialState = {
    animals: [],
    plants: [],
    biomes: [],
    chosenBiome: {},
    chosenAnimal: {},
    chosenPlant: {},
    questionsAnswers: [],
    comments: [],
    loading: false
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_ANIMALS: {
        return { ...state, animals: action.payload };
      }
      case LOAD_PLANTS: {
        return { ...state, plants: action.payload };
      }
      case START_ADDING_BIOMES: {
        return { ...state, loading: true };
      }
      case LOAD_BIOMES: {
        return { ...state, loading: false, biomes: action.payload };
      }
      case CHANGE_BIOME: {
        return { ...state, chosenBiome: action.payload };
      }
      case CHANGE_ANIMAL: {
        return { ...state, chosenAnimal: action.payload };
      }
      case CHANGE_PLANT: {
        return { ...state, chosenPlant: action.payload };
      }
      case ADD_ANIMAL: {
        const newAnimalArr = [...state.animals, action.payload];
        return { ...state, animals: newAnimalArr };
      }
      case ADD_PLANT: {
        const newPlantArr = [...state.plants, action.payload];
        return { ...state, plants: newPlantArr };
      }
      case LOAD_QANDA: {
        return { ...state, questionsAnswers: action.payload };
      }
      case LOAD_COMMENTS: {
        return { ...state, comments: action.payload };
      }
      case ADD_COMMENT_ANIMAL: {
        const newCommentArr = [...state.comments, action.payload];
        return { ...state, comments: newCommentArr };
      }
      case ADD_COMMENT_PLANT: {
        const newCommentArr = [...state.comments, action.payload];
        return { ...state, comments: newCommentArr };
      }
      default:
        return state;
    }
  };
  export default reducer;