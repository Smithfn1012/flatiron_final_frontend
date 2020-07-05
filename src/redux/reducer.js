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
            return { ...state, loading: false, biomes: action.payload };
        }
        case CHANGE_ANIMAL: {
            return { ...state, chosenAnimal: action.payload };
        }
    }
}