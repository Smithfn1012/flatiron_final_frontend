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
    }
}